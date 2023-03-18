import React from "react";
import Organisation from "./Organisation";
import Invites from "./Invites";
import  Task from "./Task";
import './Landing.css'


const Home=()=>{
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

export default Home;