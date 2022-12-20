import { darken, transparentize } from 'polished'
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
export const TransactionType = styled.div`
  margin: 1rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
`

interface TypeProps {
  isActive: boolean
  activeColor: 'red' | 'green'
}

const colors = {
  green: '#33CC95',
  red: '#E52E4D',
}

export const RadioButton = styled.button<TypeProps>`
  height: 4rem;
  border-radius: 0.25rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  background-color: ${({ isActive, activeColor }) =>
    isActive ? transparentize(0.9, colors[activeColor]) : 'transparent'};

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  transition: border-color 0.2s;

  span {
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.title};
    line-height: 24px;
    font-weight: 400;
  }

  img {
    width: 25px;
    height: 25px;
  }

  &:hover {
    border-color: ${({ theme }) => darken(0.1, theme.colors.border)};
  }
`

export const Warming = styled.span`
  margin: 1rem 0;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.red};
  line-height: 24px;
  font-weight: 400;
`
