import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.css';

// CSS
import '../static_files/ShopersStop_Shop.css'
import '../static_files/addItem.css'
import '../static_files/bootstrap_copy.css'

// Images
import Mountain from '../static_files/img/background_little_mountain.webp'
import AddPhoto from "../static_files/img/outline_add_photo_alternate_black_24dp.png"


class addItem extends Component {

    // chooseFile= () =>{
    //     const realFileBtn = document.getElementById("real-file");
    //     const customBtn = document.getElementById("custom-button");
    //     const customTxt = document.getElementById("custom-text");

    //     customBtn.addEventListener("click", function() {
    //     realFileBtn.click();
    //     });

    //     realFileBtn.addEventListener("change", function() {
    //     if (realFileBtn.value) {
    //         customTxt.innerHTML = realFileBtn.value.match(
    //         /[\/\\]([\w\d\s\.\-\(\)]+)$/
    //         )[1];
    //     } else {
    //         customTxt.innerHTML = "No file chosen, yet.";
    //     }
    //     });
    // }

    // addNewRow = () =>{
    //     <tr>
    //         <td>Product Name</td>
    //         <td>Product Price</td>
    //         <td>Weight</td>
    //         <td>Photo</td>
    //         <td>Delete</td>
    //     </tr>
    //     console.log("Test")
    // }

    getProductName = (val) =>{
        console.log(val.target.name)
        console.log(val.target.value)
    }

    changeProps = (val) => {
        console.log(this.props.ItemList)
        
    }

    id=this.props.id
    
    render() { 
        return (
                <div className="main-row">
                    {/* {console.log(this.props)} */
                        // console.log(this.id)
                        // console.log(this.props.size)
                    }
                    
                        <input type="text" className='productName' name='productName' onChange={(val,id=this.props.id) => this.props.saveDataItemList(val,id)}/>
                        <input type="text" className='productType' name='productType' onChange={(val,id=this.props.id) => this.props.saveDataItemList(val,id)}/>
                        <input type="text" className='productWeight' name='Weight' onChange={(val,id=this.props.id) => this.props.saveDataItemList(val,id)}/>
                        <input type="file" className='productPhoto' name={`Photo${this.props.id}`} onChange={(val,id=this.props.id) => this.props.saveDataItemList(val,id)}/>
                        <input type="text" className='productPrice' name='Price' onChange={(val,id=this.props.id) => this.props.saveDataItemList(val,id)}/>                    
                    
                    {/* <input type="text" className='productPrice' name='Price' onChange={(val)=> this.getProductName(val)}/> */}
                </div>
        );
    }
}
 
export default addItem;