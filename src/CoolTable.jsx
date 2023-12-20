import React, { useState, useMemo } from "react";
import { columns } from "./utils/columns.js";
import HeaderTable from "./components/HeaderTable.jsx";
import LinesTable from "./components/LinesTable.jsx";
import "./style/coolTable.css";
import { columnSelected } from "./utils/columnSelected.js";
import NumberRowSelector from "./components/NumberRowSelector.jsx";
import { flattenObject } from "./utils/flattenObject.js";

/**
 * @fileoverview This module need Node.js v18
 */

/**
 * @namespace Table
 * 
 **/

/**
 * @name CoolTable
 * @function
 * @description
 * A customizable and sortable table component. It allows excluding certain columns, 
 * provides search functionality, and supports sorting. The table renders data passed to it,
 * applying column formatting and sorting based on user interactions.
 *
 * @param {Array<Object>} data - The data to be displayed in the table.
 * @param {Array<string>} excludedColumns - The columns to be excluded from the table.
 * @returns {React.Component} A React component representing a dynamically generated table.
 */

function CoolTable({ data, excludedColumns }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: null });

  const formatData = columnSelected(data, excludedColumns);
  const columnsName = columns(formatData, true);
  const columnsRef = columns(formatData, false);

  const [resetPaginationKey, setResetPaginationKey] = useState(0); 

  const getDataType = (value) => {
    if (!isNaN(Date.parse(value)) && !isNaN(new Date(value).getDate())) {
      return "date";
    } else if (!isNaN(value) && typeof value !== "string") {
      return "number";
    }
    return "string";
  };

  const filteredLines = useMemo(() => {
    return searchQuery
      ? formatData.filter(line => {
          const flatLine = flattenObject(line);
          return Object.values(flatLine).some(value =>
            String(value).toLowerCase().includes(searchQuery.toLowerCase())
          );
        })
      : formatData;
  }, [formatData, searchQuery]);

  const sortedLines = useMemo(() => {
    let sortableItems = [...filteredLines];
    if (sortConfig.key && sortConfig.direction !== null) {
      sortableItems.sort((a, b) => {
        const keyParts = sortConfig.key.split(".");
        const aValue = keyParts.length > 1 ? a[keyParts[0]][keyParts[1]] : a[sortConfig.key];
        const bValue = keyParts.length > 1 ? b[keyParts[0]][keyParts[1]] : b[sortConfig.key];
        const type = getDataType(aValue);

        if (aValue == null && bValue == null) return 0;
        if (aValue == null) return -1;
        if (bValue == null) return 1;

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

  const handleSortChange = (key) => {
    let direction = "ascending";
    if (sortConfig.key === key && sortConfig.direction !== null) {
      direction = sortConfig.direction === "ascending" ? "descending" : "ascending";
    }
    setSortConfig({ key, direction });
  };


  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchQuery(value);
    setResetPaginationKey(prevKey => prevKey + 1);
  };


  if (!data) return null;

  return (
    <div className="cool-table">
      <div className="cool-head-table">
        <NumberRowSelector rowsPerPage={rowsPerPage} setRowsPerPage={setRowsPerPage} />
        <div className="cool-search-input-container">
          <label htmlFor="search">Search:</label>
          <input
            name="search"
            id="search"
            type="text"
            value={searchQuery}
            onChange={(e) => handleSearchChange(e)}
          />
        </div>
      </div>
      <HeaderTable columnsName={columnsName} columnsRef={columnsRef} onSortChange={handleSortChange} sortConfig={sortConfig} />
      <LinesTable linesValues={sortedLines} columnsName={columnsRef} rowsPerPage={rowsPerPage} resetPaginationKey={resetPaginationKey} />
    </div>
  );
}

export default React.memo(CoolTable);
