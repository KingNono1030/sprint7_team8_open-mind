import { ThemeProvider } from 'styled-components';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { theme } from './utils/theme';
import ResetStyles from './styles/ResetStyles';
import GlobalStyles from './styles/GlobalStyles';
import Main from './Main';

export default function App() {
  return (
    <HelmetProvider>
      <Helmet>
        <link
          href='https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css'
          rel='stylesheet'
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Actor&display=swap'
          rel='stylesheet'
        />
      </Helmet>
      <ThemeProvider theme={theme}>
        <ResetStyles />
        <GlobalStyles />
        <Main />
      </ThemeProvider>
    </HelmetProvider>
  );
}
