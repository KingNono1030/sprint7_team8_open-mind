import styled, { css } from 'styled-components';
import { theme } from '../utils/theme';
import copyLinkIcon from '../assets/icon-link.svg';
import kakaoIcon from '../assets/icon-kakaotalk.svg';
import facebookIcon from '../assets/icon-facebook.svg';

export default function ShareList() {
  return (
    <ShareListContainer>
      {buttons.map((button) => {
        return (
          <ShareBtn backgroundColor={button.backgroundColor}>
            <ShareIcon
              src={button.btnIcon}
              btnIconColor={button.btnIconColor}
            />
          </ShareBtn>
        );
      })}
    </ShareListContainer>
  );
}

const FLEX_CENTER = css`
  display: flex;
  align-items: center;
`;

const ShareListContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 144px;
  height: 40px;
  gap: 12px;
`;

const ShareBtn = styled.button`
  ${FLEX_CENTER}
  position: relative;
  width: 40px;
  height: 40px;
  padding: 12px 16px;
  gap: 8px;
  border: none;
  border-radius: 200px;
  background-color: ${({ backgroundColor }) => backgroundColor};
  cursor: pointer;
`;

const ShareIcon = styled.img`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 16.5px;
  height: 15px;
  filter: ${({ btnIconColor }) =>
    `invert(${btnIconColor === theme.grayScale.gray10 ? 1 : 0})`};
`;

const buttons = [
  {
    backgroundColor: theme.brownScale.brown40,
    btnIcon: copyLinkIcon,
    btnIconColor: theme.grayScale.gray10,
  },
  {
    backgroundColor: theme.colors.yellow50,
    btnIcon: kakaoIcon,
    btnIconColor: theme.grayScale.gray60,
  },
  {
    backgroundColor: theme.colors.blue50,
    btnIcon: facebookIcon,
    btnIconColor: theme.grayScale.gray10,
  },
];
