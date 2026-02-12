import "./ToolBox.css";
function ToolBox(){
    return (
        <div className="toobox">
            <div className="cardbox">
                <div className="description"></div>
                <div className="iconbox">
                    <div className="screw"></div>
                    </div>
            </div>
            <div className="cardbox">
                <div className="iconbox"><div className="screw"></div></div>
                <div className="description"></div>
            </div>
            <div className="cardbox">
                <div className="description"></div>
                <div className="iconbox"><div className="screw"></div></div>
            </div>
            <div className="cardbox">
                <div className="iconbox"><div className="screw"></div></div>
                <div className="description"></div>
            </div>
        </div>
    );
}
export default ToolBox;