import styled from 'styled-components';
import { theme } from '../utils/theme';
import Dropdown from './Dropdown';
import FeedList from './FeedList';
export default function FeedsSection() {
  return (
    <S.SectionContainer>
      <S.AskContainer>
        <S.AskQuestion>누구에게 질문할까요?</S.AskQuestion>
        <Dropdown />
      </S.AskContainer>
      <FeedList />
    </S.SectionContainer>
  );
}

const S = {};

S.SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

S.AskContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: ${theme.spacing.md};
`;

S.AskQuestion = styled.h2`
  padding: 2px 42px 2px 0;
  font-family: ${theme.font.family};
  font-size: ${theme.font.size.xl};
  font-weight: ${theme.font.weight.normal};
  line-height: ${theme.font.lineHeight.xl};
  color: ${theme.grayScale.gray60};
`;
