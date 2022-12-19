import styled, { css } from 'styled-components'

interface TypeProps {
  type?: 'withdraw' | 'deposit'
}

export const TransactionTableContainer = styled.div`
  margin-top: 4rem;
`

export const TransactionTableTable = styled.table`
  width: 100%;
  border-spacing: 0 0.5rem;
`

export const TransactionTableThead = styled.thead``

export const TransactionTableTh = styled.th`
  color: ${({ theme }) => theme.colors.text};
  font-weight: 400;
  padding: 1rem 2rem;
  text-align: left;
  line-height: 1.5rem;
`

export const TransactionTableTr = styled.tr``

export const TransactionTableTbody = styled.tbody``

export const TransactionTableTd = styled.td<TypeProps>`
  padding: 1rem 2rem;
  border: 0;
  background-color: ${({ theme }) => theme.colors.shape};
  color: ${({ theme }) => theme.colors.text};
  border-radius: 0.25rem;
  font-weight: 400;

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

    &:first-child {
    color: ${({ theme }) => theme.colors.title};
  }
`
