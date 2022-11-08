import  React, { useEffect, useState, useContext, createContext} from 'react';
import nookies from 'nookies';
import firebaseClient from './firebase';
import firebase from 'firebase/app';
import "firebase/auth";
import {getAuth,  onIdTokenChanged } from 'firebase/auth';

const AuthContext = createContext({});
const auth = getAuth();
export const AuthProvider = ({children}) => 
{
    firebaseClient();
    const [user, setUser] = useState(null);
    useEffect(() => {
        return(onIdTokenChanged(auth,async (user)=>
        {
            if(!user)
            {
                setUser(null);
                nookies.set(undefined, "token", "", {});
                return;
            }
            const token = await user.getIdToken();
            setUser(user);
            nookies.set(undefined,"token",token,{});

        }));
    },
    []);
    return (<AuthContext.Provider value={{user}}>{children}</AuthContext.Provider>
)
};
export const useAuth = ()=> useContext(AuthContext);


