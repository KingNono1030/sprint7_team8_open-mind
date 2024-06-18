import Logo from '../components/Logo';
import Form from '../components/form';
import QuestionBtn from '../components/Button';
import Banner from '../components/Banner';
import '../styles/GlobalStyles';
import styled, { css } from 'styled-components';
import GlobalStyles from '../styles/GlobalStyles';
import personIcon from '../assets/icon-person.svg';

export default function LandingPage() {
  return (
    <>
      <S.LandingContainer>
        <S.LogoContainer>
          <Logo size='lg' />
        </S.LogoContainer>
        <S.AskQuestionBtn>
          <QuestionBtn isDark={false} hasArrow={true} isArrowRight={true}>
            질문하러 가기
          </QuestionBtn>
        </S.AskQuestionBtn>
        <S.FormContainer>
          <Form
            placeholder='이름을 입력하세요.'
            showIcon={true}
            iconInstance={personIcon}
            useTextarea={false}
          />
          <QuestionBtn variant='fullWidth'>질문 받기</QuestionBtn>
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
`;

S.LogoContainer = styled.div`
  position: absolute;
  top: 80px;
`;

S.AskQuestionBtn = styled.div`
  position: absolute;
  top: 202px;
`;

S.FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 260px;
  margin: 0 auto;
  padding: 24px;
  gap: 16px;
  border-radius: 16px;
`;
