const useLocalStorage = () => {
  const hasLocalStorage = () => {
    try {
      return window.localStorage;
    } catch (e) {
      return false;
    }
  };

  const getValueFromLocalStorage = (key, defaultValue) => {
    if (hasLocalStorage()) {
      const valueStorage = localStorage.getItem(key);
      return valueStorage ? JSON.parse(valueStorage) : defaultValue;
    }

    return defaultValue;
  };

  const saveValueInLocalStorage = (key, value) => {
    if (hasLocalStorage()) {
      localStorage.setItem(key, JSON.stringify(value));
    }
  };

  return { hasLocalStorage, getValueFromLocalStorage, saveValueInLocalStorage };
};

export default useLocalStorage;
