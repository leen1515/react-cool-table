import React from "react";

function NumberRowSelector({ rowsPerPage, setRowsPerPage }) {
  const handleRowsPerPageChange = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
  };

  return (
    <div className="cool-selector-container">
      <label htmlFor="rows-per-page">Show</label>
      <select id="rows-per-page" value={rowsPerPage} onChange={handleRowsPerPageChange}>
        <option value="10">10</option>
        <option value="25">25</option>
        <option value="50">50</option>
        <option value="100">100</option>
      </select>entries
    </div>
  );
}

export default NumberRowSelector;
