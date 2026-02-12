import { useNavigate } from "react-router-dom";
function Header()
{
    const navigate=useNavigate();
    return (
        <div style={{top:"10px",position:"fixed",zIndex:"10",fontWeight:"bolder",fontFamily:"system-ui",display:"flex",justifyContent:"space-between", borderRadius:"50px",margin:"10px",backgroundImage:
  "linear-gradient(to right, #fdb858, #F6B25C, #EFA24A)",boxShadow: "0 6px 18px rgba(120,60,0,0.25)"}}>
            <div style={{marginLeft:"40px",width:"10%",display:"flex",alignItems:"center"}}>
                
            <img src='./Logo.png'style={{width:"100%"}}></img>
            <div style={{display:"flex"}}>
                <span style={{color:"Black"}}>Hill</span> <span style={{color:'white',opacity:"0%"}}>v</span>
                <span style={{color:"#7068AE"}}> Hikes</span>
            </div>
            </div>
            
            
            <div style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
            <div >
            Features
            </div>
            <div style={{padding:"0px 50px"}}>
                How it works?
            </div>
            <div >
                Product
            </div>
            <div style={{padding:"0px 50px"}}>
                Faq
            </div>
            </div>
            <div type="submit" onClick={()=>navigate("/login")} style={{color:"#F9C3D6",display:"flex",alignItems:"center",textAlign:"center",marginRight:"90px",background:"#7068AE",borderRadius:"25px",width:"110px",height:"60px",marginTop:"20px"}}>
             <span style={{color:"#7068AE"}}> ei</span>  Get Started
            </div>
        </div>
    )
}
export default Header;