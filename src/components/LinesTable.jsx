import usePagination from "../hookperso/usePaginationPerso"; 
import PaginationSection from "./PaginationSection.jsx";
import { renderCellValue } from "../utils/renderCellValue";
import { flattenObject } from "../utils/flattenObject";

import React, {useState} from "react";
import NumberRowSelector from "./NumberRowSelector.jsx";

function LinesTable({ linesValues, columnsName }) {
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const { currentPage, totalPages, goToNextPage, goToPrevPage, currentData } = usePagination(linesValues.length, rowsPerPage);

  if (!linesValues) return null;

  const { start, end } = currentData();
  const currentRows = linesValues.slice(start, end);

  return (
    <>
      <div className="cool-body-table">
      <NumberRowSelector rowsPerPage={rowsPerPage} setRowsPerPage={setRowsPerPage} />
      
        {currentRows.map((line, lineIndex) => {
          const flatLine = flattenObject(line);
          return (
            <div className="cool-row-container" key={lineIndex} role="row" data-testid={`row-${lineIndex}`}>
              {columnsName.map((column, cellIndex) => (
                <div className="cool-cell"
                  key={`${lineIndex}-${cellIndex}`}
                  aria-label={`${column.Header}: ${flatLine[column.Header]}`}
                  role="cell"
                  data-testid={`cell-${lineIndex}-${cellIndex}`}
                >
                  {renderCellValue(flatLine[column.Header])}
                </div>
              ))}
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