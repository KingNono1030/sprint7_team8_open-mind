import styled from 'styled-components';
import Feed from './Feed';

export default function FeedList() {
  const feeds = [
    { id: 1, title: '아초는고양이', content: '받은 질문 9개' },
    { id: 2, title: '아초는고양이', content: '받은 질문 9개' },
    { id: 3, title: '아초는고양이', content: '받은 질문 9개' },
    { id: 4, title: '아초는고양이', content: '받은 질문 9개' },
    { id: 5, title: '아초는고양이', content: '받은 질문 9개' },
    { id: 6, title: '아초는고양이', content: '받은 질문 9개' },
  ];

  return (
    <S.GridContainer>
      {feeds.map((item) => (
        <Feed key={item.id} title={item.title} content={item.content} />
      ))}
    </S.GridContainer>
  );
}

const S = {};

S.GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
`;
