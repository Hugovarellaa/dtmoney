import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
  }

  html {
    @media(max-width:1080px){
      font-size: 93.75%;
    }
    @media(max-width:720px){
      font-size: 87.5%
    }
  }

  body {
    background-color: ${({ theme }) => theme.colors.background} ;
    color:  ${({ theme }) => theme.fonts.text};
  }
  body, input, button {
    font-family: sans-serif;
    font-size: 1rem;
    line-height: 1.4;
  }

  a {
    text-decoration: none;
    color: inherit
  }

  ul {
    list-style: none;
  }

  [disabled]{
    pointer-events: none;
    opacity: 0.5;
    cursor: not-allowed;
  }
`
