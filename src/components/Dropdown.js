import styled, { css } from 'styled-components';
import useToggle from '../hooks/useToggle';
import useDropdown from '../hooks/useDropdown';
import { ReactComponent as ArrowUpIcon } from '../assets/icon-arrow-up.svg';
import { ReactComponent as ArrowDownIcon } from '../assets/icon-arrow-down.svg';

const DEFAULT_OPTIONS = ['이름순', '최신순'];

export default function Dropdown({ options = DEFAULT_OPTIONS }) {
  const [isOpen, toggleDropdown] = useToggle(false);
  const { selectedOption, selectOption } = useDropdown(options);

  return (
    <S.DropdownWrapper>
      <S.DropdownButton $isOpen={isOpen} onClick={toggleDropdown} type='button'>
        {selectedOption}
        {getRightArrow(isOpen)}
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
`;

const buttonContentLayout = css`
  display: flex;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.sm};
`;

const selectedOptionColor = ({ $isSelected, theme }) => css`
  ${$isSelected && `color: ${theme.colors.blue50};`}
`;

const arrowStyles = css`
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

S.ArrowUpIcon = styled(ArrowUpIcon)`
  ${arrowStyles}
`;

S.ArrowDownIcon = styled(ArrowDownIcon)`
  ${arrowStyles}
`;

const getRightArrow = (isOpen) => {
  return isOpen ? <S.ArrowUpIcon /> : <S.ArrowDownIcon />;
};
