export default function CategoryBreakdown({ data }) {
  if (!data) return <p>No data</p>;

  return (
    <div>
      <h3>Category Breakdown</h3>

      {Object.entries(data).map(([category, amount]) => (
        <div key={category}>
          {category}: ₹{amount}
        </div>
      ))}
    </div>
  );
}