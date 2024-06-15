import styled from 'styled-components';
import Badge from './Badge';
import Question from './Question';
import Answer from './Answer';
import Reaction from './Reaction';

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

const getTimeAgo = (createdAt) => {
  const now = new Date();
  const timeDifference = now - new Date(createdAt);

  const seconds = Math.floor(timeDifference / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const weeks = Math.floor(days / 7);

  if (weeks > 0) {
    return `${weeks}주전`;
  } else if (days > 0) {
    return `${days}일전`;
  } else if (hours > 0) {
    return `${hours}시간전`;
  } else if (minutes > 0) {
    return `${minutes}분전`;
  } else {
    return `${seconds}초전`;
  }
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
      <Badge isAnswerEmpty={isAnswerEmpty} />
      <Question
        content={questionContent}
        timeAgp={getTimeAgo(questionTimeAgo)}
      />
      <Answer
        content={answerContent}
        timeAgp={getTimeAgo(answerTimeAgo)}
        subject={subjectId}
      />
      <Reaction like={like} dislike={dislike} />
    </S.InquiryContainer>
  );
}

const S = {};
