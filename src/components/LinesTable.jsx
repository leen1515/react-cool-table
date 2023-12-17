import React, {useEffect} from "react";
import usePagination from "../hookperso/usePaginationPerso";
import PaginationSection from "./PaginationSection.jsx";
import { renderCellValue } from "../utils/renderCellValue";
import { flattenObject } from "../utils/flattenObject";


/**
 * @memberOf Table
 * @name LinesTable
 * @function
 * @description
 * A component that renders the rows of a table based on the provided data.
 * It includes pagination functionality and displays only a subset of rows per page.
 * Each cell value is rendered based on its type and format.
 *
 * @param {Array<Object>} linesValues - The data to be displayed in the table rows.
 * @param {Array<{dataKey: string}>} columnsName - Array of objects representing the columns and their respective data keys.
 * @param {number} rowsPerPage - Number of rows to display per page.
 * @returns {React.Component} A React component representing the table rows with pagination.
 */

function LinesTable({ linesValues, columnsName, rowsPerPage, resetPaginationKey }) {
  const { currentPage, setCurrentPage, totalPages, goToNextPage, goToPrevPage, currentData, goToPage } = usePagination(linesValues.length, rowsPerPage);

  useEffect(() => {
    setCurrentPage(1);
  }, [resetPaginationKey, setCurrentPage]);

  if (!linesValues) return null;

  const { start, end } = currentData();
  const currentRows = linesValues.slice(start, end);
  const startIndex = start + 1;
  const endIndex = end;
  const totalEntries = linesValues.length;

  return (
    <>
      <div className="cool-body-table">
        {currentRows.map((line, lineIndex) => {
          const flatLine = flattenObject(line);
          return (
            <div className="cool-row-container" key={lineIndex}>
              {columnsName.map((column, cellIndex) => {
                const cellValue = flatLine[column.dataKey];
                return (
                  <div className="cool-cell" key={`${lineIndex}-${cellIndex}`}>
                    {renderCellValue(cellValue)}
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
      <div className="cool-pagination-navigation-container">
        <div className="cool-pagination-info">
          Showing {startIndex} to {endIndex} of {totalEntries}
        </div>
        <PaginationSection
          totalPages={totalPages}
          currentPage={currentPage} 
          goToNextPage={goToNextPage}
          goToPrevPage={goToPrevPage}
          goToPage={goToPage}
        />
      </div>
    </>
  );
}

export default LinesTable;
