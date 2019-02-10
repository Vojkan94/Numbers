import React from 'react';
import './OneColumn.css';
import OneNumber from './OneNumber/OneNumber';

const OneColumn = ({colNum, selectNumber, numbers, selectedNumbers, pickColumn}) =>{
    const numbersComponents = numbers.map((number)=>{
        let selected = false;
        for(let numberSelect of selectedNumbers){
            if(number.number === numberSelect.number){
                selected = true;
                break;
            }
        }
        return <OneNumber key={number.number} number={number} selectNumber={selectNumber} selected={selected}/>
    });

    return( 
            <div className="one-column">   
              {numbersComponents}
              <div onClick={pickColumn} className={`select-whole-column one-column--${colNum}`}></div>
            </div>        
    )
}

export default OneColumn;