import React from 'react';
import './Login.css';
import { useNavigate } from "react-router-dom";
function Login() {
    const navigate=useNavigate();
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
                    
                    <form>
                        <div className="code-line">
                            <label>
                                <span className="tag">&lt;input</span> <span className="attr">id</span>="username" <span className="tag">/&gt;</span>
                            </label>
                            <input type="text" placeholder="Enter username..." />
                        </div>

                        <div className="code-line">
                            <label>
                                <span className="tag">&lt;input</span> <span className="attr">type</span>="password" <span className="tag">/&gt;</span>
                            </label>
                            <input type="password" placeholder="Enter password..." />
                        </div>

                        <button type="submit">
                           Run_Session()
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