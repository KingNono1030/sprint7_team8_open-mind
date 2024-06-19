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
        useTextarea={true}
      />
    </QuestionFormWrapper>
  );
}

const QuestionFormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 279px;
  height: 358px;
  gap: 10px;
  border-radius: 10px;
`;

const inputCustomStyles = {
  width: '247px',
  height: '326px',
  padding: '10px',
  border: 'none',
  backgroundColor: '#f9f9f9',
  fontSize: '16px',
  color: 'rgba(0, 0, 0, 0.5)',
  resize: 'none',
};