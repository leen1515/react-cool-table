import React from "react";


function HeaderTable({ columnsName }) {
    if (!columnsName) return null;
    return (
      <div className="cool-column-container">
        {columnsName.map((column, i) => (
          <div className="cool-column" key={i}>
            {column.Header || " "}
          </div>
        ))}
      </div>
    );
  }
  
  

export default HeaderTable;
