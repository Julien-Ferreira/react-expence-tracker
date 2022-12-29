import React, { useState } from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

// Tableau d'objets représentant des dépenses fictives
const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  {
    id: 'e2',
    title: 'New TV',
    amount: 799.49,
    date: new Date(2021, 2, 12)
  },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

// La composante App utilise l'état local pour gérer le tableau de dépenses et la fonction addExpenseHandler pour ajouter de nouvelles dépenses
const App = () => {
  // useState est une hook de React qui permet de gérer l'état local de la composante
  // expenses est initialisé à la valeur du tableau DUMMY_EXPENSES et setExpenses est une fonction qui permet de mettre à jour cette valeur
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES)

  // Cette fonction est appelée lorsque l'utilisateur soumet le formulaire de la composante NewExpense
  const addExpenseHandler = expense => {
    // Elle met à jour le tableau de dépenses en utilisant la fonction setExpenses
    setExpenses((prevExpenses) => {
      // La nouvelle dépense est ajoutée en première position du tableau, et les dépenses précédentes sont ajoutées derrière
      return [expense, ...prevExpenses];
    });
  };

  // Le code JSX suivant est renvoyé par la fonction App
  return (
    <div>
      {/* La composante NewExpense est rendue ici, avec la prop onAddExpense */}
      <NewExpense onAddExpense={addExpenseHandler}/>
      {/* La composante Expenses est rendue ici, avec la prop items */}
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
