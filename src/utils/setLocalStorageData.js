export const setLocalStorageData = (key, data) =>
  localStorage.setItem(key, JSON.stringify(data));
