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
