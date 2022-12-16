/* eslint-disable react-hooks/rules-of-hooks */
import { createContext, ReactNode, useContext, useState } from 'react'

interface TransactionModalContextData {
  modalIsOpen: boolean
  handleOpenModal: () => void
  handleCloseModal: () => void
}

interface TransactionModalProviderProps {
  children: ReactNode
}

const TransactionModalContext = createContext({} as TransactionModalContextData)

export function TransactionModalProvider({
  children,
}: TransactionModalProviderProps) {
  const [modalIsOpen, setIsOpen] = useState(false)

  function handleOpenModal() {
    setIsOpen(true)
  }

  function handleCloseModal() {
    setIsOpen(false)
  }

  return (
    <TransactionModalContext.Provider
      value={{
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
