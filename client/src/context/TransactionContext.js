// src/context/TransactionContext.js
import {createContext,useState} from 'react';

export const TransactionContext=createContext();

export default function TransactionProvider({children}){
  const [transactions,setTransactions]=useState([]);

  return (
    <TransactionContext.Provider value={{transactions,setTransactions}}>
      {children}
    </TransactionContext.Provider>
  );
}