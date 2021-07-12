import React from 'react';

// Import CSS
import './App.css';

// Import Components
import { AccountSummary } from './components/AccountSummary';
import { AddTransaction } from './components/AddTransaction';
import { Balance } from './components/Balance';
import {Header} from './components/Header'
import { TransactionHistory } from './components/TransactionHistory';
import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <GlobalProvider>
      <Header/>
      <div className="container">
        <Balance/>
        <AccountSummary/>
        <TransactionHistory/>
        <AddTransaction/>
      </div>
      </GlobalProvider>
  );
}

export default App;
