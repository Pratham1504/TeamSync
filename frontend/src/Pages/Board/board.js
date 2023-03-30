import React from "react";
import './board.css'
import NavBar from "../navBar";
import TaskCard from './TaskCard';

const Task = () => {
    return (
        <>
            <NavBar/>
            <div className="cards">
                <div className="card">
                    <div style={{justifyContent:"space-between",display:"flex" , marginBottom:"5%"}}>
                    <h3>Backlog</h3> 
                    <button >+</button>
                    </div>
                    <TaskCard/>
                    <TaskCard/>
                    <TaskCard/>
                    <TaskCard/>
                    <TaskCard/>
                </div>
                <div className="card">
                    <div style={{justifyContent:"space-between",display:"flex" , marginBottom:"5%"}}>
                    <h3>Backlog</h3> 
                    <button >+</button>
                    </div>
                    <TaskCard/>
                </div>
                <div className="card">
                    <div style={{justifyContent:"space-between",display:"flex" , marginBottom:"5%"}}>
                    <h3>Backlog</h3> 
                    <button >+</button>
                    </div>
                    <TaskCard/>
                </div>
                <div className="card">
                    <div style={{justifyContent:"space-between",display:"flex" , marginBottom:"5%"}}>
                    <h3>Backlog</h3> 
                    <button >+</button>
                    </div>
                    <TaskCard/>
                </div>
                <div className="card">
                    <div style={{justifyContent:"space-between",display:"flex" , marginBottom:"5%"}}>
                    <h3>Backlog</h3> 
                    <button >+</button>
                    </div>
                    <TaskCard/>
                </div>
                <div className="card">
                    <div style={{justifyContent:"space-between",display:"flex", marginBottom:"5%"}}>
                    <h3>Backlog</h3> 
                    <button >+</button>
                    </div>
                    <TaskCard/>
                </div>
            </div>
        </>
    )
}

export default Task