import React from 'react';
import './ProfilePage.css';
// import formatDistanceToNow from 'date-fns/formatDistanceToNow';


const Profile=()=> {
  return (
    <>
    <div className="profile">
      <div className="profile-header">
        <h1 className="profile-name">Pratham goyal</h1>
        <p className="profile-location">Bathinda, Punjab</p>
      </div>
      <div className="profile-body">
        <img className="profile-image" src="https://media.licdn.com/dms/image/C4D03AQF4YzkOLDiQ_Q/profile-displayphoto-shrink_800_800/0/1659527720326?e=2147483647&v=beta&t=HRCFpCvvIxCWMW-EcNHYLOMCl2Jc8f8T16W0PRLmO6o" alt="Profile" />
        <div className="profile-info">
          <p><strong>Email:</strong> testuser1@gmail.com</p>
          <p><strong>Organisations:</strong> Demo1,agrawal enterprises</p>
          <p><strong>Skills:</strong> JavaScript, HTML/CSS, React</p>
          {/* <p>{formatDistanceToNow(new Date(invites.createdAt), { addSuffix: true })}</p>
           */}
           <p>Created 7 days ago</p>
        </div>
      </div>
    </div>
    </>
  );
}

export default Profile;