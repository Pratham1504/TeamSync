import { useEffect, useState } from "react"
import NavBar from "../navBar";
import './OrgDetails.css';
import { IoIosAddCircleOutline } from 'react-icons/io';

const User = () => {
    const [members, setMembers] = useState();
    const [newMemberEmail, setNewMemberEmail] = useState("");

    useEffect(() => {
        const fetchdata = async () => {
            let openOrg = JSON.parse(localStorage.getItem('user')).openOrg;
            let org = await fetch(`organisation/${openOrg.openOrgId}`);
            let orgss = await org.json();
            let memberss = orgss.members;
            setMembers(memberss);
        }
        fetchdata();
    }, [members]);

    const addMember = async () => {

        let newInviteId;

        let temp = await fetch('user/');
        let tempUser = await temp.json();
        const filteredUser = await tempUser.filter(person => person.email === newMemberEmail);
        // console.log(filteredUser[0]._id);      

        await fetch('userInvites/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                invitee: filteredUser[0]._id,
                email: newMemberEmail,
                invitedBy: JSON.parse(localStorage.getItem('user'))._id,
                org: JSON.parse(localStorage.getItem('user')).openOrg.openOrgId,
            })
        })
            .then(response => response.json())
            .then(async (result) => {
                newInviteId = result._id;
                console.log("Success!");
            })
            .catch(error => {
                console.error('Error:', error);
            });
               
        const user = JSON.parse(localStorage.getItem('user'));
        const sentInvites = user.sentInvites;
        
        await fetch(`user/${JSON.parse(localStorage.getItem('user'))._id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ "sentInvites": [...sentInvites, newInviteId] })
        })

        user.sentInvites = [...sentInvites, newInviteId];
        localStorage.user = JSON.stringify(user);



        let newMember = await fetch(`user/${filteredUser[0]._id}`);
        let newMemberObj = await newMember.json();
        let newMemberInvites = newMemberObj.invites;
        let newMemberInviteUpdateObj = {
            OrgId:JSON.parse(localStorage.getItem('user')).openOrg.openOrgId,
            OrgName:JSON.parse(localStorage.getItem('user')).openOrg.openOrgName,
            InvitedByName:JSON.parse(localStorage.getItem('user')).name,
            InviteId:newInviteId
        }

        

        await fetch(`user/${filteredUser[0]._id}` , {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ "invites": [...newMemberInvites, newMemberInviteUpdateObj] })
        })


        

        setNewMemberEmail("");

    }

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
            <div className="orgss" style={{ display: "flex", overflowX: "auto" }}>

                <div className="org-details" data-bs-toggle="modal" data-bs-target="#Create-Board" style={{ fontSize: "150%", display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "#f1f1f1" }}>
                    <IoIosAddCircleOutline /> <p>Add Members</p>
                </div>

                <div class="modal fade" id="Create-Board" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Add New Member</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <div class="modal-body">
                                    <div class="mb-3 row">
                                        <label for="inputDescription" class="col-sm-12 col-form-label">Email of User:</label>
                                        <div class="col">
                                            <input type="text" class="form-control" id="inputdescription" value={newMemberEmail} onChange={e => setNewMemberEmail(e.target.value)} />
                                        </div>
                                    </div>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-primary" data-bs-dismiss="modal" onClick={addMember}>Add Member</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {members && members.map((member) => (
                    <div className="board-details" style={{ width: "28%" }} >
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-start" }}>
                            <img src={member.image} style={{ height: "7vh", width: "5vh" }} alt="" />
                            <h4>{member.name}</h4>
                        </div>
                        <p><strong>Creator: </strong>{member.email}</p>
                    </div>

                ))}

            </div>
            {/* <section class="px-4 md:px-8 projects__container">
            
                <div>
                    <ul class="overflow-auto flex">
                        {projects.map((project) => (
                            <li key={project.id}>
                                <MemberCard id={project.id} names={project.name} description={project.description} updatedAt={project.updatedAt} boards={project.boards.length} />
                            </li>
                        ))}
                    </ul>
                </div>

            </section> */}

        </>
    )
}

export default User;