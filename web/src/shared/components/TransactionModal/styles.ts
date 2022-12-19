import { darken, transparentize } from 'polished'
import styled from 'styled-components'

export const TransactionModalContainer = styled.form`
  h2 {
    color: ${({ theme }) => theme.colors.title};
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  input {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    border-radius: 0.25rem;
    background: ${({ theme }) => theme.colors.input};
    border: 1px solid ${({ theme }) => theme.colors.border};
    font-weight: 400;
    font-size: 1rem;

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
    padding: 0 1.5rem;
    background: ${({ theme }) => theme.colors.green};
    color: ${({ theme }) => theme.colors.shape};
    border: 0;
    border-radius: 0.25rem;
    font-size: 1rem;
    font-weight: bold;
    margin-top: 1rem;

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
`

interface RadioButtonProps {
  isActive: boolean
  activeColor: 'green' | 'red'
}

const colors = {
  red: '#E52E4D',
  green: '#33CC95',
} as const

export const RadioButton = styled.button<RadioButtonProps>`
  height: 4rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 0.25rem;
  background-color: ${({ activeColor, isActive }) =>
    isActive ? transparentize(0.9, colors[activeColor]) : 'transparent'};

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  transition: border-color 0.2s;

  span {
    color: 1px solid ${({ theme }) => theme.colors.title};
    font-size: 1rem;
  }

  &:hover {
    border-color: ${({ theme }) => darken(0.1, theme.colors.border)};
  }
`
