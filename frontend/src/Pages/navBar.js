import { CgProfile } from 'react-icons/cg';
import { Link } from 'react-router-dom';
import useLogout from '../hooks/useLogout'
import './navbar.css'
import 'bootstrap/dist/css/bootstrap.css';
import { useState,useEffect } from 'react';

const NavBar=  ()=>{
    const [orgOpen , setOrgOpen] = useState(null)
    const {logout} = useLogout()
    const user = JSON.parse(localStorage.getItem('user'))
    
    useEffect(()=>{
        const getOrg=async ()=>{        
        const orgg=await fetch(`organisation/${user.openOrg}`);
        const orggg=await orgg.json()
        setOrgOpen(orggg);
        }
        getOrg();
    },[])
    const clickHandler = () =>{
        logout()
    }


    const orgout=async()=>{
      
      const a= JSON.parse(localStorage.user)
      a.openOrg=null
      localStorage.user=JSON.stringify(a);
      console.log(a)
       
      document.location.reload()

        const userr=await fetch(`/user/${user._id}`,{
            method:'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ "openOrg":null})
        })
        
      
    }
         
    if(orgOpen!=null){
        return(
            <>
                <nav class="navbar navbar-expand-lg bg-body-tertiary">
                    <div class="container-fluid">
                        <img src="https://www.clipartmax.com/png/small/413-4139811_transparent-background-cool-logo.png" alt="Transparent Background Cool Logo @clipartmax.com" style={{ height: "5vh" , marginLeft:"0" ,paddingLeft:'0', }} />
                        <Link to="/" className="Pname nav-link active" style={{ textDecoration: "none", color: "black", fontSize: "150%", fontWeight: "bold" ,marginRight:"2%",marginLeft:"1%"}} onClick={orgout}>Project2023</Link>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                            <ul class="navbar-nav me-auto mb-0 mb-lg-0">
                                <li class="nav-item" style={{ display: "flex", alignItems: "center" }}>
                                    <Link to='/home' className='nav-link' style={{ textDecoration: "none" }}>Home</Link>
                                </li>
                                <li class="nav-item" style={{ display: "flex", alignItems: "center" }}>
                                    <Link to='/board'className='nav-link' style={{ textDecoration: "none" }}>My tasks</Link>
                                </li>
                                <li class="nav-item" style={{ display: "flex", alignItems: "center" }}>
                                    <Link to='/projects' className='nav-link' style={{ textDecoration: "none" }}>Projects</Link>
                                </li>
                                <li class="nav-item" style={{ display: "flex", alignItems: "center" }}>
                                    <Link to='/orgdetails' className='nav-link' style={{ textDecoration: "none" }}>org details</Link>
                                </li>
                            </ul>
                            {orgOpen.name && 
                                <div style={{ display: "flex", alignItems: "center" ,marginRight:"2%"}}>
                                    <p style={{ marginBottom: "0" }}>org : </p><p style={{ fontSize: "120%", marginBottom: "0" }}>{orgOpen.name}</p>
                                </div>
                            }
                            <div style={{ display: "flex", alignItems: "center",marginRight:"2%" }}>
                                <CgProfile style={{ fontSize: "150%", margin: "4px" }} />
                                <Link to='/profile' style={{ fontSize: "80%", marginBottom: "0" , textDecoration: "none" }}>{user.name}</Link>
                            </div>
                            <button class="btn btn-secondary btn-sm" onClick={clickHandler} style={{marginRight:"2%"}}>Log out</button>
                    </div>
                </nav>
            </>
        )
    }
}

export default NavBar