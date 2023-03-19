import {CgProfile} from 'react-icons/cg';
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
                    <a href="/Home" className="Pname" style={{textDecoration:"none",color:"black",fontSize:"150%",fontWeight:"bold",fontFamily:"Verdana"}}>UrManagR</a>
                    <a href="/Home" style={{textDecoration:"none",color:"black",fontFamily:"Verdana"}}>Home</a>
                    <a href="/task" style={{textDecoration:"none",color:"black",fontFamily:"Verdana"}}>My tasks</a>
                    <a href="/Projects" style={{textDecoration:"none",color:"black",fontFamily:"Verdana"}}>Projects</a>
                    <a href="/Users" style={{textDecoration:"none",color:"black",fontFamily:"Verdana"}}>Users</a>
                    <a href="/Orgs" style={{textDecoration:"none",color:"black",fontFamily:"Verdana"}}>Orgs</a>
            </div>
            <div className="orgname" style={{display:"flex",width:"20%",justifyContent:"space-around",alignItems:"center"}}>
                <div style={{display:"flex",alignItems:"center",fontFamily:"Verdana"}}>
                    <p >org:</p><p style={{fontSize:"120%",fontFamily:"Verdana"}}>My org</p>
                </div>
                
                <div style={{display:"flex",alignItems:"center",fontFamily:"Verdana"}}>
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