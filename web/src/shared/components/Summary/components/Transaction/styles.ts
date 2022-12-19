import styled, { css } from 'styled-components'

interface TransactionProps {
  totalActive: boolean
}

export const TransactionContainer = styled.div<TransactionProps>`
  background-color: ${({ theme }) => theme.colors.shape};
  padding: 1.5rem 2rem;
  border-radius: 0.25rem;
  color: ${({ theme }) => theme.colors.title};

  ${({ totalActive, theme }) =>
    totalActive &&
    css`
      background-color: ${({ theme }) => theme.colors.green};
      color: ${({ theme }) => theme.colors.shape};
    `}
`

export const TransactionHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const TransactionParagraph = styled.p<TransactionProps>`
  ${({ totalActive, theme }) =>
    totalActive &&
    css`
      color: ${({ theme }) => theme.colors.shape};
    `}
`

export const TransactionImage = styled.img``

export const TransactionStrong = styled.strong<TransactionProps>`
  margin-top: 1rem;
  font-size: 2rem;
  font-weight: 500;
  line-height: 3rem;

  ${({ totalActive, theme }) =>
    totalActive &&
    css`
      color: ${({ theme }) => theme.colors.shape};
    `}
`
