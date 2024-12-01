import React from 'react';
import { auth } from '../firebase';
import { Navigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';

const PrivateAuthentication = ({ children }) => {
    const [user] = useAuthState(auth);

    if (!user) {
        return <Navigate to="/loginpage" />;
    }

    return children;
};

export default PrivateAuthentication;
