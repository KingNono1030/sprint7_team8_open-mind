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
        <S.ArrowIcon src={arrow} alt='드롭다운 화살표 아이콘' />
      </S.DropdownButton>
      {isOpen && (
        <S.OptionList>
          {options.map((option) => (
            <S.Option
              key={option}
              isSelected={option === selectedOption}
              onClick={() => selectOption(option)}
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
      border: ${theme.borderWidth.thin} solid ${theme.grayScale.gray60};
      color: ${theme.grayScale.gray60};`
      : `
      border: ${theme.borderWidth.thin} solid ${theme.grayScale.gray40};
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
  display: inline-block;
  position: relative;
  font-weight: ${({ theme }) => theme.font.weight.medium};
  font-size: ${({ theme }) => theme.font.size.xs};
  line-height: ${({ theme }) => theme.font.lineHeight.xs};
`;

S.DropdownButton = styled.button`
  ${buttonContentLayout}
  ${dropdownButtonColor}
  border-radius: 8px;
  cursor: pointer;
`;

S.ArrowIcon = styled.img`
  right: ${({ theme }) => theme.spacing.sm};
  top: ${({ theme }) => theme.spacing.ms};
`;

S.OptionList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  top: ${({ theme }) => `calc(100% + ${theme.spacing.xxxs})`};
  width: 100%;
  padding: ${({ theme }) => `${theme.spacing.xxxs} 0`};
  border: ${({ theme }) =>
    `${theme.borderWidth.thin} solid ${theme.grayScale.gray30}`};
  border-radius: 8px;
  background-color: ${({ theme }) => theme.grayScale.gray10};
  color: ${({ theme }) => theme.grayScale.gray50};
  z-index: 1;
`;

S.Option = styled.li`
  ${buttonContentLayout}
  ${selectedOptionColor}
  cursor: pointer;
`;
