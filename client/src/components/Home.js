import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../components/Auth/AuthContext';

export const Home = () => {
    const { isLoggedIn, logout } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (!isLoggedIn) {
          console.log("Not logged in");
          // Redirect the user to the login page
          navigate('/login');
        }
      }, [isLoggedIn, navigate]);
    
    
    return (
    <div>
        <h1>Welcome, User!</h1>
        {/* Rest of the Home component */}

        <button type="logout" className="btn btn-primary" onClick={logout}>
            Logout
        </button>
    </div>
    );
}