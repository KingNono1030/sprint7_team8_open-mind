import styled from 'styled-components';
import profileImage from '../assets/image-profile.svg';
import messageIcon from '../assets/icon-messages.svg';

export default function Feed() {
  return (
    <div>
      <StyledProfileImage src={profileImage} alt='피드 프로필' />
      <h3>아초는고양이</h3>
      <StyledMessagesIcon src={messageIcon} alt='피드 메시지 아이콘' />
      <span>받은 질문</span>
      <span>9개</span>
    </div>
  );
}

const StyledProfileImage = styled.img`
  width: 48px;
  height: 48px;
`;

const StyledMessagesIcon = styled.img`
  width: 16px;
  height: 16px;
`;
