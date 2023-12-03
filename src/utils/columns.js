export const columns = (data) => {
  const columnsArray = [];
  if (!Array.isArray(data) || data.length === 0 || typeof data[0] !== "object" || data[0] == null) {
    return columnsArray;
  }

  const keys = Object.keys(data[0]);
  keys.forEach((key) => {
    columnsArray.push({
      Header: key
    });
  });

  return columnsArray;
};
