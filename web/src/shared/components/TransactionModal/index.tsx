import { yupResolver } from '@hookform/resolvers/yup'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import Modal from 'react-modal'
import * as yup from 'yup'
import { useModal } from '../../context/useModal'
import {
  RadioButton,
  TransactionModalContainer,
  TransactionTypeContainer,
  WarningForm,
} from './styles'

import closeIcon from '../../assets/close.svg'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'

const transactionSchemaValidation = yup
  .object({
    title: yup.string().required('Transação e obrigatório'),
    amount: yup
      .number()
      .positive('O valor precisar ser acima de 0')
      .required('Valor da transação e obrigatório'),
    category: yup.string().required('A categoria e obrigatório'),
  })
  .required()

type FormData = yup.InferType<typeof transactionSchemaValidation>

export function TransactionModal() {
  const [type, setType] = useState<'deposit' | 'withdraw'>('deposit')
  const { modalIsOpen, closeModal } = useModal()

  const { register, handleSubmit, formState } = useForm<FormData>({
    resolver: yupResolver(transactionSchemaValidation),
    defaultValues: {
      title: '',
      amount: 0,
      category: '',
    },
  })
  const { errors } = formState

  const onSubmit = ({ title, amount, category }: FormData) => {
    const data = { title, amount, category, type }
    console.log(data)
  }

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
      <TransactionModalContainer onSubmit={handleSubmit(onSubmit)}>
        <h2>Cadastrar transação</h2>
        <input type="text" placeholder="Título" {...register('title')} />
        {errors.title && <WarningForm>{errors.title.message}</WarningForm>}

        <input type="number" placeholder="Valor" {...register('amount')} />
        {errors.amount && <WarningForm>{errors.amount.message}</WarningForm>}

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
        <input type="text" placeholder="Categoria" {...register('category')} />
        {errors.category && (
          <WarningForm>{errors.category.message}</WarningForm>
        )}

        <button type="submit">Cadastrar</button>
      </TransactionModalContainer>
    </Modal>
  )
}
