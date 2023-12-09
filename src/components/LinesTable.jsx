import usePagination from "../hookperso/usePaginationPerso";
import PaginationSection from "./PaginationSection.jsx";
import { renderCellValue } from "../utils/renderCellValue";
import { flattenObject } from "../utils/flattenObject";
import React from "react";

function LinesTable({ linesValues, columnsName, rowsPerPage }) {
  const { currentPage, totalPages, goToNextPage, goToPrevPage, currentData } = usePagination(linesValues.length, rowsPerPage);

  if (!linesValues) return null;

  const { start, end } = currentData();
  const currentRows = linesValues.slice(start, end);

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
                  <div className="cool-cell" key={`${lineIndex}-${cellIndex}`}
                    aria-label={`${column.Header}: ${cellValue}`}
                    role="cell"
                    data-testid={`cell-${lineIndex}-${cellIndex}`}
                  >
                    {renderCellValue(cellValue)}
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
      <PaginationSection
        totalPages={totalPages}
        currentPage={currentPage}
        goToNextPage={goToNextPage}
        goToPrevPage={goToPrevPage}
      />
    </>
  );
}

export default LinesTable;