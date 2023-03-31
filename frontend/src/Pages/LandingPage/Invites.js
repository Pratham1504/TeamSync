import React, { useEffect, useState } from "react";
import formatDistanceToNow from 'date-fns/formatDistanceToNow';

const Invites=()=>{
    const [invite,setinvite]=useState([]);

useEffect(()=>{
            const fetchdata=async ()=>{
            const allinvite=await fetch('/userInvites/');
            console.log("ethe")
            const  allinvitee=await allinvite.json();
            console.log(allinvitee)
            if(allinvite.ok){
                setinvite(allinvitee);
                
            
            }
            console.log(invite)
}
console.log("ethes")
fetchdata();
console.log(invite)

},[])
if(invite.length){
    return(
        <>    
                <div>
                    <div style={{ display: "flex", height: "10vh", alignItems: "center", backgroundColor:"#f1f1f1",boxShadow: "2px 2px 5px rgba(0,0,0,0.10)",fontFamily:"Verdana"}}>
                        <div style={{ width: "0.7%", backgroundColor: "blue", marginRight: "8px", borderRadius: "20%" }}>.</div>
                        <h4 style={{fontWeight:"bolder"}}>Pending Invites</h4>
                        </div>
                    <div className="orgss" style={{ display: "flex" ,overflowX:"auto"}}>
                              {console.log(invite.length)}
                                { invite && invite.map((invites)=>(
                                    <div className="invite-details" style={{fontFamily:"Verdana"}}>
                                    <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-start" }}>
                                        <h4>{invites.org}</h4>
                                    </div>
                                    <p><strong>Invited by </strong>{invites.invitedBy}</p>
                                    <p>{formatDistanceToNow(new Date(invites.createdAt), { addSuffix: true })}</p>
                                    <div style={{display:"flex", alignItems:"space-between",minWidth:"300px",justifyContent: "center",marginTop:"3%"}}>

                                        <button type="submit" value="Submit" style={{marginRight:"5%",backgroundColor:"blue",color:"white"}}>Accept</button>
                                        <button type="reset" value="Reset"  style={{marginLeft:"5%"}}>Delete</button>
                                    </div>
                                </div>
                                ))}
                                </div>
                    </div>
        </>
    )
    
}
        else {
            return (
                <>
                    <div>
                    <div style={{ display: "flex", height: "10vh", alignItems: "center", backgroundColor:"#f1f1f1",boxShadow: "2px 2px 5px rgba(0,0,0,0.10)",fontFamily:"Verdana"}}>
                        <div style={{ width: "0.7%", backgroundColor: "blue", marginRight: "8px", borderRadius: "20%" }}>.</div>
                            <h3>Pending Invites</h3>
                        </div>
                    <div className="orgss" style={{ display: "flex" ,overflowX:"auto"}}>
                    {console.log(invite.length)}
                                <h1 >Hello</h1>
                                </div>
                    </div>
                </>
            )
        }

}
export default Invites;