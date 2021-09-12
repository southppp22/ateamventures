import { createGlobalStyle } from "styled-components";
import { palette } from "styled-tools";

const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    padding: 0;
    margin: 0;
    box-sizing: inherit;
  }
  
  html {
    font-size: 62.5%;
  }

  body {
    box-sizing: border-box;
    color: ${palette("gray")};
  }
`;

export default GlobalStyles;
