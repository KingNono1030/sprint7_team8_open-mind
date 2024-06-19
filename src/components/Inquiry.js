import styled from 'styled-components';
import AnswerStateBadge from './AnswerStateBadge';
import Question from './Question';
import Answer from './Answer';
import Reaction from './Reaction';
import getTimeAgo from '../utils/getTimeAgo';

const question = {
  id: 11784,
  subjectId: 6743,
  content: '와우 당신은 어찌 그렇게 똑똑합니까',
  like: 6,
  dislike: 2147483647,
  createdAt: '2024-06-13T09:02:20.912030Z',
  answer: {
    id: 5511,
    questionId: 11784,
    content: '껄껄 나도 몰라요!',
    isRejected: false,
    createdAt: '2024-06-13T09:10:04.416221Z',
  },
};

export default function Inquiry({}) {
  const { subjectId, like, dislike, answer } = question;
  const [questionContent, questionDate] = [
    question.content,
    question.createdAt,
  ];
  const isAnswerEmpty = !!answer;
  const [answerContent, answerDate, isRejected] = [
    answer?.content,
    answer?.createdAt,
    answer?.isRejected,
  ];

  return (
    <S.InquiryContainer>
      <AnswerStateBadge isAnswerEmpty={isAnswerEmpty} />
      <Question
        content={questionContent}
        timeAgp={getTimeAgo(questionTimeAgo)}
      />
      <Answer
        content={answerContent}
        timeAgp={getTimeAgo(answerTimeAgo)}
        subject={subjectId}
      />
      <S.ReactionWrapper>
        <Reaction like={like} dislike={dislike} />
      </S.ReactionWrapper>
    </S.InquiryContainer>
  );
}

const S = {};

S.InquiryContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xl};
  width: 100%;
  padding: ${({ theme }) => theme.spacing.xl};
  border: ${({ theme }) =>
    `${theme.borderWidth.thin} solid ${theme.brownScale.brown20}`};
  background-color: ${({ theme }) => theme.brownScale.brown10};
  box-shadow: ${({ theme }) => theme.boxShadow.light};
`;

S.ReactionWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  height: 43px;
  border-top: ${({ theme }) =>
    `${theme.borderWidth.thin} solid ${theme.grayScale.gray30}`};
`;
