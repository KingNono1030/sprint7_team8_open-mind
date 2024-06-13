const API_BASE_URL = 'https://openmind-api.vercel.app';
const TEAM = '7-8';

export async function createFeed(feedName = '') {
  const formData = {
    name: { feedName },
    team: { TEAM },
  };
  const response = await fetch(`${API_BASE_URL}/${TEAM}/subjects`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: formData,
  });
  if (!response.ok) {
    throw new Error('피드를 생성하는데 실패했습니다');
  }
  const body = await response.json();
  return body;
}

export async function createQuestions(formData) {
  const { subjectId } = formData;
  const response = await fetch(
    `${API_BASE_URL}/${TEAM}/subjects/${subjectId}/questions`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: formData,
    }
  );
  if (!response.ok) {
    throw new Error('질문을 생성하는데 실패했습니다');
  }
  const body = await response.json();
  return body;
}

export async function createReaction(questionId = '', formData) {
  const response = await fetch(
    `${API_BASE_URL}/${TEAM}/questions/${questionId}/reaction`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: formData,
    }
  );
  if (!response.ok) {
    throw new Error('반응을 보내는데 실패했습니다');
  }
  const body = await response.json();
  return body;
}

export async function createAnswers(formData) {
  const { questionId } = formData;
  const response = await fetch(
    `${API_BASE_URL}/${TEAM}/questions/${questionId}/answers`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: formData,
    }
  );
  if (!response.ok) {
    throw new Error('답변을 생성하는데 실패했습니다');
  }
  const body = await response.json();
  return body;
}

export async function getFeedList({ limit = 0, offset = 0 }) {
  const response = await fetch(
    `${API_BASE_URL}/${TEAM}/subjects/?limit=${limit}&offset=${offset}`
  );
  if (!response.ok) {
    throw new Error('피드 리스트를 불러오는데 실패했습니다');
  }
  const body = await response.json();
  return body;
}

export async function getFeed(subjectId = '') {
  const response = await fetch(`${API_BASE_URL}/${TEAM}/subjects/${subjectId}`);
  if (!response.ok) {
    throw new Error('피드를 불러오는데 실패했습니다');
  }
  const body = await response.json();
  return body;
}

export async function getQuestionList({
  subjectId = '',
  limit = 0,
  offset = 0,
}) {
  const response = await fetch(
    `${API_BASE_URL}/${TEAM}/subjects/${subjectId}/questions/?limit=${limit}&offset=${offset}`
  );
  if (!response.ok) {
    throw new Error('질문 리스트를 불러오는데 실패했습니다');
  }
  const body = await response.json();
  return body;
}

export async function getQuestion(questionId = '') {
  const response = await fetch(
    `${API_BASE_URL}/${TEAM}/questions/${questionId}`
  );
  if (!response.ok) {
    throw new Error('질문을 불러오는데 실패했습니다');
  }
  const body = await response.json();
  return body;
}

export async function getAnswer(answerId = '') {
  const response = await fetch(`${API_BASE_URL}/${TEAM}/${answerId}`);
  if (!response.ok) {
    throw new Error('답변을 불러오는데 실패했습니다');
  }
  const body = await response.json();
  return body;
}

export async function deleteFeed(subjectId = '') {
  const response = await fetch(
    `${API_BASE_URL}/${TEAM}/subjects/${subjectId}`,
    {
      method: 'DELETE',
    }
  );
  if (!response.ok) {
    throw new Error('피드를 삭제하는데 실패했습니다');
  }
  const body = await response.json();
  return body;
}

export async function deleteQuestion(questionId = '') {
  const response = await fetch(
    `${API_BASE_URL}/${TEAM}/questions/${questionId}`,
    {
      method: 'DELETE',
    }
  );
  if (!response.ok) {
    throw new Error('질문을 삭제하는데 실패했습니다');
  }
  const body = await response.json();
  return body;
}

export async function deleteAnswer(answerId = '') {
  const response = await fetch(`${API_BASE_URL}/${TEAM}/answers/${answerId}`, {
    method: 'DELETE',
  });
  if (!response.ok) {
    throw new Error('답변을 삭제하는데 실패했습니다');
  }
  const body = await response.json();
  return body;
}

export async function updateAnswer(answerId = '', formData) {
  const response = await fetch(`${API_BASE_URL}/${TEAM}/answers/${answerId}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: formData,
  });
  if (!response.ok) {
    throw new Error('답변을 업데이트하는데 실패했습니다');
  }
  const body = await response.json();
  return body;
}

export async function patchAnswer(answerId = '', formData) {
  const response = await fetch(`${API_BASE_URL}/${TEAM}/answers/${answerId}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: formData,
  });
  if (!response.ok) {
    throw new Error('답변을 부분적으로 업데이트하는데 실패했습니다');
  }
  const body = await response.json();
  return body;
}
