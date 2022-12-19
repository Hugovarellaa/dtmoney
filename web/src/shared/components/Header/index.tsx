import { useModal } from '../../context/useModal'
import { Logo } from '../Logo'
import { ButtonNewTransaction, HeaderContainer, HeaderContent } from './styles'

export function Header() {
  const { openModal } = useModal()
  return (
    <HeaderContainer>
      <HeaderContent>
        <Logo />
        <ButtonNewTransaction onClick={openModal}>
          Nova transação
        </ButtonNewTransaction>
      </HeaderContent>
    </HeaderContainer>
  )
}
