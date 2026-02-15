 function TransactionItem({t}) {
  return (
    <div>
      <h4>{t.title}</h4>
      <p>₹{t.amount}</p>
    </div>
  );
}
export default TransactionItem