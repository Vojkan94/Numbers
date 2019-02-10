import React from 'react';
import './SelectedNumbers.css';
import SelectedNumber from './SelectedNumber/SelectedNumber';

const SelectedNumbers = ({selectedNumbers}) =>{
    const selectedNumbersComponents = selectedNumbers.map((number,i)=>{
        return <SelectedNumber number={number} key={i}/>
    })
    return(
       <div className="selected-numbers">
            {selectedNumbersComponents}
       </div>
    )
}

export default SelectedNumbers;