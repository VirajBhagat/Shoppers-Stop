import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// CSS
// import '../static_files/ShopersStop_Shop.css'
import '../static_files/addItem.css'

class addItems_header extends Component {
    params = new URLSearchParams(window.location.search);

    render() { 
        return (
            <div className="header">
                <div className="header-logo">LOGO</div>
                <div className="header-content">
                    <ul>
                    {/* <li><Link to={{pathname:"/Shopers_Stop/Add_Item",state:{username:}}}>Home</Link></li> */}
                    {/* {console.log(Request.params.username)} */}
                        <li><Link to={`/Shopers_Stop/Check_Items?username=${this.params.get('username')}`}>Check Items</Link></li>
                        <li><Link to='/Shopers_Stop/Add_Item'>Customers List</Link></li>
                        <li><Link to='/Shopers_Stop/Add_Item'>Account</Link></li>
                        <li><Link to='/Shopers_Stop/Add_Item'>Log Out</Link></li>
                    </ul>
                </div>
            </div>
        );
    }
}
 
export default addItems_header;