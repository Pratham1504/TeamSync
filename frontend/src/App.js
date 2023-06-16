import React, { useEffect, useState } from 'react';
import {BrowserRouter , Routes , Route ,Navigate } from 'react-router-dom';

// pages
import Home from './Pages/HomePage/Home'
import Login from './Pages/Login/Login';
import SignUp from './Pages/Signup/Signup';
import Board from './Pages/Board/board';
import ERROR from './Pages/ERROR/ERROR';
import Landing from './Pages/LandingPage/Landing'
import OrgDetails from './Pages/OrgDeatils/OrgDetails';
import Project from './Pages/ProjectPage/Project';
import ProfilePage from './Pages/profile/profilePage';
import useAuthContext from './hooks/useAuthContext';
import { AuthContext } from './context/authContext';
import BoardsInProject from './Pages/BoardsInProjectPage/BoardsInProject';
import Mytask from './Pages/MyTask/Mytask'


const App= ()=> {
    
const userr=localStorage.getItem('user')
const user=JSON.parse(userr)
console.log('raghav Doda')
console.log(user)
    return (
    <>{ 
        <BrowserRouter>
            <Routes>
                <Route
                    exact path="/"
                    element={user?(user.openOrg.openOrgId?(<Navigate to ="/home"/>):(<Landing/>)):(<Navigate  to={'/login'}/>) }
                />
                <Route
                    exact path='/login'
                    element={user ? <Navigate to='/'/> : <Login/>}
                />
                <Route
                    exact path='/signUp'
                    element={user ? <Navigate to ='/'/> : <SignUp/>}
                />
                <Route
                    exact path='/task'
                    element={user ? user.openOrg.openOrgId?user.openProject.openProjectId?<BoardsInProject/>:<Project/>:<Navigate to="/"/>: <Navigate to='/login'/>}
                /> 
                <Route
                    exact path='/mytask'
                    element={user ? user.openOrg.openOrgId?<Mytask/>:<Navigate to="/"/>: <Navigate to='/login'/>}
                />
                <Route
                    exact path='/board'
                    element={user ? user.openOrg.openOrgId?<Board/>:<Navigate to="/"/>: <Navigate to='/login'/>}
                />
                <Route
                    exact path='/projects'
                    element={user ? user.openOrg.openOrgId?<Project/>:<Navigate to="/"/>:<Navigate to='/login'/>}
                />
                <Route
                    exact path='/orgdetails'
                    element={user ? user.openOrg.openOrgId?<OrgDetails/>:<Navigate to="/"/>:<Navigate to='/login'/>}
                    />
                <Route
                    exact path='/home'
                    element={user ?user.openOrg.openOrgId?<Home/>:<Navigate to="/"/>:<Navigate to='/login'/>}
                />
                <Route
                    exact path='/*'
                    element={user ? <Navigate to = '/error'/>:<Navigate to='/login'/>}
                />
                <Route
                    exact path='/error'
                    element={user ? <ERROR/>:<Navigate to='/login'/>}
                />
                <Route
                    exact path='/profile'
                    element={user ?user.openOrg.openOrgId?<ProfilePage/>:<Navigate to="/"/> :<Navigate to='/login'/>}
                />
            </Routes>
        </BrowserRouter>
}
    </>
  );
            }
export default App;
