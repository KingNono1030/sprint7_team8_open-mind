import { useRef } from 'react';
import styled from 'styled-components';
import CloseIcon from '../assets/icon-close.svg';
import MessageIcon from '../assets/icon-messages.svg';

function Modal({ onClose }) {
  const outside = useRef();

  const handleWrapperClick = (e) => {
    if (outside.current && !outside.current.contains(e.target)) {
      onClose();
    }
  };

  return (
    <ModalWrapper onClick={handleWrapperClick}>
      <ModalContainer ref={outside}>
        <ModalHeader onClose={onClose} />
        <Receiver />
        <QuestionForm>
          <textarea placeholder='질문을 입력하세요' />
        </QuestionForm>
      </ModalContainer>
    </ModalWrapper>
  );
}

const ModalHeader = ({ onClose }) => (
  <HeaderContainer>
    <ModalDescription />
    <CloseButton onClick={onClose}>
      <Icon src={CloseIcon} alt='닫기 버튼' />
    </CloseButton>
  </HeaderContainer>
);

const Profile = () => <div>아초는고양이프로필컴포넌</div>;

const Receiver = () => (
  <ReceiverContainer>
    <span>TO.</span>
    <Profile />
  </ReceiverContainer>
);

const ModalDescription = () => (
  <DescriptionContainer>
    <Icon src={MessageIcon} alt='메세지 아이콘' />
    <span>질문을 입력해주세요</span>
  </DescriptionContainer>
);

const ModalWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.56);
`;

const Icon = styled.img`
  width: 22.75px;
  height: 22.75px;
`;

const CloseButton = styled.button`
  width: 28px;
  height: 28px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContainer = styled.div`
  height: 568px;
  gap: 20px;
  border-radius: 24px 0px 0px 0px;

  opacity: 1;
  background: var(--Grayscale-10, #ffffff);
  box-shadow: 0px 16px 20px 0px #3030309e;
  padding: 20px;
`;

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 279px;
  position: absolute;
  top: 146px;
  left: 47px;
`;

const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
`;

const ReceiverContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  position: absolute;
  top: 214px;
  left: 47px;
`;

const QuestionForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
  position: absolute;
  top: 254px;
  left: 47px;

  textarea {
    width: 279px;
    height: 150px;
    resize: none;
  }
`;

export default Modal;
