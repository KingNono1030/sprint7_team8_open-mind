import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { useForm } from '../hooks/useForm';
import { createFeed } from '../utils/api';
import useAsync from '../hooks/useAsync';
import Logo from '../components/Logo';
import Form from '../components/Form';
import personIcon from '../assets/icon-person.svg';
import QuestionBtn from '../components/Button';
import Banner from '../components/Banner';
import { useNavigate } from 'react-router-dom';

const PLACEHOLDER = '이름을 입력하세요';

export default function LandingPage() {
  const navigate = useNavigate();
  const { value, handleChange, handleSubmit } = useForm('');
  const hasValue = !!value;
  const [, postError, creatFeedAsync] = useAsync(createFeed);
  const fetchData = async (value) => {
    const result = await creatFeedAsync(value);
    const { id } = await result;
    localStorage.setItem('postId', id);
    navigate(`/post/${id}`);
  };
  const handleSubmitAsync = handleSubmit(fetchData);

  return (
    <>
      <S.LandingContainer>
        <S.LogoContainer>
          <S.Logo size='lg' />
        </S.LogoContainer>
        <S.AskQuestionBtnContainer>
          <S.Link to='/list'>
            <S.AskQuestionBtn hasArrow>질문하러 가기</S.AskQuestionBtn>
          </S.Link>
        </S.AskQuestionBtnContainer>
        <S.FormContainer>
          <S.Form
            id='landing'
            value={value}
            handleChange={handleChange}
            handleSubmit={handleSubmitAsync}
            placeholder={PLACEHOLDER}
            showIcon
            iconInstance={personIcon}
          ></S.Form>
          <S.ReceiveQuestionBtn
            isActive={hasValue}
            form='landing'
            type='submit'
            isDark
            variant='fullWidth'
          >
            질문 받기
          </S.ReceiveQuestionBtn>
        </S.FormContainer>
      </S.LandingContainer>
      <Banner page='main' />
    </>
  );
}

const S = {};

S.LandingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;

  @media screen and (min-width: 768px) {
    margin: 0 50px;
  }
  @media screen and (min-width: 1200px) {
    margin: 0 130px;
  }
`;

S.LogoContainer = styled.div`
  position: absolute;
  top: 80px;

  @media screen and (min-width: 768px) {
    top: 160px;
  }
`;

S.Logo = styled(Logo)`
  @media screen and (min-width: 768px) {
    width: 456px;
    height: 180px;
  }
`;

S.AskQuestionBtnContainer = styled.div`
  position: absolute;
  top: 202px;

  @media screen and (min-width: 768px) {
    top: 44px;
    right: 0;
  }
  @media screen and (min-width: 1200px) {
    top: 45px;
    right: 0;
  }
`;

S.AskQuestionBtn = styled(QuestionBtn)`
  width: 123px;
  height: 34px;

  @media screen and (min-width: 768px) {
    width: 161px;
    height: 46px;
    padding: 12px 24px;
    gap: 8px;
    font-size: ${({ theme }) => theme.font.size.sm};
    line-height: ${({ theme }) => theme.font.lineHeight.sm};
  }
`;

S.Link = styled(Link)`
  text-decoration: none;
`;

S.FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 260px;
  padding: 24px;
  gap: 16px;
  border-radius: ${({ theme }) => theme.rounded.md};
  background-color: ${({ theme }) => theme.grayScale.gray10};
  @media screen and (min-width: 768px) {
    width: 400px;
    top: 364px;
    padding: 32px;
  }
`;

S.Form = styled(Form)`
  height: 46px;
  border-radius: ${({ theme }) => theme.rounded.sm};

  @media screen and (min-width: 768px) {
    width: 100%;
  }
`;

S.ReceiveQuestionBtn = styled(QuestionBtn)`
  gap: 8px;
`;
