import { flattenObject } from "./flattenObject.js";

export const columns = (data, position) => {
  if (!Array.isArray(data) || data.length === 0 || typeof data[0] !== "object" || data[0] == null) {
    return [];
  }

  const flatData = flattenObject(data[0]);

  return Object.keys(flatData).map(key => {
    if (position) {
      const formattedHeader = key
        .replace(/([A-Z])/g, " $1") 
        .replace(/^./, str => str.toUpperCase()); 

      return { Header: formattedHeader };
    } else {
      return { Header: key };
    }
  });
};
