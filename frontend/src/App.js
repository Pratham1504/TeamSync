import React from 'react';
import {BrowserRouter , Routes , Route ,Navigate } from 'react-router-dom';

import useAuthContext  from './hooks/useAuthContext';

// pages
import Home from './Pages/HomePage/Home'
import Login from './Pages/Login/Login';
import SignUp from './Pages/Signup/Signup';
import Task from './Pages/Task/task';
import ERROR from './Pages/ERROR/ERROR';
import Landing from './Pages/LandingPage/Landing'

function App() {
    const {user} = useAuthContext()
    console.log("Check here")
    console.log(user)
    console.log(user!=null)
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
                    element={ <Landing/>}
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
                    element={<Task/>}
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
            </Routes>
        </BrowserRouter>
    </>
  );
}
export default App;
