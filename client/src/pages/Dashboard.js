import { useState, useEffect } from 'react';
import { PieChart, Pie, Tooltip, Legend } from 'recharts';
import API from '../utils/api';

export default function Dashboard() {

  const [tx, setTx] = useState([]);

  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [date, setDate] = useState('');
  const [notes, setNotes] = useState('');

  const fetchTx = async () => {
    const res = await API.get('/transactions');
    setTx(res.data);
  };

  useEffect(() => {
    fetchTx();
  }, []);

  const addTx = async () => {
    try {
      await API.post('/transactions', {
        title, amount, category, date, notes
      });

      setTitle('');
      setAmount('');
      setCategory('');
      setDate('');
      setNotes('');

      fetchTx();
    } catch {
      alert("Transaction failed");
    }
  };

  const deleteTx = async (id) => {
    await API.delete(`/transactions/${id}`);
    fetchTx();
  };

  const total = tx.reduce(
    (a, b) => a + Number(b.amount), 0
  );

  const categoryTotals = {};
  tx.forEach(t => {
    categoryTotals[t.category] =
      (categoryTotals[t.category] || 0) +
      Number(t.amount);
  });

  const chartData = Object.entries(categoryTotals)
    .map(([name, value]) => ({ name, value }));

  return (
    <div style={{ padding: 20 }}>

      <h2>Dashboard</h2>
      <h3>Total Expense ₹{total}</h3>

      <h3>Add Transaction</h3>

      <input placeholder="Title"
        value={title}
        onChange={e => setTitle(e.target.value)} />

      <input placeholder="Amount"
        value={amount}
        onChange={e => setAmount(e.target.value)} />

      <input placeholder="Category"
        value={category}
        onChange={e => setCategory(e.target.value)} />

      <input type="date"
        value={date}
        onChange={e => setDate(e.target.value)} />

      <input placeholder="Notes"
        value={notes}
        onChange={e => setNotes(e.target.value)} />

      <button onClick={addTx}>Add</button>

      <hr />

      <h3>Category Breakdown</h3>

      <PieChart width={400} height={300}>
        <Pie
          data={chartData}
          dataKey="value"
          nameKey="name"
          outerRadius={100}
          fill="#8884d8"
        />
        <Tooltip />
        <Legend />
      </PieChart>

      <hr />

      <h3>Recent Transactions</h3>

      {tx.map(t => (
        <div key={t._id}>
          {t.title} ₹{t.amount} ({t.category})
          <button onClick={() => deleteTx(t._id)}>
            Delete
          </button>
        </div>
      ))}

    </div>
  );
}
