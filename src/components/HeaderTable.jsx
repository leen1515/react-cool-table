import React from "react";

import up from "./icons/sort-up-solid.svg";
import down from "./icons/sort-down-solid.svg";

/**
 * @name HeaderTable
 * @function
 * @description - A table header component that displays column names with sorting functionality.
 * Includes visual indicators (arrows) to show the current sort direction for each column.
 * Clicking on a column header triggers sorting based on that column.
 *
 * @param {Array<{Header: string, dataKey: string}>} columnsName - Array of objects representing column headers and their respective data keys.
 * @param {function} onSortChange - Callback function to be called when a column header is clicked for sorting.
 * @param {{key: string, direction: string}} sortConfig - Object containing the current sorting configuration (column key and direction).
 * @returns {React.Component} A React component representing the table header with sorting capabilities.
 */

function HeaderTable({ columnsName, onSortChange, sortConfig }) {

  if (!columnsName) return null;

   /**
   * Renders the sorting arrow based on the current sorting configuration.
   * 
   * @param {string} columnName - The name of the column for which to render the sort arrow.
   * @returns {React.Component} A React component representing the sort arrow.
   */
  const renderSortArrow = (columnName) => {
    if (sortConfig && sortConfig.key === columnName) {
      if (sortConfig.direction === "ascending") {
        return <img src={up} alt="Ascending" />;
      } else if (sortConfig.direction === "descending") {
        return <img src={down} alt="Descending" />;
      }
    }
    return <div className="cool-arrow-container"><img src={up} alt="Ascending" /><img src={down} alt="Descending" /></div>;
  };

  return (
    <div className="cool-column-container">
      {columnsName.map((column, i) => (
        <div className="cool-column" role="columnheader" key={i} onClick={() => onSortChange(column.dataKey)}>
          <div className="cool-column-title-arrow">{column.Header || " "}
          {renderSortArrow(column.dataKey)}
          </div>
        </div>
      ))}
    </div>
  );
}

export default HeaderTable;
