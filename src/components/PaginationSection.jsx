import React from "react";

function Pagination({ totalPages, currentPage, goToPage, goToNextPage, goToPrevPage }) {
    const pageButtons = [];
    const maxPageButtons = 10;

    let startPage, endPage;
    if (totalPages <= maxPageButtons) {
        startPage = 1;
        endPage = totalPages;
    } else {
        const maxPagesBeforeCurrentPage = Math.floor(maxPageButtons / 2);
        const maxPagesAfterCurrentPage = Math.ceil(maxPageButtons / 2) - 1;
        if (currentPage <= maxPagesBeforeCurrentPage) {
            startPage = 1;
            endPage = maxPageButtons;
        } else if (currentPage + maxPagesAfterCurrentPage >= totalPages) {
            startPage = totalPages - maxPageButtons + 1;
            endPage = totalPages;
        } else {
            startPage = currentPage - maxPagesBeforeCurrentPage;
            endPage = currentPage + maxPagesAfterCurrentPage;
        }
    }

    if (startPage > 1) {
        pageButtons.push(<span key="startEllipsis">...</span>);
    }

    for (let page = startPage; page <= endPage; page++) {
        const isCurrentPage = currentPage === page;
        const btnClass = isCurrentPage ? "cool-page-active" : ""; 
        pageButtons.push(
            <button 
                className={`cool-page-btn ${btnClass}`} 
                key={page} 
                onClick={() => !isCurrentPage && goToPage(page)} 
                disabled={isCurrentPage}>
                {page}
            </button>
        );
    }

    if (endPage < totalPages) {
        pageButtons.push(<span key="endEllipsis">...</span>);
    }

    return (
        <div className="cool-pagination-controls">
            <button className="cool-navigation-btn" onClick={goToPrevPage} disabled={currentPage === 1}>
                Previous
            </button>
            <button className="cool-navigation-btn" onClick={() => goToPage(1)} disabled={currentPage === 1}>1</button>
            {pageButtons}
            <button className="cool-navigation-btn" onClick={totalPages} disabled={currentPage === totalPages}> {totalPages} </button>
            <button className="cool-navigation-btn" onClick={goToNextPage} disabled={currentPage === totalPages}>
                Next
            </button>
        </div>
    );
}

export default Pagination;
