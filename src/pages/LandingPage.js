import Logo from '../components/Logo';
import Form from '../components/form';
// import AskQuestionBtn from '../components/FullWidthButton';
// import ReceiveQuestionBtn from '../components/FullWidthButton';
import Banner from '../components/Banner';
import { theme } from '../utils/theme';
import '../styles/ResetStyles';
import styled, { css } from 'styled-components';
import personIcon from '../assets/icon-person.svg';

export default function LandingPage() {
  return (
    <>
      <S.LandingContainer>
        <S.LogoContainer>
          <Logo size='lg' />
        </S.LogoContainer>
        <S.AskQuestionBtn>질문하러 가기→</S.AskQuestionBtn>
        <S.FormContainer>
          <Form
            placeholder='이름을 입력하세요.'
            showIcon={true}
            iconInstance={personIcon}
            useTextarea={false}
          />
          <S.ReceiveQuestionBtn>질문 받기</S.ReceiveQuestionBtn>
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

// 버튼 컴포넌트 적용 전 임시 스타일 지정
S.AskQuestionBtn = styled.button`
  width: 123px;
  height: 34px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 202px;
  gap: 4px;
  padding: 8px 12px;
  border-radius: 9px;
  border: 1px solid ${theme.brownScale.brown40};
  font-size: ${theme.font.size.xs};
  font-family: ${theme.font.family};
  line-height: ${theme.font.lineHeight.xs};
  color: ${theme.brownScale.brown40};
  background-color: color: ${theme.brownScale.brown10};
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

// FullWidthButton 컴포넌트 적용 전 임시 스타일
S.ReceiveQuestionBtn = styled.button`
  border-radius: 8px;
  gap: 8px;
  padding: 12px 24px;
  color: ${theme.grayScale.gray10};
  background-color: ${theme.brownScale.brown40};
  border: none;
`;
