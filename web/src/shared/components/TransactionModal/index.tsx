import Modal from 'react-modal'
import { useModal } from '../../context/useModal'
import { TransactionModalContainer } from './styles'

export function TransactionModal() {
  const { modalIsOpen, closeModal } = useModal()
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <TransactionModalContainer>
        <h2>Modal aberto</h2>
      </TransactionModalContainer>
    </Modal>
  )
}
