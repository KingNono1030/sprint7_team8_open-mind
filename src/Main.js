import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import FeedListPage from './pages/FeedListPage';
import QuestionFeedPage from './pages/QuestionFeedPage';
import AnswerFeedPage from './pages/AnswerFeedPage';

export default function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'>
          <Route index element={<LandingPage />} />
          <Route path='list'>
            <Route index element={<FeedListPage />} />
          </Route>
          <Route path='post'>
            <Route path=':postId'>
              <Route index element={<QuestionFeedPage />} />
              <Route path='answer' element={<AnswerFeedPage />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
