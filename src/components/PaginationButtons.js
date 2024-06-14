import styled from 'styled-components';
import arrowLeftIcon from '../assets/icon-arrow-left.svg';
import arrowRightIcon from '../assets/icon-arrow-right.svg';

const PAGES = [1, 2, 3, 4, 5];
const getAltMessage = (direction) => `${direction}으로 페이지 이동`;

export default function PaginationButtons() {
  return (
    <S.ButtonList>
      <S.PageButton>
        <img src={arrowLeftIcon} alt={getAltMessage('왼쪽')} />
      </S.PageButton>
      {PAGES.map((page) => {
        return (
          <S.PageButton key={page} value={page}>
            {page}
          </S.PageButton>
        );
      })}
      <S.PageButton>
        <img src={arrowRightIcon} alt={getAltMessage('오른쪽')} />
      </S.PageButton>
    </S.ButtonList>
  );
}

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
  font-size: ${({ theme }) => theme.font.size.lg};
  line-height: ${({ theme }) => theme.font.lineHeight.lg};
  color: ${({ theme }) => theme.grayScale.gray40};
`;
