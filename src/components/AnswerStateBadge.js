import React from 'react';
import styled from 'styled-components';

export default function AnswerStateBadge({ isAnswered }) {
    return (
      <AnsweredBadge answered={isAnswered}>
        {isAnswered ? '답변 완료' : '미답변'}
      </AnsweredBadge>
    );
  }

const AnsweredBadge = styled.div`
  display: inline-block;
  padding: 4px 12px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  color: ${({ answered }) => (answered ? '#542F1A' : '#818181')};
  background-color: ${({ answered }) => (answered ? '#FFFFFF' : '#FFFFFF')};
  border: 1px solid ${({ answered }) => (answered ? '#542F1A' : '#818181')};
  `;