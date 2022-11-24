import { useState } from 'react';

export const useLocalStorage = (key: string, val: unknown) => {
  const [storageValue, setStorageValue] = useState(() => {
    try {
      const value = localStorage.getItem(key);
      if (value) {
        return JSON.parse(value);
      } else {
        localStorage.setItem(key, JSON.stringify(val));
        return val;
      }
    } catch (err) {
      return val;
    }
  });
  const setValue = (newValue: unknown) => {
    try {
      window.localStorage.setItem(key, JSON.stringify(newValue));
    } catch (err) {
      console.error(err);
    }
    setStorageValue(newValue);
  };

  return [storageValue, setValue];
};
