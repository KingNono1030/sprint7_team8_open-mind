import styled from "styled-components";
import profile from "../assets/image-profile.svg";
import messages from "../assets/icon-messages.svg";

export default function Feed() {
  return (
    <ul>
      <StyledProfile src={profile} alt="피드 프로필" />
      <li>아초는고양이</li>
      <StyledMessages src={messages} alt="피드 메시지 아이콘" />
      <li>받은 질문</li>
      <li>9개</li>
    </ul>
  );
}

const StyledProfile = styled.img`
  width: 48px;
  height: 48px;
`;

const StyledMessages = styled.img`
  width: 16px;
  height: 16px;
`;
