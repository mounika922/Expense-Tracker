import { useState, useEffect } from 'react';
import API from '../utils/api';

export default function Explorer() {

  const [tx, setTx] = useState([]);
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('');

  useEffect(() => {
    API.get('/transactions')
      .then(res => setTx(res.data));
  }, []);

  const filtered = tx.filter(t =>
    t.title.toLowerCase().includes(search.toLowerCase()) &&
    (category === '' || t.category === category)
  );

  return (
    <div style={{ padding: 20 }}>

      <h2>Explorer</h2>

      <input
        placeholder="Search"
        onChange={e => setSearch(e.target.value)}
      />

      <select
        onChange={e => setCategory(e.target.value)}
      >
        <option value="">All</option>
        <option>Food</option>
        <option>Travel</option>
        <option>Rent</option>
        <option>Shopping</option>
      </select>

      <hr />

      {filtered.map(t => (
        <p key={t._id}>
          {t.title} ₹{t.amount}
        </p>
      ))}

    </div>
  );
}
