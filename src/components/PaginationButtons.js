import { useState } from 'react';
import styled, { css } from 'styled-components';
import { ReactComponent as CaretLeftIcon } from '../assets/icon-caret-left.svg';
import { ReactComponent as CaretRightIcon } from '../assets/icon-caret-right.svg';

export default function PaginationButtons({
  pages,
  onPagination,
  onPreviousPageIndex,
  onNextPageIndex,
  currentPage = 1,
}) {
  return (
    <S.ButtonList>
      <S.PageButton onClick={onPreviousPageIndex}>
        <CaretLeftIcon />
      </S.PageButton>
      {pages.map((page) => (
        <S.PageButton
          onClick={onPagination}
          key={page}
          $isCurrentPage={currentPage == page}
        >
          {page}
        </S.PageButton>
      ))}
      <S.PageButton onClick={onNextPageIndex}>
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
  ${({ $isCurrentPage }) => $isCurrentPage && selectedButtonStyles};

  &:hover {
    color: ${({ theme }) => theme.brownScale.brown40};
  }
`;
