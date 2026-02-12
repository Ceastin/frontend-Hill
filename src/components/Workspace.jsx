import "./Workspace.css";
import { useState } from "react";
function Workspace(){
    return (
        <div className="Workspace-desk">
            <div className="Window">
                <div className="window-header1">
                    <div className="header-icon icon-x1"></div>
                    <div className="header-icon icon-square1"></div>
                    <div className="header-icon icon-dash1"></div>
                </div>
                <div className="window-content1">
                    <div className="dustbin"></div>
                    <div className="Workspace-folder"></div>
                    <div className="Team-button"></div>
                </div>
            </div>
        </div>
    );
}
export default Workspace;