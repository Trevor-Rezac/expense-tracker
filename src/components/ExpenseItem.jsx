import "./ExpenseItem.css";

export default function ExpenseItem() {
  return (
    <div className='item-card'>
      <div className='item-date'>11/14/1990</div>
      <div className='item-description'>
        <h2 className='item-name'>Item Name</h2>
        <div className='item-amount'>$420</div>
      </div>
    </div>
  );
}
