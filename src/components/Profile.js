import styled from 'styled-components';
import defaultProfileImg from '../assets/image-default-profile.svg';
import { theme } from '../utils/theme';

export default function Profile({
  page = 'lg',
  nickname = '아초는고양이',
  profileImg,
}) {
  return (
    <ProfileContainer page={page}>
      <ProfileImg
        page={page}
        alt='프로필 기본 이미지'
        src={profileImg || defaultProfileImg}
      />
      <ProfileNickname page={page}>{nickname}</ProfileNickname>
    </ProfileContainer>
  );
}

const PROFILE_CONTAINER_STYLE = {
  sm: {
    width: 115,
    height: 28,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 4,
  },
  md: {
    width: 122,
    height: 32,
  },
  lg: {
    width: 123.5,
    height: 84,
    flexDirection: 'column',
  },
  xl: {
    width: 125,
    height: 146,
    alignItems: 'center',
    flexDirection: 'column',
  },
};

const PROFILE_SIZES = {
  sm: {
    width: 28,
    fontSize: theme.font.size.sm,
    lineHeight: theme.font.lineHeight.sm,
  },
  md: {
    width: 32,
    fontSize: theme.font.size.xs,
    lineHeight: theme.font.lineHeight.xs,
  },
  lg: {
    width: 48,
    fontSize: theme.font.size.md,
    lineHeight: theme.font.lineHeight.md,
  },
  xl: {
    width: 104,
    fontSize: theme.font.size.xl,
    lineHeight: theme.font.lineHeight.xl,
  },
};

const getContainerStyle = (page) =>
  PROFILE_CONTAINER_STYLE[page] || PROFILE_CONTAINER_STYLE['lg'];
const getProfileSize = (page) => PROFILE_SIZES[page] || PROFILE_SIZES['lg'];

const ProfileContainer = styled.div`
  display: flex;
  gap: 12px;

  /* width: ${({ page }) => getContainerStyle(page).width}px;
  height: ${({ page }) => getContainerStyle(page).height}px; */
  flex-direction: ${({ page }) => getContainerStyle(page).flexDirection};
  align-items: ${({ page }) => getContainerStyle(page).alignItems};
  justify-content: ${({ page }) => getContainerStyle(page).justifyContent};
  /* gap: ${({ page }) => getContainerStyle(page).gap}px; */
`;

const ProfileImg = styled.img`
  width: ${({ page }) => getProfileSize(page).width}px;

  @media (min-width: 768px) {
    width: 60px;
  }
`;

const ProfileNickname = styled.span`
  font-size: ${({ page }) => getProfileSize(page).fontSize};
  line-height: ${({ page }) => getProfileSize(page).lineHeight};
  font-family: ${theme.font.family.primary};
  
  @media (min-width: 768px) {
    font-size: 20px;
    line-height: 25px;
  }
`;
