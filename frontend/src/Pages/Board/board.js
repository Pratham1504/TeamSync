import React from "react";
import './board.css'
import NavBar from "../navBar";
import TaskCard from './TaskCard';
import {useGlobalTaskContext} from '../../context/taskContext';
import './board.css'
import {RiMessage3Line,RiAttachment2} from 'react-icons/ri';
import { Link } from "react-router-dom";

const Task = () => {
    const {tasks,isLoading} = useGlobalTaskContext()
    console.log(tasks)
    console.log(isLoading)
    return (
        <>
            <NavBar/>
            <div className="cards">
            
                <div className="card">
                    <div style={{justifyContent:"space-between",display:"flex" , marginBottom:"5%"}}>
                    <h3>Backlog</h3> 
                    <button >+</button>
                    </div>
                    {tasks && tasks.map((task) => (
                        <>
                            <div className="taskcard">
                            <Link to='/task' style={{textDecoration:"none"}}><h3>{task.title}</h3></Link>
                            <p style={{wordBreak: "break-all" ,  whiteSpace: "normal"}}>{task.description}</p>
                            <div style={{justifyContent:"flex-end" , display:"flex",fontSize:"120%"}}>
                            <Link to='/task' style={{margin:"1%"}}><RiMessage3Line  /></Link>
                            <Link to='/task' style={{margin:"1%"}}><RiAttachment2 /></Link>
                            </div>
                            </div>
                        </> 
                    ))}
                </div>
                <div className="card">
                    <div style={{justifyContent:"space-between",display:"flex" , marginBottom:"5%"}}>
                    <h3>Backlog</h3> 
                    <button >+</button>
                    </div>
                    {tasks && tasks.map((task) => (
                        <>
                            <div className="taskcard">
                            <Link to='/task' style={{textDecoration:"none"}}><h3>{task.title}</h3></Link>
                            <p style={{wordBreak: "break-all" ,  whiteSpace: "normal"}}>{task.description}</p>
                            <div style={{justifyContent:"flex-end" , display:"flex",fontSize:"120%"}}>
                            <Link to='/task' style={{margin:"1%"}}><RiMessage3Line  /></Link>
                            <Link to='/task' style={{margin:"1%"}}><RiAttachment2 /></Link>
                            </div>
                            </div>
                        </> 
                    ))}
                </div><div className="card">
                    <div style={{justifyContent:"space-between",display:"flex" , marginBottom:"5%"}}>
                    <h3>Backlog</h3> 
                    <button >+</button>
                    </div>
                    {tasks && tasks.map((task) => (
                        <>
                            <div className="taskcard">
                            <Link to='/task' style={{textDecoration:"none"}}><h3>{task.title}</h3></Link>
                            <p style={{wordBreak: "break-all" ,  whiteSpace: "normal"}}>{task.description}</p>
                            <div style={{justifyContent:"flex-end" , display:"flex",fontSize:"120%"}}>
                            <Link to='/task' style={{margin:"1%"}}><RiMessage3Line  /></Link>
                            <Link to='/task' style={{margin:"1%"}}><RiAttachment2 /></Link>
                            </div>
                            </div>
                        </> 
                    ))}
                </div><div className="card">
                    <div style={{justifyContent:"space-between",display:"flex" , marginBottom:"5%"}}>
                    <h3>Backlog</h3> 
                    <button >+</button>
                    </div>
                    {tasks && tasks.map((task) => (
                        <>
                            <div className="taskcard">
                            <Link to='/task' style={{textDecoration:"none"}}><h3>{task.title}</h3></Link>
                            <p style={{wordBreak: "break-all" ,  whiteSpace: "normal"}}>{task.description}</p>
                            <div style={{justifyContent:"flex-end" , display:"flex",fontSize:"120%"}}>
                            <Link to='/task' style={{margin:"1%"}}><RiMessage3Line  /></Link>
                            <Link to='/task' style={{margin:"1%"}}><RiAttachment2 /></Link>
                            </div>
                            </div>
                        </> 
                    ))}
                </div><div className="card">
                    <div style={{justifyContent:"space-between",display:"flex" , marginBottom:"5%"}}>
                    <h3>Backlog</h3> 
                    <button >+</button>
                    </div>
                    {tasks && tasks.map((task) => (
                        <>
                            <div className="taskcard">
                            <Link to='/task' style={{textDecoration:"none"}}><h3>{task.title}</h3></Link>
                            <p style={{wordBreak: "break-all" ,  whiteSpace: "normal"}}>{task.description}</p>
                            <div style={{justifyContent:"flex-end" , display:"flex",fontSize:"120%"}}>
                            <Link to='/task' style={{margin:"1%"}}><RiMessage3Line  /></Link>
                            <Link to='/task' style={{margin:"1%"}}><RiAttachment2 /></Link>
                            </div>
                            </div>
                        </> 
                    ))}
                </div>
            </div>
        </>
    )
}

export default Task