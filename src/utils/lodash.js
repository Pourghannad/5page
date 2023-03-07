export const cloneObject = (data) => {
    return JSON.parse(JSON.stringify(data));
}

export function merge(a, b, prop) {
    const reduced = a.filter(function(aitem) {
      return !b.find(function(bitem) {
        return aitem[prop] === bitem[prop];
      });
    });
    return reduced.concat(b);
}