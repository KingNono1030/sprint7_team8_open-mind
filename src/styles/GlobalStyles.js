import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    * {
    box-sizing: border-box;
  }

  body {
    background-color: ${({ theme }) => theme.grayScale.gray20};
    font-family: ${({ theme }) => theme.font.family.primary};
  }
  
  a {
    text-decoration: none;
    color: inherit;
  }
`;

export default GlobalStyles;
