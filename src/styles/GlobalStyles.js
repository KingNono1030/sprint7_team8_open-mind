import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    * {
    box-sizing: border-box;
  }

  body {
    font-family: ${({ theme }) => theme.font.family};
  }
`;

export default GlobalStyles;
