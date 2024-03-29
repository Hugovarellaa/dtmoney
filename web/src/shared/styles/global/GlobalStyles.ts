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

  .react-modal-overlay{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: ${({ theme }) => theme.colors['modal-overlay']};

  }

  .react-modal-content{
    width: 100%;
    max-width: 576px;
    position: relative;
    padding: 3rem;
    background-color: ${({ theme }) => theme.colors.background};
    border-radius: 0.25rem;
    border: 0;
  }

  .closeIcon {
    border: none;
    background-color: transparent;
    position: absolute;
    top: 1.5rem;
    right: 1.5rem;

    transition: filter .2s;

    &:hover {
      filter: brightness(0.5)
    }
  }

`
