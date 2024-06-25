import React, { useState } from 'react';
import styled from 'styled-components';

export default function Form({
  id,
  value,
  handleChange,
  handleSubmit,
  placeholder,
  showIcon,
  iconInstance = null,
  inputStyles,
  useTextarea = false,
  className,
}) {
  return (
    <S.Form onSubmit={handleSubmit} id={id}>
      {showIcon && <S.Icon src={iconInstance} alt='Icon' />}
      <InputComponent
        className={className}
        useTextarea={useTextarea}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        style={inputStyles}
      />
    </S.Form>
  );
}

const S = {};
S.Form = styled.form`
  position: relative;
  width: 100%;
  height: 100%;
`;

S.Icon = styled.img`
  position: absolute;
  left: 15px;
  top: 50%;
  transform: translateY(-50%);
  width: 20px;
  height: 20px;
  opacity: 0.5;
`;

S.Input = styled.input`
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

S.Textarea = styled.textarea`
  font-weight: 400;
  text-align: left;
  width: 100%;
  height: 100%;
  padding: 10px;
  border: none;
  background-color: #f9f9f9;
  font-size: 16px;
  line-height: 22px;
  box-sizing: border-box;
  resize: none;

  &::placeholder {
    color: rgba(0, 0, 0, 0.5);
    text-align: left;
  }
`;

const InputComponent = React.memo(({ useTextarea, ...props }) => {
  return useTextarea ? (
    <S.Textarea {...props} />
  ) : (
    <S.Input type='text' {...props} />
  );
});
