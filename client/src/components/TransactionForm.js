import {useState} from 'react';
import API from '../utils/api';

export default function TransactionForm(){
  const [title,setTitle]=useState('');
  const [amount,setAmount]=useState('');

  const addTx=async()=>{
    await API.post('/transactions',{
      title,
      amount
    });
    alert("Transaction added");
  };

  return(
    <>
      <input placeholder="Title"
             onChange={e=>setTitle(e.target.value)}/>

      <input placeholder="Amount"
             onChange={e=>setAmount(e.target.value)}/>

      <button onClick={addTx}>Add</button>
    </>
  );
}
