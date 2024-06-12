import styled from "styled-components";
import theme from "../utils/theme";
import defaultProfileImg from "../assets/image-default-profile.svg";

export default function Profile({ page }) {
  const ProfileContainer = styled.div``;

  const ProfileImg = styled.img``;

  const ProfileNickname = styled.span``;

  return (
    <ProfileContainer>
      <ProfileImg src={defaultProfileImg}></ProfileImg>
      <ProfileNickname></ProfileNickname>
    </ProfileContainer>
  );
}
