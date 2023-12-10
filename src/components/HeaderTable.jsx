import React from "react";

import up from "./icons/sort-up-solid.svg";
import down from "./icons/sort-down-solid.svg";

function HeaderTable({ columnsName, onSortChange, sortConfig }) {

  if (!columnsName) return null;

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
        <div className="cool-column" key={i} onClick={() => onSortChange(column.dataKey)}>
          <div className="cool-column-title-arrow">{column.Header || " "}
          {renderSortArrow(column.dataKey)}
          </div>
        </div>
      ))}
    </div>
  );
}

export default HeaderTable;
