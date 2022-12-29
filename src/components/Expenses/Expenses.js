import React, { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';

// La composante Expenses prend en paramètre un objet props et renvoie du code JSX
const Expenses = props => {

  // useState est une hook de React qui permet de gérer l'état local de la composante
  // filteredYear est initialisé à la valeur '2020' et setFilteredYear est une fonction qui permet de mettre à jour cette valeur
  const [filteredYear, setFilteredYear] = useState('2020');

  // Cette fonction est appelée lorsque l'utilisateur modifie la valeur sélectionnée dans la liste déroulante de la composante ExpensesFilter
  const filterChangeHandler = selectedYear => {
    // Elle met à jour la valeur de filteredYear en utilisant la fonction setFilteredYear
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  // Le code JSX suivant est renvoyé par la fonction Expenses
  return (
    <div>
      <Card className="expenses">
        {/* La composante ExpensesFilter est rendue ici, avec les props selected et onChangeFilter */}
        <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
        {/* Pour chaque élément dans le tableau items de l'objet props, une composante ExpenseItem est rendue */}
        {filteredExpenses.map(expense => <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date} />)}
      </Card>
    </div>
  )
};

export default Expenses;
