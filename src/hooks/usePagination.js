import { useState } from 'react';

const INITIAL_PAGE = 1;
const TOTAL_PAGES = 5;

export function usePagination() {
  const [page, setPage] = useState(INITIAL_PAGE);

  const onPagination = (newPage) => {
    setPage(newPage);
  };

  const onPreviousPage = () => {
    if (page > 1) {
      setPage((prevPage) => prevPage - 1);
    }
  };

  const onNextPage = () => {
    if (page < TOTAL_PAGES) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  return {
    page,
    onPagination,
    onPreviousPage,
    onNextPage,
  };
}
