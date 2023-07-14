import { useCallback, useState } from "react";

const useLocalStorage = <T = string>(key: string, initialValue?: T): [T, (newValue: T) => void] => {
  const storeValueInLocalStorage = useCallback((value: T) => {
    if (typeof value === "string" || typeof value === "number") {
      window.localStorage.setItem(key, value.toString());
    } else {
      window.localStorage.setItem(key, JSON.stringify(value));
    }
  }, []);

  const [value, setValue] = useState<T>(() => {
    const value = window.localStorage.getItem(key);
    if (value === null || value === undefined) {
      window.localStorage.removeItem(key);

      if (initialValue) {
        storeValueInLocalStorage(initialValue);
      }

      return initialValue || null;
    } else {
      try {
        if (Number(value)) {
          /** :::: value is a Number :::: */
          return Number(value);
        } else if (JSON.parse(value)) {
          /** :::: value is a Json or Array :::: */
          return JSON.parse(value);
        }
      } catch {
        /** :::: value is a String :::: */
        return value;
      }
    }
  });

  const setNewValue = useCallback((newValue: T) => {
    storeValueInLocalStorage(newValue);
    setValue(newValue);
  }, []);

  return [value, setNewValue];
};

export default useLocalStorage;
