import Modal from 'react-modal'
import { useModal } from '../../context/useModal'
import {
  NewTransactionModalContainer,
  TransactionTypeContainer,
} from './styles'

import closeImg from '../../assets/close.svg'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'

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

        <TransactionTypeContainer>
          <button type="button">
            <img src={incomeImg} alt="" />
            <span>Entrada</span>
          </button>
          <button type="button">
            <img src={outcomeImg} alt="" />
            <span>Saída</span>
          </button>
        </TransactionTypeContainer>

        <input type="text" placeholder="Categoria" />
        <button type="submit">Cadastrar</button>
      </NewTransactionModalContainer>
    </Modal>
  )
}
