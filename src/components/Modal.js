import React, { useState } from 'react';
import styled from 'styled-components';
import Profile from './Profile';
import CloseIcon from 'srcassetsicon-close.svg';
import MessageIcon from 'srcassetsicon-messages.svg';

function Modal() {
  return (
    <>
      <ModalHeader />
      <Receiver />
      <QuestionForm />
    </>
  );
}

function ModalHeader() {
  return (
    <>
      <ModalDescription />
      <button>
        <img src={CloseIcon} />
      </button>
    </>
  );
}
function Receiver() {
  return (
    <>
      <span>TO.</span>
      <Profile />
    </>
  );
}
function ModalDescription() {
  return (
    <>
      <img src={MessageIcon} />
      <span>질문을 작성하세요</span>
    </>
  );
}

/*
const FlexContainer = styled.div`
  width: 327px;
  height: 568px;
  top: 122px;
  left: 23px;
  gap: 0px;
  border-radius: 24px 0px 0px 0px;
  opacity: 0px;
`
*/

const ModalHeader = styled.div`
  width: Fixed (279px) px;
  height: Hug (28px) px;
  top: 146px;
  left: 47px;
  gap: 0px;
  justify: space-between;
  opacity: 0px;
`;

const ModalDescription = styled.div`
  width: 188px;
`;

const Receiver = styled.div`
  width: 142px;
  height: 28px;
  top: 214px;
  left: 47px;
  gap: 0px;
  opacity: 0px;
`;

const QuestionForm = styled.form`
  width: Fixed (279px) px;
  height: Hug (412px) px;
  top: 254px;
  left: 47px;
  gap: 8px;
  opacity: 0px;
`;

export default Modal;
