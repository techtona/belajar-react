import React from 'react'
import './App.css'
import logo from "./logo.svg"


class Product extends React.Component{
    render(){
        return(
            <div>
                <img src={logo} className="App-logo" alt="logo" />
                <h1>{this.props.judul}</h1>
                <h3>Rp. {this.props.harga}
            </h3>
            </div>);
    }
}

export default Product;