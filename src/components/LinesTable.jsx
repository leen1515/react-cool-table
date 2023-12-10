import React from "react";
import usePagination from "../hookperso/usePaginationPerso";
import PaginationSection from "./PaginationSection.jsx";
import { renderCellValue } from "../utils/renderCellValue";
import { flattenObject } from "../utils/flattenObject";

function LinesTable({ linesValues, columnsName, rowsPerPage }) {
  const { currentPage, totalPages, goToNextPage, goToPrevPage, currentData, goToPage } = usePagination(linesValues.length, rowsPerPage);

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
      /></div>
    </>
  );
}

export default LinesTable;
