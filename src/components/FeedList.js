import styled from 'styled-components';
import Feed from './Feed';

export default function FeedList({ feeds }) {
  return (
    <S.GridContainer>
      {feeds.map((feed) => (
        <Feed
          key={feed.id}
          profileImg={feed.imageSource}
          nickname={feed.name}
          questionCount={feed.questionCount}
        />
      ))}
    </S.GridContainer>
  );
}

const S = {};

S.GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
  }

  @media (min-width: 868px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;
