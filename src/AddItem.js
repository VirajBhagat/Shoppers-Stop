import React, { Component,useState,useEffect } from 'react';
import { Link } from 'react-router-dom';

// CSS
import './static_files/ShopersStop_Shop.css'
import './static_files/addItem.css'

// Images
import Mountain from './static_files/img/background_little_mountain.webp'

function AddItem(){ 
    
    const addNewRow = () =>{
        <tr>
            <td>Product Name</td>
            <td>Product Price</td>
            <td>Weight</td>
            <td>Photo</td>
            <td>Delete</td>
        </tr>
        console.log("Test")
    }

    return (
        <div className='Container'>
            <div className="header">
                <div className="header-logo">LOGO</div>
                <div className="header-content">
                    <ul>
                    {/* <li><Link to={{pathname:"/Shopers_Stop/Add_Item",state:{username:}}}>Home</Link></li> */}
                    {/* {console.log(Request.params.username)} */}
                        <li><Link to='/Shopers_Stop/Add_Item'>Home</Link></li>
                        <li><Link to='/Shopers_Stop/Add_Item?username='>Add Items</Link></li>
                        <li><Link to='/Shopers_Stop/Add_Item'>Check Items</Link></li>
                        <li><Link to='/Shopers_Stop/Add_Item'>Customers List</Link></li>
                        <li><Link to='/Shopers_Stop/Add_Item'>Account</Link></li>
                        <li><Link to='/Shopers_Stop/Add_Item'>Log Out</Link></li>
                    </ul>
                </div>
            </div>

            <div classNameName="main">
            <div className="main-container">
                    <p className="main-container-round-1"></p>
                    <p className="main-container-round-2"></p>
                    <div className="main-container-info">
                    <table>
                        <thead>
                            <tr>
                                <th>Product Name</th>
                                <th>Product Price</th>
                                <th>Weight</th>
                                <th>Photo</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        {/* {
                            userData.map((val) => {
                                return(
                                    <tbody key={val.id}>
                                        <tr>
                                            <td>{val.id}</td>
                                            <td>{val.username}</td>
                                            <td>{val.password}</td>
                                            <td><button>Update</button></td>
                                            <td><button onClick={() => {deleteUser(val.username)}}>Delete</button></td>
                                        </tr>
                                    </tbody>
                                );
                            })
                        }    */}
                        <tbody className='tbody'>

                        </tbody>
                    </table>
                    <button className='btn-table' onClick={addNewRow}>+</button>
                    </div>
                    <img src={Mountain} className="background-mountain" />
                </div>
            </div>
        </div>
    );
}
 
export default AddItem;