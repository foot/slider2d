(ns slider2d.core
  (:require [reagent.core :as reagent :refer [atom]]
            [reagent.session :as session]
            [secretary.core :as secretary :include-macros true]
            [goog.events :as events]
            [goog.history.EventType :as HistoryEventType])
  (:import goog.History
           [goog.events EventType]))

(defonce state (atom {:x 0 :y 0 :z 0}))

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
  (let [w 75
        h 75 
        pw 10 
        ph 10 
        ew (- w pw)
        eh (- h ph)
        cmp (reagent/current-component)
        defaults {:min 0 :max 1 :value 1}
        on-change (:on-change (reagent/props cmp))
        props (reagent/merge-props defaults (reagent/props cmp))
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
    (fn []
      (let [props (reagent/merge-props defaults (reagent/props cmp))]
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
                              :background-color "#666"}}]]))))


(defn input-text []
  (let [{:keys [s path]} (reagent/props (reagent/current-component))]
    [:input {:value (get-in @s path)
             :on-change #(swap! s assoc-in path (-> % .-target .-value))}]))

(defn home-page []
  (let [s @state
        ks [:x :y :z :u :v :w]]
    [:div [:h2 "Welcome to slider2d"]
     [:div [:a {:href "#/about"} "go to about page"]
      (for [k ks]
        [input-text {:key k :s state :path [k]}])
      (for [b ks]
        [:div {:key (str b)}
         [:label (str b)]
         (for [a ks]
           [slider2d {:key (str a)
                      :xmin 0
                      :xmax 10
                      :ymin 0
                      :ymax 10
                      :background-color (if (= a b) "#ddd" "eee")
                      :on-change (fn [xvalue yvalue]
                                   (swap! state into {a xvalue b yvalue}))
                      :xvalue (a s)
                      :yvalue (b s)}])])]]))

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
