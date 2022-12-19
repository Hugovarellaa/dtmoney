import styled from 'styled-components'

export const HeaderContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.blue};
`

export const HeaderContent = styled.div`
  width: 100%;
  max-width: 70rem;
  margin: 0 auto;

  padding: 2rem 1rem 8rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const ButtonNewTransaction = styled.button`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.shape};
  background-color: ${({ theme }) => theme.colors['blue-ligh']};
  border-radius: 0.25rem;
  border: 0;
  padding: 0 2rem;
  height: 3rem;
`
