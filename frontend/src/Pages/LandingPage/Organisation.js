import React, { useEffect, useState } from "react";

const Organisation=()=>{
    const [orgs,setorgs]=useState();

useEffect(()=>{
const fetchdata= async ()=>{
  const org=await fetch('http://localhost:4000/organisation/')
  const orgss=await org.json();
  if(!org)console.log("empty");
  if(org.ok){
    setorgs(orgss);
  }
}
fetchdata();
},[])
return(
    <>
    <div>
       <h1>Organisation</h1>
       
        { orgs && orgs.map((organisation)=>(
        <div className="card">
            <h1>aditya</h1>
            <div>
                <img src={organisation.image}/>
            </div>
            <div>
                <h1>{organisation.name}</h1>
            </div>
        </div>
        ))}
    </div>
    </>
)
        

}
export default Organisation;