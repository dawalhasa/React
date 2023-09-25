import React, { Component } from 'react';

class Calculator extends Component{
    constructor(){
        super();
        this.state={
            firstNum:20,
            secondNum:10,
            result:0
        }
    }
    addMethod(){
            this.setState({
                result:this.state.firstNum+this.state.secondNum
            })
        }
        render(){
            return <div>
                <h1>Calculator Application </h1>
                <br></br>
                <h3>First Number : {this.state.firstNum} </h3>
                <br></br>
                <h3>Second Number: {this.state.secondNum} </h3>
                <br></br>
                <h3>Result:{this.state.result}</h3>
                <button onClick={()=>this.addMethod()}>
                    addition
                </button>
            </div>
    }
}
export default Calculator