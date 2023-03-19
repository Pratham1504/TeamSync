import React from 'react';
import {BrowserRouter , Routes , Route ,Navigate } from 'react-router-dom';

import useAuthContext  from './hooks/useAuthContext';

// pages
import Home from './Pages/LandingPage/Landing'
import Login from './Pages/Login/Login';
import SignUp from './Pages/Signup/Signup';

function App() {
    const {user} = useAuthContext()

    return (
    <>
        <BrowserRouter>
            <Routes>
                <Route
                    path='/'
                    element={user!=null ? <Home/> : <Navigate to = '/login'/>}
                />
                <Route
                    path='/login'
                    element={user==null  ? <Login/> : <Navigate to = '/'/>}
                />
                <Route
                    path='/signUp'
                    element={user==null  ? <SignUp/>: <Navigate to = '/'/>}
                />
            </Routes>
        </BrowserRouter>
    </>
  );
}
export default App;
