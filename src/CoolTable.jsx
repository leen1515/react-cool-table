import React, { useState, useMemo } from "react";
import { columns } from "./utils/columns.js";
import HeaderTable from "./components/HeaderTable.jsx";
import LinesTable from "./components/LinesTable.jsx";
import "./style/coolTable.css";
import { columnSelected } from "./utils/columnSelected.js";
import NumberRowSelector from "./components/NumberRowSelector.jsx";
import { flattenObject } from "./utils/flattenObject.js";

function CoolTable({ data, excludedColumns }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: null });
  const formatData = columnSelected(data, excludedColumns);
  const columnsName = columns(formatData, true);
  const columnsRef = columns(formatData, false);

  const filteredLines = searchQuery
    ? formatData.filter(line => {
      const flatLine = flattenObject(line);
      return Object.values(flatLine).some(value =>
        String(value).toLowerCase().includes(searchQuery.toLowerCase())
      );
    })
    : formatData;



  const handleSortChange = (key) => {
    let direction = "ascending";

    if (sortConfig.key === key && sortConfig.direction !== null) {
      direction = sortConfig.direction === "ascending" ? "descending" : sortConfig.direction === "descending" ? null : "ascending";
    }

    setSortConfig({ key, direction });
  };

  const getDataType = (value) => {
    if (!isNaN(Date.parse(value)) && !isNaN(new Date(value).getDate())) {
      return "date";
    } else if (!isNaN(value) && typeof value !== "string") {
      return "number";
    }
    return "string";
  };

  const sortedLines = useMemo(() => {
    let sortableItems = [...filteredLines];
    if (sortConfig.key && sortConfig.direction !== null) {
      sortableItems.sort((a, b) => {
        const keyParts = sortConfig.key.split(".");
        const aValue = keyParts.length > 1 ? a[keyParts[0]][keyParts[1]] : a[sortConfig.key];
        const bValue = keyParts.length > 1 ? b[keyParts[0]][keyParts[1]] : b[sortConfig.key];

        if (aValue == null && bValue == null) return 0;
        if (aValue == null) return -1;
        if (bValue == null) return 1;
        const type = getDataType(aValue);

        switch (type) {
          case "date":
            return (new Date(aValue) - new Date(bValue)) * (sortConfig.direction === "ascending" ? 1 : -1);
          case "number":
            return (aValue - bValue) * (sortConfig.direction === "ascending" ? 1 : -1);
          default:
            return aValue.localeCompare(bValue) * (sortConfig.direction === "ascending" ? 1 : -1);
        }
      });
    }
    return sortableItems;
  }, [filteredLines, sortConfig]);

  if (!data) return null;

  return (
    <div className="cool-table">
      <input
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <NumberRowSelector rowsPerPage={rowsPerPage} setRowsPerPage={setRowsPerPage} />
      <HeaderTable columnsName={columnsName} columnsRef={columnsRef} onSortChange={handleSortChange} sortConfig={sortConfig} />
      <LinesTable linesValues={sortedLines} columnsName={columnsRef} rowsPerPage={rowsPerPage} />
    </div>
  );
}

export default CoolTable;
