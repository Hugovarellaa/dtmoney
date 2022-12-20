import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react'
import { api } from '../services/api'

interface Transaction {
  id: string
  name: string
  amount: number
  type: 'deposit' | 'withdraw'
  category: string
  created_at: string
}

type TransactionForm = Omit<Transaction, 'id' | 'created_at'>

interface TransactionContextData {
  transactions: Transaction[]
  createTransaction: (transaction: TransactionForm) => Promise<void>
}

interface TransactionProviderProps {
  children: ReactNode
}

const TransactionContext = createContext({} as TransactionContextData)

export function TransactionProvider({ children }: TransactionProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  async function createTransaction(transaction: TransactionForm) {
    const { data } = await api.post('/transactions', {
      ...transaction,
      created_at: new Date(),
    })

    const formData = data.transaction

    setTransactions((oldState) => [...oldState, formData])
  }

  useEffect(() => {
    async function getTransactions() {
      const response = await api.get('/transactions')
      setTransactions(response.data.transactions)
    }
    getTransactions()
  }, [])

  return (
    <TransactionContext.Provider value={{ transactions, createTransaction }}>
      {children}
    </TransactionContext.Provider>
  )
}

export const useTransaction = () => useContext(TransactionContext)
