import styled from 'styled-components'

export const NewTransactionModalContainer = styled.form`
  h2 {
    color: ${({ theme }) => theme.fonts['text-title']};
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  input {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    border-radius: 0.25rem;
    background: ${({ theme }) => theme.colors.border};
    border: 1px solid ${({ theme }) => theme.colors.input};

    font-size: 1rem;
    font-weight: 400;

    & + input {
      margin-top: 1.5rem;
    }
    &::placeholder {
      color: ${({ theme }) => theme.fonts.text};
    }
  }

  button[type='submit'] {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    border-radius: 0.25rem;
    border: 0;
    background-color: ${({ theme }) => theme.colors.green};
    color: ${({ theme }) => theme.colors.white};
    font-size: 1rem;
    font-weight: bold;
    line-height: 1.5rem;
    margin-top: 1.5rem;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`
