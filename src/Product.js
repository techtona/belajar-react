import React from 'react'
import './App.css'
import logo from "./logo.svg"


class Product extends React.Component{
    render(){
        return(
            <div className={this.props.className}>
                <img src={logo} className="App-logo" alt="logo" />
                <h3>{this.props.judul}</h3>
                <p className="orange"><b>{this.props.harga}</b></p>
            </div>);
    }
}

export default Product;