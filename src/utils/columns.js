export const columns = (data) => {
    const columns = [];
    if (data.length === 0) { return columns; }
    const keys = Object.keys(data[0]);
    keys.forEach((key) => {
        columns.push({
        Header: key
        });
    });
    return columns;
    }