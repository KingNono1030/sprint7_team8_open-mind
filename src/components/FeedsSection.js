import styled from 'styled-components';
import { theme } from '../utils/theme';
import Dropdown from './Dropdown';
import FeedList from './FeedList';
export default function FeedsSection({ className = '', feeds }) {
  return (
    <S.SectionContainer className={className}>
      <S.AskContainer>
        <S.AskQuestion>누구에게 질문할까요?</S.AskQuestion>
        <Dropdown />
      </S.AskContainer>
      <FeedList feeds={feeds} />
    </S.SectionContainer>
  );
}

const S = {};

S.SectionContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

S.AskContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;

  @media (min-width: 768px) {
    flex-direction: column;
    gap: 12px;
    margin-bottom: 30px;
  }
`;

S.AskQuestion = styled.h2`
  font-family: ${theme.font.family.second};
  font-size: ${theme.font.size.xl};
  font-weight: ${theme.font.weight.normal};
  line-height: ${theme.font.lineHeight.xl};
  color: ${theme.grayScale.gray60};

  @media (min-width: 768px) {
    font-size: 40px;
    line-height: 48px;
  }
`;
