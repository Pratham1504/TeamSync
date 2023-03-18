import React, { useEffect, useState } from "react";

const Organisation=()=>{
    const [orgs,setorgs]=useState(null);

useEffect(()=>{
const fetchdata=async ()=>{
  const org=await fetch('');
  org=await org.json();
  if(org.ok){
    setorgs(org);
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