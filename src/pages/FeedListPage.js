import styled from 'styled-components';
import Logo from '../components/Logo';
import Button from '../components/Button';
import FeedsSection from '../components/FeedsSection';
import PaginationButtons from '../components/PaginationButtons';

export default function FeedListPage() {
  return (
    <S.Container>
      <S.Logo size='md' />
      <S.Button isDark={false} hasArrow={true}>
        답변하러 가기
      </S.Button>
      <S.FeedsSection />
      <PaginationButtons />
    </S.Container>
  );
}

const S = {};

S.Logo = styled(Logo)``;
S.Button = styled(Button)``;
S.FeedsSection = styled(FeedsSection)``;

S.Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 24px;

  & ${S.Logo} {
    margin-bottom: 20px;
  }
  & ${S.Button} {
    margin-bottom: 50px;
  }
  & ${S.FeedsSection} {
    margin-bottom: 30px;
  }
`;
