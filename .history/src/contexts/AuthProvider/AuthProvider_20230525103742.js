import React, { createContext } from 'react';
import
import app from '../../firebase/firebase.config.js';



export const AuthContext = createContext();
const auth = getAuth(app)

const AuthProvider = () => {
    return (
        <div>

        </div>
    );
};

export default AuthProvider;