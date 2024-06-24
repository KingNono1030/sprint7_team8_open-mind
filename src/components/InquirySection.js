import { useState } from 'react';
import { theme } from '../utils/theme';
import styled from 'styled-components';
import emptyImage from '../assets/Image-empty-inquiry.svg';
import messageIcon from '../assets/icon-message-brown.svg';
import Inquiry from './Inquiry';

export default function InquirySection({
  isAnswerPage = false,
  className = '',
  questionCount = 0,
  profile,
  feed = [],
  callBack,
}) {
  return (
    <S.InquiryContainer className={className}>
      <S.SectionHeader>
        <S.MessageIcon src={messageIcon} alt='질문창 메시지 아이콘' />
        <S.QuestionNumber>
          {questionCount > 0
            ? `${questionCount}개의 질문이 있습니다.`
            : `아직 질문이 없습니다.`}
        </S.QuestionNumber>
      </S.SectionHeader>
      {questionCount === 0 && (
        <S.imageContainer>
          <S.EmptyImage src={emptyImage} alt='질문 없을때 빈 상자 아이콘' />
        </S.imageContainer>
      )}
      <S.InqiryWrapper>
        {feed.map((question) => (
          <li key={question.id}>
            <Inquiry
              isAnswerPage={isAnswerPage}
              question={question}
              profile={profile}
              callBack={callBack}
            />
          </li>
        ))}
      </S.InqiryWrapper>
    </S.InquiryContainer>
  );
}

const S = {};

S.InquiryContainer = styled.div`
  max-width: 716px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  min-height: 330px;
  border: 1px solid ${theme.brownScale.brown20};
  border-radius: ${theme.rounded.md};
  background-color: ${theme.brownScale.brown10};
`;

S.SectionHeader = styled.div`
  display: flex;
  padding: 16px;
`;

S.MessageIcon = styled.img`
  width: 22px;
  height: 22px;
  margin-right: 8px;
`;

S.QuestionNumber = styled.span`
  font-family: ${theme.font.family.second};
  font-size: ${theme.font.size.md};
  line-height: ${theme.font.lineHeight.md};
  color: ${theme.brownScale.brown40};
`;

S.EmptyImage = styled.img`
  /* position: absolute; */
  top: 106px;
  width: 114px;
  height: 118px;
`;

S.InqiryWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 16px 16px 16px;
  gap: 16px;
`;

S.imageContainer = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;
