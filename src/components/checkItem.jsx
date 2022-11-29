import React, { Component,useState,useEffect,DataWrapper } from 'react';
import Axios from 'axios';
import {useNavigate} from "react-router-dom";
// import { useNavigation } from '@react-navigation/native';
// import {useHistory} from "react-router-dom";
import Tests from './test'
// import DataWrapper from ''
import { Link } from 'react-router-dom';

// AddItems_header
import Header from './checkItems_header';
import Item from './Item';

// addItem
import AddItem from './addItem';

// CSS
// import '../static_files/ShopersStop_Shop.css'
// import '../static_files/addItem.css'

// Images
import Mountain from '../static_files/img/background_little_mountain.webp'
import delivery from '../static_files/img/delivery.png'


// function t(){
//     console.log('hello')

//     <Link>
        
//     </Link>
// }

class CheckItem extends Component {

    // navigate=useNavigate();

    state = {
        ItemList: [],
    }

    user='Virajbhagat'

    
    Item = (itemData) =>{
        // <Link to={`/Shopers_Stop/Add_Items`}>Add Items</Link>
        // useRoutes.push('//Shopers_Stop/Add_Items')
        // this.props.router.push('/Shopers_Stop/Add_Items');
        // let navigate=useNavigate();
        // this.props.navigate('/Shopers_Stop/Item', {state:{username:username}})

        // console.log(itemData);
        // this.props.navigate('/Shopers_Stop/Item')
        this.props.navigate('/Shopers_Stop/Item', {state:{itemData:JSON.stringify(itemData)}})
    }

    render() { 
        return (
                <div className="checkItem-main-itemsBox" onClick={() => this.Item(this.props)}>
                    <img src={this.props.item.photoName} width='250px' height='250px'/>
                    <p>{this.props.item.productName}</p>
                    <b>Price: {this.props.item.price}</b>
                    <p>Weight: {this.props.item.weight}</p>
                    <p>Free Delivery</p>
                </div>
        );
    }
}

// export default CheckItem;
export default function(props){
    const navigate = useNavigate();
    return <CheckItem {...props} navigate={navigate} />;
};