import React, { useState } from 'react';
import Modal from 'react-modal';
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewTransactionModal } from './components/NewTransactionModal';
import { TransactionsProvider } from './hooks/useTransactions';
import { GlobalStyled } from "./styles/global";

Modal.setAppElement('#root');

export function App() {
  //Declarando o modal
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  // função abre modal
  function handleOpenTransactionModal() {
    setIsNewTransactionModalOpen(true)
  }

  //função fecha o modal
  function handleCloseTransactionModal() {
    setIsNewTransactionModalOpen(false)
  }

  return (
    <TransactionsProvider>

      <Header onClickOpenNewTransacionModal={handleOpenTransactionModal} />

      <Dashboard />

      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseTransactionModal}
      />

      <GlobalStyled />
    </TransactionsProvider>
  );
}

