import React, { Component,useState,useEffect,DataWrapper } from 'react';
import Axios from 'axios';
// import DataWrapper from ''
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

    state = {
        ItemList: [],
        user:'Viraj',
        isLoaded: false,
        error: null
    }

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         ItemList: [],
    //         user:'Viraj'
    //     };}

    user='Virajbhagat'

    componentDidMount(){

        Axios.post('http://localhost:3001/api/getItemList',{
            user: this.user
        }).then(response => {
            const Items=response.data
            // jsonObj.append(ItemList);
            // console.log("Json object: "+JSON.stringify(jsonObj))
            // this.saveItemList(ItemList)
            // console.log(getUserData)

            // this.setState(prevState => {
            //     let List = Object.assign({}, prevState.ItemList);  
            //     List = response.data;
            //     return { List };      
            // })
            this.setState({ItemList : Items,
            isLoaded: true
            },()=>console.log(this.state))
            // this.state.ItemList=ItemList
            // this.setState({ItemList: [...this.state.ItemList,ItemList]})
        }).catch(function (error){
            this.setState({
            isLoaded: true,
            error
          });
        })
    }

    // saveItemList = (data) =>{
    //     // this.setState({ItemList: [data]})

    //     this.setState(prevState => {
    //         let List = Object.assign({}, prevState.ItemList);  
    //         List = data;
    //         return { List };      
    //     })

    //     // console.log(this.state)
    // }


    // ItemList=null

    save = () =>{
        console.log('hello')
    }


    // componentDidUpdate() {
    // document.title = `You clicked ${this.state.count} times`;
    // console.log(document.title);
    // console.log("update");
    // }

    render() { 
        
        return (<div className='checkItem-main-allItems'>
                    {
                        // console.log(this.ItemList)
                        // this.setState({ItemList: [1]})
                    }
                    <div className="checkItem-main-itemsBox" onClick={this.save}>
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