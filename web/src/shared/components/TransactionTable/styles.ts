import styled, { css } from 'styled-components'

interface Props {
  type?: 'withdraw' | 'deposit'
}

export const TransactionTableContainer = styled.div`
  margin-top: 4rem;
`
export const Table = styled.table`
  width: 100%;
  border-spacing: 0 0.5rem;
`
export const Thead = styled.thead``

export const Th = styled.th`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.text};
  line-height: 24px;
  font-weight: 400;
  text-align: left;
  padding: 1rem 2rem;
`
export const Tr = styled.tr``

export const Tbody = styled.tbody``

export const Td = styled.td<Props>`
  background-color: ${({ theme }) => theme.colors.shape};
  color: ${({ theme }) => theme.colors.text};
  padding: 1rem 2rem;
  border-radius: 0.25rem;
  font-size: 1rem;
  line-height: 24px;
  font-weight: 400;

  &:first-child {
    color: ${({ theme }) => theme.colors.title};
  }

  ${({ type }) =>
    type === 'withdraw' &&
    css`
      color: ${({ theme }) => theme.colors.red};
    `}
  ${({ type }) =>
    type === 'deposit' &&
    css`
      color: ${({ theme }) => theme.colors.green};
    `}
`
