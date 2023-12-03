import React from "react";
import renderCellValue from "../utils/renderCellValue.js";



function LinesTable({ linesValues, columnsName }) {
  if (!linesValues) return null;

  return (
    <div className="cool-body-table">
      {linesValues.map((line, lineIndex) => (
        <div className="cool-row-container" key={lineIndex} role="row" data-testid={`row-${lineIndex}`}>
          {columnsName.map((column, cellIndex) => (
            <div className="cool-cell"
              key={`${lineIndex}-${cellIndex}`}
              aria-label={`${column.Header}: ${line[column.Header]}`}
              role="cell"
              data-testid={`cell-${lineIndex}-${cellIndex}`}
            >
              {renderCellValue(line[column.Header])}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default LinesTable;
