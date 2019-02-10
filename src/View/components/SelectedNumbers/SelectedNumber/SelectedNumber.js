import React from 'react';
import './SelectedNumber.css';

const SelectedNumber = ({number}) =>{
    return(
       <div className={`selected-number one-column--${number.column}`}>
         <p className="number">{number.number}</p>
       </div>
    )
}

export default SelectedNumber;