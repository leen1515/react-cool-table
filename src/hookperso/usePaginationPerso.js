import { useState } from "react";

function usePaginationPerso(totalItems, itemsPerPage) {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    const goToNextPage = () => {
        setCurrentPage((prev) => (prev < totalPages ? prev + 1 : prev));
    };

    const goToPrevPage = () => {
        setCurrentPage((prev) => (prev > 1 ? prev - 1 : prev));
    };

    const currentData = () => {
        const start = (currentPage - 1) * itemsPerPage;
        const end = start + itemsPerPage;
        return { start, end };
    };

    const goToPage = (page) => {
        setCurrentPage(page);
    };

    return { currentPage, totalPages, goToNextPage, goToPrevPage, goToPage, currentData };
}

export default usePaginationPerso;
