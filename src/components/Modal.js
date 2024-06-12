import React, { useState } from "react";

function Modal() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {isModalOpen && (
        <div>
          <div className="modalHeader">
            <div className="modalLeft">
              <img src="src/assets/icon-messages.svg" />
              <label htmlFor="Question">질문을 작성하세요</label>
            </div>
            <button onClick={closeModal}>
              <img src="src/assets/icon-close.svg" alt="모달창 종료" />
            </button>
          </div>
          <div className="userInfo">
            <div>To.</div>
            <img src="src/assets/user-avatar.svg" alt="프로필사진" />
            {/* 예제 사용자 아바타 */}
            <div>아초는 고양이</div>
          </div>
          <form>{/* 질문내용 작성 폼 */}</form>
        </div>
      )}
    </>
  );
}

export default Modal;
