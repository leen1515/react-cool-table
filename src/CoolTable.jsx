import React from "react";
import {columns } from "./utils/columns.js";
import HeaderTable from "./components/HeaderTable.jsx";
import LinesTable from "./components/LinesTable.jsx";
import "./style/coolTable.css";
import { columnSelected } from "./utils/columnSelected.js";

function CoolTable({ data, excludedColumns }) {
  if (!data) return null;
  const formatData = columnSelected(data, excludedColumns);
  const columnsName = columns(formatData);

  return (
    <div className="cool-table">
      <HeaderTable columnsName={columnsName} />
      <LinesTable linesValues={data} columnsName={columnsName} />
    </div>
  );
}

export default CoolTable;
