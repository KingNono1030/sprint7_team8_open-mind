import React, { useState } from 'react';
import styled from 'styled-components';

const H2 = styled.h2`
  width: 532px;
  height: 30px;
  display: flex;
  justify-content: space-between;
`;
const H2L = styled(H2)`
  width: 219px;
`;
function Modal() {
  return (
    <>
      <H2>
        <H2L>
          <img src="src\assets\icon-messages.svg" />
          <span>질문을 작성해주세요</span>
        </H2L>
        <img src="src\assets\icon-close.svg" />
      </H2>
      <div className="Receiver">
        <text>To.</text>
        <img />
        <text>아초는고양이</text>
      </div>
      <form>{/*질문 내용 작성 폼 */}</form>
    </>
  );
}
export default Modal;
