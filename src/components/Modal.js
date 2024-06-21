import { useRef } from 'react';
import styled from 'styled-components';
import QuestionForm from './QuestionForm';
import Button from './Button';
import closeIcon from '../assets/icon-close.svg';
import messageIcon from '../assets/icon-messages.svg';
import profileIcon from '../assets/image-default-profile.svg';

export default function Modal({ onClose }) {
  const outside = useRef();

  const handleWrapperClick = (e) => {
    if (outside.current && !outside.current.contains(e.target)) {
      onClose();
    }
  };

  return (
    <S.ModalWrapper onClick={handleWrapperClick}>
      <S.ModalContainer ref={outside}>
        <S.ModalHeader>
          <S.Message>
            <S.MessageIcon src={messageIcon} />
            <S.Question>질문을 작성하세요</S.Question>
          </S.Message>
          <S.CloseIcon src={closeIcon} onClick={onClose} />
        </S.ModalHeader>
        <S.RecieverContainer>
          <S.ProfleContainer>
            <span>To.</span>
            <S.ProfileIcon src={profileIcon} />
            <span>아초는고양이</span>
          </S.ProfleContainer>
          <S.FormContainer>
            <S.QuestionForm />
            <S.Button>질문 보내기</S.Button>
          </S.FormContainer>
        </S.RecieverContainer>
      </S.ModalContainer>
    </S.ModalWrapper>
  );
}

const S = {};

S.ModalWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.56);
`;

S.ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 327px;
  height: 568px;
  padding: 24px;
  border-radius: ${({ theme }) => theme.rounded.lg};
  background-color: ${({ theme }) => theme.grayScale.gray10};
  gap: 40px;

  @media screen and (min-width: 768px) {
    width: 612px;
    height: 454px;
    padding: 40px 40px 70px 40px;
  }
`;

S.ModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

S.Message = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

S.Question = styled.span`
  font-family: ${({ theme }) => theme.font.family.second};
  font-size: ${({ theme }) => theme.font.size.lg};
  line-height: ${({ theme }) => theme.font.lineHeight.lg};
  color: ${({ theme }) => theme.grayScale.gray60};
`;

S.RecieverContainer = styled.div`
  width: 100%;
`;

S.ProfleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  margin-bottom: 12px;

  span {
    font-size: ${({ theme }) => theme.font.size.sm};
    line-height: ${({ theme }) => theme.font.lineHeight.sm};
    color: ${({ theme }) => theme.grayScale.gray60};
  }
`;

S.FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

S.Button = styled(Button)`
  font-size: ${({ theme }) => theme.font.size.sm};
  padding: 12px;
  height: 46px;
`;

S.QuestionForm = styled(QuestionForm)`
  height: 358px;

  @media screen and (min-width: 768px) {
    height: 180px;
  }
`;

S.MessageIcon = styled.img`
  width: 28px;
  height: 28px;
`;

S.CloseIcon = styled.img`
  width: 22px;
  height: 22px;
`;

S.ProfileIcon = styled.img`
  width: 28px;
  height: 28px;
`;
