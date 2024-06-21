import styled, { css } from 'styled-components';
import useToggle from '../hooks/useToggle';
import useDropdown from '../hooks/useDropdown';
import { ReactComponent as CaretUpIcon } from '../assets/icon-caret-up.svg';
import { ReactComponent as CaretDownIcon } from '../assets/icon-caret-down.svg';

const DEFAULT_OPTIONS = ['이름순', '최신순'];

export default function Dropdown({ options = DEFAULT_OPTIONS, onOrderChange }) {
  const [isOpen, toggleDropdown] = useToggle(false);
  const { selectedOption, selectOption } = useDropdown(options, onOrderChange);

  return (
    <S.DropdownWrapper>
      <S.DropdownButton $isOpen={isOpen} onClick={toggleDropdown} type='button'>
        {selectedOption}
        {getCaret(isOpen)}
      </S.DropdownButton>
      {isOpen && (
        <S.OptionList>
          {options.map((option) => (
            <S.Option
              key={option}
              $isSelected={option === selectedOption}
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

const dropdownButtonColor = ({ $isOpen, theme }) => css`
  border: ${theme.borderWidth.thin} solid
    ${$isOpen ? theme.grayScale.gray60 : theme.grayScale.gray40};
  color: ${$isOpen ? theme.grayScale.gray60 : theme.grayScale.gray40};
  background-color: ${theme.grayScale.gray10};
`;

const buttonContentLayout = css`
  display: flex;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.sm};
`;

const selectedOptionColor = ({ $isSelected, theme }) => css`
  ${$isSelected && `color: ${theme.colors.blue50};`}
`;

const caretStyles = css`
  width: 14px;
  height: 14px;
  margin-left: 4px;
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
  ${({ $isOpen, theme }) => dropdownButtonColor({ $isOpen, theme })}
  border-radius: 8px;
  cursor: pointer;
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
  ${({ $isSelected, theme }) => selectedOptionColor({ $isSelected, theme })}
  cursor: pointer;
`;

S.CaretUpIcon = styled(CaretUpIcon)`
  ${caretStyles}
`;

S.CaretDownIcon = styled(CaretDownIcon)`
  ${caretStyles}
`;

const getCaret = (isOpen) => {
  return isOpen ? <S.CaretUpIcon /> : <S.CaretDownIcon />;
};
