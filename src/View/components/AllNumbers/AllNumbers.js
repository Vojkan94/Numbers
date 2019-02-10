import React from 'react';
import './AllNumbers.css';
import OneColumn from './OneColumn/OneColumn';

const AllNumbers = ({allNumbers, selectNumber, selectedNumbers, pickColumn}) => {
        const allColumns = [];
        for(let col = 1; col <= 8; col++){
            const numbers = allNumbers.filter((number)=>{
                return number.column === col;
            })
            allColumns.push(<OneColumn key={col} colNum={col} selectNumber={selectNumber} numbers={numbers} selectedNumbers={selectedNumbers} pickColumn={pickColumn}/>)
        }

        return(
            <div className="all-numbers">
                {allColumns}
            </div>
        ) 
}

export default AllNumbers;