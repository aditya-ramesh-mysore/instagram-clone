import React from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth, firestore } from '../firebase/firebase';
import {doc, setDoc} from "firebase/firestore";

export default function useSignUpWithNewCredentials() {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error
    ] = useCreateUserWithEmailAndPassword(auth);

    const signup = async ({email, password, name}) => {
        try {
            if(!email.length || !password.length || !name.length){
                throw new Error("Empty credentials")
    
            }
            const newUser = await createUserWithEmailAndPassword(email, password);
            if(!newUser){
                throw new Error("User already created")
            }
            const userDocument = {
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
            console.log(newUser)
            await setDoc(doc(firestore, "users", newUser.user.uid), userDocument)
            localStorage.setItem("user", JSON.stringify(userDocument))

        } catch (error) {
            console.log(error)
        }
        
    }

    return {loading, error, signup}
}
