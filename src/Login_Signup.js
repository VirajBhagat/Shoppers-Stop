import React, { Component,useState,useEffect } from 'react';
import {useNavigate} from "react-router-dom";
import Axios from 'axios';

// Images
import log_IMG from './static_files/img/log.svg'
import register_IMG from './static_files/img/register.svg'

// Static Files
import './static_files/style.css'
import 'https://kit.fontawesome.com/64d58efce2.js'
import { Link } from 'react-router-dom';
import { Route } from 'react-router-dom';

function Login_Signup() {
    let navigate=useNavigate();

    const SignIn_SignUp = () =>{
        const sign_in_btn = document.querySelector("#sign-in-btn");
        const sign_up_btn = document.querySelector("#sign-up-btn");
        const container = document.querySelector(".container");

        sign_up_btn.addEventListener("click", () => {
            container.classList.add("sign-up-mode");
        });
          
        sign_in_btn.addEventListener("click", () => {
            container.classList.remove("sign-up-mode");
        });
    }

// Insert User Data
    const [username,setUsername]=useState('')
    const [email,setEmail]=useState('')
    const [password, setPassword]=useState('')
    

    const insertUserData = () =>{
        Axios.post("http://localhost:3001/api/insert",{
            username: username,
            email : email,
            password: password
        }).then(response => {
            console.log(response)
        })
    }


// Checking User Data
    const [checkUsername,setCheckUsername]=useState('')
    const [checkPassword, setCheckPassword]=useState('')
    const [userData, getUserData]=useState([])

    useEffect(() => {
        Axios.get('http://localhost:3001/api/get').then(response => {
            getUserData(response.data)
            console.log(response.data)
        })
    }, [])

    const checkUserData = () =>{
        // console.log(userData.username)
        for(let i=0; userData.length!==i; i++){
            // console.log(userData[i].username)
            if(checkUsername!=='' && checkPassword!== ''){
                if(userData[i].username === checkUsername && userData[i].password === checkPassword){
                    // navigate(`/Shopers_Stop/${userData[i].id}&${userData[i].username}`)
                    // Cookies.set('username',checkUsername)
                    navigate('/Shopers_Stop', {state:{username:checkUsername}})
                    // this.props.router.push({
                    //     pathname: '/Shopers_Stop',
                    //     state:{username:checkUsername}
                    // })
                    // <Route path='/Shopers_Stop' render={() => <search name={username}/>} />
                }
            }
        }
        // navigate('/main')
        console.log("Test")
    }
    

    return (
        // <div>Hello</div>
        <div className="container">
            {/* <Helmet>
                 <script src= 
                "./static_files/signup_btn.js" 
                type="text/javascript" /> *
                <script src=
                "https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js" 
                type="text/javascript" />
            </Helmet> */}
            
            <div className="forms-container">
                <div className="signin-signup">

                    <form action="#" className="sign-in-form">
                        <h2 className="title">Sign in</h2>
                        <div className="input-field">
                            <i className="fas fa-user"></i>
                            <input type="text" name='username' placeholder="Username" onChange={(e) => {setCheckUsername(e.target.value)}}  />
                        </div>
                        <div className="input-field">
                            <i className="fas fa-lock"></i>
                            <input type="password" name='password' placeholder="Password" onChange={(e) => {setCheckPassword(e.target.value)}}  />
                        </div>

                        <input type="submit" value="Login" className="btn solid" onClick={checkUserData} />
                        <p className="social-text">Or Sign in with social platforms</p>

                        <div className="social-media">
                            <a href="#" className="social-icon">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a href="#" className="social-icon">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a href="#" className="social-icon">
                                <i className="fab fa-google"></i>
                            </a>
                            <a href="#" className="social-icon">
                                <i className="fab fa-linkedin-in"></i>
                            </a>
                        </div>
                    </form>

                    <form action="#" className="sign-up-form">
                        <h2 className="title">Sign up</h2>
                        <div className="input-field">
                            <i className="fas fa-user"></i>
                            <input type="text" name='username' placeholder="Username" onChange={(e) => {setUsername(e.target.value)}} />
                        </div>
                        <div className="input-field">
                            <i className="fas fa-envelope"></i>
                            <input type="email" name='email' placeholder="Email" onChange={(e) => {setEmail(e.target.value)}} />
                        </div>
                        <div className="input-field">
                            <i className="fas fa-lock"></i>
                            <input type="password" name='password' placeholder="Password" onChange={(e) => {setPassword(e.target.value)}} />
                        </div>

                        <input type="submit" className="btn" value="Sign up" onClick={insertUserData} />
                        <p className="social-text">Or Sign up with social platforms</p>

                        <div className="social-media">
                            <a href="#" className="social-icon">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a href="#" className="social-icon">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a href="#" className="social-icon">
                                <i className="fab fa-google"></i>
                            </a>
                            <a href="#" className="social-icon">
                                <i className="fab fa-linkedin-in"></i>
                            </a>
                        </div>

                    </form>

                </div>
            </div>

            <div className="panels-container">
                <div className="panel left-panel">
                <div className="content">
                    <h3>New here ?</h3>
                    <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
                    ex ratione. Aliquid!
                    </p>
                    <button onClick={SignIn_SignUp} className="btn transparent" id="sign-up-btn">
                    Sign up
                    </button>
                </div>
                <img src={log_IMG} className="image" alt="" />
                </div>
                <div className="panel right-panel">
                <div className="content">
                    <h3>One of us ?</h3>
                    <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                    laboriosam ad deleniti.
                    </p>
                    <button className="btn transparent" id="sign-in-btn">
                    Sign in
                    </button>
                </div>
                <img src={register_IMG} className="image" alt="" />
                </div>
            </div>
            {/* <Helmet>
                 <script src= 
                "./static_files/signup_btn.js" 
                type="text/javascript" /> 
                <script src=
                "https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js" 
                type="text/javascript" />
            </Helmet> */}
            {/* Call the function to add a library */}
            {/* {AddLibrary('./static_files/signup_btn.js')} */}
            
        </div>
        
    );
}
 
export default Login_Signup;