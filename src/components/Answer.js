import React from 'react';
import styled from 'styled-components';

function Answer() {
  return (
    <S.AnswerContainer>
      <S.AnswerProfileImg />
      <S.AnswerSection>
        <S.AnswerHeader>
          <S.AnswerProfileId>아추는고양이</S.AnswerProfileId>
          <S.AnswerTime>2주전</S.AnswerTime>
        </S.AnswerHeader>
        <S.AnswerContent>그들을 불러</S.AnswerContent>
      </S.AnswerSection>
    </S.AnswerContainer>
  );
}

const S = {};

S.AnswerContainer = styled.div`
  width: 247px;
  height: 440px;
  gap: 12px;
  opacity: 0px;
  display: flex;
  justify: space-between;
`;
S.AnswerProfileImg = styled.img`
  width: 32px;
  height: 32px;
`;

S.AnswerContent = styled.textarea`
  width: 203px;
  height: 418px;
  gap: 0px;
  opacity: 0px;
  font-family: Pretendard;
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  text-align: left;
  color: var(--Grayscale-60, #000000);
`;

S.AnswerSection = styled.div`
  width: 203px;
  height: 440px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  opacity: 0px;
`;
S.AnswerHeader = styled.div`
  width: 203px;
  height: 18px;
  display: flex;
  gap: 8px;
  opacity: 0px;
`;

S.AnswerProfileId = styled.text`
  height: 18px;
  gap: 0px;
  opacity: 0px;
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
  opacity: 0px;
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
