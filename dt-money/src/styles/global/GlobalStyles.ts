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
    color:  ${({ theme }) => theme.fonts['text-title']};
  }

  body, input, button {
    font-family: 'Poppins' , sans-serif;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.4;
  }

  h1, h2, h3, h4, h5, h6 , strong{
    font-weight: 600;
  }

  button {
    cursor: pointer;
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


  .react-modal-overlay{
    background-color: rgba(0, 0, 0, .5);
    position: fixed;

    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .react-modal-content{
    width: 100%;
    max-width: 576px;
    background-color: ${({ theme }) => theme.colors.background};
    padding: 3rem;
    position: relative;
    border-radius: 0.25rem;
  }

  .close-modal {
    position: absolute;
    top: 1.5rem;
    right: 1.5rem;
    background-color: transparent;
    border: 0;

    transition: filter .1s;


    &:hover {
      filter: brightness(0.3);
    }
  }
`
