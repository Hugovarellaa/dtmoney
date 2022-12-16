import styled, { css } from 'styled-components'

interface TransactionsTotal {
  lastTransactions?: boolean
  type?: 'deposit' | 'withdraw' | 'total'
}

export const TransactionsContainer = styled.div<TransactionsTotal>`
  background-color: ${({ theme, lastTransactions }) =>
    lastTransactions ? theme.colors.green : theme.colors.shape};

  padding: 1.5rem 2rem;
  border-radius: 0.25rem;
  color: ${({ theme, lastTransactions }) =>
    lastTransactions ? theme.colors.shape : theme.fonts['text-title']};
`

export const TransactionsHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const TransactionsTitle = styled.p``

export const TransactionsImage = styled.img``

export const TransactionsValue = styled.strong<TransactionsTotal>`
  margin-top: 1rem;
  font-size: 2rem;
  font-weight: normal;
  line-height: 3rem;

  ${({ type }) =>
    type === 'deposit' &&
    css`
      color: ${({ theme }) => theme.colors.green};
    `}
  ${({ type }) =>
    type === 'withdraw' &&
    css`
      color: ${({ theme }) => theme.colors.red};
    `}
`
