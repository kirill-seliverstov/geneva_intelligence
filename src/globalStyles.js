import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif,'Helvetica', 'Arial', sans-serif;
    box-sizing: border-box;
  }

  p {
    margin: 0;
  }
`;
 
export default GlobalStyle;