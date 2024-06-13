import { useState } from 'react';
import styled from 'styled-components';
import arrowUpIcon from '../assets/icon-arrow-up.svg';
import arrowDownIcon from '../assets/icon-arrow-down.svg';

const options = ['이름순', '최신순'];

export default function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState(options[0]);
  const arrow = isOpen ? arrowUpIcon : arrowDownIcon;
  return (
    <DropdownWrapper>
      <DropdownButton
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        type='button'
      >
        {value}
      </DropdownButton>
      <ArrowIcon src={arrow} alt='드롭다운 화살표 아이콘' />
      {isOpen && (
        <OptionList>
          {options.map((option) => (
            <Option key={option} onClick={() => setValue(option)}>
              {option}
            </Option>
          ))}
        </OptionList>
      )}
    </DropdownWrapper>
  );
}

const DropdownWrapper = styled.div`
  position: relative;
`;
const DropdownButton = styled.button``;
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
  z-index: 1;
`;
const Option = styled.li``;
