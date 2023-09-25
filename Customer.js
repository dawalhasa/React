import React, { Component } from "react";

class Customer extends Component{
    constructor(){
        super();
        this.custmerName= "customerName";
        this.custmerId=12345;
        this.custmerMobile=988686696;
        this.custmerEmail="chimedolkar@gmail.com"
    }
    onButtonClick(){
        this.setState({
            customerName:"Dawa Lhasa",
            customerId:1245,
            customerEmail:"dawalhasa@gmail.com"
        })
    }
    render(){
        return <div>
            <h1>
            <h1>Customer Information</h1>
            <br></br>
            {this.custmerName}
            <br></br>
            {this.custmerId}
            <br></br>
            {this.custmerEmail}
            <br></br>
            {this.custmerMobile}
            </h1>
            <button onClick = {() =>
               this.onButtonClick()}> 
               Change the Customer
            </button>
        </div>
    }
}

export default Customer