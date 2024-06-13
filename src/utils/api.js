const API_BASE_URL = 'https://openmind-api.vercel.app';
const TEAM = '7-8';

export async function createSubject(subjectName) {
  const FormData = {
    name: { subjectName },
    team: { TEAM },
  };
  const response = await fetch(`${API_BASE_URL}/${TEAM}/subjects`, {
    method: 'POST',
    body: FormData,
  });
  if (!response.ok) {
    throw new Error('피드를 생성하는데 실패했습니다');
  }
  const body = await response.json();
  return body;
}

export async function createQuestions(FormData) {
  const { subjectId } = FormData;
  const response = await fetch(
    `${API_BASE_URL}/${TEAM}/subjects/${subjectId}/questions`,
    {
      method: 'POST',
      body: FormData,
    }
  );
  if (!response.ok) {
    throw new Error('질문을 생성하는데 실패했습니다');
  }
  const body = await response.json();
  return body;
}

export async function createAnswers(FormData) {
  const { questionId } = FormData;
  const response = await fetch(
    `${API_BASE_URL}/${TEAM}/questions/${questionId}/answers`,
    {
      method: 'POST',
      body: FormData,
    }
  );
  if (!response.ok) {
    throw new Error('답변을 생성하는데 실패했습니다');
  }
  const body = await response.json();
  return body;
}

export async function createReaction(questionId, FormData) {
  const response = await fetch(
    `${API_BASE_URL}/${TEAM}/questions/${questionId}/reaction`,
    {
      method: 'POST',
      body: FormData,
    }
  );
  if (!response.ok) {
    throw new Error('반응을 보내는데 실패했습니다');
  }
  const body = await response.json();
  return body;
}

export async function getAnswers(id) {
  const response = await fetch(`${API_BASE_URL}/${TEAM}/${id}`);
  if (!response.ok) {
    throw new Error('답변을 불러오는데 실패했습니다');
  }
  const body = await response.json();
  return body;
}
