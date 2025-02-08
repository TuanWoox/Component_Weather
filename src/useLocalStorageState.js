import { useEffect, useState } from "react";

export default function useLocalStorageState(initialState, key) {
  const [value, setValue] = useState(function () {
    const storedLocation = localStorage.getItem(key) || initialState;
    return storedLocation;
  });
  useEffect(
    function () {
      localStorage.setItem(key, value);
    },
    [value, key]
  );
  return [value, setValue];
}
