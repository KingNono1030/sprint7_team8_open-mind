import { useState } from 'react';
import styled, { css } from 'styled-components';
import { theme } from '../utils/theme';
import copyLinkIcon from '../assets/icon-link.svg';
import kakaoIcon from '../assets/icon-kakaotalk.svg';
import facebookIcon from '../assets/icon-facebook.svg';
import Toast from './Toast';

export default function ShareList() {
  const [showToast, setShowToast] = useState(false);

  const handleButtonClick = async (id) => {
    if (id === 1) {
      try {
        await navigator.clipboard.writeText('지금 링크');
        setShowToast(true);
        setTimeout(() => {
          setShowToast(false);
        }, 5000);
      } catch (err) {
        console.error('링크복사 실패', err);
      }
    } else if (id === 2) {
      window.open(
        'https://accounts.kakao.com/login/?continue=https%3A%2F%2Fsharer.kakao.com%2Fpicker%2Flink%3Fapp_key%3D71ac456c3a6e18b27414740c282d9d81%26short_key%3D46ee0245-5aae-42f2-8acb-343ab5e65006#login',
        'kakaoShare',
        'width=600, height=600'
      );
    } else if (id === 3) {
      window.open(
        'https://www.facebook.com/login.php?skip_api_login=1&api_key=966242223397117&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fsharer%2Fsharer.php%3Fu%3Dhttps%253A%252F%252Fopenmind5-2.netlify.app%252Fpost%252F6963&cancel_url=https%3A%2F%2Fwww.facebook.com%2Fdialog%2Fclose_window%2F%3Fapp_id%3D966242223397117%26connect%3D0%23_%3D_&display=popup&locale=ko_KR',
        'facebookShare'
      );
    }
  };

  return (
    <>
      <ShareListContainer>
        {buttons.map((button) => {
          return (
            <ShareBtn
              key={button.id}
              $backgroundColor={button.backgroundColor}
              onClick={() => handleButtonClick(button.id)}
            >
              <ShareIcon
                src={button.btnIcon}
                $btnIconColor={button.btnIconColor}
              />
            </ShareBtn>
          );
        })}
      </ShareListContainer>
      {showToast && <Toast show={setShowToast} />}
    </>
  );
}

const FLEX_CENTER = css`
  display: flex;
  align-items: center;
`;

const ShareListContainer = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 144px;
  height: 40px;
  gap: 12px;
`;

const ShareBtn = styled.li`
  ${FLEX_CENTER}
  position: relative;
  width: 40px;
  height: 40px;
  padding: 12px 16px;
  gap: 8px;
  border: none;
  border-radius: 200px;
  background-color: ${({ $backgroundColor }) => $backgroundColor};
  cursor: pointer;
`;

const ShareIcon = styled.img`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 16.5px;
  height: 15px;
  filter: ${({ $btnIconColor }) =>
    `invert(${$btnIconColor === theme.grayScale.gray10 ? 1 : 0})`};
`;

const buttons = [
  {
    id: 1,
    backgroundColor: theme.brownScale.brown40,
    btnIcon: copyLinkIcon,
    btnIconColor: theme.grayScale.gray10,
  },
  {
    id: 2,
    backgroundColor: theme.colors.yellow50,
    btnIcon: kakaoIcon,
    btnIconColor: theme.grayScale.gray60,
  },
  {
    id: 3,
    backgroundColor: theme.colors.blue50,
    btnIcon: facebookIcon,
    btnIconColor: theme.grayScale.gray10,
  },
];
