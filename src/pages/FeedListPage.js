import styled from 'styled-components';
import Logo from '../components/Logo';
import Button from '../components/Button';
import FeedsSection from '../components/FeedsSection';
import PaginationButtons from '../components/PaginationButtons';
import { useState, useEffect } from 'react';
import { getFeedList } from '../utils/api';

export default function FeedListPage() {
  const [feeds, setFeeds] = useState([]);
  const [limit, setLimit] = useState(window.innerWidth >= 868 ? 8 : 6);
  const [offset, setOffset] = useState(0);
  const [order, setOrder] = useState('createdAt');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const fetchData = async () => {
    const data = await getFeedList({ limit: 1000, offset: 0 });
    const sortedData = sortFeeds(data.results, order);
    setFeeds(sortedData);
    setTotalPages(Math.ceil(sortedData.length / limit));
  };

  useEffect(() => {
    fetchData();
  }, [limit, order]);

  useEffect(() => {
    const handleResize = () => {
      const newLimit = window.innerWidth >= 868 ? 8 : 6;
      setLimit(newLimit);
    };
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const sortFeeds = (data, sortOrder) => {
    if (sortOrder === 'createdAt') {
      return data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    } else if (sortOrder === 'name') {
      return data.sort((a, b) => a.name.localeCompare(b.name));
    }
    return data;
  };

  const handlePagination = (page) => {
    setCurrentPage(page);
    setOffset((page - 1) * limit);
  };

  const currentFeeds = feeds.slice(offset, offset + limit);

  const handleOrderChange = (newOrder) => {
    setOrder(newOrder === '최신순' ? 'createdAt' : 'name');
    const sortedData = sortFeeds(feeds, newOrder);
    setFeeds(sortedData);
    setTotalPages(Math.ceil(sortedData.length / limit));
  };

  return (
    <S.Container>
      <S.ContainerHeader>
        <S.Logo size='md' />
        <S.Button isDark={false} hasArrow={true}>
          답변하러 가기
        </S.Button>
      </S.ContainerHeader>
      <S.FeedsSection
        feeds={currentFeeds}
        onOrderChange={handleOrderChange}
        limit={limit}
        offset={offset}
      />
      <PaginationButtons
        currentPage={currentPage}
        totalPages={totalPages}
        onPagination={handlePagination}
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
