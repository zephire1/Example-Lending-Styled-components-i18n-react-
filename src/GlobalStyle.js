import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

  @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

  *,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    transition: .5s;
  }

  html {
    font-size: 1.3vmin;
    background: ${(props) => props.theme.theme === "light" ? props.theme.white : props.theme.background};
    padding: 5rem;
    color: ${(props) => props.theme.white};
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    overflow: hidden;
  }

  ul {
    list-style: none;
  }

  button {
    background: transparent;
    border: none;
    outline: none;
    cursor: pointer;
  }

`;