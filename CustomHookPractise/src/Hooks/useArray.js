import { useCallback, useState } from "react";

// note here we have use callbacj function rather than simple arrow function
// reason to get so that custom hook function should et cache and increase website exp
// Always use callback hook iside custom function

export function useArray(arrayValue) {
  const [array, setArray] = useState(arrayValue);

  const push = useCallback((element) => {
    setArray((a) => [...a, element]);
  }, []);

  const clear = useCallback(() => {
    setArray([]);
  }, []);

  const reset = useCallback(() => {
    setArray(arrayValue);
  }, []);

  const replace = useCallback((index, element) => {
    setArray((a) => {
      return [...a.slice(0, index), element, ...a.slice(index + 1)];
    });
  }, []);

  const filter = useCallback((callback) => {
    setArray((a) => {
      return a.filter(callback);
    });
  }, []);

  const remove = useCallback((index) => {
    setArray((a) => {
      return [...a.slice(0, index), ...a.slice(index + 1)];
    });
  }, []);

  return { array, set: setArray, push, clear, reset, replace, remove, filter };
}
