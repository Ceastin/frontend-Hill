import './ProjectPage.css';
import React,{useState,useRef} from 'react';
function ProjectPage(){
    const [showSecond,setShowSecond]=useState(false);
    const lastScroll=useRef(0);
    const handleScroll=(e)=>{
        const el=e.target;
        const scrollTop=el.scrollTop;
        const maxScroll=el.scrollHeight-el.clientHeight;
        const direction=scrollTop>lastScroll.current?"down":"up";
        lastScroll.current=scrollTop;
        const inBottomZone=scrollTop>=maxScroll*0.9;
        if(!inBottomZone&&!showSecond) return;
        if(direction==="down") setShowSecond(true);
        if(direction==="up") setShowSecond(false);
    };
    return(
        <div className="CanvasPage" >
            <div className={`first-frame ${showSecond?"blurred":""}`} onScroll={handleScroll}>
                <div className="window-header11">
                    <div className="Project-Name">Project: name</div>
                    <div className='iconpack'>
                        <div className="header-icon1 icon-dash11"></div>
                        <div className="header-icon1 icon-square11"></div>
                        <div className="header-icon1 icon-x11"></div>
                    </div>
                </div>
                <div className="CanvasWhite">
                    <div className="left-panel">h</div>
                    <div className="bottom-panel">
                        <div className="box"><div className="Mic-On"></div></div>
                        <div className="box"><div className="voice-mode-on"></div></div>
                        <div className="box"><div className="auto-pilot"></div></div>
                        <div className="box"><div className="wireframe-full-mode"></div></div>
                        <div className="box"><div className="back"></div></div>
                    </div>
                    <div className="right-panel">
                        <div className="right-panel-col1">
                        <div className="box"></div>
                        <div className="box"></div>
                        <div className="box"></div>
                        <div className="box"></div>
                        <div className="box"></div>
                        </div>
                        <div className="right-panel-col1">
                        <div className="box"></div>
                        <div className="box"></div>
                        <div className="box"></div>
                        <div className="box"></div>
                        <div className="box"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`second-frame ${showSecond?"slide-up":"slide-down"}`}>
                <div className="archive-box">

                </div>
                <div className="functionality">
                    <div className="box-1"></div>
                    <div className="box-1"></div>
                    <div className="box-1"></div>
                    <div className="box-1"></div>
                    <div className="box-1"></div>
                    <div className="box-1"></div>
                    <div className="box-1"></div>
                    <div className="box-1"></div>
                </div>
            </div>
        </div>
    );
}
export default ProjectPage;