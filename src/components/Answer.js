import React from 'react';
import styled from 'styled-components';
import AnswerForm from './AnswerForm';
import Button from './Button';

function Answer({
  value,
  handleChange,
  handleSubmit,
  isAnswerPage,
  isAnswerEmpty,
  profileImage,
  answerTime,
  answerContent,
  profile,
}) {
  const hasValue = !!value;

  return (
    <S.AnswerContainer>
      <S.AnswerProfileImg
        src={profile.imageSource}
        alt={`${profile.name} profile`}
      />
      <S.AnswerSection>
        <S.AnswerHeader>
          <S.AnswerProfileId>{profile.name}</S.AnswerProfileId>
          {isAnswerEmpty || <S.AnswerTime>{answerTime}</S.AnswerTime>}
        </S.AnswerHeader>
        {isAnswerEmpty ? (
          <S.AnswerFormWrapper>
            <S.AnswerForm
              id='answer'
              value={value}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
            />
            <Button
              isActive={hasValue}
              form='answer'
              type='submit'
              isDark
              variant='fullWidth'
            >
              답변 완료
            </Button>
          </S.AnswerFormWrapper>
        ) : (
          <S.AnswerContent>{answerContent}</S.AnswerContent>
        )}
      </S.AnswerSection>
    </S.AnswerContainer>
  );
}

const S = {};

S.AnswerContainer = styled.div`
  width: 100%;
  gap: 12px;
  display: flex;
`;

S.AnswerProfileImg = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
`;

S.AnswerContent = styled.div`
  gap: 0px;
  font-family: Pretendard;
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  text-align: left;
  color: var(--Grayscale-60, #000000);
  opacity: 1;
`;

S.AnswerSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

S.AnswerHeader = styled.div`
  width: 203px;
  height: 18px;
  display: flex;
  gap: 8px;
`;

S.AnswerProfileId = styled.span`
  height: 18px;
  display: inline-block;
  white-space: nowrap;
  font-family: Actor;
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  text-align: left;
  color: var(--Grayscale-60, #000000);
`;

S.AnswerTime = styled.span`
  display: inline-block;
  white-space: nowrap;
  height: 18px;
  gap: 0px;
  display: inline-block;
  white-space: nowrap;
  font-family: Pretendard;
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  text-align: left;
  color: var(--Grayscale-40, #818181);
`;

S.AnswerFormWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};
`;
S.AnswerForm = styled(AnswerForm)`
  width: 100%;
`;
export default Answer;
