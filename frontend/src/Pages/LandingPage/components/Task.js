import React, { useEffect, useState } from "react";

const Tasks=()=>{
    const [tasks,settasks]=useState(null);

useEffect(()=>{
const fetchdata=async ()=>{
  const alltask=await fetch('');
  alltask=await alltask.json();
  if(alltask.ok){
    settasks(alltask);
  }
}
fetchdata();
},[])
return(
    <>
    <div>
       <h1>Tasks</h1>
       
        { tasks && tasks.map((task)=>(
        <div className="card">
            <div>
                <img src={task.image}/>
            </div>
            <div>
                <h1>{task.name}</h1>
            </div>
        </div>
        ))}
    </div>
    </>
)
        

}
export default Tasks;