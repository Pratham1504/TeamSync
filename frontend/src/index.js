import React from 'react';
import ReactDOM from 'react-dom';
import { AuthContextProvider } from './context/authContext';
import { OrgAuthContextProvider } from './context/orgAuthContext';

import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <AuthContextProvider>
    <OrgAuthContextProvider>

      <App />
    </OrgAuthContextProvider>

      </AuthContextProvider>
  </React.StrictMode>
);

