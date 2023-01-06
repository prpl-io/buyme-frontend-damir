import { useCallback, useEffect } from "react";

export const useClickOutside = (params) => {
  const { target, callback, open } = params;

  const handleOutsideClick = useCallback(
    (e) => {
      if (target.current && !target.current.contains(e.target) && open) {
        callback();
      }
    },
    [target, callback, open]
  );

  useEffect(() => {
    setTimeout(() => {
      document.addEventListener("click", handleOutsideClick);
    }, 0);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [target, handleOutsideClick]);
};
