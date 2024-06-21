import { useState } from 'react';
import styled from 'styled-components';
import Logo from '../components/Logo';
import Banner from '../components/Banner';
import Profile from '../components/Profile';
import ShareList from '../components/ShareList';
import InquirySection from '../components/InquirySection';
import Button from '../components/Button';
import Modal from '../components/Modal';
import { useParams } from 'react-router-dom';

const PROFILE_EXAMPLE = {
  id: 6743,
  name: '첫 주제에요',
  imageSource:
    'https://fastly.picsum.photos/id/913/200/200.jpg?hmac=MQWqYyJuxoagkUNdhY5lwuKw7QwcqzMEm4otshKpUWQ',
  questionCount: 2,
  createdAt: '2024-06-13T08:58:23.533960Z',
};

const FEED_EXAMPLE = [
  {
    id: 11784,
    subjectId: 6743,
    content: '와우 당신은 어찌 그렇게 똑똑합니까',
    like: 6,
    dislike: 2147483647,
    createdAt: '2024-06-13T09:02:20.912030Z',
    answer: {
      id: 5511,
      questionId: 11784,
      content: '껄껄 나도 몰라요!',
      isRejected: false,
      createdAt: '2024-06-13T09:10:04.416221Z',
    },
  },
  {
    id: 11783,
    subjectId: 6743,
    content: '와우 당신은 어찌 그렇게 똑똑합니까',
    like: 5,
    dislike: 2147483647,
    createdAt: '2024-06-13T09:01:36.042663Z',
    answer: null,
  },
];

export default function QuestionFeedPage() {
  const [profile, setProfile] = useState(PROFILE_EXAMPLE);
  const [feed, setFeed] = useState(FEED_EXAMPLE);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const { postId } = useParams();
  console.log(profile);
  console.log(feed);
  const { name, imageSource, questionCount } = profile;
  return (
    <>
      <S.PageContainer>
        <S.Logo size='sm' />
        <Banner page='other' />
        <S.profileshare>
          <Profile page='xl' name={name} imageSource={imageSource} />
          <ShareList />
        </S.profileshare>
        <S.InquirySection
          profile={profile}
          questionCount={questionCount}
          feed={feed}
        />
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

S.Do = styled.span``;
