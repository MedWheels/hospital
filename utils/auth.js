import  React, { useEffect, useState, useContext, createContext} from 'react';
import nookies from 'nookies';
import { app } from './firebase'
import {getAuth,  onIdTokenChanged } from 'firebase/auth';
import "firebase/auth";

const AuthContext = createContext({});
const auth = getAuth();
export const AuthProvider = ({children}) => 
{
    // const app = firebaseClient();
    const auth = getAuth(app);
    const [user, setUser] = useState();
    useEffect(() => {
        return(onIdTokenChanged(auth,async (user)=>
        {
            if(!user)
            {
                setUser(null);
                nookies.set(undefined, "token", "", {});
                // window.location.href = "/login";
                return;
            }
            const token = await user.getIdToken();
            setUser(user);
            nookies.set(undefined,"token",token,{});

        }));
    },[auth]);
    return (<AuthContext.Provider value={{user}}>{children}</AuthContext.Provider>
)
};
export const useAuth = ()=> useContext(AuthContext);


