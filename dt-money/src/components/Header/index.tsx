import { useModal } from '../../context/useModal'
import { Logo } from '../Logo'
import { ButtonNewTransaction, HeaderContainer, HeaderContent } from './styles'

export function Header() {
  const { handleOpenModal } = useModal()
  return (
    <HeaderContainer>
      <HeaderContent>
        <Logo />
        <ButtonNewTransaction onClick={handleOpenModal}>
          Nova transação
        </ButtonNewTransaction>
      </HeaderContent>
    </HeaderContainer>
  )
}
