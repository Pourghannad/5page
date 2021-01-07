export const LSG = (key) => { // LocalStorage Get
    return window.localStorage.getItem(key);
}

export const LSS = (key, data) => { // LocalStorage Set
    return window.localStorage.setItem(key, data);
}