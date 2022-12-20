import styled from 'styled-components'

export const TransactionModalContainer = styled.form`
  h2 {
    font-weight: 600;
    line-height: 36px;
    color: ${({ theme }) => theme.colors.title};
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  input {
    width: 100%;
    height: 4rem;
    padding: 1.5rem;
    border: 1px solid ${({ theme }) => theme.colors.border};
    background-color: ${({ theme }) => theme.colors.input};
    color: ${({ theme }) => theme.colors.title};
    border-radius: 0.25rem;
    font-size: 1rem;
    font-weight: 400;

    &::placeholder {
      color: ${({ theme }) => theme.colors.text};
    }

    & + input {
      margin-top: 1rem;
    }
  }

  button[type='submit'] {
    width: 100%;
    height: 4rem;
    background: ${({ theme }) => theme.colors.green};
    color: ${({ theme }) => theme.colors.shape};
    border: 0;
    border-radius: 0.25rem;
    font-size: 1rem;
    font-weight: 600;
    line-height: 24px;
    margin-top: 1.5rem;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`
