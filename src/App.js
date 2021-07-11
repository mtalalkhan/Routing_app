import './App.css';
import { AccountSummary } from './components/AccountSummary';
import { AddTransaction } from './components/AddTransaction';
import { Balancer } from './components/Balance';
import {Header} from './components/Header'
import { TransactionHistory } from './components/TransactionHistory';
import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <GlobalProvider>
      <Header/>
      <div className="container">
        <Balancer/>
        <AccountSummary/>
        <TransactionHistory/>
        <AddTransaction/>
      </div>
      </GlobalProvider>
  );
}

export default App;
