import styled from 'styled-components';
import messageIcon from '../assets/icon-messages.svg';
import { theme } from '../utils/theme';
import Profile from './Profile';

export default function Feed({}) {
  return (
    <FeedContainer>
      <Profile />
      <Section>
        <FeedMessage>
          <StyledMessagesIcon src={messageIcon} alt='피드 메시지 아이콘' />
          <StyledMessage>받은 질문</StyledMessage>
        </FeedMessage>
        <StyledMessage>9개</StyledMessage>
      </Section>
    </FeedContainer>
  );
}

const FeedContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: ${theme.spacing.md};
  border: 1px solid ${theme.grayScale.gray40};
  border-radius: ${theme.rounded.md};
  gap: 30px;
`;

const Section = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const FeedMessage = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4px;
`;

const StyledMessage = styled.span`
  font-family: ${theme.font.family};
  font-size: ${theme.font.size.xs};
  font-weight: ${theme.font.weight.normal};
  color: ${theme.grayScale.gray40};
`;

const StyledMessagesIcon = styled.img`
  width: 16px;
  height: 16px;
`;
