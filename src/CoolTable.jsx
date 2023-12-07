import React, {useState} from "react";
import {columns } from "./utils/columns.js";
import HeaderTable from "./components/HeaderTable.jsx";
import LinesTable from "./components/LinesTable.jsx";
import "./style/coolTable.css";
import { columnSelected } from "./utils/columnSelected.js";
import NumberRowSelector from "./components/NumberRowSelector.jsx";

function CoolTable({ data, excludedColumns }) {
  if (!data) return null;
  const formatData = columnSelected(data, excludedColumns);
  const columnsName = columns(formatData);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  return (
    <div className="cool-table">
      <NumberRowSelector rowsPerPage={rowsPerPage} setRowsPerPage={setRowsPerPage} />
      <HeaderTable columnsName={columnsName} />
      <LinesTable linesValues={data} columnsName={columnsName} />
    </div>
  );
}

export default CoolTable;
