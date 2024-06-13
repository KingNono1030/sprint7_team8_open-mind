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

const DropdownWrapper = styled.div``;
const DropdownButton = styled.button``;
const ArrowIcon = styled.img``;
const OptionList = styled.ul``;
const Option = styled.li``;
