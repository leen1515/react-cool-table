export const lines= (data, columnsNames) => {
    const lines = [];
    if (data.length === 0) { return lines; }
    data.forEach((line) => {
        const lineObject = {};
        columnsNames.forEach((columnName) => {
        lineObject[columnName] = line[columnName];
        });
        lines.push(lineObject);
    });
    return lines;
}