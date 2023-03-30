import {CgProfile} from 'react-icons/cg';
import { Link } from 'react-router-dom';
import useLogout from '../hooks/useLogout'
import useAuthContext  from '../hooks/useAuthContext';
import './navbar.css'
import {MdArrowDropDown} from 'react-icons/md';

const NavBar=()=>{
    const {authuser} =  useAuthContext()
    const {logout} = useLogout()
    const user = JSON.parse(localStorage.getItem('user'))

    const clickHandler = () =>{
        logout()
    }

    const orgout=async()=>{
        const userr=await fetch(`/user/${authuser.id}`,{
            method:'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ openOrg:null})
        })
    }

    return(
        <>
        <div className='navbar' style={{display:"flex",justifyContent:"space-between",alignItems:"center",height:"5vh",}}>
            <div className="links" style={{display:"flex",width:"45%",justifyContent:"space-around",alignItems:"center"}}>
            <img src="https://www.clipartmax.com/png/small/413-4139811_transparent-background-cool-logo.png" alt="Transparent Background Cool Logo @clipartmax.com"style={{height:"5vh"}}/>
                    <a href="/" className="Pname" style={{textDecoration:"none",color:"black",fontSize:"150%",fontWeight:"bold"}} onClick={orgout}>Project2023</a>
                    <p ><Link to={`/home`} style={{textDecoration:"none"}}>Home</Link></p>
                    <p ><Link to='/task' style={{textDecoration:"none"}}>My tasks</Link></p>
                    <p ><Link to='/projects' style={{textDecoration:"none"}}>Projects</Link></p>
                    <p ><Link to='/orgdetails' style={{textDecoration:"none"}}>Org Details</Link></p>
            </div>
            <div className="orgname" style={{display:"flex",width:"20%",justifyContent:"space-around",alignItems:"center"}}>
                <div style={{display:"flex",alignItems:"center"}}>
                    <p >org:</p><p style={{fontSize:"120%"}}> My org</p>
                </div>
                
                <div style={{display:"flex",alignItems:"center"}}>
                    <CgProfile style={{fontSize:"150%",margin:"4px"}}/>
                    <p style={{fontSize:"80%"}}>{user.name}</p>
                    <div class="dropdown">
                    <button class="dropbtn"><MdArrowDropDown/></button>
                    <div class="dropdown-content">
                    <button class="btn btn-dark" onClick={clickHandler}>Log out</button>
                    <p ><Link to='/profile' style={{textDecoration:"none"}}>Profile</Link></p>
                    </div>
                    </div>
                </div>
                
                
            </div>
        </div>
        
        </>
    )
    }
    
    export default NavBar;