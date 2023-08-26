import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
html,
body {
  background-color: ${({ theme }) => theme.colors.background};
  padding: 0;
  margin: 0;
  font-family: Montserrat
}

#root {
  width: 100%;
}

a {
  color: inherit;
  text-decoration: none;
}

* {
  box-sizing: border-box;
}

p, h1, h2, h3, h4 , h5 , h6, span {
  color: ${({ theme }) => theme.colors.light};
  letter-spacing: 1px;
}
`;

export default GlobalStyles;
