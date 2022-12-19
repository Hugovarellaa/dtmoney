import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react'
import { api } from '../services/axios'

interface Transaction {
  id: number
  title: string
  amount: number
  type: 'deposit' | 'withdraw'
  category: string
  created_at: Date
}

type TransactionData = Omit<Transaction, 'id' | 'created_at'>

interface ModalContextData {
  transactions: Transaction[]
  modalIsOpen: boolean
  openModal: () => void
  closeModal: () => void
  createTransaction: (data: TransactionData) => Promise<void>
}

interface ModalProviderProps {
  children: ReactNode
}

const ModalContext = createContext({} as ModalContextData)

export function ModalProvider({ children }: ModalProviderProps) {
  const [modalIsOpen, setIsOpen] = useState(false)
  const [transactions, setTransactions] = useState<Transaction[]>([])

  function openModal() {
    setIsOpen(true)
  }

  function closeModal() {
    setIsOpen(false)
  }

  async function fetchApi() {
    await api
      .get('/transactions')
      .then((response) => setTransactions(response.data.transactions))
  }

  async function createTransaction(transactionInput: TransactionData) {
    const response = await api.post('/transactions', {
      ...transactionInput,
      created_at: new Date(),
    })
    const transactions = response.data.transaction

    setTransactions((oldState) => [...oldState, transactions])
  }

  useEffect(() => {
    fetchApi()
  }, [])

  return (
    <ModalContext.Provider
      value={{
        transactions,
        modalIsOpen,
        openModal,
        closeModal,
        createTransaction,
      }}
    >
      {children}
    </ModalContext.Provider>
  )
}

export const useModal = () => useContext(ModalContext)
