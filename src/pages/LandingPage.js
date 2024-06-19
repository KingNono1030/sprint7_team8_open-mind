import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import Logo from '../components/Logo';
import Form from '../components/form';
import personIcon from '../assets/icon-person.svg';
import QuestionBtn from '../components/Button';
import Banner from '../components/Banner';

export default function LandingPage() {
  return (
    <>
      <S.LandingContainer>
        <S.LogoContainer>
          <S.Logo size='lg' />
        </S.LogoContainer>
        <S.AskQuestionBtnContainer>
          <S.Link to='/list'>
            <S.AskQuestionBtn
              isDark={false}
              hasArrow={true}
              isArrowRight={true}
            >
              질문하러 가기
            </S.AskQuestionBtn>
          </S.Link>
        </S.AskQuestionBtnContainer>
        <S.FormContainer>
          <S.Form
            placeholder='이름을 입력하세요.'
            showIcon={true}
            iconInstance={personIcon}
            useTextarea={false}
          />
          <S.ReceiveQuestionBtn variant='fullWidth'>
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
