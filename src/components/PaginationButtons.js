import styled, { css } from 'styled-components';
import { ReactComponent as ArrowLeftIcon } from '../assets/icon-arrow-left.svg';
import { ReactComponent as ArrowRightIcon } from '../assets/icon-arrow-right.svg';

const PAGES = [1, 2, 3, 4, 5];

export default function PaginationButtons({ onClick }) {
  return (
    <S.ButtonList>
      <S.PageButton>
        <S.ArrowLeftIcon />
      </S.PageButton>
      {PAGES.map((page, index) => {
        return (
          <S.PageButton onClick={onClick} key={index} value={page}>
            {page}
          </S.PageButton>
        );
      })}
      <S.PageButton>
        <S.ArrowRighttIcon />
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
`;

S.PageButton = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  ${fontStyle}
`;

S.ArrowLeftIcon = styled(ArrowLeftIcon)`
  ${fontStyle}
`;

S.ArrowRightIcon = styled(ArrowRightIcon)`
  ${fontStyle}
`;
