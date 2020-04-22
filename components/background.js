import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "Mont";
    src: url("./MontDemo-Heavy.otf");
  }

  @font-face {
    font-family: "Route159";
    src: url("./Route159-Light.otf");
  }

  body {
    background-image: url("/72.jpg");
    background-size: contain;
  }

  pre {
    background-color: rgba(255, 255, 255, 0.5);
    padding: 1rem;
    font-size: 1.5rem;
  }

  h1, h2, h3, h4 {
    color: #1f1616;
    mix-blend-mode: color-burn;
  }
`

export default GlobalStyle