import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
  }

  html {
    @media(max-width: 1080px){
      font-size: 93.75%;
    }
    @media(max-width: 1080px){
      font-size: 87.5%;
    }
  }

  body {
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
  }

  body, input, select, textarea {
    font-family: "Poppins" , sans-serif;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.7;
    cursor: not-allowed;
  }


`
