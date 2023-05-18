import React, { useEffect, useState } from "react";
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import { FiMoreVertical } from 'react-icons/fi';
import { IoIosAddCircleOutline } from 'react-icons/io'
import { Link } from "react-router-dom";
import BoardsInProject from '../BoardsInProjectPage/BoardsInProject';
// import { useGlobalBoardContext } from "../../context/boardContext";
// import useOrgin from "../../hooks/useOrgin";


const Projects = () => {
    const [Projects, setProjects] = useState([]);
    // const [newprojectId, setNewProjectId] = useState("");
    const [newProjectName, setNewProjectName] = useState("");
    const [newProjectDescription, setNewProjectDescription] = useState("");

    useEffect(() => {
        const fetchdata = async () => {
            let openOrg = JSON.parse(localStorage.getItem('user')).openOrg;
            let org = await fetch(`/organisation/${openOrg}`);
            let orgss = await org.json();
            let projectIds = orgss.projects;
            let projectObjs = [];
            for (let i = 0; i < projectIds.length; i++) {
                let temp = await fetch(`/projects/${projectIds[i]}`);
                let tempproject = await temp.json();
                projectObjs.push(tempproject);
            }
            setProjects(projectObjs);
        }
        fetchdata();
    }, [])

    const addProject = async () => {
        fetch('projects/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: newProjectName,
                description: newProjectDescription,
                createdBy: JSON.parse(localStorage.getItem('user'))._id,
                orgId: JSON.parse(localStorage.getItem('user')).openOrg,
            })
        })
            .then(response => response.json())
            .then(async (result) => {
                //   console.log('Success:', result) 
                // setNewProjectId(result._id);             
            })
            .catch(error => {
                //   console.error('Error:', error);
            });


        setNewProjectName("");
        setNewProjectDescription("");

    }



    return (
        <>
            <div>
                <div style={{ display: "flex", height: "10vh", alignItems: "center", backgroundColor: "#f1f1f1", boxShadow: "2px 2px 5px rgba(0,0,0,0.10)", }}>
                    <div style={{ width: "0.7%", backgroundColor: "blue", marginRight: "8px", borderRadius: "20%" }}>.</div>
                    <h3>Projects</h3>
                </div>
                <div style={{ display: "flex", flexWrap: "wrap" }}>
                    <div className="board-details" data-bs-toggle="modal" data-bs-target="#Create-Board" onClick={() => { }} style={{ width: "28%", fontSize: "150%", display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "#f1f1f1" }}>
                        <IoIosAddCircleOutline /> <p>New Project</p>
                    </div>
                    <div class="modal fade" id="Create-Board" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="exampleModalLabel">New Project</h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <div class="mb-3 row">
                                        <label for="inputName" class="col-sm-2 col-form-label">Name</label>
                                        <div class="col-sm-10">
                                            <input type="text" readonly class="form-control-plaintext" id="inputName" onChange={e => setNewProjectName(e.target.value)} />
                                        </div>
                                    </div>
                                    <div class="mb-3 row">
                                        <label for="inputDescription" class="col-sm-3 col-form-label">Description</label>
                                        <div class="col-sm-9">
                                            <input type="text" class="form-control" id="inputdescription" onChange={e => setNewProjectDescription(e.target.value)} />
                                        </div>
                                    </div>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-primary" data-bs-dismiss="modal" onClick={addProject}>Add Project</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {Projects && Projects.map((project) => (
                        <div className="board-details" style={{ width: "28%" }}>
                            {/* <Link style={{textDecoration:"none"}} to="/"> */}
                                <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-start" }}>
                                    <h4>{project.name}</h4>
                                </div>
                                <p><strong>Creator: </strong>{project.description}</p>
                                <p>{formatDistanceToNow(new Date(project.createdAt), { addSuffix: true })}</p>
                                <span className="material-symbols-outlined" onClick={() => { }}><FiMoreVertical /></span>
                            {/* </Link> */}
                        </div>

                    ))}
                </div>
            </div>
        </>
    )


}
export default Projects;