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
      <button className="closeIcon" onClick={closeModal}>
        <img src={closeIcon} alt="" />
      </button>
      <TransactionModalContainer>
        <h2>Cadastrar transação</h2>
        <input type="text" placeholder="Título" />
        <input type="number" placeholder="Valor" />
        <input type="text" placeholder="Categoria" />
        <button type="submit">Cadastrar</button>
      </TransactionModalContainer>
    </Modal>
  )
}
