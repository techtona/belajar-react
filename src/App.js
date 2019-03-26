import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Product from './Product'

// import Banner from './Banner/Banner'

class App extends Component {
    constructor() {
        super();
        this.state = {
            products: []
        }
    }

    componentDidMount() {
        fetch('https://my-json-server.typicode.com/techtona/product_api2/products')
            .then(response => response.json())
            .then((data) => {
                this.setState({products: data})
            })
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    {
                        this.state.products.map((data, key) =>
                            <div key={data.id} className="col-md-3">
                                <Product className="column" judul={data.judul} harga={data.harga}/>
                            </div>
                        )
                    }
                </div>
            </div>

        );
    }
}

export default App;
