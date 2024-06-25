import styled, { css } from 'styled-components';
import AnswerStateBadge from './AnswerStateBadge';
import Question from './Question';
import Answer from './Answer';
import Reaction from './Reaction';
import AnswerForm from './AnswerForm';
import Button from './Button';
import getTimeAgo from '../utils/getTimeAgo';
import more from '../assets/icon-more.svg';
import defaultProfileImg from '../assets/image-default-profile.svg';
import { useForm } from '../hooks/useForm';
import useAsync from '../hooks/useAsync';
import { createAnswers, patchAnswer, updateAnswer } from '../utils/api';
import useToggle from '../hooks/useToggle';
import { createReaction } from '../utils/api';
import { useState } from 'react';

export default function Inquiry({
  question,
  isAnswerPage = false,
  profile,
  callBack,
}) {
  const [isEdit, setIsEdit] = useState(false);
  const [isOpen, toggle] = useToggle();
  const { id: questionId, like, dislike, answer } = question;
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

  // post 요청
  const { value, handleChange, handleSubmit } = useForm('');

  const fetchData = async (value) => {
    const formData = {
      questionId: questionId,
      content: value,
      isRejected: false,
      team: '7-8',
    };
    const result = await callBack(formData);
  };
  const handleSubmitAsync = handleSubmit(fetchData);

  // Put 요청
  const {
    value: putValue,
    handleChange: handlePutChange,
    handleSubmit: handlePutSubmit,
  } = useForm(value);

  const putData = async (value) => {
    const formData = {
      content: value,
      isRejected: false,
    };
    const result = await callBack(formData);
  };
  const handlePutSubmitAsync = handlePutSubmit(putData);
  // Patch 요청

  return (
    <S.InquiryContainer>
      <S.InquiryHeader>
        <S.AnswerStateBadge isAnswered={!isAnswerEmpty} />
        {isAnswerPage && <S.MoreIcon onClick={toggle} src={more} alt='More' />}
        {isOpen && (
          <S.OptionList>
            <S.Option
              onClick={() => {
                toggle();
                setIsEdit((prevState) => !prevState);
              }}
            >
              수정하기
            </S.Option>
            <S.Option onClick={toggle}>거절하기</S.Option>
          </S.OptionList>
        )}
      </S.InquiryHeader>
      <Question content={questionContent} timeAgp={getTimeAgo(questionDate)} />
      {isAnswerPage ? (
        <Answer
          isEdit={isEdit}
          putValue={putValue}
          handlePutChange={handlePutChange}
          handlePutSubmit={handlePutSubmitAsync}
          value={value}
          handleChange={handleChange}
          handleSubmit={handleSubmitAsync}
          isAnswerPage={isAnswerPage}
          isAnswerEmpty={isAnswerEmpty}
          answerContent={answerContent}
          answerTime={getTimeAgo(answerDate)}
          profile={profile}
        />
      ) : (
        isAnswerEmpty || (
          <Answer
            answerContent={answerContent}
            answerTime={getTimeAgo(answerDate)}
            profile={profile}
          />
        )
      )}
      <S.ReactionWrapper>
        <Reaction
          like={like}
          dislike={dislike}
          questionId={questionId}
          createReaction={createReaction}
        />
      </S.ReactionWrapper>
    </S.InquiryContainer>
  );
}

const S = {};

S.InquiryHeader = styled.div`
  position: relative;
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
  cursor: pointer;
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

const buttonContentLayout = css`
  display: flex;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.sm};
`;

S.OptionList = styled.ul`
  width: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  right: 0;
  top: ${({ theme }) => `calc(100% + ${theme.spacing.xxxs})`};
  padding: ${({ theme }) => `${theme.spacing.xxxs} 0`};
  border: ${({ theme }) =>
    `${theme.borderWidth.thin} solid ${theme.grayScale.gray30}`};
  border-radius: 8px;
  background-color: ${({ theme }) => theme.grayScale.gray10};
  color: ${({ theme }) => theme.grayScale.gray50};
  z-index: 1;
`;

S.Option = styled.li`
  ${buttonContentLayout}
  cursor: pointer;
`;
