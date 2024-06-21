import { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { ReactComponent as CaretLeftIcon } from '../assets/icon-caret-left.svg';
import { ReactComponent as CaretRightIcon } from '../assets/icon-caret-right.svg';

export default function PaginationButtons({
  currentPage,
  totalPages,
  onPagination,
}) {
  const [pageGroup, setPageGroup] = useState(Math.floor((currentPage - 1) / 5));
  const PAGES_PER_GROUP = 5;

  const handlePreviousPageGroup = () => {
    if (pageGroup > 0) {
      const newPageGroup = pageGroup - 1;
      setPageGroup(newPageGroup);
      onPagination(newPageGroup * PAGES_PER_GROUP + PAGES_PER_GROUP);
    }
  };

  const handleNextPageGroup = () => {
    if ((pageGroup + 1) * PAGES_PER_GROUP < totalPages) {
      const newPageGroup = pageGroup + 1;
      setPageGroup(newPageGroup);
      onPagination(newPageGroup * PAGES_PER_GROUP + 1);
    }
  };

  const startPage = pageGroup * PAGES_PER_GROUP + 1;
  const endPage = Math.min(startPage + PAGES_PER_GROUP - 1, totalPages);
  const PAGES = Array.from(
    { length: endPage - startPage + 1 },
    (_, index) => startPage + index
  );

  return (
    <S.ButtonList>
      <S.PageButton
        onClick={handlePreviousPageGroup}
        disabled={pageGroup === 0}
      >
        <CaretLeftIcon />
      </S.PageButton>
      {PAGES.map((page) => (
        <S.PageButton
          onClick={() => onPagination(page)}
          key={page}
          active={page === currentPage}
        >
          {page}
        </S.PageButton>
      ))}
      <S.PageButton
        onClick={handleNextPageGroup}
        disabled={(pageGroup + 1) * PAGES_PER_GROUP >= totalPages}
      >
        <CaretRightIcon />
      </S.PageButton>
    </S.ButtonList>
  );
}

const fontStyle = css`
  font-size: ${({ theme }) => theme.font.size.lg};
  line-height: ${({ theme }) => theme.font.lineHeight.lg};
  color: ${({ theme }) => theme.grayScale.gray40};
`;

const S = {};

S.ButtonList = styled.ul`
  display: flex;
  ${fontStyle}
`;

S.PageButton = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  cursor: pointer;
  font-family: ${({ theme }) => theme.font.family.second};
  ${({ active }) => active && selectedButtonStyles}
`;

const selectedButtonStyles = css`
  color: ${({ theme }) => theme.brownScale.brown40};
`;
