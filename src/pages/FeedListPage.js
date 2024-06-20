import styled from 'styled-components';
import Logo from '../components/Logo';
import Button from '../components/Button';
import FeedsSection from '../components/FeedsSection';
import PaginationButtons from '../components/PaginationButtons';

export default function FeedListPage() {
  return (
    <S.Container>
      <S.ContainerHeader>
        <S.Logo size='md' />
        <S.Button isDark={false} hasArrow={true}>
          답변하러 가기
        </S.Button>
      </S.ContainerHeader>
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
  max-width: 1136px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 24px;

  & ${S.FeedsSection} {
    margin-bottom: 30px;
  }

  @media (min-width: 768px) {
    padding: 40px 32px;

    & ${S.FeedsSection} {
      margin-bottom: 60px;
    }
  }
`;

S.ContainerHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  & ${S.Logo} {
    margin-bottom: 20px;
  }
  & ${S.Button} {
    margin-bottom: 50px;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    padding: 0 16px;
    margin-bottom: 40px;

    & ${S.Logo} {
      margin-bottom: 0;
    }
    & ${S.Button} {
      margin-bottom: 0;
    }
  }
`;
