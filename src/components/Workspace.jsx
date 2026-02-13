import "./Workspace.css";
import { useState } from "react";
function Workspace(){
    const [isClicked,setisClicked]=useState("Home");
    function button(s){
        setisClicked(s);
    }
    return (
        <div className="Workspace-desk">
            <div className="Window">
                <div className="window-header1">
                    <div className="header-icon icon-x1"></div>
                    <div className="header-icon icon-square1"></div>
                    <div className="header-icon icon-dash1"></div>
                </div>
                <div className="window-content1">
                    {isClicked==="Home" && ( <>
                    <div className="dustbin"></div>
                    <div className="Workspace-folder" onClick={()=>button("workspace")}></div>
                    <div className="Team-button" onClick={()=>button("team")}></div>
                    </>)}
                    {isClicked==="team" && (
                            <>

                            </>
                        )
                    }
                    {isClicked==="workspace" && (
                        <>
                        
                        </>
                        )
                    }
                </div>
            </div>
        </div>
    );
}
export default Workspace;