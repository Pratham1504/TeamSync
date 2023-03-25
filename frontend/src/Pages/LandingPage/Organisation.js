import React, { useEffect, useState } from "react";
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import {FiMoreVertical} from 'react-icons/fi';
import {IoIosAddCircleOutline} from 'react-icons/io'
import { Link } from "react-router-dom";
import useOrgin from "../../hooks/useOrgin";

const Organisation = () => {

    const {orgin,isLoading,error} = useOrgin()

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
    

    return (
        <>
            <div>
                <div style={{ display: "flex", height: "10vh", alignItems: "center", backgroundColor:"#f1f1f1",boxShadow: "2px 2px 5px rgba(0,0,0,0.10)",}}>
                    <div style={{ width: "0.7%", backgroundColor: "blue", marginRight: "8px", borderRadius: "20%" }}>.</div>
                    <h3>Organisations</h3>
                </div>



                <div className="orgss" style={{ display: "flex" ,overflowX:"auto"}}>
                    
                <div className="org-details" onClick={()=>{}} style={{  fontSize:"150%",display:"flex",justifyContent:"center",alignItems:"center", backgroundColor:"#f1f1f1"}}>
                           <IoIosAddCircleOutline/> <p>Add Organisation</p>
                        </div>
                    {orgs && orgs.map((organisation) => (
                        <div className="org-details" style={{  }}>
                            <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-start" }}>
                                <img src={organisation.image} style={{ height: "7vh", width: "5vh" }} alt="" />
                                <h4><Link to={`/home?org=${organisation.name}`} onClick={()=>{console.log("organisation._id");console.log(organisation._id) ; orgin(organisation._id)}} disabled={isLoading}>{organisation.name}</Link></h4>
                            </div>
                            <p><strong>Creator: </strong>{organisation.createdBy}</p>
                            <p>{formatDistanceToNow(new Date(organisation.createdAt), { addSuffix: true })}</p>
                            <span className="material-symbols-outlined" onClick={() => { }}><FiMoreVertical/></span>
                        </div>
                    ))}
                    
                </div>

            </div>
        </>
    )


}
export default Organisation;