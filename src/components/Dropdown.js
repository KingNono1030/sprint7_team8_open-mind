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
    <DropdownWrapper>
      <DropdownButton isOpen={isOpen} onClick={toggleDropdown} type='button'>
        {selectedOption}
        <ArrowIcon src={arrow} alt='드롭다운 화살표 아이콘' />
      </DropdownButton>
      {isOpen && (
        <OptionList>
          {options.map((option) => (
            <Option
              key={option}
              isSelected={option === selectedOption}
              onClick={() => selectOption(option)}
            >
              {option}
            </Option>
          ))}
        </OptionList>
      )}
    </DropdownWrapper>
  );
}

const dropdownButtonColor = ({ isOpen, theme }) => css`
  border: ${theme.borderWidth.thin} solid
    ${isOpen ? theme.grayScale.gray60 : theme.grayScale.gray40};
  color: ${isOpen ? theme.grayScale.gray60 : theme.grayScale.gray40};
`;

const buttonContentLayout = css`
  display: flex;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.sm};
`;

const selectedOptionColor = ({ isSelected, theme }) => css`
  ${isSelected && `color: ${theme.colors.blue50};`}
`;

const DropdownWrapper = styled.div`
  display: inline-block;
  position: relative;
  font-weight: ${({ theme }) => theme.font.weight.medium};
  font-size: ${({ theme }) => theme.font.size.xs};
  line-height: ${({ theme }) => theme.font.lineHeight.xs};
`;

const DropdownButton = styled.button`
  ${buttonContentLayout}
  ${({ isOpen, theme }) => dropdownButtonColor({ isOpen, theme })}
  border-radius: 8px;
  cursor: pointer;
`;

const ArrowIcon = styled.img`
  margin-left: auto;
`;

const OptionList = styled.ul`
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

const Option = styled.li`
  ${buttonContentLayout}
  ${({ isSelected, theme }) => selectedOptionColor({ isSelected, theme })}
  cursor: pointer;
`;
