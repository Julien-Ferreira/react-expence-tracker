import React from 'react';

import './ExpensesFilter.css';

// La composante ExpensesFilter prend en paramètre un objet props et renvoie du code JSX
const ExpensesFilter = (props) => {

  // Cette fonction est appelée lorsque l'utilisateur modifie la valeur sélectionnée dans la liste déroulante
  const expensesFilterHandle = (event) => {
    // Elle appelle la fonction onChangeFilter de l'objet props en lui passant la valeur sélectionnée
    props.onChangeFilter(event.target.value)
  }

  // Le code JSX suivant est renvoyé par la fonction ExpensesFilter
  return (
    // Un élément div est créé avec la classe expenses-filter
    <div className='expenses-filter'>
{/* Un autre élément div est créé avec la classe expenses-filter__control */}
      <div className='expenses-filter__control'>
        {/* // Un élément label est créé */}
        <label>Filter by year</label>
        {/* // Une liste déroulante (élément select) est créée avec plusieurs options (éléments option) */}
        <select value={props.selected} onChange={expensesFilterHandle}>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </div>
    </div>
  );
};

// La composante ExpensesFilter est exportée afin qu'elle puisse être utilisée dans d'autres parties de l'application
export default ExpensesFilter;
