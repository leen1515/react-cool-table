import { flattenObject } from "./flattenObject.js";

export const columns = (data) => {
  if (!Array.isArray(data) || data.length === 0 || typeof data[0] !== "object" || data[0] == null) {
    return [];
  }

  const flatData = flattenObject(data[0]);
  return Object.keys(flatData).map(key => ({ Header: key }));
};
