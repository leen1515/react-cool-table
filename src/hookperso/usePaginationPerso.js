import { useState } from "react";


/**
 * @name usePaginationPerso
 * @memberof utils
 * @function
 * @description
 * A custom hook for managing pagination logic. It calculates total pages based on the total items
 * and items per page, and provides functionality to navigate between pages.
 *
 * @param {number} totalItems - The total number of items to be paginated.
 * @param {number} itemsPerPage - The number of items to display per page.
 * @returns {{
*   currentPage: number,
*   totalPages: number,
*   goToNextPage: function,
*   goToPrevPage: function,
*   goToPage: function,
*   currentData: function
* }} An object containing pagination state and control functions.
*/

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

    return { currentPage, setCurrentPage, totalPages, goToNextPage, goToPrevPage, goToPage, currentData };
}

export default usePaginationPerso;
