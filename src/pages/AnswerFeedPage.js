import React from 'react';
import styled from 'styled-components';
import Logo from '../components/Logo';
import Banner from '../components/Banner';
import Profile from '../components/Profile';
import ShareList from '../components/ShareList';
import InquirySection from '../components/InquirySection';
import AnswerForm from '../components/AnswerForm';
import Button from '../components/Button';

export default function AnswerFeedPage() {
  return (
    <S.PageContainer>
      <S.Logo size='sm' />
      <Banner page='other' />
      <S.ProfileShare>
        <Profile page='xl' />
        <ShareList />
      </S.ProfileShare>
      <S.ButtonContainer>
        <S.Button variant='floating'>삭제하기</S.Button>
      </S.ButtonContainer>
      <S.InquirySection>
        <S.AnswerForm placeholder="답변을 입력해주세요" />
      </S.InquirySection>
    </S.PageContainer>
  );
}

const S = {};

S.PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

S.Logo = styled(Logo)`
`;

S.ProfileShare = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  gap: 12px;
  margin-bottom: 50px;
`;

S.ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  max-width: 716px;
  width: 100%;
  margin-bottom: 10px
`;

S.Button = styled(Button)`
  font-size: 10px;
  width: 85px;
  height: 25px;
`;

S.InquirySection = styled(InquirySection)`
  width: 100%;
  max-width: 716px;
  margin: 0 auto;
`;

S.AnswerForm = styled(AnswerForm)`
  width: 100%;
  max-width: 716px;
  margin: 0 auto;
`;
