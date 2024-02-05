import React from "react";

function useLocalStorage(key) {
  const setItem = (value) => {
    try {
      console.log(value);
      window.localStorage.setItem(key, JSON.stringify(value));
      console.log("Value Stored");
    } catch (error) {
      console.log(error);
    }
  };

  const getItem = () => {};

  return { setItem, getItem };
}

export default useLocalStorage;
