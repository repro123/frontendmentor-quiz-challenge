import { useSyncExternalStore } from "react";

const getServerSnapshot = () => false;

function subscribeToMediaQuery(query, callback) {
  if (typeof window === "undefined") {
    return () => {};
  }

  const mediaQueryList = window.matchMedia(query);

  mediaQueryList.addEventListener("change", callback);

  return () => {
    mediaQueryList.removeEventListener("change", callback);
  };
}

function getMediaQuerySnapshot(query) {
  if (typeof window === "undefined") {
    return false;
  }

  return window.matchMedia(query).matches;
}

export function useMediaQuery(query) {
  return useSyncExternalStore(
    (callback) => subscribeToMediaQuery(query, callback),
    () => getMediaQuerySnapshot(query),
    getServerSnapshot
  );
}
