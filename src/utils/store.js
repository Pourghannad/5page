export const LSG = (key) => {
  try {
    return window.localStorage.getItem(key);
  } catch {
    return null;
  }
};

export const LSS = (key, data) => {
  try {
    window.localStorage.setItem(key, data);
    return true;
  } catch {
    return false;
  }
};