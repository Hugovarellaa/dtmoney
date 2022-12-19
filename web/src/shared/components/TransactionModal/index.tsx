import Modal from 'react-modal'
import { useModal } from '../../context/useModal'
import {
  RadioButton,
  TransactionModalContainer,
  TransactionTypeContainer,
} from './styles'

import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'

import { useState } from 'react'
import closeIcon from '../../assets/close.svg'

export function TransactionModal() {
  const [type, setType] = useState<'deposit' | 'withdraw'>('deposit')

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
        <TransactionTypeContainer>
          <RadioButton
            type="button"
            onClick={() => setType('deposit')}
            isActive={type === 'deposit'}
            activeColor="green"
          >
            <img src={incomeImg} alt="Entradas" />
            <span>Entradas</span>
          </RadioButton>
          <RadioButton
            type="button"
            onClick={() => setType('withdraw')}
            isActive={type === 'withdraw'}
            activeColor="red"
          >
            <img src={outcomeImg} alt="Saídas" />
            <span>Saídas</span>
          </RadioButton>
        </TransactionTypeContainer>
        <input type="text" placeholder="Categoria" />
        <button type="submit">Cadastrar</button>
      </TransactionModalContainer>
    </Modal>
  )
}
