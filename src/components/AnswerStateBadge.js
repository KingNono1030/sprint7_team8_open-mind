import React from 'react';
import styled, { css } from 'styled-components';

export default function AnswerStateBadge({ isAnswered, className }) {
  return (
    <S.AnswerStateBadge answered={isAnswered} className={className}>
      {isAnswered ? '답변 완료' : '미답변'}
    </S.AnswerStateBadge>
  );
}

const S = {
  AnswerStateBadge: styled.div`
    display: inline-block;
    padding: 4px 12px;
    border-radius: 8px;
    font-size: 14px;
    font-weight: 500;
    ${({ answered }) => (answered ? answeredStyles : notAnsweredStyles)}
  `,
};

const answeredStyles = css`
  color: #542f1a;
  background-color: #ffffff;
  border: 1px solid #542f1a;
`;

const notAnsweredStyles = css`
  color: #818181;
  background-color: #ffffff;
  border: 1px solid #818181;
`;
