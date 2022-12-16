import { useState } from 'react'
import Modal from 'react-modal'
import { Logo } from '../Logo'
import { ButtonNewTransaction, HeaderContainer, HeaderContent } from './styles'

export function Header() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] =
    useState(false)

  function handleOpenModal() {
    setIsNewTransactionModalOpen(true)
  }

  function handleCloseModal() {
    setIsNewTransactionModalOpen(false)
  }

  return (
    <HeaderContainer>
      <Modal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseModal}
      >
        <h2>Nova Transação</h2>
      </Modal>
      <HeaderContent>
        <Logo />
        <ButtonNewTransaction onClick={handleOpenModal}>
          Nova transação
        </ButtonNewTransaction>
      </HeaderContent>
    </HeaderContainer>
  )
}
