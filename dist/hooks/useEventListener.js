import { useEffect, useRef } from "react";
function useEventListener(eventType, callback) {
  var element = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : window;
  var callbackRef = useRef(callback);
  useEffect(function () {
    callbackRef.current = callback;
  }, [callback]);
  useEffect(function () {
    if (element == null) return;
    var handler = function handler(e) {
      return callbackRef.current(e);
    };
    element.addEventListener(eventType, handler);
    return function () {
      return element.removeEventListener(eventType, handler);
    };
  }, [eventType, element]);
}
export default useEventListener;