import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth, firestore } from '../firebase/firebase';
import {doc, setDoc} from "firebase/firestore";
import { useDispatch } from 'react-redux';
import { setUser } from '../redux/slices/authSlice';

export default function useSignUpWithNewCredentials() {
    const [
        createUserWithEmailAndPassword,
        ,
        loading,
        e,
    ] = useCreateUserWithEmailAndPassword(auth);

    const dispatch = useDispatch()

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
            dispatch(setUser(userObj))
            
            await setDoc(doc(firestore, "users", newUser.user.uid), userObj)
            localStorage.setItem("user", JSON.stringify(userObj))

        } catch (error) {
            seterror(error.message)
            console.log(error)
        }
        
    }

    return {user, loading, error, signup}
}
