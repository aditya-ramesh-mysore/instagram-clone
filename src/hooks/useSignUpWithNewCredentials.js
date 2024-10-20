import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth, firestore } from '../firebase/firebase';
import {doc, setDoc} from "firebase/firestore";

export default function useSignUpWithNewCredentials() {
    const [
        createUserWithEmailAndPassword,
        ,
        loading,
        e,
    ] = useCreateUserWithEmailAndPassword(auth);

    const [user, setuser] = useState(null)
    const [error, seterror] = useState(null)

    const signup = async ({email, password, name}) => {
        seterror(null)
        try {
            const newUser = await createUserWithEmailAndPassword(email, password);
            if(!newUser){                  
                throw new Error("User already exists.")
            }
            
            const userObj = {
                uid: newUser.user.uid,
                email: email,
                name: name,
                bio: "",
                profilePictureURL: "",
                followers: [],
                following: [],
                posts: [],
                createdAt: Date.now()
            }

            setuser(userObj);
            
            await setDoc(doc(firestore, "users", newUser.user.uid), userObj)
            localStorage.setItem("user", JSON.stringify(user))

        } catch (error) {
            seterror(error.message)
            console.log(error)
        }
        
    }

    return {user, loading, error, signup}
}
