import styled from 'styled-components'

interface Props {
  lastTransaction?: boolean
}

export const TransactionContainer = styled.div<Props>`
  background-color: ${({ theme, lastTransaction }) =>
    lastTransaction ? theme.colors.green : theme.colors.shape};
  padding: 1rem 2rem;
  border-radius: 0.25rem;
  color: ${({ theme, lastTransaction }) =>
    lastTransaction ? theme.colors.shape : theme.colors.title};
`

export const TransactionHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const TransactionDetails = styled.p<Props>`
  font-size: 1rem;
  color: ${({ theme, lastTransaction }) =>
    lastTransaction ? theme.colors.shape : theme.colors.title};
  line-height: 24px;
  font-weight: 400;
`

export const TransactionImage = styled.img``

export const TransactionAmount = styled.strong<Props>`
  margin-top: 1.5rem;
  font-size: 2rem;
  font-weight: 500;
  line-height: 3rem;
  color: ${({ theme, lastTransaction }) =>
    lastTransaction ? theme.colors.shape : theme.colors.title};
`
