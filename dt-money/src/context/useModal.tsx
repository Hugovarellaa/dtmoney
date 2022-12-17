/* eslint-disable react-hooks/rules-of-hooks */
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react'
import { api } from '../services/axios'

export interface Transaction {
  id: number
  title: string
  amount: number
  type: 'withdraw' | 'deposit'
  category: string
  created_at: Date
}

interface TransactionModalProviderProps {
  children: ReactNode
}

interface TransactionModalContextData {
  transactions: Transaction[]
  modalIsOpen: boolean
  handleOpenModal: () => void
  handleCloseModal: () => void
}

const TransactionModalContext = createContext({} as TransactionModalContextData)

export function TransactionModalProvider({
  children,
}: TransactionModalProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  const [modalIsOpen, setIsOpen] = useState(false)

  function handleOpenModal() {
    setIsOpen(true)
  }

  function handleCloseModal() {
    setIsOpen(false)
  }

  useEffect(() => {
    api
      .get('/transactions')
      .then((response) => setTransactions(response.data.transactions))
  }, [transactions])

  return (
    <TransactionModalContext.Provider
      value={{
        transactions,
        modalIsOpen,
        handleOpenModal,
        handleCloseModal,
      }}
    >
      {children}
    </TransactionModalContext.Provider>
  )
}

export const useModal = () => useContext(TransactionModalContext)
