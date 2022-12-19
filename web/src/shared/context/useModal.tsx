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

interface ModalContextData {
  transactions: Transaction[]
  modalIsOpen: boolean
  openModal: () => void
  closeModal: () => void
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
    const response = await api.get('/transactions')
    setTransactions(response.data.transactions)
  }

  useEffect(() => {
    fetchApi()
  }, [transactions])

  return (
    <ModalContext.Provider
      value={{
        transactions,
        modalIsOpen,
        openModal,
        closeModal,
      }}
    >
      {children}
    </ModalContext.Provider>
  )
}

export const useModal = () => useContext(ModalContext)
