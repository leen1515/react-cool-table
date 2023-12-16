/**
 * @name formatIfDate
 * @memberof utils
 * @function
 * @description
 * Checks if a given value is a string that matches a date pattern. If so, it formats
 * the string as a date in the 'dd/mm/yyyy' format. Otherwise, returns the value as is.
 * Supported date formats include YYYY-MM-DD, MM/DD/YYYY, and ISO 8601 format.
 *
 * @param {string} value - The value to be checked and potentially formatted as a date.
 * @returns {string | any} The formatted date string if the value is a date, otherwise the original value.
 */


export function formatIfDate(value) {
  const datePattern = /^\d{4}-\d{1,2}-\d{1,2}$|^\d{1,2}\/\d{1,2}\/\d{4}$|^\d{4}-\d{1,2}-\d{1,2}T\d{1,2}:\d{1,2}:\d{1,2}.\d{3}Z$/;
  
  if (typeof value === "string" && datePattern.test(value)) {
      const date = new Date(value);
      if (!isNaN(date.getTime())) {
          return date.toLocaleDateString("fr-FR", { year: "numeric", month: "numeric", day: "numeric" });
      }
  }
  return value;
}
