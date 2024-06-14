import styled from 'styled-components';
import FeedList from './FeedList';
import { theme } from '../utils/theme';

export default function FeedsSection() {
  return (
    <S.SectionContainer>
      <S.AskContainer>
        <S.AskQuestion>누구에게 질문할까요?</S.AskQuestion>
        <S.TestButton>드롭다운</S.TestButton>
      </S.AskContainer>
      <FeedList />
      <S.Pagenation>페이지네이션</S.Pagenation>
    </S.SectionContainer>
  );
}

const S = {};

S.SectionContainer = styled.div`
  width: 360px;
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
  margin: 0;
  padding: 2px 42px 2px 0;
  font-family: ${theme.font.family};
  font-size: ${theme.font.size.xl};
  font-weight: ${theme.font.weight.normal};
  color: ${theme.grayScale.gray60};
`;

S.TestButton = styled.div`
  padding-right: 24px;
`;

S.Pagenation = styled.div`
  width: 280px;
  height: 40px;
  margin-top: 7px;
  margin-left: 49px;
  background-color: red;
`;
