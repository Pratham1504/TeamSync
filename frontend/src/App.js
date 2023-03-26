import React from 'react';
import {BrowserRouter , Routes , Route ,Navigate } from 'react-router-dom';

import useAuthContext  from './hooks/useAuthContext';

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
import useOrgAuthContext from './hooks/useOrgAuthContext';



function  App  () {
    const {user} =  useAuthContext()
    const {org} = useOrgAuthContext()
    console.log("Check here")
    console.log(org)
    console.log(org!=null)
    // console.log(user.id)
    if(!user){
        return (
            <>
                <BrowserRouter>
                    <Routes>
                        <Route
                            exact path='/login'
                            element={ <Login/>}
                        />
                        <Route
                            exact path='/signUp'
                            element={<SignUp/>}
                        />
                        <Route
                            exact path='/*'
                            element={<Navigate to ='/login'/>}
                        />
                    </Routes>
                </BrowserRouter>
            </>
        )
    }
    return (
    <>
        <BrowserRouter>
            <Routes>
                <Route
                    exact path="/"
                    element={!org ? <Landing/>:<Navigate to = '/home'/> }
                />
                <Route
                    exact path='/login'
                    element={ <Navigate to = '/'/> }
                />
                <Route
                    exact path='/signUp'
                    element={<Navigate to = '/'/>}
                />
                <Route
                    exact path='/task'
                    element={<Board/>}
                />
                <Route
                    exact path='/projects'
                    element={<Project/>}
                />
                <Route
                    exact path='/orgdetails'
                    element={<OrgDetails/>}
                    />
                <Route
                    exact path='/home'
                    element={<Home/>}
                />
                <Route
                    exact path='/*'
                    element={<Navigate to = '/error'/>}
                />
                <Route
                    exact path='/error'
                    element={<ERROR/>}
                />
                <Route
                    exact path='/profile'
                    element={<ProfilePage/>}
                />
            </Routes>
        </BrowserRouter>
    </>
  );
}
export default App;
