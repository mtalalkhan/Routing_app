import React, { createContext, useReducer } from 'react'

// Import the Reducer
import AppReducer from './AppReducer';

// Create the initail state
const initialState = {
    transactions: []
}

// Create the Global Context
export const GlobalContext = createContext(initialState);

// Create a Provider for the Global Context
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    //Actions for Transaction

        // Delete Existing Transaction Action
        function delTrasnaction(id) {
            dispatch({
                type: 'DELETE_TRANACTION',
                payload: id
            });
        }

        // Add New Transaction Action
        function addTransaction(transaction) {
            dispatch({
                type: 'ADD_TRANSACTION',
                payload: transaction
            })
            
        }

    return (
        <GlobalContext.Provider value={
            {
                transactions: state.transactions,
                delTrasnaction,
                addTransaction

            }
        }>
            {children}
        </GlobalContext.Provider>
    );
}