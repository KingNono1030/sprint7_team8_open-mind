import Logo from '../components/Logo';
import Banner from '../components/Banner';
import Profile from '../components/Profile';
import ShareList from '../components/ShareList';
import InquirySection from '../components/InquirySection';
import Button from '../components/Button';
import Modal from '../components/Modal';
import styled from 'styled-components';
import { useState } from 'react';

export default function QuestionFeedPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <S.PageContainer>
        <S.Logo size='sm' />
        <Banner page='other' />
        <S.profileshare>
          <Profile page='xl' />
          <ShareList />
        </S.profileshare>
        <S.InquirySection />
      </S.PageContainer>
      <S.ButtonContainer>
        <S.Button variant='floating' onClick={openModal}>
          질문 작성<S.Do>하기</S.Do>
        </S.Button>
      </S.ButtonContainer>
      {isModalOpen && <Modal onClose={closeModal} />}
    </>
  );
}

const S = {};

S.PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 24px 48px 24px;
`;

S.Logo = styled(Logo)`
  margin-bottom: 12px;
`;

S.profileshare = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 54px;
  gap: 12px;
`;

S.InquirySection = styled(InquirySection)`
  width: 100%;
`;

S.Button = styled(Button)`
  padding: 14.5px 24px;
`;

S.ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 0 24px 24px 0;
`;
