import { useState } from 'react';

const INITIAL_PAGE = 1;
const INITIAL_PAGE_INDEX = 0;
const PAGES_COUNT = 5;
// 59 / limit = 10
// 1 page 0 offset ~ limit
export function usePagination(feedCount, limit) {
  const [page, setPage] = useState(INITIAL_PAGE);
  const [pageIndex, setPageIndex] = useState(INITIAL_PAGE_INDEX);
  const maxPage = Math.ceil(feedCount / limit);
  const totalPages = Array.from({ length: maxPage }, (_, index) => index + 1);
  const pages = totalPages.slice(
    pageIndex * PAGES_COUNT,
    (pageIndex + 1) * PAGES_COUNT
  );

  const onPagination = (e) => {
    const nextPage = e.target.textContent;
    setPage(nextPage);
  };

  const onPreviousPageIndex = () => {
    if (pageIndex > 0) {
      setPageIndex((prevPageIndex) => prevPageIndex - 1);
    }
  };
  const onNextPageIndex = () => {
    if (pageIndex < Math.ceil(maxPage / PAGES_COUNT) - 1) {
      setPageIndex((prevPageIndex) => prevPageIndex + 1);
    }
  };

  return {
    page,
    pages,
    onPagination,
    onPreviousPageIndex,
    onNextPageIndex,
  };
}
