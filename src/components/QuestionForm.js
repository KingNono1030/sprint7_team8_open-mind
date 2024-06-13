import React from 'react';
import Form from './form';
import styled from 'styled-components';

export default function QuestionForm() {
  const handleQuestionSubmit = (question) => {
    console.log('Question:', question);
  };

  return (
    <QuestionFormWrapper>
      <Form
        onSubmit={handleQuestionSubmit}
        placeholder="질문을 입력해주세요"
        showIcon={false}
        iconInstance={null}
        inputStyles={inputCustomStyles}
      />
    </QuestionFormWrapper>
  );
}

const QuestionFormWrapper = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 279px;
  height: 358px;
  background-color: #f8f8f8;
  border-radius: 10px;
`;

const inputCustomStyles = {
  width: '279px',
  height: '358px',
  padding: '10px',
  border: 'none',
  backgroundColor: '#f9f9f9',
  fontSize: '16px',
  color: 'rgba(0, 0, 0, 0.5)',
};