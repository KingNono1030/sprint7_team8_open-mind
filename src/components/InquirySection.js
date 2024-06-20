import { useState } from 'react';
import { theme } from '../utils/theme';
import styled from 'styled-components';
import emptyImage from '../assets/Image-empty-inquiry.svg';
import messageIcon from '../assets/icon-message-brown.svg';
import Inquiry from './Inquiry';

export default function InquirySection({ className }) {
  const [questionCount, setQuestionCount] = useState(3);

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
        <S.EmptyImage src={emptyImage} alt='질문 없을때 빈 상자 아이콘' />
      )}
      <S.InqiryWrapper>
        <Inquiry />
        <Inquiry />
        <Inquiry />
      </S.InqiryWrapper>
    </S.InquiryContainer>
  );
}

const S = {};

S.InquiryContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
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
  padding: 1px 8px 1px 0;
`;

S.QuestionNumber = styled.span`
  font-family: ${theme.font.family};
  font-size: ${theme.font.size.md};
  line-height: ${theme.font.lineHeight.md};
  color: ${theme.brownScale.brown40};
`;

S.EmptyImage = styled.img`
  position: absolute;
  top: 106px;
  width: 114px;
  height: 118px;
`;

S.InqiryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 16px 16px 16px;
  gap: 16px;
`;
