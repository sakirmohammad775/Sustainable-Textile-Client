import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth ,onAuthStateChanged, signInWithEmailAndPassword, signOut} from "firebase/auth";
import { app } from '../firebase/firebase.config';


export const AuthContext = createContext(null)

const auth = getAuth(app)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    //create user
    const createUser=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    //signin'
    const signIn=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    //logout
    const logOut=()=>{
        setLoading(true)
        return signOut(auth)
    }
    //update user
    const updateUserProfile=(name,photo)=>{
        return updat
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser);
            console.log(currentUser)
            setLoading(false)
        });
        return(()=>{
           return unsubscribe()
        })
    },[])


    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        logOut

    }
    return (
        <>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </>
    );
};

export default AuthProvider;