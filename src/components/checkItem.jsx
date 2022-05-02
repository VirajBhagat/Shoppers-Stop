import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// AddItems_header
import Header from './checkItems_header';

// addItem
import AddItem from './addItem';

// CSS
// import '../static_files/ShopersStop_Shop.css'
// import '../static_files/addItem.css'

// Images
import Mountain from '../static_files/img/background_little_mountain.webp'
import delivery from '../static_files/img/delivery.png'

class CheckItem extends Component {

    render() { 
        return (<div className='checkItem-main-allItems'>
                    <div className="checkItem-main-itemsBox">
                        <img src={delivery} width='250px' height='250px'/>
                        <p>Produc Name</p>
                        <b>Price</b>
                        <p>Weight</p>
                        <p>Free Delivery</p>
                    </div>
                    <div className="checkItem-main-itemsBox">
                        <img src={delivery} width='250px' height='250px'/>
                        <p>Produc Name</p>
                        <b>Price</b>
                        <p>Weight</p>
                        <p>Free Delivery</p>
                    </div>
                    <div className="checkItem-main-itemsBox">
                        <img src={delivery} width='250px' height='250px'/>
                        <p>Produc Name</p>
                        <b>Price</b>
                        <p>Weight</p>
                        <p>Free Delivery</p>
                    </div>
                    <div className="checkItem-main-itemsBox">
                        <img src={delivery} width='250px' height='250px'/>
                        <p>Produc Name</p>
                        <b>Price</b>
                        <p>Weight</p>
                        <p>Free Delivery</p>
                    </div>
                    <div className="checkItem-main-itemsBox">
                        <img src={delivery} width='250px' height='250px'/>
                        <p>Produc Name</p>
                        <b>Price</b>
                        <p>Weight</p>
                        <p>Free Delivery</p>
                    </div>
                </div>
                
        );
    }
}
 
export default CheckItem;