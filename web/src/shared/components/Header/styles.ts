import styled from 'styled-components'

export const HeaderContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.blue};
`
export const HeaderContent = styled.div`
  width: 100%;
  max-width: 70rem;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 2rem 1rem 8rem;
`

export const NewTransactionButton = styled.button`
  background-color: ${({ theme }) => theme.colors['blue-light']};
  color: ${({ theme }) => theme.colors.shape};
  border: 0;
  padding: 0 2.5rem;
  height: 3rem;
  border-radius: 0.25rem;

  font-size: 1rem;
  font-weight: 600;
  line-height: 24px;

  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.9);
  }
`
