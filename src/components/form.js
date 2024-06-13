import { useState } from 'react';
import styled from 'styled-components';

export default function Form({ onSubmit, placeholder, showIcon, iconInstance, inputStyles }) {
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(value);
  };

  return (
    <InputContainer onSubmit={handleSubmit}>
      {showIcon && <Icon src={iconInstance} alt="Icon" />}
      <Input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
        style={inputStyles}
      />
    </InputContainer>
  );
}

const InputContainer = styled.form`
  position: relative;
  width: 100%;
  margin-bottom: 20px;
`;

const Icon = styled.img`
  position: absolute;
  left: 15px;
  top: 50%;
  transform: translateY(-50%);
  width: 20px;
  height: 20px;
  opacity: 0.5;
`;

const Input = styled.input`
  font-weight: 400;
  text-align: left;
  width: 257px;
  height: 40px;
  padding: 0 10px 0 40px;
  border: 1px solid #818181;
  border-radius: 5px;
  font-size: 16px;
  line-height: 22px;
  box-sizing: border-box;

  &::placeholder {
    color: rgba(0, 0, 0, 0.5);
  }
`;