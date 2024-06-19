import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
@import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css');
@import url('https://fonts.googleapis.com/css2?family=Actor&display=swap');
    * {
    box-sizing: border-box;
  }

  body {
    font-family: ${({ theme }) => theme.font.family.primary};
  }
`;

export default GlobalStyles;
