import { Logo } from '../Logo'
import { ButtonNewTransaction, HeaderContainer, HeaderContent } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <Logo />
        <ButtonNewTransaction>Nova transação</ButtonNewTransaction>
      </HeaderContent>
    </HeaderContainer>
  )
}
