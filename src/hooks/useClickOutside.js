import useEventListener from "./useEventListener";

function useClickOutside(ref, cb) {
    useEventListener(
        "click",
        (e) => {
            if (ref.current == null || ref.current.contains(e.target)) return;
            cb(e);
        },
        document
    );
}

export default useClickOutside;
