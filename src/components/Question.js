import styled from 'styled-components';

export default function Question({ content, timeAgp }) {
  return (
    <S.QuestionContainer>
      <span>질문 · ${timeAgp}</span>
      <h2>{content}</h2>
    </S.QuestionContainer>
  );
}

const S = {};

S.QuestionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xxxs};
  width: 100%;
`;

S.QuestionHeader = styled.span`
  font-weight: ${({ theme }) => theme.font.weight.medium};
  font-size: ${({ theme }) => theme.font.size.xs};
  line-height: ${({ theme }) => theme.font.lineHeight.xs};
  color: ${({ theme }) => theme.grayScale.gray40};
`;

S.QuestionContent = styled.h2`
  font-size: ${({ theme }) => theme.font.size.sm};
  line-height: ${({ theme }) => theme.font.lineHeight.sm};
  color: ${({ theme }) => theme.grayScale.gray60};
`;
