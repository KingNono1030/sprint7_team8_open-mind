import styled, { css } from 'styled-components';
import useToggle from '../hooks/useToggle';
import useDropdown from '../hooks/useDropdown';
import arrowUpIcon from '../assets/icon-arrow-up.svg';
import arrowDownIcon from '../assets/icon-arrow-down.svg';

const DEFAULT_OPTIONS = ['이름순', '최신순'];

export default function Dropdown({ options = DEFAULT_OPTIONS }) {
  const [isOpen, toggleDropdown] = useToggle(false);
  const { selectedOption, selectOption } = useDropdown(options);
  const arrow = isOpen ? arrowUpIcon : arrowDownIcon;
  return (
    <S.DropdownWrapper>
      <S.DropdownButton isOpen={isOpen} onClick={toggleDropdown} type='button'>
        {selectedOption}
      </S.DropdownButton>
      <S.ArrowIcon src={arrow} alt='드롭다운 화살표 아이콘' />
      {isOpen && (
        <S.OptionList>
          {options.map((option) => (
            <S.Option
              key={option}
              isSelected={option === selectedOption}
              onClick={selectOption}
            >
              {option}
            </S.Option>
          ))}
        </S.OptionList>
      )}
    </S.DropdownWrapper>
  );
}

const dropdownButtonColor = css`
  ${({ isOpen, theme }) =>
    isOpen
      ? `
      border: ${theme.border.thin} solid ${theme.grayScale.gray60};
      color: ${theme.grayScale.gray60};`
      : `
      border: ${theme.border.thin} solid ${theme.grayScale.gray40};
      color: ${theme.grayScale.gray40};`}
`;

const buttonContentLayout = css`
  display: flex;
  align-items: center;
  padding-top: ${({ theme }) => theme.spacing.xs};
  padding-bottom: ${({ theme }) => theme.spacing.xs};
  padding-left: ${({ theme }) => theme.spacing.sm};
`;

const selectedOptionColor = css`
  ${({ isSelected, theme }) =>
    isSelected &&
    `
  color: ${theme.colors.blue50};
  `};
`;

const S = {};

S.DropdownWrapper = styled.div`
  position: relative;
  font-weight: ${({ theme }) => theme.font.weight.medium};
  font-size: ${({ theme }) => theme.font.size.xs};
  line-height: ${({ theme }) => theme.font.lineHeight.xs};
`;

S.DropdownButton = styled.button`
  ${buttonContentLayout}
  ${DropdownButtonColor}
`;

S.ArrowIcon = styled.img`
  position: absolute;
  right: ${({ theme }) => theme.spacing.sm};
  top: ${({ theme }) => theme.spacing.ms};
`;

S.OptionList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  top: ${({ theme }) => `calc(100% + ${theme.spacing.xxxs})`};
  padding: ${({ theme }) => `${theme.spacing.xxxs} 0`};
  border: ${({ theme }) =>
    `${theme.border.thin} solid ${theme.grayScale.gray30}`};
  color: ${({ theme }) => theme.grayScale.gray50};
  z-index: 1;
`;

S.Option = styled.li`
  ${buttonContentLayout}
  ${selectedOptionColor}
  cursor: pointer;
`;
