import React from "react";
import Organisation from "./components/Organisation";
import Invites from "./components/Invites";
import  Task from "./components/Task";


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