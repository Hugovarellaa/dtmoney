import Modal from 'react-modal'
import { useModal } from '../../context/useModal'
import { NewTransactionModalContainer } from './styles'

import closeImg from '../../assets/close.svg'

export function NewTransactionModal() {
  const { handleCloseModal, modalIsOpen } = useModal()
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={handleCloseModal}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button onClick={handleCloseModal}>
        <img src={closeImg} className="close-modal" alt="fechar modal" />
      </button>
      <NewTransactionModalContainer>
        <h2>Nova Transação</h2>
        <input type="text" placeholder="Nome" />
        <input type="number" placeholder="Valor" />
        <input type="text" placeholder="Categoria" />
        <button type="submit">Cadastrar</button>
      </NewTransactionModalContainer>
    </Modal>
  )
}
