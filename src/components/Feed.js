import styled from 'styled-components';
import profileImage from '../assets/image-profile.svg';
import messageIcon from '../assets/icon-messages.svg';
import { theme } from '../utils/theme';

export default function Feed() {
  return (
    <BoxContainer>
      <Section>
        <StyledProfileImage src={profileImage} alt='피드 프로필' />
        <StyledMessage>아초는고양이</StyledMessage>
      </Section>
      <Section className='message'>
        <FeedMessage>
          <StyledMessagesIcon src={messageIcon} alt='피드 메시지 아이콘' />
          <StyledMessage className='receivedQuestion'>받은 질문</StyledMessage>
        </FeedMessage>
        <StyledMessage>9개</StyledMessage>
      </Section>
    </BoxContainer>
  );
}

const BoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 155.5px;
  height: 168px;
  padding: ${theme.spacing.md};
  border: 1px solid ${theme.grayScale.gray40};
  border-radius: ${theme.rounded.md};
  gap: 30px;
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  //width: 123.5px;
  &.message {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

const FeedMessage = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1px;
`;

const StyledProfileImage = styled.img`
  width: 48px;
  height: 48px;
  margin-bottom: ${theme.spacing.sm};
`;

const StyledMessage = styled.p`
  margin: 0;
  padding: 0;
  font-family: ${theme.font.family};
  font-size: ${theme.font.size.xs};
  font-weight: ${theme.font.weight.normal};
  color: ${theme.grayScale.gray40};
`;

const StyledMessagesIcon = styled.img`
  width: 16px;
  height: 16px;
`;
