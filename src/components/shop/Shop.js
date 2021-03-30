import React, { Component } from 'react';
import ProductContainer from './../../containers/ProductContainer';
import MessageContainer from './../../containers/MessageContainer';
import CartContainer from './../../containers/CartContainer';


class Shop extends Component {
    render() {
        return (
            <div className="container">
                <ProductContainer />
                <MessageContainer />
                <CartContainer />
            </div>
        );
    }
}

export default Shop;
