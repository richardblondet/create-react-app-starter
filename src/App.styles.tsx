import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: #f6f6f6;
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }
  .App {
    text-align: center;
  }

  .App-logo {
    height: auto;
    pointer-events: none;
    max-width: 15em;
  }

  .App-header {
    background-color: #282c34;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
  }
  .App-header.updated {
    background-color: #FFF;
    color: #333;
  }
  .App-link {
    color: #61dafb;
    font-size: 17px;
  }

`;

export default GlobalStyle;