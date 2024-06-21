import styled, { css } from 'styled-components';
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

const PROFILE_CONTAINER_STYLE = {};
PROFILE_CONTAINER_STYLE.sm = css`
  width: 115px;
  height: 28px;
  justify-content: center;
  align-items: center;
  gap: 4px;
`;
PROFILE_CONTAINER_STYLE.md = css`
  width: 122px;
  height: 32px;
`;
PROFILE_CONTAINER_STYLE.lg = css`
  flex-direction: column;
`;
PROFILE_CONTAINER_STYLE.xl = css`
  width: 125px;
  height: 146px;
  align-items: center;
  flex-direction: column;
`;

const PROFILE_SIZES = {};
PROFILE_SIZES.sm = css`
  width: 28px;
  font-size: ${theme.font.size.sm};
  line-height: ${theme.font.lineHeight.sm};
`;
PROFILE_SIZES.md = css`
  width: 32px;
  font-size: ${theme.font.size.xs};
  line-height: ${theme.font.lineHeight.xs};
`;
PROFILE_SIZES.lg = css`
  width: 48px;
  font-size: ${theme.font.size.md};
  line-height: ${theme.font.lineHeight.md};

  @media (min-width: 768px) {
    width: 60px;
  }
`;
PROFILE_SIZES.xl = css`
  width: 104px;
  font-size: ${theme.font.size.xl};
  line-height: ${theme.font.lineHeight.xl};
`;

const PROFILE_FONTS = {};
PROFILE_FONTS.sm = css`
  font-size: ${theme.font.size.sm};
  line-height: ${theme.font.lineHeight.sm};
`;
PROFILE_FONTS.md = css`
  font-size: ${theme.font.size.xs};
  line-height: ${theme.font.lineHeight.xs};
`;
PROFILE_FONTS.lg = css`
  font-size: ${theme.font.size.md};
  line-height: ${theme.font.lineHeight.md};

  @media (min-width: 768px) {
    font-size: 20px;
    line-height: 25px;
  }
`;
PROFILE_FONTS.xl = css`
  font-size: ${theme.font.size.xl};
  line-height: ${theme.font.lineHeight.xl};
`;

const ProfileContainer = styled.div`
  display: flex;
  gap: 12px;
  ${({ page }) => PROFILE_CONTAINER_STYLE[page]}
`;

const ProfileImg = styled.img`
  ${({ page }) => PROFILE_SIZES[page]}
`;

const ProfileNickname = styled.span`
  ${({ page }) => PROFILE_FONTS[page]}
`;
