import React from "react";
import {columns } from "./utils/columns.js";
import HeaderTable from "./components/HeaderTable.jsx";
import LinesTable from "./components/LinesTable.jsx";
import "./style/coolTable.css";
  
function CoolTable({ data }) {
  if (!data) return null;
  const columnsName = columns(data);

  return (
    <div className="cool-table">
      <HeaderTable columnsName={columnsName} />
      <LinesTable linesValues={data} columnsName={columnsName} />
    </div>
  );
}

export default CoolTable;
