import React, { createContext } from 'react';
const app from '../../firebase/firebase.config.js';



export const AuthContext = createContext();
const auth = getAuth(app)

const AuthProvider = () => {
    return (
        <div>

        </div>
    );
};

export default AuthProvider;