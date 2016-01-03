(ns om-nom-nom.core
  (:require [goog.dom :as gdom]
            [om.next :as om :refer-macros [defui]]
            [om.dom   :as dom]))

(defui Hiya
  Object
  (render [this]
          (dom/div nil "Hiey ah")))
(def hellow (om/factory Hiya))

(js/ReactDOM.render (hellow) (gdom/getElement "app"))
(enable-console-print!)
(println "Hi")
