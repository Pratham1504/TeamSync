import {CgProfile} from 'react-icons/cg';
import { Link } from 'react-router-dom';
import useLogout from '../hooks/useLogout'

const NavBar=()=>{
    const {logout} = useLogout()
    const user = JSON.parse(localStorage.getItem('user'))

    const clickHandler = () =>{
        logout()
    }
    return(
        <>
        <div className='navbar' style={{display:"flex",justifyContent:"space-between",alignItems:"center",height:"5vh",}}>
            <div className="links" style={{display:"flex",width:"45%",justifyContent:"space-around",alignItems:"center"}}>
            <img src="https://www.clipartmax.com/png/small/413-4139811_transparent-background-cool-logo.png" alt="Transparent Background Cool Logo @clipartmax.com"style={{height:"5vh"}}/>
                    <a href="/" className="Pname" style={{textDecoration:"none",color:"black",fontSize:"150%",fontWeight:"bold"}}>UrManagR</a>
                    <a href="/Home" style={{textDecoration:"none"}}>Home</a>
                    <p ><Link to='/task' style={{textDecoration:"none"}}>My tasks</Link></p>
                    <a href="/Projects" style={{textDecoration:"none"}}>Projects</a>
                    <a href="/Users" style={{textDecoration:"none"}}>Users</a>
                    <a href="/Orgs" style={{textDecoration:"none"}}>Orgs</a>
            </div>
            <div className="orgname" style={{display:"flex",width:"20%",justifyContent:"space-around",alignItems:"center"}}>
                <div style={{display:"flex",alignItems:"center"}}>
                    <p >org:</p><p style={{fontSize:"120%"}}>My org</p>
                </div>
                
                <div style={{display:"flex",alignItems:"center"}}>
                    <CgProfile style={{fontSize:"150%",margin:"4px"}}/>
                    <p style={{fontSize:"80%"}}>{user.name}</p>
                    <button class="btn btn-dark" onClick={clickHandler}>Log out</button>
                </div>
                
                
            </div>
        </div>
        
        </>
    )
    }
    
    export default NavBar;