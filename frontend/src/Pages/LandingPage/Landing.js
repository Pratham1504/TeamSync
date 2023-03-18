import React from "react";
import Organisation from "./Organisation";
import Invites from "./Invites";
import  Task from "./Task";
import './Landing.css'


const Landing=()=>{
return(
    <>
    <div>
        <div>
        
        </div>
        <div>
            <Organisation/>
        </div>
        <div>
            <Invites/>    
        </div>
        <div>
            <Task/>
        </div>
    </div>
    </>
)
}

export default Landing;