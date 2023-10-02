import React from 'react';
import {BrowserRouter , Routes , Route ,Navigate } from 'react-router-dom';

// pages
import Home from './Pages/HomePage/Home'
import Landing from './Pages/LandingPage/Landing'

const App= ()=> {
    return (
    <>
        { 
            <BrowserRouter>
                <Routes>
                    <Route
                        exact path="/"
                        element={<Landing/>}
                    />
                </Routes>
            </BrowserRouter>
        }
    </>
  );
}
export default App;
