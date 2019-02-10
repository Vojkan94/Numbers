import React, {Component} from 'react';
import './Home.css';
import SelectedNumbers from '../SelectedNumbers/SelectedNumbers';
import AllNumbers from '../AllNumbers/AllNumbers';
import MyNumber from '../../../models/Number';

class Home extends Component{
    constructor(props){
        super(props);
        this.state = {
            allNumbers: [],
            selectedNumbers: [],
            full: false
        }
        this.selectNumber = this.selectNumber.bind(this);
        this.random6 = this.random6.bind(this);
        this.resetNumbers = this.resetNumbers.bind(this);
        this.pickColumn = this.pickColumn.bind(this);
        this.getCurrentSelectedNumbers = this.getCurrentSelectedNumbers.bind(this);
    }

    componentDidMount(){
        const numbers = [];
        for(let col = 1; col <= 8; col++){
            for(let i = col; i <= 48; i += 8){
                numbers.push(new MyNumber(i, col));
            }
        }
        this.setState({
            allNumbers: numbers
        })
    }

    selectNumber(numberSelected){
        if(this.state.selectedNumbers.length >= 10) { 
            this.setState({
                full: true
            })
            return; 
        }
        for(let number of this.state.selectedNumbers){         
            if(number.number === numberSelected.number){
                return;
            }
        }
        this.setState({
            selectedNumbers: [...this.state.selectedNumbers, numberSelected],
            full: false
        })
    }

    random6(){
        const selectedNumbers = this.getCurrentSelectedNumbers();
        let randomNumbers = [];
        if(this.state.selectedNumbers.length <= 4 ){
            for(let i = 0; i < 6; i++){
                const random = (Math.round(Math.random() * 47 + 1));  
                if(selectedNumbers.indexOf(random) === -1 && randomNumbers.indexOf(random) === -1){
                    randomNumbers.push(random);
                }else{
                    i -= 1;
                }
            } 
        }else{
            this.setState({
                full: true
            })
            return;
        }
        
        randomNumbers = randomNumbers.map((randomNumber) => {
            for(let number of this.state.allNumbers){
                if(number.number === randomNumber){
                    return number;            
                }
            }
            return null;
        })
        this.setState({
            selectedNumbers: [...this.state.selectedNumbers, ...randomNumbers]
        })
    }

    resetNumbers(){
        this.setState({
            selectedNumbers: [],
            full: false
        })
    }
    
    pickColumn(e){
        const selectedNumbers = this.getCurrentSelectedNumbers();
        const numColum = e.target.classList.item(1).split("--")[1] * 1;
        if(this.state.selectedNumbers.length <= 4 || this.allSameColumn(numColum)){
            const selectNumbers = this.state.allNumbers.filter((number)=>{
                if(number.column === numColum && selectedNumbers.indexOf(number.number) === -1){
                    return true;
                }
                return false;
            })
            this.setState({
                selectedNumbers: [...this.state.selectedNumbers, ...selectNumbers]
            })
        }else{
            this.setState({
                full: true
            })
            return;
        }
       
    }

    allSameColumn(colNum){
        const selectedNumbers = [];
        if(this.state.selectedNumbers.length > 0 ){
            for(let number of this.state.selectedNumbers){
                selectedNumbers.push(number.column)
            }
        }
        const allSame = selectedNumbers.every((column)=>{
            return column === colNum;
        })
        return allSame;
    }

    getCurrentSelectedNumbers (){
        const selectedNumbers = [];
        if(this.state.selectedNumbers.length > 0 ){
            for(let number of this.state.selectedNumbers){
                selectedNumbers.push(number.number)
            }
        }
        return selectedNumbers;
    }

    render(){
        return (
            <div className="wrapper">
                <SelectedNumbers selectedNumbers={this.state.selectedNumbers}/>
                {this.state.full ? <span className="max-error">Maksimalno možete odabrati 10 brojeva.</span>: null}
                <AllNumbers selectNumber={this.selectNumber} allNumbers={this.state.allNumbers} selectedNumbers={this.state.selectedNumbers} pickColumn={this.pickColumn}/>
                <div onClick={this.resetNumbers} className="reset-btn">Resetuj</div>
                <div onClick={this.random6} className="random-6">Slučajnih 6</div>
            </div>
            
        )
    }
}

export default Home;