export const flattenObject = (obj, prefix = "") => {
    const flattened = {};
    Object.keys(obj).forEach((key) => {
        const newKey = prefix ? `${prefix}.${key}` : key;
        if (typeof obj[key] === "object" && obj[key] !== null && !Array.isArray(obj[key])) {
            Object.assign(flattened, flattenObject(obj[key], newKey));
        } else {
            flattened[newKey] = obj[key];
        }
    });
    return flattened;
};