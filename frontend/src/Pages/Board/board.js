import React, { useEffect, useState } from "react";
import './board.css'
import NavBar from "../navBar";
import TaskCard from './TaskCard';
// import { useGlobalTaskContext } from '../../context/taskContext';
import './board.css'
import { RiMessage3Line, RiAttachment2 } from 'react-icons/ri';
import { Link } from "react-router-dom";
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import { intervalToDuration } from "date-fns";


const Task = () => {
   const [tassk,uptassk]=useState(new Map());
   
  const [tasks,collecttasks]=useState([]);
    var word=[];
    var taskk;
    useEffect(()=>{
    
        const total=async ()=>{
           taskk=await fetch("/tasks/");
            taskk=await taskk.json();
            collecttasks(taskk);
        }
        total();

},[]);

    useEffect(() => {
        console.log("cheeku")
        console.log(tasks);
        console.log("aditya")
        tasks.map((steptask) => {
            if (!tassk.has(steptask.category)) {
                tassk.set(steptask.category);
                tassk[steptask.category]=[]
                console.log("aditya")
                tassk[steptask.category].push(steptask);
            }
            else {
                tassk[steptask.category].push(steptask)
            }
        })
        uptassk(tassk);
        console.log(Object.keys(tassk));
    },[tasks])
  const post=async ()=>{
  }
  
    if (tassk.size) {
        return (

            <>
                <NavBar />

                <div className="cards">

                    {Object.keys(tassk).map((key) => (
                        <div className="card">
                            <div style={{ justifyContent: "space-between", display: "flex", marginBottom: "5%" }}>
                                <h3>{key}</h3>
                                <button onClick={post}>+</button>
                            </div>

                            {tassk[key].map(value1 => (

                                <div className="taskcard" data-bs-toggle="modal" data-bs-target="#Task-modal" onClick={() => { }}>
                                    <div className="modal fade" id="Task-modal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" style={{}}>
                                        <div className="modal-dialog">
                                            <div className="modal-content">
                                                <div className="modal-header">
                                                    <h5 className="modal-title" id="exampleModalLabel">{value1.title}</h5>
                                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                </div>
                                                <div className="modal-body" style={{ fontSize: "14px" }}>
                                                    <div className="TaskHead" style={{ display: "flex", justifyContent: "space-between", fontSize: "11px" }}>
                                                        <div style={{ display: "flex" }}>
                                                            <p class="label">Created By:</p>
                                                            <p>Pratham</p>
                                                        </div>

                                                        <div style={{ display: "flex" }}>
                                                            <p class="label">Last updated:</p>
                                                            <p>{formatDistanceToNow(new Date(value1.updatedAt), { addSuffix: true })}</p>
                                                        </div>

                                                        <div style={{ display: "flex" ,onClick:()=>{},cursor:"pointer"}}>
                                                            <p class="label" style={{color:"red",fontSize: "14px"}}>Delete task</p>
                                                        </div>

                                                    </div>
                                                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                                                            <p class="label">Assigned To:</p>
                                                            <select aria-invalid>
                                                                <option>assignees</option>
                                                                <option>muhawara</option>
                                                                <option>piyush</option>
                                                                <option>agrawal</option>
                                                                <option>raghav</option>
                                                            </select>
                                                        </div>
                                                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                                                        <p class="label">Priority:</p>
                                                        <div class="priority">
                                                            <select>
                                                                <option>High</option>
                                                                <option>Medium</option>
                                                                <option>Low</option>
                                                            </select>
                                                        </div>
                                                    </div>


                                                    <div class="description" >
                                                        <p class="label">Description:</p>
                                                        <p>{value1.description}</p>
                                                    </div>

                                                    <div class="attachments" >
                                                        <p class="label">Attachments:</p>
                                                        <ul>
                                                            <li><a href="#">attachment1.docx</a></li>
                                                            <li><a href="#">attachment2.jpg</a></li>
                                                            <li><a href="#">attachment3.pdf</a></li>
                                                        </ul>
                                                    </div>

                                                    <div class="comments" >
                                                        <p class="label">Comments:</p>
                                                        <ul>
                                                            <li><p className="label">raghav:</p>Comment 1</li>
                                                            <li><p className="label">Muhawara:</p>Comments "let me sleep"</li>
                                                            <li ><p className="label">piyush:</p>Comment 2</li>
                                                            <li ><p className="label">agrawal:</p>Comment 3</li>
                                                        </ul>
                                                    </div>

                                                    <div class="add-comment"  >
                                                        <p class="label">Add Comment:</p>
                                                        <textarea style={{resize:"verticle",}}></textarea>
                                                        {/* button for adding comments */}
                                                        <button>Add</button>  

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div style={{ textDecoration: "none" }}><h3>{value1.title}</h3></div>
                                    <p style={{ wordBreak: "break-all", whiteSpace: "normal" }}>{value1.description}</p>
                                    <div style={{ justifyContent: "flex-end", display: "flex", fontSize: "120%" }}>
                                        <div style={{ margin: "1%" }}><RiMessage3Line /></div>
                                        <div style={{ margin: "1%" }}><RiAttachment2 /></div>
                                    </div>
                                </div>

                            ))}
                        </div>
                    ))}
                </div>

            </>
        )
    }


}

export default Task