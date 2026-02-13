import React from 'react';
import './Login.css';
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import {loginUser}  from '../api/userApi';
function Login() {
    const navigate=useNavigate();
    const [loading,setLoading]=useState(false);
    const [error,setError]=useState(null);
    const [loginData,setloginData]=useState({
        email:"",
        password:"",
    });
    const handleSubmit=async (e)=>{
        e.preventDefault();
        console.log(loginData);
        try{
            setLoading(true);
            setError(null);
            const data=await loginUser(loginData);
            console.log("Success:",data);
            if(data.token){
                localStorage.setItem("JWT",data.token);
            }
            navigate("/home",{replace:true});
        }
        catch(err){
            setError(err.response?.data?.message||"Login failed");
        }
        finally{
            setLoading(false);
        }
    };
    const changeHandler=(e)=>{
        setloginData({...loginData,[e.target.name]:e.target.value});
    };
    return (
        <div className="login-container">
            <div className="window-frame">
                {/* Top Header Bar */}
                <div className="window-header">
                    <div className="header-icon icon-x"></div>
                    <div className="header-icon icon-square"></div>
                    <div className="header-icon icon-dash"></div>
                </div>

                {/* Main Content */}
                <div className="window-content">
                    {/* Simulated code comment as title */}
                    <h2>{`// User Login`}</h2>
                    
                    <form onSubmit={handleSubmit}>
                        <div className="code-line">
                            <label>
                                <span className="tag">&lt;input</span> <span className="attr">id</span>="username" <span className="tag">/&gt;</span>
                            </label>
                            <input value={loginData.email} name='email' onChange={changeHandler} type="text" placeholder="Enter username..." />
                        </div>

                        <div className="code-line">
                            <label>
                                <span className="tag">&lt;input</span> <span className="attr">type</span>="password" <span className="tag">/&gt;</span>
                            </label>
                            <input value={loginData.password} name='password' onChange={changeHandler} type="password" placeholder="Enter password..." />
                        </div>

                        <button type="submit" >
                           {loading?"Running":"RUN SESSION()"}
                        </button>
                    </form>
                </div>
            </div>
            <div className="window-frame">
                <div className="window-header">
                    <div className="header-icon icon-x"></div>
                    <div className="header-icon icon-square"></div>
                    <div className="header-icon icon-dash"></div>
                </div>
                <div className="window-content">
                    <button onClick={()=>navigate("/signup")} type="submit">
                           Sign Up
                        </button>
                </div>
            </div>
        </div>
    );
}

export default Login;