import React from 'react';
import Form from './form';
import styled from 'styled-components';

export default function AnswerForm() {
  const handleAnswerSubmit = (answer) => {
    console.log('Answer:', answer);
  };

  return (
    <AnswerFormWrapper>
      <Form
        onSubmit={handleAnswerSubmit}
        placeholder="답변을 입력해주세요"
        showIcon={false}
        iconInstance={null}
        inputStyles={inputCustomStyles}
        useTextarea={true}
      />
    </AnswerFormWrapper>
  );
}

const AnswerFormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 203px;
  height: 186px;
  gap: 10px;
  border-radius: 10px;
`;

const inputCustomStyles = {
  width: '171px',
  height: '154px',
  padding: '10px',
  border: 'none',
  backgroundColor: '#f9f9f9',
  fontSize: '16px',
  color: 'rgba(0, 0, 0, 0.5)',
  resize: 'none',
};