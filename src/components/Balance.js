import React, { useContext } from 'react'

//Imort the Global Context
import { GlobalContext } from '../context/GlobalState'

export const Balancer = () => {

    const { transactions } =useContext(GlobalContext);

    const transactionAmounts = transactions.map(transaction => transaction.transactionAmount);
    const balance = transactionAmounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
    
    return (
        <div>
            <h4>Current Balance</h4>
            <h1 id="balancer">$0.00</h1>
        </div>
    )
}