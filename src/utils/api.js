import env from '../config/env';
const { API_BASE_URL, TEAM } = env;

const apiRequest = async (endpoint, method = 'GET', body = null) => {
  const options = {
    method,
    headers: { 'Content-Type': 'application/json' },
  };
  if (body) {
    options.body = JSON.stringify(body);
  }

  const response = await fetch(`${API_BASE_URL}/${TEAM}/${endpoint}/`, options);
  if (!response.ok) {
    throw new Error(`${method} 요청에 실패했습니다: ${response.statusText}`);
  }

  return await response.json();
};

export async function createFeed(feedName = '') {
  const formData = {
    name: { feedName },
    team: { TEAM },
  };
  return await apiRequest('subjects', 'POST', formData);
}

export async function createQuestions(formData) {
  const { subjectId } = formData;
  return await apiRequest(`subjects/${subjectId}/questions`, 'POST', formData);
}

export async function createReaction(questionId = '', formData) {
  return await apiRequest(`questions/${questionId}/reaction`, 'POST', formData);
}

export async function createAnswers(formData) {
  const { questionId } = formData;
  return await apiRequest(`questions/${questionId}/answers`, 'POST', formData);
}

export async function getFeedList({ limit = 0, offset = 0 }) {
  return await apiRequest(`subjects/?limit=${limit}&offset=${offset}`, 'GET');
}

export async function getFeed(subjectId = '') {
  return await apiRequest(`subjects/${subjectId}`, 'GET');
}

export async function getQuestionList({
  subjectId = '',
  limit = 0,
  offset = 0,
}) {
  return await apiRequest(
    `subjects/${subjectId}/questions/?limit=${limit}&offset=${offset}`,
    'GET'
  );
}

export async function getQuestion(questionId = '') {
  return await apiRequest(`questions/${questionId}`, 'GET');
}

export async function updateAnswer(answerId = '', formData) {
  return await apiRequest(`answers/${answerId}`, 'PUT', formData);
}

export async function patchAnswer(answerId = '', formData) {
  return await apiRequest(`answers/${answerId}`, 'PATCH', formData);
}

export async function getAnswer(answerId = '') {
  return await apiRequest(`${answerId}`, 'GET');
}

export async function deleteFeed(subjectId = '') {
  return await apiRequest(`subjects/${subjectId}`, 'DELETE');
}

export async function deleteQuestion(questionId = '') {
  return await apiRequest(`questions/${questionId}`, 'DELETE');
}

export async function deleteAnswer(answerId = '') {
  return await apiRequest(`answers/${answerId}`, 'DELETE');
}
