import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signupUser } from "../api/userApi";
function Signup(){
    const navigate=useNavigate();
    const [error,setError]=useState(null);
    const [loading,setLoading]=useState(false);
    const [userInfo,setUserInfo]=useState({
        username:"",
        password:"",
        firstName:"",
        lastName:"",
        phoneNumber:""
    });
    const handleChangr=(e)=>{
        setUserInfo({...userInfo,[e.target.name]:e.target.value});
    };
    const handlesubmitter=async (e)=>{
        e.preventDefault();
        console.log(userInfo);
        try{
            setLoading(true);
            setError(null);
            const res=await signupUser(userInfo);
            console.log("success:",res);
            navigate("/login",{replace:true});
        }
        catch(err){
            setError(err.response?.data?.message || "Signup failed");
            console.log(err.response?.data?.message||"signup failed")
        }
        finally{
            setLoading(false);
            setError(null);
        }
    };
    return (
        <div className="login-container">
            <div className="window-frame">
                <div className="window-header">
                    <div className="header-icon icon-x"></div>
                    <div className="header-icon icon-square"></div>
                    <div className="header-icon icon-dash"></div>
                </div>
                <div className="window-content">
                    <h2>{`// User SignUp`}</h2>
                    <form onSubmit={handlesubmitter}>
                        <div className="code-line">
                            <label>
                                <span className="tag">&lt;input</span> <span className="attr">id</span>="first name" <span className="tag">/&gt;</span>
                            </label>
                            <input value={userInfo.firstName} name="firstName" onChange={handleChangr} type="text" placeholder="Enter first name..." />
                        </div>
                        <div className="code-line">
                            <label>
                                <span className="tag">&lt;input</span> <span className="attr">id</span>="last name" <span className="tag">/&gt;</span>
                            </label>
                            <input value={userInfo.lastName} name="lastName"onChange={handleChangr} type="text" placeholder="Enter last name..." />
                        </div>
                        <div className="code-line">
                            <label>
                                <span className="tag">&lt;input</span> <span className="attr">id</span>="mobile no"<span className="tag">/&gt;</span>
                            </label>
                            <input value={userInfo.phoneNumber} name="phoneNumber" onChange={handleChangr} type="text" placeholder="Enter mobile no..."></input>
                        </div>
                        <div className="code-line">
                            <label>
                                <span className="tag">&lt;input</span> <span className="attr">type</span>="password" <span className="tag">/&gt;</span>
                            </label>
                            <input value={userInfo.password} name="password" type="password" onChange={handleChangr} placeholder="Enter password..." />
                        </div>
                        <div className="code-line">
                            <label>
                                <span className="tag">&lt;input</span> <span className="attr">type</span>="username" <span className="tag">/&gt;</span>
                            </label>
                            <input value={userInfo.username} name="username" type="text" onChange={handleChangr} placeholder="username..." />
                        </div>
                        <button type="submit">
                           {loading?"Running":"Run_Session()"}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
export default Signup;