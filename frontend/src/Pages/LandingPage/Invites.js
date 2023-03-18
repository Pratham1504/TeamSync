import React, { useEffect, useState } from "react";

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
       <h1>Invites</h1>
       
        { invite && invite.map((invites)=>(
        <div className="card">
            <div>
                <img src={invites.image}/>
            </div>
            <div>
                <h1>{invites.name}</h1>
            </div>
        </div>
        ))}
    </div>
    </>
)
        

}
export default Invites;