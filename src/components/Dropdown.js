import { useState } from 'react';
import styled from 'styled-components';

const options = ['이름순', '최신순'];

export default function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState(options[0]);
  return (
    <DropdownWrapper>
      <DropdownButton
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        {value}
      </DropdownButton>
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
const OptionList = styled.ul``;
const Option = styled.li``;
