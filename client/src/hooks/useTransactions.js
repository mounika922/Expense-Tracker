import { useEffect, useState } from 'react';
import API from '../utils/api';

export default function useTransactions() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    API.get('/transactions')
      .then(res => setTransactions(res.data))
      .catch(err => console.log(err));
  }, []);

  return { transactions, setTransactions };
}