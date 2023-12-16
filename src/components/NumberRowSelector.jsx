import React from "react";


/**
 * @name NumberRowSelector
 * @memberOf Table
 * @function
 * @description
 * A component that allows users to select the number of rows to be displayed per page in a table.
 * It provides a dropdown menu for the user to choose from predefined options (10, 25, 50, 100).
 *
 * @param {number} rowsPerPage - The current number of rows per page.
 * @param {function} setRowsPerPage - The callback function to set the number of rows per page.
 * @returns {React.Component} A React component representing a row count selector for a table.
 */
function NumberRowSelector({ rowsPerPage, setRowsPerPage }) {
  const handleRowsPerPageChange = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
  };

  return (
    <div className="cool-selector-container">
      <label htmlFor="rows-per-page">Show</label>
      <select id="rows-per-page" value={rowsPerPage} onChange={handleRowsPerPageChange}>
        <option value="10">10</option>
        <option value="25">25</option>
        <option value="50">50</option>
        <option value="100">100</option>
      </select>entries
    </div>
  );
}

export default NumberRowSelector;
