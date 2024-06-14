import styled, { css } from 'styled-components';
import useToggle from '../hooks/useToggle';
import useDropdown from '../hooks/useDropdown';
import arrowUpIcon from '../assets/icon-arrow-up.svg';
import arrowDownIcon from '../assets/icon-arrow-down.svg';

const options = ['이름순', '최신순'];

export default function Dropdown() {
  const [isOpen, toggleDropdown] = useToggle(false);
  const [selectedOption, selectOption] = useDropdown(options);
  const arrow = isOpen ? arrowUpIcon : arrowDownIcon;
  return (
    <DropdownWrapper>
      <DropdownButton isOpen={isOpen} onClick={toggleDropdown} type='button'>
        {selectedOption}
      </DropdownButton>
      <ArrowIcon src={arrow} alt='드롭다운 화살표 아이콘' />
      {isOpen && (
        <OptionList>
          {options.map((option) => (
            <Option
              key={option}
              isSelected={option === selectedOption}
              onClick={selectOption}
            >
              {option}
            </Option>
          ))}
        </OptionList>
      )}
    </DropdownWrapper>
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
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 12px;
`;

const selectedOptionColor = css`
  ${({ isSelected, theme }) =>
    isSelected &&
    `
  color: ${theme.colors.blue50};
  `};
`;

const DropdownWrapper = styled.div`
  position: relative;
  font-weight: ${({ theme }) => theme.font.weight.medium};
  font-size: ${({ theme }) => theme.font.size.xs};
  line-height: ${({ theme }) => theme.font.lineHeight.xs};
`;

const DropdownButton = styled.button`
  ${buttonContentLayout}
  ${DropdownButtonColor}
`;

const ArrowIcon = styled.img`
  position: absolute;
  right: 12px;
  top: 10px;
`;

const OptionList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  top: calc(100% + 4px);
  padding: 4px 0;
  border: ${({ theme }) =>
    `${theme.border.thin} solid ${theme.grayScale.gray30}`};
  color: ${({ theme }) => theme.grayScale.gray50};
  z-index: 1;
`;

const Option = styled.li`
  ${buttonContentLayout}
  ${selectedOptionColor}
  cursor: pointer;
`;
