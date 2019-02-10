import React from 'react';
import './OneNumber.css';

const OneNumber = ({number, selectNumber, selected}) =>{
   const numberClass = selected ? `one-number one-column--${number.column} one-number-selected` : `one-number one-column--${number.column}`;
    return(
       <div onClick={() =>{selectNumber(number);}} className={numberClass}>
          <p className="number">{number.number}</p>
       </div>
    )
}

export default OneNumber;