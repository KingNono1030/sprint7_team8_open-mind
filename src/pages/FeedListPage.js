import styled from 'styled-components';
import Logo from '../components/Logo';
import Button from '../components/Button';
import FeedsSection from '../components/FeedsSection';
import PaginationButtons from '../components/PaginationButtons';
import { useState, useEffect } from 'react';
import { getFeedList } from '../utils/api';
import useAsync from '../hooks/useAsync';
import useMediaQuery from '../hooks/useMediaQuery';
import { usePagination } from '../hooks/usePagination';

export default function FeedListPage() {
  const [feeds, setFeeds] = useState([]);
  const [feedCount, setFeedCount] = useState(0);
  const [offset, setOffset] = useState(0);
  const [limit, setLimit] = useState(6);
  const [order, setOrder] = useState('time');
  const [deviceType, isInitialized] = useMediaQuery();
  const [isLoading, feedError, getFeedListAsync] = useAsync(getFeedList);
  const { page, pages, onPagination, onPreviousPageIndex, onNextPageIndex } =
    usePagination(feedCount, limit);

  const handleOption = (value) => {
    const nextValue = value;
    setOrder((prevValue) => nextValue);
  };

  useEffect(() => {
    if (!isInitialized) return;
    const nextLimit = deviceType === 'Target' ? 8 : 6;
    setLimit((prevLimit) => nextLimit);
    console.log(nextLimit);
    console.log(page);
    setOffset((prevOffset) => (page - 1) * nextLimit);
    const fetchData = async () => {
      const response = await getFeedListAsync({
        limit,
        offset,
        sort: order,
      });
      const { count } = response;
      const { results } = response;
      setFeedCount((prevFeedCount) => count);
      setFeeds((prevFeed) => results);
    };
    fetchData();
  }, [order, deviceType, page]);
  return (
    <S.Container>
      <S.ContainerHeader>
        <S.Logo size='md' />
        <S.Button isDark={false} hasArrow={true}>
          답변하러 가기
        </S.Button>
      </S.ContainerHeader>
      <S.FeedsSection feeds={feeds} handleOption={handleOption} />
      <PaginationButtons
        pages={pages}
        onPagination={onPagination}
        onPreviousPageIndex={onPreviousPageIndex}
        onNextPageIndex={onNextPageIndex}
      />
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
