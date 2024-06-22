import styled from 'styled-components';
import Logo from '../components/Logo';
import Button from '../components/Button';
import FeedsSection from '../components/FeedsSection';
import PaginationButtons from '../components/PaginationButtons';
import { useState, useEffect } from 'react';
import { getFeedList } from '../utils/api';
import useAsync from '../hooks/useAsync';
import useMediaQuery from '../hooks/useMediaQuery';

export default function FeedListPage() {
  const [deviceType, isInitialized] = useMediaQuery();
  const [feeds, setFeeds] = useState([]);
  const [offset, setOffset] = useState(0);
  const [order, setOrder] = useState('time');
  const [isLoading, feedError, getFeedListAsync] = useAsync(getFeedList);

  const handleOption = (value) => {
    const nextValue = value;
    setOrder((prevValue) => nextValue);
  };

  useEffect(() => {
    if (!isInitialized) return;
    const limit = deviceType === 'Target' ? 8 : 6;
    console.log(limit);
    const fetchData = async () => {
      const response = await getFeedListAsync({
        limit,
        offset,
        sort: order,
      });
      const { results } = response;
      setFeeds((prevFeed) => results);
    };
    fetchData();
  }, [order, deviceType]);
  return (
    <S.Container>
      <S.ContainerHeader>
        <S.Logo size='md' />
        <S.Button isDark={false} hasArrow={true}>
          답변하러 가기
        </S.Button>
      </S.ContainerHeader>
      <S.FeedsSection feeds={feeds} handleOption={handleOption} />
      {/* <PaginationButtons
        currentPage={currentPage}
        totalPages={totalPages}
        onPagination={handlePagination}
      /> */}
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
