import React, { useEffect, useState } from "react";
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import {FiMoreVertical} from 'react-icons/fi';
import {IoIosAddCircleOutline} from 'react-icons/io'
import { json, Link } from "react-router-dom";
import useAuthContext  from '../../hooks/useAuthContext';


const Organisation = () => {
    const {user} =  useAuthContext()
   const [a,aa]=useState({})
    const [orgs, setorgs] = useState();


    useEffect(() => {
   
        const fetchdata = async () => {
            const org = await fetch('/organisation/')
            const orgss = await org.json();
            if (!org) console.log("empty");
            if (org.ok) {
                setorgs(orgss);
            }
        }
        fetchdata();
    }, [])
 
  

    async function updateuser(){

        const a= JSON.parse(localStorage.user)
      a.openOrg=orgs[1]._id
      localStorage.user=JSON.stringify(a);
      console.log(a)
    window.location.reload()
        
            const userr= await fetch(`/user/${user._id}`,{
                method:'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ "openOrg":orgs[1]._id})
            })
           
    }

    return (
        <>
            <div>
                <div style={{ display: "flex", height: "10vh", alignItems: "center", backgroundColor:"#f1f1f1",boxShadow: "2px 2px 5px rgba(0,0,0,0.10)",}}>
                    <div style={{ width: "0.7%", backgroundColor: "blue", marginRight: "8px", borderRadius: "20%" }}>.</div>
                    <h4 style={{fontWeight:"bolder"}}>Organisations</h4>
                </div>



                <div className="orgss" style={{ display: "flex" ,overflowX:"auto"}}>
                    
                <div className="org-details" data-bs-toggle="modal" data-bs-target="#Create-Board" onClick={()=>{}} style={{  fontSize:"150%",display:"flex",justifyContent:"center",alignItems:"center", backgroundColor:"#f1f1f1"}}>
                           <IoIosAddCircleOutline/> <p>Add Organisation</p>
                        </div>

                        <div class="modal fade" id="Create-Board" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="exampleModalLabel">Add New Organisation</h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <form>
                                        <label for="name">Name of Organisation:</label>
                                        <input type="text" id="name" name="name" required />

                                        <label for="image">Image of Organization:</label>
                                        <input type="file" id="image" name="image" accept="image/*" required />

                                        <input type="submit" value="Submit" />
                                    </form>

                                </div>
                            </div>
                        </div>
                    </div>
                    {orgs && orgs.map((organisation) => (
                        <div className="org-details" style={{  }}>
                            <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-start" }}>
                                <img src={organisation.image} style={{ height: "7vh", width: "5vh" }} alt="" />
                                <h4 onClick={updateuser}><Link to={`/home`} style={{fontStyle:"none" ,marginLeft:"3%"}} >{organisation.name}</Link></h4>
                            </div>
                            <p><strong>Creator: </strong>{organisation.createdBy}</p>
                            <p>{formatDistanceToNow(new Date(organisation.createdAt), { addSuffix: true })}</p>
                            <span className="material-symbols-outlined" onClick={() => { }}>
                            <div class="dropdown">
                            <button class="dropbtn"><FiMoreVertical/></button>
                            <div class="dropdown-content">
                            <button class="btn btn-dark" onClick={()=>{}}>Edit</button>
                                <a href="/profile">Delete</a>
                            </div>
                            </div>
                    </span>

                        </div>
                    ))}
                    
                </div>

            </div>
        </>
    )


}
export default Organisation;