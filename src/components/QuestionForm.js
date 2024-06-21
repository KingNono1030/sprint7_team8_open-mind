import React from 'react';
import Form from './Form';
import styled from 'styled-components';

export default function QuestionForm({ className }) {
  const handleQuestionSubmit = (question) => {
    console.log('Question:', question);
  };

  return (
    <QuestionFormWrapper className={className}>
      <Form
        onSubmit={handleQuestionSubmit}
        placeholder='질문을 입력해주세요'
        showIcon={false}
        iconInstance={null}
        inputStyles={inputCustomStyles}
        useTextarea={true}
      />
    </QuestionFormWrapper>
  );
}

const QuestionFormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 10px;
`;

const inputCustomStyles = {
  padding: '10px',
  border: 'none',
  backgroundColor: '#f9f9f9',
  fontSize: '16px',
  color: 'rgba(0, 0, 0, 0.5)',
  resize: 'none',
};
