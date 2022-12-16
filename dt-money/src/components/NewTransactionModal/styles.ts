import { darken, transparentize } from 'polished'
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

export const TransactionTypeContainer = styled.div`
  margin: 1rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;

  button {
  }
`

interface RadioButtonProps {
  isActive: boolean
  activeColor: 'green' | 'red'
}

const colors = {
  red: '#E52E4D',
  green: '#33CC95',
}

export const RadioButton = styled.button<RadioButtonProps>`
  height: 4rem;
  border: 1px solid ${({ theme }) => theme.colors.input};
  border-radius: 0.25rem;

  background-color: ${({ theme, isActive, activeColor }) =>
    isActive ? transparentize(0.9, colors[activeColor]) : 'transparent'};

  display: flex;
  align-items: center;
  justify-content: center;

  transition: border-color 0.2s;

  img {
    width: 25px;
    height: 25px;
  }

  span {
    display: inline-block;
    margin-left: 1rem;
    font-size: 1rem;
    color: ${({ theme }) => theme.fonts['text-title']};
  }

  &:hover {
    border-color: ${({ theme }) => darken(0.1, theme.colors.input)};
  }
`

export const Warring = styled.p`
  color: ${({ theme }) => theme.colors.red};
  font-size: 1rem;
  font-weight: bold;
  margin-top: 8px;
  margin-bottom: 8px;
`
