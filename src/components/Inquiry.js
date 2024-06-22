import styled from 'styled-components';
import AnswerStateBadge from './AnswerStateBadge';
import Question from './Question';
import Answer from './Answer';
import Reaction from './Reaction';
import AnswerForm from './AnswerForm';
import Button from './Button';
import getTimeAgo from '../utils/getTimeAgo';
import more from '../assets/icon-more.svg';
import defaultProfileImg from '../assets/image-default-profile.svg';

export default function Inquiry({ question, isForm = false, profile }) {
  const { subjectId, like, dislike, answer } = question;
  const [questionContent, questionDate] = [
    question.content,
    question.createdAt,
  ];
  const isAnswerEmpty = !answer;
  const [answerContent, answerDate, isRejected] = [
    answer?.content,
    answer?.createdAt,
    answer?.isRejected,
  ];
  return (
    <S.InquiryContainer>
      <S.InquiryHeader>
        <S.AnswerStateBadge isAnswered={!isAnswerEmpty} />
        {isForm && <S.MoreIcon src={more} alt='More' />}
      </S.InquiryHeader>
      <Question content={questionContent} timeAgp={getTimeAgo(questionDate)} />
      {isForm ? (
        <S.AnswerFormContainer>
          <S.ProfileWrapper>
            <S.ProfileImage src={defaultProfileImg} alt='Profile' />
            <S.ProfileName>아초는고양이</S.ProfileName>
          </S.ProfileWrapper>
          <S.AnswerFormWrapper>
            <AnswerForm />
            <Button variant='primary'>답변 완료</Button>
          </S.AnswerFormWrapper>
        </S.AnswerFormContainer>
      ) : (
        <Answer
          answerContent={answerContent}
          answerTime={getTimeAgo(answerDate)}
          profile={profile}
        />
      )}
      <S.ReactionWrapper>
        <Reaction like={like} dislike={dislike} />
      </S.ReactionWrapper>
    </S.InquiryContainer>
  );
}

const S = {};

S.InquiryHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing.sm};
`;

S.AnswerStateBadge = styled(AnswerStateBadge)`
  width: fit-content;
`;

S.MoreIcon = styled.img`
  width: 20px;
  height: 20px;
`;

S.InquiryContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xl};
  width: 100%;
  padding: ${({ theme }) => theme.spacing.xl};
  border: ${({ theme }) =>
    `${theme.borderWidth.thin} solid ${theme.grayScale.gray10}`};
  border-radius: ${({ theme }) => theme.rounded.md};
  background-color: ${({ theme }) => theme.grayScale.gray10};
  box-shadow: ${({ theme }) => theme.boxShadow.light};
`;

S.AnswerFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
  padding: ${({ theme }) => theme.spacing.md};
  border: ${({ theme }) =>
    `${theme.borderWidth.thin} solid ${theme.grayScale.gray20}`};
  border-radius: ${({ theme }) => theme.rounded.md};
  background-color: ${({ theme }) => theme.grayScale.gray00};
`;

S.ProfileWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
`;

S.ProfileImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

S.ProfileName = styled.span`
  font-weight: 400;
  font-size: ${({ theme }) => theme.font.size.md};
`;

S.AnswerFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};
  margin-left: 48px;
`;

S.ReactionWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  height: 43px;
  border-top: ${({ theme }) =>
    `${theme.borderWidth.thin} solid ${theme.grayScale.gray30}`};
`;
