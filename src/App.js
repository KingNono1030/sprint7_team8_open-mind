import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import QuestionListPage from './pages/QuestionListPage';
import QuestionFeedPage from './pages/QuestionFeedPage';
import AnswerFeedPage from './pages/AnswerFeedPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<LandingPage />} />
          <Route path="list">
            <Route index element={<QuestionListPage />} />
          </Route>
          <Route path="post">
            <Route path=":postId">
              <Route index element={<QuestionFeedPage />} />
              <Route path="answer" element={<AnswerFeedPage />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
