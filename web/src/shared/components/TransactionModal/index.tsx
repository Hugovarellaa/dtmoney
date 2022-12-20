import Modal from 'react-modal'
import { useModal } from '../../context/useModal'
import { TransactionModalContainer } from './styles'

import closeIcon from '../../assets/close.svg'

export function TransactionModal() {
  const { modalIsOpen, closeModal } = useModal()
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button onClick={closeModal} className="closeIcon">
        <img src={closeIcon} alt="" />
      </button>
      <TransactionModalContainer>
        <h2>Modal aberto</h2>
      </TransactionModalContainer>
    </Modal>
  )
}
