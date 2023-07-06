import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';

import { Sidebar } from '../../components/Sidebar/Sidebar';

export const Home = () => {
    const { isLoggedIn } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (!isLoggedIn) {
          console.log("Not logged in");
          // Redirect the user to the login page
          navigate('/login');
        }
      }, [isLoggedIn, navigate]);
    
      
    
    return (

    <div className="container-fluid">
      <div className="row">
        <Sidebar></Sidebar>

        <div className="col-10">
          {/* Main content */}
          <h1>Welcome, User!</h1>
            {/* Rest of the Home component */}
        </div>
      </div>
    </div>
    );
}