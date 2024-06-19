import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Logo from '../components/Logo';
import Form from '../components/form';
import personIcon from '../assets/icon-person.svg';
import QuestionBtn from '../components/Button';
import Banner from '../components/Banner';

export default function LandingPage() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const getLogoSize = () => {
    if (windowWidth >= 768) {
      return 'xl';
    } else {
      return 'lg';
    }
  };

  return (
    <>
      <S.LandingContainer>
        <S.LogoContainer>
          <Logo size={getLogoSize()} />
        </S.LogoContainer>
        <S.AskQuestionBtn>
          <S.Link to='/list'>
            <QuestionBtn isDark={false} hasArrow={true} isArrowRight={true}>
              질문하러 가기
            </QuestionBtn>
          </S.Link>
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

  @media screen and (min-width: 768px) {
    top: 160px;
  }
`;

S.AskQuestionBtn = styled.div`
  position: absolute;
  top: 202px;
  text-decoration: none;

  @media screen and (min-width: 768px) {
    top: 44px;
    left: 557px;
  }

  @media screen and (min-width: 1200px) {
    top: 45px;
    left: 909px;
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
  margin: 0 auto;
  padding: 24px;
  gap: 16px;
  border-radius: 16px;

  @media screen and (min-width: 768px) {
    width: 336px;
    top: 364px;
  }
`;
