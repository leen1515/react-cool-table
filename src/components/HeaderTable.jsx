import React from "react";


function HeaderTable({ columnsName, onSortChange }) {
  if (!columnsName) return null;

  return (
    <div className="cool-column-container">
      {columnsName.map((column, i) => (
        <div className="cool-column" key={i} onClick={() => onSortChange(column.dataKey)}>
          {column.Header || " "}
        </div>
      ))}
    </div>
  );
}
  

export default HeaderTable;
