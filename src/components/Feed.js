import styled from 'styled-components';
import messageIcon from '../assets/icon-messages.svg';
import { theme } from '../utils/theme';
import Profile from './Profile';

export default function Feed() {
  return (
    <S.FeedContainer>
      <Profile />
      <S.Section>
        <S.FeedMessage>
          <S.MessagesIcon src={messageIcon} alt='피드 메시지 아이콘' />
          <S.Message>받은 질문</S.Message>
        </S.FeedMessage>
        <S.Message>9개</S.Message>
      </S.Section>
    </S.FeedContainer>
  );
}

const S = {};

S.FeedContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: ${theme.spacing.md};
  border: 1px solid ${theme.grayScale.gray40};
  border-radius: ${theme.rounded.md};
  gap: 30px;
`;

S.Section = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

S.FeedMessage = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4px;
`;

S.Message = styled.span`
  font-family: ${theme.font.family};
  font-size: ${theme.font.size.xs};
  font-weight: ${theme.font.weight.normal};
  color: ${theme.grayScale.gray40};
`;

S.MessagesIcon = styled.img`
  width: 16px;
  height: 16px;
`;
