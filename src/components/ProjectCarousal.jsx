import { useNavigate } from 'react-router-dom';
import './ProjectCarousal.css';
import { useState } from 'react';
function ProjectCarousal(){
    const navigate=useNavigate();
    const [card,setCard]=useState([{project_title:"Project 1",
        lastupdated:"",
        project_id:""
    },{project_title:"Project 1",
        lastupdated:"",
        project_id:""
    },
    {project_title:"Project 1",
        lastupdated:"",
        project_id:""
    },{project_title:"Project 1",
        lastupdated:"",
        project_id:""
    }]);
    return(
        <div class="Caros">
            <div className="card" onClick={()=>navigate("/projectpg")} >
                <div className="Dotted-line">
                    <div className="Circle">
                        <div className="var">
                            +
                        </div>
                    </div>
                </div>
            </div>
            {card.map((item,index)=>(
                <div class="card2" key={item.project_id||index} >
                    <div className="cardFooter">
                        <div className="primary-text">
                        {item.project_title} 
                        <br></br>
                        <span className="secondary-text">
                            Edited:{item.lastupdated}
                        </span>
                        </div>
                        <div className="dots">
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
export default ProjectCarousal;