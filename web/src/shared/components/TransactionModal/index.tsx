import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import Modal from 'react-modal'
import * as yup from 'yup'
import { useModal } from '../../context/useModal'

import {
  RadioButton,
  TransactionModalContainer,
  TransactionType,
  Warming,
} from './styles'

import { useState } from 'react'
import closeIcon from '../../assets/close.svg'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import { useTransaction } from '../../context/useTransaction'

const formSchema = yup
  .object({
    name: yup.string().required('O nome da transação e obrigatório'),
    amount: yup.number().positive('O valor precisa ser maior que 0').required(),
    category: yup.string().required('O nome da categoria e obrigatório'),
  })
  .required()

type FormData = yup.InferType<typeof formSchema>

export function TransactionModal() {
  const [type, setType] = useState<'withdraw' | 'deposit'>('deposit')
  const { modalIsOpen, closeModal } = useModal()
  const { createTransaction } = useTransaction()

  const { register, handleSubmit, formState, reset } = useForm<FormData>({
    resolver: yupResolver(formSchema),
    defaultValues: {
      name: '',
      amount: 0,
      category: '',
    },
  })

  const { errors } = formState

  const onSubmit = async ({ name, amount, category }: FormData) => {
    const data = { name, amount, category, type }
    await createTransaction(data)
    closeModal()
    reset()
  }

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
      <TransactionModalContainer onSubmit={handleSubmit(onSubmit)}>
        <h2>Cadastrar transação</h2>
        <input type="text" placeholder="Nome" {...register('name')} />
        {errors.name && <Warming>{errors.name?.message}</Warming>}

        <input type="number" placeholder="Valor" {...register('amount')} />
        {errors.amount && <Warming>{errors.amount?.message}</Warming>}

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

        <input type="text" placeholder="Categoria" {...register('category')} />
        {errors.category && <Warming>{errors.category?.message}</Warming>}

        <button type="submit">Cadastrar</button>
      </TransactionModalContainer>
    </Modal>
  )
}
