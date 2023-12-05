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
