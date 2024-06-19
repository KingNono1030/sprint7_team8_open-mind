import styled, { css } from 'styled-components';
import { ReactComponent as CaretLeftIcon } from '../assets/icon-caret-left.svg';
import { ReactComponent as CaretRightIcon } from '../assets/icon-caret-right.svg';

const totalPages = 5; // 원하는 총 페이지 수
const PAGES = Array.from({ length: totalPages }, (_, index) => index + 1);

export default function PaginationButtons({ onClick }) {
  return (
    <S.ButtonList>
      <S.PageButton>
        <CaretLeftIcon />
      </S.PageButton>
      {PAGES.map((page) => (
        <S.PageButton onClick={onClick} key={page}>
          {page}
        </S.PageButton>
      ))}
      <S.PageButton>
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
`;
