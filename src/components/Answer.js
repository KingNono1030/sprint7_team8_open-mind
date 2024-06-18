import React from 'react';
import styled from 'styled-components';
import profileImage from '../assets/icon-link.svg';

function Answer({ profileImage, profileId, answerTime, answerContent }) {
  return (
    <S.AnswerContainer>
      <S.AnswerProfileImg src={profileImage} alt={`${profileId} profile`} />
      <AnswerSection
        profileId={profileId}
        answerTime={answerTime}
        answerContent={answerContent}
      />
    </S.AnswerContainer>
  );
}

function AnswerSection({ profileId, answerTime, answerContent }) {
  return (
    <S.AnswerSection>
      <S.AnswerHeader>
        <S.AnswerProfileId>{profileId}</S.AnswerProfileId>
        <S.AnswerTime>{answerTime}</S.AnswerTime>
      </S.AnswerHeader>
      <S.AnswerContent>{answerContent}</S.AnswerContent>
    </S.AnswerSection>
  );
}

const S = {};

S.AnswerContainer = styled.div`
  width: 247px;
  height: 440px;
  gap: 12px;
  display: flex;
  justify-content: space-between;
  opacity: 1;
`;

S.AnswerProfileImg = styled.img`
  width: 32px;
  height: 32px;
  opacity: 1;
`;

S.AnswerContent = styled.div`
  width: 203px;
  height: 418px;
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
  width: 203px;
  height: 440px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  opacity: 1;
`;

S.AnswerHeader = styled.div`
  width: 203px;
  height: 18px;
  display: flex;
  gap: 8px;
  opacity: 1;
`;

S.AnswerProfileId = styled.text`
  height: 18px;
  gap: 0px;
  opacity: 1;
  display: inline-block;
  white-space: nowrap;
  font-family: Actor;
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  text-align: left;
  color: var(--Grayscale-60, #000000);
`;

S.AnswerTime = styled.text`
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
export default Answer;
