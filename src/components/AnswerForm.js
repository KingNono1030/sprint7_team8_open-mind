import React from 'react';
import Form from './Form';
import styled from 'styled-components';

export default function AnswerForm({ id, value, handleChange, handleSubmit }) {
  return (
    <AnswerFormWrapper>
      <Form
        id={id}
        value={value}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        placeholder='답변을 입력해주세요'
        showIcon={false}
        iconInstance={null}
        inputStyles={inputCustomStyles}
        useTextarea
      />
    </AnswerFormWrapper>
  );
}

const AnswerFormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 716px;
  height: 186px;
  gap: 10px;
  border-radius: 10px;
`;

const inputCustomStyles = {
  width: '100%',
  height: '100%',
  padding: '10px',
  border: 'none',
  backgroundColor: '#f9f9f9',
  fontSize: '16px',
  color: 'rgba(0, 0, 0, 0.5)',
  resize: 'none',
  boxSizing: 'border-box',
};
