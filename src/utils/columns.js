import { flattenObject } from "./flattenObject";

export const columns = (data, position) => {
  if (!Array.isArray(data) || data.length === 0 || typeof data[0] !== "object" || data[0] == null) {
    return [];
  }

  const flatData = flattenObject(data[0]);

  return Object.keys(flatData).map(key => {
    const formattedHeader = position ? formatHeader(key) : key;
    return { Header: formattedHeader, dataKey: key };
  });
};

function formatHeader(key) {
  const parts = key.split(".");
  const lastPart = parts[parts.length - 1];
  return lastPart.replace(/([A-Z])/g, " $1").replace(/^./, str => str.toUpperCase()).trim();
}
