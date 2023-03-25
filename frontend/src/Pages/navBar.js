import {CgProfile} from 'react-icons/cg';
import { Link } from 'react-router-dom';
// import User from './Pages/UserPage/User'
import useLogout from '../hooks/useLogout'
import './navbar.css'
import {MdArrowDropDown} from 'react-icons/md';

const NavBar=()=>{
    const {logout} = useLogout()
    const user = JSON.parse(localStorage.getItem('user'))

    // console.log(12234)
    // console.log(window.location.search)

    // const params = new Proxy(new URLSearchParams(window.location.search), {
    //     get: (searchParams, prop) => searchParams.get(prop),
    //   });
    //   // Get the value of "some_key" in eg "https://example.com/?some_key=some_value"
    //   let value = params.some_key; // "some_value"
      let value = window.location.search.split('=')[1]
    //   window.location.search = "?org="+val 
    //   console.log(12234)
    //   console.log(value)

    const clickHandler = () =>{
        logout()
    }
    return(
        <>
        <div className='navbar' style={{display:"flex",justifyContent:"space-between",alignItems:"center",height:"5vh",}}>
            <div className="links" style={{display:"flex",width:"45%",justifyContent:"space-around",alignItems:"center"}}>
            <img src="https://www.clipartmax.com/png/small/413-4139811_transparent-background-cool-logo.png" alt="Transparent Background Cool Logo @clipartmax.com"style={{height:"5vh"}}/>
                    <a href="/" className="Pname" style={{textDecoration:"none",color:"black",fontSize:"150%",fontWeight:"bold"}}>Project2023</a>
                    <p ><Link to={`/home?org=${value}`} style={{textDecoration:"none"}}>Home</Link></p>
                    <p ><Link to='/task' style={{textDecoration:"none"}}>My tasks</Link></p>
                    <p ><Link to='/projects' style={{textDecoration:"none"}}>Projects</Link></p>
                    <p ><Link to='/user' style={{textDecoration:"none"}}>Users</Link></p>
                    <p ><Link to='/orgs' style={{textDecoration:"none"}}>Orgs</Link></p>
            </div>
            <div className="orgname" style={{display:"flex",width:"20%",justifyContent:"space-around",alignItems:"center"}}>
                <div style={{display:"flex",alignItems:"center"}}>
                    <p >org:</p><p style={{fontSize:"120%"}}>My org</p>
                </div>
                
                <div style={{display:"flex",alignItems:"center"}}>
                    <CgProfile style={{fontSize:"150%",margin:"4px"}}/>
                    <p style={{fontSize:"80%"}}>{user.name}</p>
                    {/* <button class="btn btn-dark" onClick={clickHandler}>Log out</button> */}
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