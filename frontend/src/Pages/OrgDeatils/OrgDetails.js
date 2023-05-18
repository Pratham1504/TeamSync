import { useEffect, useState } from "react"
import useAuthContext from '../../hooks/useAuthContext';
import NavBar from "../navBar";
import './OrgDetails.css'
import MemberCard from "./MemberCard";
// import Member from '../../components/Member';
// const mongoose=require('mongoose') 

const User = () => {
    const [org, setorg] = useState(null);
    const [owner, setowner] = useState(null);
    const { user } = useAuthContext();

    useEffect(() => {

        console.log(user)

        const getOrg = async () => {

            const orgg = await fetch(`organisation/${user.openOrg}`);
            const orggg = await orgg.json()
            setorg(orggg);
        }
        getOrg();
    }, [])

    useEffect(() => {
        const getowner = async () => {
            const ownerr = await fetch(`user/${org.createdBy}`)
            const ownerrr = await ownerr.json();
            setowner(ownerrr)
        }
        getowner();
    }, [org]);
    console.log(owner)

    const projects=[
        {
            id:1,
            name:'projName',
            description:'hello',
            updatedAt:'8 hours',
            boards:['abcd123','dcba321']
            
        },
        {
            id:1,
            name:'projName',
            description:'hello',
            updatedAt:'8 hours',
            boards:['abcd123','dcba321']
            
        },
        {
            id:1,
            name:'projName',
            description:'hello',
            updatedAt:'8 hours',
            boards:['abcd123','dcba321']
            
        },
        {
            id:1,
            name:'projName',
            description:'hello',
            updatedAt:'8 hours',
            boards:['abcd123','dcba321']
            
        },
        {
            id:1,
            name:'projName',
            description:'hello',
            updatedAt:'8 hours',
            boards:['abcd123','dcba321']
            
        },
        {
            id:1,
            name:'projName',
            description:'hello',
            updatedAt:'8 hours',
            boards:['abcd123','dcba321']
            
        },
    ]
    return (
        <>
            <NavBar />
            <div style={{ display: "flex", height: "10vh", alignItems: "center", backgroundColor: "#f1f1f1", boxShadow: "2px 2px 5px rgba(0,0,0,0.10)", }}>
                <div style={{ width: "0.7%", backgroundColor: "blue", marginRight: "8px", borderRadius: "20%" }}>.</div>
                {/* <img src={owner.image} style={{ height: "7vh", width: "5vh" }} alt="" /> */}
                <h4 style={{ fontWeight: "bolder" }}>organisation name</h4>
            </div>
            <div className="singleOrg">
                <div class="description">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin cursus erat et sapien dignissim, ac faucibus lacus finibus. Nulla luctus ligula sit amet nunc bibendum, ut vulputate leo auctor. Sed aliquet neque a neque cursus feugiat. Vestibulum pharetra euismod nulla, eu pretium risus. Nunc et mauris nisl. Ut convallis metus non arcu consequat placerat. Ut posuere, sem sit amet laoreet bibendum, nisi tortor commodo lectus, ut pulvinar felis nisl eu sapien.</p>
                </div>
            </div>
            <div style={{ display: "flex", height: "7vh", alignItems: "center", }} class="md:px-8 mt-8">
                <div style={{ width: "8px", backgroundColor: "blue", marginRight: "8px", borderRadius: "20%" }}>.</div>
                <h2 class="text-xl font-semibold">Members</h2>
            </div>
            <section class="px-4 md:px-8 projects__container">
            <div>
                    <ul class="overflow-auto flex">
            {projects.map((project) => (
              <li key={project.id}>
                <MemberCard id={project.id} names={project.name} description={project.description} updatedAt={project.updatedAt} boards={project.boards.length} />
              </li>
            ))}
          </ul>
                </div>
            
            </section>

        </>
    )
}

export default User;