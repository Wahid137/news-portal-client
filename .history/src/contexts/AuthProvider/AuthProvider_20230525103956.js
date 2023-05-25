import React, { createContext } from 'react';
import getAuth from 'firebase/auth';
import app from '../../firebase/firebase.config.js';



export const AuthContext = createContext();
const auth = getAuth(app)

const AuthProvider = ({ children }) => {
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;