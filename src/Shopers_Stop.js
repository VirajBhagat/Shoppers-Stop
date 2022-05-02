import React, { createContext,Component,useState,useEffect } from 'react';
import { Link,useLocation,useNavigate } from 'react-router-dom';
// import { useCookies } from 'react-cookie';
import { useCookies } from 'react-cookie';


// import Add_Item from './AddItem'

import './static_files/ShopersStop_Shop.css'
// import 'https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js'
// import'https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js'

// Images
import Mountain from './static_files/img/background_little_mountain.webp'
import Delivery from './static_files/img/delivery.png'
import Call from './static_files/img/call.png'
import Refund from './static_files/img/refund.png'
import Aretboard1 from './static_files/img/Artboard 48 copy 4_5x-100.webp'
import Aretboard2 from './static_files/img/Artboard 48 copy 7_5x-100.webp'
import Aretboard3 from './static_files/img/Artboard 48 copy 6_5x-100.webp'
import Logo from './static_files/img/Group4.png'
import PayOption from './static_files/img/Group1.jpg'
// import { createContext } from 'react/cjs/react.production.min';


// import { useLocation } from 'react-router-dom';
const user = createContext(); 

function Shopers_Stop(){
    const username = useLocation().state.username
    // const cookies=new Cookies();
    // cookies.set('username',username)
    const [cookies, setCookies] = useCookies(['name'])
    setCookies('name', username, {path: '/'})
    console.log(cookies.name)
    
    // const params = new URLSearchParams(window.location.search);
    // const {state} = location;
    // const { username } = state;
    // console.log(username)
    
    return (
        <div className="Container">
            <div className="header">
                <div className="header-logo">LOGO</div>
                <div className="header-content">
                    <ul>
                    {/* <li><Link to={{pathname:"/Shopers_Stop/Add_Item",state:{username:}}}>Home</Link></li> */}
                    {/* {console.log(Request.params.username)} */}
                        {/* <li><Link to={{pathname: `/Shopers_Stop/Add_Items`}>Add Items</Link></li> */}
                        {/* <li><Link to={`/Shopers_Stop/Add_Items?username=${useLocation().state.username}`}>Add Items</Link></li> */}
                        {/* <li><Link to='/Shopers_Stop/Add_Items' state={{username: username}}>Add Items</Link></li> */}
                        <li><user.Provider value={"Viraj"}><Link to='/Shopers_Stop/Add_Items'>Add Items</Link></user.Provider></li>
                        <li><Link to='/Shopers_Stop/Check_Items'>Check Items</Link></li>
                        <li><Link to='/Shopers_Stop/Add_Item'>Customers List</Link></li>
                        <li><Link to='/Shopers_Stop/Add_Item'>Account</Link></li>
                        <li><Link to='/Shopers_Stop/Add_Item'>Log Out</Link></li>
                    </ul>
                </div>
            </div>

            <div>
                <div className="main-container">
                    <p className="main-container-round-1"></p>
                    <p className="main-container-round-2"></p>
                    <div className="main-container-info">
                        <h1>Shopers Website. Let's Sell It.</h1>
                        <p>We are here to make your sell easy Let's start and increase your sells</p>
                        <button className="btn">Let's Start</button>
                    </div>
                    <img src={Mountain} className="background-mountain" />
                </div>

                <div className="main-aboutUs">
                    <div className="main-aboutUs-LeftData">
                        <h1>About Us</h1><br/>
                        <h2>With the Right<br/>Website, Great<br/>Things Can Happen</h2>
                    </div>
                    <div className="main-aboutUs-RightData">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et expedita fugiat hic amet quae, officiis deleniti omnis quis magni, ratione ex, necessitatibus cupiditate dolorem. Nisi maxime labore, temporibus corporis necessitatibus accusantium nemo eligendi consequuntur quod iure quisquam deleniti ea veritatis tempore, architecto commodi quaerat quas error! Cupiditate consequuntur tenetur praesentium?</p>
                    </div>
                </div>
                
                <div className="main-shipping">
                    <div>
                        <img src={Delivery} className="main-shipping-1"/>
                        <div className="main-shipping-info-1">
                            <h3>Free Shipping</h3>
                            <p>When order over $75</p>
                        </div>
                    </div>
                    <div>
                        <img src={Call} className="main-shipping-2"/>
                        <div className="main-shipping-info-2">
                            <h3>24/7 Support</h3>
                            <p>Get support all day</p>
                        </div>
                    </div>
                    <div>
                        <img src={Refund} className="main-shipping-3" />
                        <div className="main-shipping-info-3">
                            <h3>Refund</h3>
                            <p>Get refund within 3 days!</p>
                        </div>
                    </div>
                </div>

                <div className="main-offer">
                    <div className="main-offer-heading">
                        <h1>What We Offer</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure nulla explicabo, consectetur cum debitis laboriosam quaerat autem tenetur, animi numquam ipsum, laborum possimus aliquam labore temporibus dignissimos? Hic reprehenderit, expedita id ea totam veritatis ab. Incidunt eaque nobis culpa placeat voluptate ullam! Quisquam dicta blanditiis excepturi debitis ab, fuga et?</p>
                    </div>
                    <div className="main-offer-pic">
                        <div>
                            <img src={Aretboard1} />
                            <h2>Workflows That Work</h2>
                            <p>I'm a paragraph. Click here to add your own text and edit me. I’m a great place for you to tell a story and let your users know a little more about you.</p>
                        </div>
                        <div>
                            <img src={Aretboard2} />
                            <h2>All-In-One Solution For Sells</h2>
                            <p>I'm a paragraph. Click here to add your own text and edit me. I’m a great place for you to tell a story and let your users know a little more about you.</p>
                        </div>
                        <div>
                            <img src={Aretboard3} />
                            <h2>Smart Automation Tools</h2>
                            <p>I'm a paragraph. Click here to add your own text and edit me. I’m a great place for you to tell a story and let your users know a little more about you.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer">
                <div className="footer-connectUs">
                    <ul className="social-icons"> 
                        <li><a href="https://www.facebook.com/"><ion-icon name="logo-facebook"></ion-icon></a></li>
                        <li><a href="https://twitter.com/"><ion-icon name="logo-twitter"></ion-icon></a></li>
                        <li><a href="https://www.linkedin.com/login"><ion-icon name="logo-linkedin"></ion-icon></a></li>
                        <li><a href="https://www.instagram.com/"><ion-icon name="logo-instagram"></ion-icon></a></li>
                    </ul>
                    <p>Connect Us</p>
                </div>
                <div className="footer-logo">
                    <div>
                        <img src={Logo} width="260px" height="70px" />
                    </div>
                    <ul className="menu">
                        <li><a href="#">Flights</a></li>
                        <li><a href="#">Offers</a></li>
                        <li><a href="#">Terms&Condition</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                    </ul>
                    <p>&copy; Airline Reservation System | Made By Viraj and Prasad | All Rights Reserved</p>
                </div>
                <div className="Credit-cards" >
                    <img  src={PayOption} width="250px" height="50px" />        
                </div>
            </div>
        </div>
    );
}
 
export default Shopers_Stop;
export {user};