import Modal from 'react-modal'
import { useModal } from '../../context/useModal'
import {
  RadioButton,
  TransactionModalContainer,
  TransactionType,
} from './styles'

import { useState } from 'react'
import closeIcon from '../../assets/close.svg'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'

export function TransactionModal() {
  const [type, setType] = useState<'withdraw' | 'deposit'>('deposit')
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
        <h2>Cadastrar transação</h2>
        <input type="text" placeholder="Nome" />
        <input type="number" placeholder="Valor" />

        <TransactionType>
          <RadioButton
            type="button"
            isActive={type === 'deposit'}
            activeColor="green"
            onClick={() => setType('deposit')}
          >
            <span>Entrada</span>
            <img src={incomeImg} alt="Entrada" />
          </RadioButton>
          <RadioButton
            type="button"
            isActive={type === 'withdraw'}
            activeColor="red"
            onClick={() => setType('withdraw')}
          >
            <span>Saída</span>
            <img src={outcomeImg} alt="Saída" />
          </RadioButton>
        </TransactionType>

        <input type="text" placeholder="Categoria" />
        <button type="submit">Cadastrar</button>
      </TransactionModalContainer>
    </Modal>
  )
}
