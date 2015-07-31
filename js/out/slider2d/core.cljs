(ns slider2d.core
  (:require [reagent.core :as reagent :refer [atom]]
            [reagent.session :as session]
            [secretary.core :as secretary :include-macros true]
            [goog.events :as events]
            [goog.history.EventType :as HistoryEventType])
  (:import goog.History
           [goog.events EventType]))

(defonce state (atom {:tx 0 :ty 0 :tz 0
                      :sx 0 :sy 0 :sz 0
                      :rx 0 :ry 0 :rz 0}))

(defonce mstate (atom {:w 75 :h 75}))

(defn drag-move-fn [on-drag]
  (fn [evt]
    (on-drag (.-clientX evt) (.-clientY evt))))

(defn drag-end-fn [drag-move drag-end on-end]
  (fn [evt]
    (events/unlisten js/window EventType.MOUSEMOVE drag-move)
    (events/unlisten js/window EventType.MOUSEUP @drag-end)
    (on-end)))

(defn dragging
  ([on-drag] (dragging on-drag (fn []) (fn [])))
  ([on-drag on-start] (dragging on-drag on-start (fn [])))
  ([on-drag on-start on-end]
   (let [drag-move (drag-move-fn on-drag)
         drag-end-atom (atom nil)
         drag-end (drag-end-fn drag-move drag-end-atom on-end)]
     (on-start)
     (reset! drag-end-atom drag-end)
     (events/listen js/window EventType.MOUSEMOVE drag-move)
     (events/listen js/window EventType.MOUSEUP drag-end))))

(defn get-bcr [cmp]
  (-> cmp
      reagent/dom-node
      .getBoundingClientRect))

(defn clamp [a v b]
  (min (max a v) b))

(defn scale [[d1 d2] [r1 r2]]
  (let [dd (- d2 d1)
        dr (- r2 r1)]
    (fn [x] (+ r1 (* dr (/ (- x d1) dd))))))

(defn both-scales [d r]
  [(scale d r) (scale r d)])

;; -------------------------
;; Views

(defn slider2d []
  (let [cmp (reagent/current-component)
        defaults {:min 0 :max 1 :value 1}
        props (reagent/merge-props defaults (reagent/props cmp))
        w (:w props)
        h (:h props)
        pw 10 
        ph 10 
        ew (- w pw)
        eh (- h ph)
        on-change (:on-change (reagent/props cmp))
        [x->value x->pixels] (both-scales [0 ew] [(:xmin props) (:xmax props)])
        [y->value y->pixels] (both-scales [0 eh] [(:ymax props) (:ymin props)]) 
        move-point (fn [x y]
                     (let [bcr (get-bcr cmp)
                           w (.-width bcr)
                           h (.-height bcr)
                           x (- x (.-left bcr) (* 0.5 pw))
                           y (- y (.-top bcr) (* 0.5 ph))]
                       (on-change
                         (x->value (clamp 0 x ew))
                         (y->value (clamp 0 y eh)))))
        on-mouse-down (fn [evt]
                        (move-point (.-clientX evt) (.-clientY evt))
                        (dragging move-point))]
    [:div.plot.noselect {:on-mouse-down on-mouse-down
                         :style {:width w
                                 :border "1px solid #ccc"
                                 :cursor "pointer"
                                 :height h
                                 :background-color (:background-color props)
                                 :position "relative"}}
     [:div.point {:style {:position "absolute"
                          :border-radius (str (* 0.5 pw) "px /" (* 0.5 ph) "px") 
                          :width pw
                          :height ph
                          :left (x->pixels (:xvalue props))
                          :top (y->pixels (:yvalue props))
                          :background-color "#666"}}]]))


(defn input-text []
  (let [{:keys [s path]} (reagent/props (reagent/current-component))]
    [:input {:value (get-in @s path)
             :on-change #(swap! s assoc-in path (-> % .-target .-value))}]))

(defn home-page []
  (let [s @state
        ms @mstate
        ks (sort (keys s))]
    [:div.container [:h2 "Welcome to slider2d"]
     [slider2d {:xmin 30 
                :xmax 75
                :ymin 30 
                :ymax 75
                :w 75
                :h 75
                :background-color "#ddd"
                :on-change (fn [xvalue yvalue]
                             (swap! mstate into {:w xvalue :h yvalue}))
                :xvalue (:w @mstate)
                :yvalue (:h @mstate)}]  
     [:table.noselect
      [:tbody
       [:tr
        [:th ""]
        (for [k ks]
          [:th {:key (str k)} (str k)])]
       (for [b ks]
         [:tr {:key (str b)}
          [:th (str b)]
          (for [a ks]
            [:td {:key (str a)} 
             [slider2d {
                        :xmin 0
                        :xmax 10
                        :ymin 0
                        :ymax 10
                        :w (:w ms)
                        :h (:h ms)
                        :background-color (if (= a b) "#ddd" "eee")
                        :on-change (fn [xvalue yvalue]
                                     (swap! state into {a xvalue b yvalue}))
                        :xvalue (a s)
                        :yvalue (b s)}]])
          [:td 
           [input-text {:key b :s state :path [b]}]]])
       #_[:tr
        [:th ""]
        (for [k ks]
          [:td {:key (str k)}
           [input-text {:key k :s state :path [k]}]])]]]]))

(defn about-page []
  [:div [:h2 "About slider2d"]
   [:div [:a {:href "#/"} "go to the home page"]]])

(defn current-page []
  [:div [(session/get :current-page)]])

;; -------------------------
;; Routes
(secretary/set-config! :prefix "#")

(secretary/defroute "/" []
  (session/put! :current-page #'home-page))

(secretary/defroute "/about" []
  (session/put! :current-page #'about-page))

;; -------------------------
;; History
;; must be called after routes have been defined
(defn hook-browser-navigation! []
  (doto (History.)
    (events/listen
     HistoryEventType/NAVIGATE
     (fn [event]
       (secretary/dispatch! (.-token event))))
    (.setEnabled true)))

;; -------------------------
;; Initialize app
(defn mount-root []
  (reagent/render [current-page] (.getElementById js/document "app")))

(defn init! []
  (hook-browser-navigation!)
  (mount-root))
