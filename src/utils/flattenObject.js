export const flattenObject = (obj) => {
    const flattened = {};
    Object.keys(obj).forEach((key) => {
        if (typeof obj[key] === "object" && obj[key] !== null && !Array.isArray(obj[key])) {
            const flatChild = flattenObject(obj[key]);
            Object.keys(flatChild).forEach(childKey => {
                flattened[childKey] = flatChild[childKey];
            });
        } else {
            flattened[key] = obj[key];
        }
    });
    return flattened;
};
