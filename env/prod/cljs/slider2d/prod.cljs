(ns slider2d.prod
  (:require [slider2d.core :as core]))

;;ignore println statements in prod
(set! *print-fn* (fn [& _]))

(core/init!)
