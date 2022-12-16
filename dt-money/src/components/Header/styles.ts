import styled from 'styled-components'

export const HeaderContainer = styled.header`
  background-color: ${({ theme }) => theme.colors.blue};
`

export const HeaderContent = styled.div`
  max-width: 70rem;
  margin: 0 auto;
  padding: 2rem 2rem 10rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const ButtonNewTransaction = styled.button`
  height: 3rem;
  padding: 0 2rem;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors['blue-light']};
  border: none;
  border-radius: 0.25rem;

  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.9);
  }
`
