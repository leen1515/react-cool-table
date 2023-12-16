/**
 * @name flattenObject
 * @memberof utils
 * @function
 * @description
 * Flattens a nested object by transforming its nested properties into dot-separated keys.
 * { a: { b: c }} becomes { 'a.b': c }. Arrays and null values are not flattened.
 *
 * @param {Object} obj - The object to be flattened.
 * @returns {Object} A new object with flattened keys.
 */

export const flattenObject = (obj) => {
    const flattened = {};
    Object.keys(obj).forEach((key) => {
        if (typeof obj[key] === "object" && obj[key] !== null && !Array.isArray(obj[key])) {
            Object.keys(obj[key]).forEach(subKey => {
                flattened[`${key}.${subKey}`] = obj[key][subKey];
            });
        } else {
            flattened[key] = obj[key];
        }
    });
    return flattened;
};
