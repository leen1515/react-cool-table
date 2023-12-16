import { flattenObject } from "./flattenObject";

/**
 * @namespace utils
 * @description Utilities for data manipulation.
 */



/**
 * @name columns
 * @memberof utils
 * @function
 * @description
 * Converts data into an array of columns by flattening each object.
 * Useful for preparing data for components like tables.
 *
 * @param {Array<Object>} data - Array of objects to process.
 * @param {boolean} position - If true, formats the column headers.
 * @returns {Array<{Header: string, dataKey: string}>} An array of objects with Header and dataKey.
 */

export const columns = (data, position) => {
    // Pre-checks for the input data
  if (!Array.isArray(data) || data.length === 0 || typeof data[0] !== "object" || data[0] == null) {
    return [];
  }

  // Flatten the first object to get keys
  const flatData = flattenObject(data[0]);

  // Transform keys into an array of columns
  return Object.keys(flatData).map(key => {
    const formattedHeader = position ? formatHeader(key) : key;
    return { Header: formattedHeader, dataKey: key };
  });
};


/**
 * Formats a key into a more readable string for Header Column.
 * 'userFirstName' becomes 'User First Name'.
 *
 * @memberof utils
 * @function
 * @private
 * @param {string} key - Key to format.
 * @returns {string} Formatted key.
 */
function formatHeader(key) {
  const parts = key.split(".");
  const lastPart = parts[parts.length - 1];
  return lastPart.replace(/([A-Z])/g, " $1").replace(/^./, str => str.toUpperCase()).trim();
}
