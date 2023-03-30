import React from "react";
import Board from "./Boards";
import Members from "./Members";
import './Project.css'
import NavBar from "../navBar";

const Landing=()=>{
return(
    <>
    <NavBar/>
    <div>
        <div style={{marginTop:"5px"}}>
            <Board/>
        </div>
        <div >
            <Members/>    
        </div>
    </div>
    </>
)
}

export default Landing;