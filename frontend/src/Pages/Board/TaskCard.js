import React from "react";
import './board.css'
import {RiMessage3Line,RiAttachment2} from 'react-icons/ri';
import { Link } from "react-router-dom";


const TaskCard = () => {
    return (
        <>
        <div className="taskcard">
            <Link to='/task' style={{textDecoration:"none"}}><h3>This is a task alloted for work</h3></Link>
            <p style={{wordBreak: "break-all" ,  whiteSpace: "normal"}}>gciqwbchdiqwbgj chhnxghsgjknwqchfxgijkbnaschghjkwnbschaghgjknbqchagijksbcvggcsbvjcashj</p>
            <div style={{justifyContent:"flex-end" , display:"flex",fontSize:"120%"}}>
            <Link to='/task' style={{margin:"1%"}}><RiMessage3Line  /></Link>
            <Link to='/task' style={{margin:"1%"}}><RiAttachment2 /></Link>
            </div>
            </div>
        </> 
    )
}

export default TaskCard