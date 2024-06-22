import styled from 'styled-components';
import { ReactComponent as MessageIcon } from '../assets/icon-messages.svg';
import { theme } from '../utils/theme';
import Profile from './Profile';

export default function Feed({ imageSource, name, questionCount = 0 }) {
  return (
    <S.FeedContainer>
      <Profile imageSource={imageSource} name={name} />
      <S.Section>
        <S.FeedMessage>
          <S.MessageIcon />
          받은 질문
        </S.FeedMessage>
        {questionCount}개
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

  @media (min-width: 768px) {
    padding: 20px;
  }
`;

S.Section = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-size: ${theme.font.size.xs};
  font-weight: ${theme.font.weight.normal};
  line-height: 18px;
  color: ${theme.grayScale.gray40};

  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 22px;
  }
`;

S.FeedMessage = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4px;
`;

S.MessageIcon = styled(MessageIcon)`
  width: 16px;
  height: 16px;

  @media (min-width: 768px) {
    width: 18px;
    height: 18px;
  }
`;
