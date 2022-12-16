import Modal from 'react-modal'
import { useModal } from '../../context/useModal'
import {
  NewTransactionModalContainer,
  RadioButton,
  TransactionTypeContainer,
} from './styles'

import { useState } from 'react'
import closeImg from '../../assets/close.svg'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'

export function NewTransactionModal() {
  const { handleCloseModal, modalIsOpen } = useModal()
  const [type, setType] = useState<'deposit' | 'withdraw'>('deposit')

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
          <RadioButton
            type="button"
            onClick={() => setType('deposit')}
            isActive={type === 'deposit'}
            activeColor="green"
          >
            <img src={incomeImg} alt="" />
            <span>Entrada</span>
          </RadioButton>
          <RadioButton
            type="button"
            onClick={() => setType('withdraw')}
            isActive={type === 'withdraw'}
            activeColor="red"
          >
            <img src={outcomeImg} alt="" />
            <span>Saída</span>
          </RadioButton>
        </TransactionTypeContainer>

        <input type="text" placeholder="Categoria" />
        <button type="submit">Cadastrar</button>
      </NewTransactionModalContainer>
    </Modal>
  )
}
