import {formatIfDate} from "./formatIfDate";

/**
 * @name renderCellValue
 * @memberof utils
 * @function
 * @description
 * Renders a cell value for display. It formats date strings, stringifies objects,
 * and handles null or undefined values by returning a blank space. 
 * For non-object, non-null values, it applies date formatting if applicable.
 *
 * @param {any} value - The value to be rendered in a cell.
 * @returns {string} The rendered value as a string. If the value is null or undefined, returns a blank space.
 */
export function renderCellValue(value) {
    if (value === null || value === undefined) return " ";
    if (typeof value === "object") return JSON.stringify(value);
    return formatIfDate(value).toString();
  }