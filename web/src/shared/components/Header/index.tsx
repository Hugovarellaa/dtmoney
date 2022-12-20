import { useModal } from '../../context/useModal'
import { Logo } from '../Logo'
import { HeaderContainer, HeaderContent, NewTransactionButton } from './styles'

export function Header() {
  const { openModal } = useModal()
  return (
    <HeaderContainer>
      <HeaderContent>
        <Logo />
        <NewTransactionButton onClick={openModal}>
          Nova transação
        </NewTransactionButton>
      </HeaderContent>
    </HeaderContainer>
  )
}
