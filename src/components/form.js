import { useState } from 'react';
import styled from 'styled-components';


export default function Form({ onSubmit, state, text, showIcon, iconInstance }) {
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(name);
  };

  return (
    <FormWrapper onSubmit={handleSubmit}>
      <InputContainer>
        {showIcon && <Icon src={iconInstance} alt="User Icon" />}
        <Input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder={text}
        />
      </InputContainer>
      <Button type="submit">일단 버튼</Button>
    </FormWrapper>
  );
}

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 305px;
  height: Hug (156px);
  padding: 24px;
  gap: 16px;
  border-radius: 16px;
  background-color: white;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const InputContainer = styled.div`
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
  height: 22px;
  padding: 10px 10px 10px 40px;
  border: 1px solid #818181;
  border-radius: 5px;
  font-size: 16px;
  line-height: 22px;

  &::placeholder {
    color: rgba(0, 0, 0, 0.5);
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 10px 20px;
`;