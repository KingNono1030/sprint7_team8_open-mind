import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Logo from '../components/Logo';
import Banner from '../components/Banner';
import Profile from '../components/Profile';
import ShareList from '../components/ShareList';
import InquirySection from '../components/InquirySection';
import Button from '../components/Button';
import { useNavigate, useParams } from 'react-router-dom';
import useAsync from '../hooks/useAsync';
import {
  createAnswers,
  createQuestions,
  deleteFeed,
  getFeed,
  getQuestionList,
} from '../utils/api';
import { useForm } from '../hooks/useForm';

export default function QuestionFeedPage() {
  const navigate = useNavigate();
  const { postId } = useParams();
  const [profile, setProfile] = useState({});
  const [feed, setFeed] = useState([]);

  const [isLoading, feedError, getQuestionListAsync] =
    useAsync(getQuestionList);
  const [isLoading2, feedError2, getFeedAsync] = useAsync(getFeed);

  const { name, imageSource, questionCount } = profile;

  // post 요청
  const [isPostLoading, postError, createAnswersAsync] =
    useAsync(createAnswers);
  // delete 요청
  const [isDeleteLoading, deleteError, deleteFeedAsync] = useAsync(deleteFeed);
  const fetchData = async () => {
    const formData = postId;
    const result = await deleteFeedAsync(formData);
    navigate('/list');
  };
  // 페이지 로드
  useEffect(() => {
    const fetchData = async () => {
      const response = await getQuestionListAsync({
        subjectId: postId,
        limit: 99,
        offset: 0,
      });
      const { results } = response;
      setFeed((prevFeed) => results);

      const profileResponse = await getFeedAsync(postId);
      setProfile(profileResponse);
    };
    fetchData();
  }, [postId, isPostLoading]);
  return (
    <>
      <S.PageContainer>
        <S.Logo size='sm' />
        <Banner page='other' />
        <S.profileshare>
          <Profile page='xl' name={name} imageSource={imageSource} />
          <ShareList />
        </S.profileshare>
        <S.ButtonContainer>
          <S.Button onClick={fetchData} isDark variant='floating'>
            삭제하기
          </S.Button>
        </S.ButtonContainer>
        <S.InquirySection
          callBack={createAnswersAsync}
          isAnswerPage
          profile={profile}
          questionCount={questionCount}
          feed={feed}
        />
      </S.PageContainer>
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
  align-self: flex-end;
  display: flex;
  justify-content: flex-end;
  padding: 0 24px 24px 0;
`;

S.Do = styled.span``;
