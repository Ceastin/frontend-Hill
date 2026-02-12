import React from "react";

function Signup(){
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
                    <form>
                        <div className="code-line">
                            <label>
                                <span className="tag">&lt;input</span> <span className="attr">id</span>="first name" <span className="tag">/&gt;</span>
                            </label>
                            <input type="text" placeholder="Enter first name..." />
                        </div>
                        <div className="code-line">
                            <label>
                                <span className="tag">&lt;input</span> <span className="attr">id</span>="last name" <span className="tag">/&gt;</span>
                            </label>
                            <input type="text" placeholder="Enter last name..." />
                        </div>
                        <div className="code-line">
                            <label>
                                <span className="tag">&lt;input</span> <span className="attr">id</span>="mobile no"<span className="tag">/&gt;</span>
                            </label>
                            <input type="text" placeholder="Enter mobile no..."></input>
                        </div>
                        <div className="code-line">
                            <label>
                                <span className="tag">&lt;input</span> <span className="attr">type</span>="password" <span className="tag">/&gt;</span>
                            </label>
                            <input type="password" placeholder="Enter password..." />
                        </div>
                        <div className="code-line">
                            <label>
                                <span className="tag">&lt;input</span> <span className="attr">type</span>="confirm password" <span className="tag">/&gt;</span>
                            </label>
                            <input type="password" placeholder="confirm password..." />
                        </div>
                        <button type="submit">
                           Run_Session()
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
export default Signup;