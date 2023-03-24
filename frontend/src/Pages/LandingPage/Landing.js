import React from "react";
import Organisation from "./Organisation";
import Invites from "./Invites";
import './Landing.css'

const Landing=()=>{
return(
    <>
    <div>
        <div style={{marginTop:"5px"}}>
            <Organisation/>
        </div>
        <div >
            <Invites/>    
        </div>
    </div>
    </>
)
}

export default Landing;