/**
 * @name columnSelected
 * @memberof utils
 * @function
 * @description
 * Filters out specified keys from each object in the data array.
 * This is useful for selectively displaying certain columns from a dataset.
 *
 * @param {Array<Object>} data - Array of objects to be processed.
 * @param {Array<string>} excludeKeys - Keys to be excluded from each object.
 * @returns {Array<Object>} A new array of objects, without excluded keys.
 */

export const columnSelected = (data, excludeKeys) => {
    return data.map(item => {
        const newItem = {};
        Object.keys(item).forEach(key => {
            if (!excludeKeys.includes(key)) {
                newItem[key] = item[key];
            }
        });
        return newItem;
    });
};
