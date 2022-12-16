import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import Modal from 'react-modal'
import * as yup from 'yup'
import { useModal } from '../../context/useModal'
import {
  NewTransactionModalContainer,
  RadioButton,
  TransactionTypeContainer,
  Warring,
} from './styles'

import { useState } from 'react'
import closeImg from '../../assets/close.svg'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'

const schema = yup
  .object({
    title: yup.string().required('Informe o nome da transação'),
    amount: yup
      .number()
      .positive('O valor precisar ser maior que 0')
      .required('Informe o valor'),
    category: yup.string().required('Informe a categoria'),
  })
  .required()

type FormData = yup.InferType<typeof schema>

export function NewTransactionModal() {
  const { handleCloseModal, modalIsOpen } = useModal()
  const [type, setType] = useState<'deposit' | 'withdraw'>('deposit')

  const { register, handleSubmit, formState } = useForm<FormData>({
    resolver: yupResolver(schema),
    defaultValues: {
      title: '',
      amount: 0,
      category: 'deposit',
    },
  })

  const { errors } = formState

  function handleCreateTransaction(values: FormData) {
    const { title, amount, category } = values
    console.log(title, amount, category, type)
  }

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
      <NewTransactionModalContainer
        onSubmit={handleSubmit(handleCreateTransaction)}
      >
        <h2>Nova Transação</h2>
        <input type="text" placeholder="Nome" {...register('title')} />
        <Warring>{errors.title?.message}</Warring>

        <input type="number" placeholder="Valor" {...register('amount')} />
        <Warring>{errors.amount?.message}</Warring>

        <TransactionTypeContainer>
          <RadioButton
            type="button"
            onClick={() => setType('deposit')}
            isActive={type === 'deposit'}
            activeColor="green"
            value={type}
            onChange={(e) => setType('deposit')}
          >
            <img src={incomeImg} alt="" />
            <span>Entrada</span>
          </RadioButton>

          <RadioButton
            type="button"
            onClick={() => setType('withdraw')}
            isActive={type === 'withdraw'}
            activeColor="red"
            value={type}
            onChange={(e) => setType('withdraw')}
          >
            <img src={outcomeImg} alt="" />
            <span>Saída</span>
          </RadioButton>
        </TransactionTypeContainer>

        <input type="text" placeholder="Categoria" {...register('category')} />
        <Warring>{errors.category?.message}</Warring>

        <button type="submit">Cadastrar</button>
      </NewTransactionModalContainer>
    </Modal>
  )
}
