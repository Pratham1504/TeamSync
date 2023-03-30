import { CgProfile } from 'react-icons/cg';
import { Link } from 'react-router-dom';
// import User from './Pages/UserPage/User'
import useLogout from '../hooks/useLogout'

const NavBar = () => {
    const { logout } = useLogout()
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

    const clickHandler = () => {
        logout()
    }
    return (
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
                                <Link to={`/home?org=${value}`} className='nav-link' style={{ textDecoration: "none" }}>Home</Link>
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
                    <a href="/" className="Pname " style={{textDecoration:"none",color:"black",fontSize:"150%",fontWeight:"bold"}}>Project2023</a>
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
                    <button class="btn btn-dark" onClick={clickHandler}>Log out</button>
                </div>
                
                
            </div>
        </div> */}

        </>
    )
}

export default NavBar;