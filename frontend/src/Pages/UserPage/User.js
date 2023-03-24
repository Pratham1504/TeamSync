import {  useEffect, useState } from "react"
import useAuthContext from '../../hooks/useAuthContext';
// import Member from '../../components/Member';
// const mongoose=require('mongoose') 

const User=()=>{
    const [org,setorg]=useState(null);
    const [owner,setowner]=useState(null);
    const {user}= useAuthContext();
 
    useEffect(()=>{

                 console.log(user)
            
                    const getOrg=async ()=>{
                    
                    const orgg=await fetch(`organisation/${user.openOrg}`);
                    const orggg=await orgg.json()
                    setorg(orggg);
                    }
                    getOrg();
    },[])
 
    useEffect(()=>{
        const getowner=async ()=>{
            const ownerr= await fetch(`user/${org.createdBy}`)
            const ownerrr=await ownerr.json();
            setowner(ownerrr)
        }
        getowner();
    },[org]);
    console.log(owner)
    return(
        <>
          { 
            owner && <div>
                <div>
                    <div>
                        <img src={owner.image}/>
                    </div>
                    <div>
                        
                        <p>{owner.name}</p>
                        <p>{owner.email}</p> 
                        
                        <p>Role: Admin</p>
                    </div>
                </div>
            {
            // org.members && org.members.map((memberid)=>{
            //     <Member props={memberid}/>
            // }
            // )
            }
                </div> 
                }          
        </>
    )
}

export default User;