function ExpenseDate(props) {
  const month = props.date.toLocaleString('fr-FR', { month: 'long' });
  const day = props.date.toLocaleString('fr-FR', { day: '2-digit' });
  const year = props.date.getFullYear();
  return (
    <div className="expense-date">
      <div>{month}</div>
      <div>{year}</div>
      <div>{day}</div>
    </div>
  )
};

export default ExpenseDate
