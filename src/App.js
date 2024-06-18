import { ThemeProvider } from 'styled-components';
import { theme } from './utils/theme';
import ResetStyles from './styles/ResetStyles';
import GlobalStyles from './styles/GlobalStyles';
import Main from './Main';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <ResetStyles />
      <GlobalStyles />
      <Main />
    </ThemeProvider>
  );
}
