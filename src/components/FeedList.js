import styled from 'styled-components';
import Feed from './Feed';
import { Link } from 'react-router-dom';

export default function FeedList({ feeds }) {
  return (
    <S.GridContainer>
      {feeds.map(({ id, imageSource, name, questionCount }) => (
        <li key={id}>
          <Link to={`/post/${id}`}>
            <Feed
              imageSource={imageSource}
              name={name}
              questionCount={questionCount}
            />
          </Link>
        </li>
      ))}
    </S.GridContainer>
  );
}

const S = {};

S.GridContainer = styled.ul`
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
