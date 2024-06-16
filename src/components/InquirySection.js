import { useState } from 'react';
import styled from 'styled-components';
import emptyImage from '../assets/Image-empty-inquiry.svg';
import messageIcon from '../assets/icon-message-brown.svg';
import { theme } from '../utils/theme';

export default function InquirySection() {
  const [questionCount, setQuestionCount] = useState(3);

  return (
    <S.InquiryWrapper>
      <S.SectionHeader>
        <S.MessageIcon src={messageIcon} alt='질문창 메시지 아이콘' />
        <span>
          {questionCount > 0
            ? `${questionCount}개의 질문이 있습니다.`
            : `아직 질문이 없습니다.`}
        </span>
      </S.SectionHeader>
      {questionCount === 0 && (
        <S.EmptyImage src={emptyImage} alt='질문 없을때 빈 상자 아이콘' />
      )}
    </S.InquiryWrapper>
  );
}

const S = {};

S.InquiryWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 327px;
  height: 500px;
  border: 1px solid ${theme.brownScale.brown20};
  border-radius: ${theme.rounded.md};
`;

S.SectionHeader = styled.div`
  display: flex;
  justify-content: center;
  padding: 16px;
`;

S.MessageIcon = styled.img`
  width: 22px;
  height: 22px;
  padding: 1px 8px 1px 0;
`;

S.EmptyImage = styled.img`
  width: 150px;
  height: 154px;
`;
