import styled, { css } from 'styled-components';
import banner from '../assets/image-banner.svg';

export default function Banner({ page }) {
  return (
    <BannerContainer page={page}>
      <BannerImg src={banner} page={page} alt='Banner Image' />
    </BannerContainer>
  );
}

const LOCATION = {
  main: { bottom: '0' },
  other: { top: '0', height: 177 },
};

const BannerContainer = styled.div`
  width: 100%;
  position: absolute;
  text-align: center;
  left: 50%;
  transform: translateX(-50%);
  z-index: -1;
  overflow: hidden;

  ${({ page }) => css`
    ${LOCATION[page] || LOCATION.other}
  `}
`;

const BannerImg = styled.img`
  max-width: 100%;

  ${({ page }) =>
    page !== 'main' &&
    `
        position: absolute;
        bottom: 80px;
        transform: translateX(-50%) translateY(50%);
      `}
`;
