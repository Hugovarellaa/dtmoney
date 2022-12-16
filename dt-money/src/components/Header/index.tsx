import Modal from 'react-modal'
import { useModal } from '../../context/useModal'
import { Logo } from '../Logo'
import { ButtonNewTransaction, HeaderContainer, HeaderContent } from './styles'

export function Header() {
  const { modalIsOpen, handleCloseModal, handleOpenModal } = useModal()
  return (
    <HeaderContainer>
      <Modal isOpen={modalIsOpen} onRequestClose={handleCloseModal}>
        <h2>Nova Transação</h2>
      </Modal>
      <HeaderContent>
        <Logo />
        <ButtonNewTransaction onClick={handleOpenModal}>
          Nova transação
        </ButtonNewTransaction>
      </HeaderContent>
    </HeaderContainer>
  )
}
