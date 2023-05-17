import React, { useEffect, useState } from "react";
import './board.css'
import NavBar from "../navBar";
import TaskCard from './TaskCard';
import {useGlobalTaskContext} from '../../context/taskContext';
import './board.css'
import {RiMessage3Line,RiAttachment2} from 'react-icons/ri';
import { Link } from "react-router-dom";

const Task = () => {
    const {tasks,isLoading} = useGlobalTaskContext()
    const [tassk,uptassk]=useState(new Map());
    const [lenth,uplenth]=useState(0);

      useEffect(()=>{  
        tasks.map((steptask)=>{
            console.log("cheeku")
            if(!tassk.has(steptask.category)){console.log("cheeku");tassk[steptask.category]=[steptask];}
            else{
                const updatedtask=[...uptassk[steptask.category],steptask];
                uptassk[steptask.category]=updatedtask;
            
            }
            uplenth(Object.keys(tassk).length)    
    })
},[tasks]);

if(lenth>0){
    return (
        
        <>
           <NavBar/>
            
    <div className="cards">

            {Object.keys(tassk).map((key) =>(
            <div className="card">
                            <div style={{justifyContent:"space-between",display:"flex" , marginBottom:"5%"}}>
                            <h3>Backlog</h3> 
                            <button >+</button>
                            </div>
            
                                {tassk[key].map(value1 => (
                                    
                                    <div className="taskcard">
                                    <Link to='/task' style={{textDecoration:"none"}}><h3>{value1.title}</h3></Link> 
                                    <p style={{wordBreak: "break-all" ,  whiteSpace: "normal"}}>{value1.description}</p>                            <div style={{justifyContent:"flex-end" , display:"flex",fontSize:"120%"}}>
                                    <Link to='/task' style={{margin:"1%"}}><RiMessage3Line  /></Link>
                                    <Link to='/task' style={{margin:"1%"}}><RiAttachment2 /></Link>
                                    </div>
                                    </div>
                                
                                ))}
            </div>
            ))}
    </div>

        </>
    )}


}

export default Task