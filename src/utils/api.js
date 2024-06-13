const API_BASE_URL = 'https://openmind-api.vercel.app';
const GENERATION = '7';
const TEAM = '8';
const DEFAULT_ID = 'defaultid';

export async function getAnswers({ id = DEFAULT_ID }) {
  const response = await fetch(
    `${API_BASE_URL}/${GENERATION}-${TEAM}/${DEFAULT_ID}`
  );
  if (!response.ok) {
    throw new Error('답변을 불러오는데 실패했습니다');
  }
  const body = await response.json();
  return body;
}
