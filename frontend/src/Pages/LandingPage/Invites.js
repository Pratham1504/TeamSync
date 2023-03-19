import React, { useEffect, useState } from "react";
import formatDistanceToNow from 'date-fns/formatDistanceToNow';

const Invites=()=>{
    const [invite,setinvite]=useState(null);

useEffect(()=>{
const fetchdata=async ()=>{
  const allinvite=await fetch('');
  allinvite=await allinvite.json();
  if(allinvite.ok){
    setinvite(allinvite);
  }
}
fetchdata();
},[])
return(
    <>
    <div>
    <div style={{ display: "flex", height: "10vh", alignItems: "center", backgroundColor:"#f1f1f1",boxShadow: "2px 2px 5px rgba(0,0,0,0.10)",fontFamily:"Verdana"}}>
                    <div style={{ width: "0.7%", backgroundColor: "blue", marginRight: "8px", borderRadius: "20%" }}>.</div>
                    <h3>Pending Invites</h3>
                </div>
       
        { invite && invite.map((invites)=>(
            <div className="invite-details" style={{ width: "25%" ,fontFamily:"Verdana"}}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-start" }}>
                {/* <img src={organisation.image} style={{ height: "7vh", width: "5vh" }} alt="" /> */}
                <h4>{invites.org}</h4>
            </div>
            <p><strong>Invited by </strong>{Invites.invitedBy}</p>
            <p>{formatDistanceToNow(new Date(Invites.createdAt), { addSuffix: true })}</p>
            {/* <span className="material-symbols-outlined" onClick={() => { }}><FiMoreVertical/></span> */}
        </div>
        ))}
    </div>
    </>
)
        

}
export default Invites;