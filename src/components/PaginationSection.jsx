import React from "react";

function Pagination({ totalPages, currentPage, goToNextPage, goToPrevPage }) {
    return (
        <div className="pagination-controls">
            <button onClick={goToPrevPage} disabled={currentPage === 1}>
                Previous
            </button>
            <span>Page {currentPage} sur {totalPages}</span>
            <button onClick={goToNextPage} disabled={currentPage === totalPages}>
                Next
            </button>
        </div>
    );
}

export default Pagination;
