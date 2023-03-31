import { CgProfile } from 'react-icons/cg';
import { Link } from 'react-router-dom';
import useLogout from '../hooks/useLogout'
import useAuthContext  from '../hooks/useAuthContext';
import './navbar.css'
import 'bootstrap/dist/css/bootstrap.css';
// import {MdArrowDropDown} from 'react-icons/md';

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

            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                    <img src="https://www.clipartmax.com/png/small/413-4139811_transparent-background-cool-logo.png" alt="Transparent Background Cool Logo @clipartmax.com" style={{ height: "5vh" , marginLeft:"0" ,paddingLeft:'0', }} />
                    <a href="/" className="Pname nav-link active" style={{ textDecoration: "none", color: "black", fontSize: "150%", fontWeight: "bold" ,marginRight:"2%",marginLeft:"1%"}}>Project2023</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-0 mb-lg-0">
                            <li class="nav-item" style={{ display: "flex", alignItems: "center" }}>
                                <Link to={`/home?org=`} className='nav-link' style={{ textDecoration: "none" }}>Home</Link>
                            </li>
                            <li class="nav-item" style={{ display: "flex", alignItems: "center" }}>
                                <Link to='/task'className='nav-link' style={{ textDecoration: "none" }}>My tasks</Link>
                            </li>
                            <li class="nav-item" style={{ display: "flex", alignItems: "center" }}>
                                <Link to='/projects' className='nav-link' style={{ textDecoration: "none" }}>Projects</Link>
                            </li>
                            <li class="nav-item" style={{ display: "flex", alignItems: "center" }}>
                                <Link to='/user' className='nav-link' style={{ textDecoration: "none" }}>Users</Link>
                            </li>
                            <li class="nav-item" style={{ display: "flex", alignItems: "center" }}>
                                <Link to='/orgs'className='nav-link' style={{ textDecoration: "none" }}>Orgs</Link>
                            </li>
                        </ul>
                        <div style={{ display: "flex", alignItems: "center" ,marginRight:"2%"}}>
                            <p style={{ marginBottom: "0" }}>org : </p><p style={{ fontSize: "120%", marginBottom: "0" }}>&nbsp;My org</p>
                        </div>
                        <div style={{ display: "flex", alignItems: "center",marginRight:"2%" }}>
                            <CgProfile style={{ fontSize: "150%", margin: "4px" }} />
                            <p style={{ fontSize: "80%", marginBottom: "0" }}>{user.name}</p>
                        </div>
                        <button class="btn btn-secondary btn-sm" onClick={clickHandler} style={{marginRight:"2%"}}>Log out</button>
                    </div>
                </div>
            </nav>

            {/* <div className='navbar' style={{display:"flex",justifyContent:"space-between",alignItems:"center",height:"5vh",}}>
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
        </div> */}

        </>
    )
}

export default NavBar;