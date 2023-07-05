import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../components/Auth/AuthContext';

export const Home = () => {
    const { isLoggedIn } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (!isLoggedIn) {
          // Redirect the user to the login page
          navigate('/login');
        }
      }, [isLoggedIn, navigate]);
    
    
    return (
    <div>
        <h1>Welcome, User!</h1>
        {/* Rest of the Home component */}
    </div>
    );
}