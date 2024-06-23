import styled, { css } from 'styled-components';
import banner from '../assets/image-banner.svg';

export default function Banner({ page }) {
  return (
    <S.BannerContainer $page={page}>
      <S.BannerImg src={banner} $page={page} alt='Banner Image' />
    </S.BannerContainer>
  );
}

const S = {};

const LOCATION = {
  main: { bottom: '0' },
  other: { top: '0', height: 177 },
};

S.BannerContainer = styled.div`
  width: 100%;
  position: absolute;
  text-align: center;
  left: 50%;
  transform: translateX(-50%);
  z-index: -1;
  overflow: hidden;

  ${({ $page }) => css`
    ${LOCATION[$page] || LOCATION.other}
  `}
`;

S.BannerImg = styled.img`
  max-width: 100%;

  ${({ $page }) =>
    $page === 'main' &&
    css`
      position: relative;
      bottom: -5px;
    `}

  ${({ $page }) =>
    $page !== 'main' &&
    css`
      position: absolute;
      bottom: 80px;
      transform: translateX(-50%) translateY(40%);
    `}
`;
