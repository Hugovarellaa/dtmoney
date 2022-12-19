import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
  }

  html {
    @media(max-width: 1080px){
      font-size: 93.75%;
    }
    @media(max-width: 720px){
      font-size: 87.5%;
    }
  }


  body{
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.title};
  }

  body, input, button {
    font-family: "Poppins";
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ul {
    list-style: none;
  }

  [disable]{
    opacity: 0.7;
    cursor: not-allowed;
  }

  .react-modal-overlay{
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;

    display: flex;
    align-items: center;
    justify-content: center;

    background: ${({ theme }) => theme.colors['overlay-modal']};
  }

  .react-modal-content{
    position: relative;
    background: ${({ theme }) => theme.colors.background};
    padding: 3rem;
    border-radius: 0.25rem;
  }

  .closeIcon {
    position: absolute;
    top: 1.5rem;
    right: 1.5rem;
    color: ${({ theme }) => theme.colors.text}
  }

`
