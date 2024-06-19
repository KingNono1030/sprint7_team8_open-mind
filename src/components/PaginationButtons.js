import { useState } from 'react';
import styled, { css } from 'styled-components';
import { ReactComponent as CaretLeftIcon } from '../assets/icon-caret-left.svg';
import { ReactComponent as CaretRightIcon } from '../assets/icon-caret-right.svg';

const INITIAL_PAGE = 1;
const TOTAL_PAGES = 5;
const PAGES = Array.from({ length: TOTAL_PAGES }, (_, index) => index + 1);

export default function PaginationButtons({ onClick }) {
  const [page, setPage] = useState(INITIAL_PAGE);

  const onPagination = (e) => {
    setPage(e.target.innerText);
  };
  const onPreviousPage = () => {
    const isPageOutOfBounds = page <= 1;
    isPageOutOfBounds || setPage((prevPage) => prevPage - 1);
  };
  const onNextPage = () => {
    const isPageOutOfBounds = page >= 5;
    isPageOutOfBounds || setPage((prevPage) => prevPage + 1);
  };

  return (
    <S.ButtonList>
      <S.PageButton onClick={onPreviousPage}>
        <CaretLeftIcon />
      </S.PageButton>
      {PAGES.map((page) => (
        <S.PageButton onClick={onPagination} key={page}>
          {page}
        </S.PageButton>
      ))}
      <S.PageButton onClick={onNextPage}>
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

const selectedButtonStyles = css`
  color: ${({ theme }) => theme.brownScale.brown40};
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
`;
