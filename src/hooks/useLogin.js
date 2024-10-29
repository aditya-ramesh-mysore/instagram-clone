import React from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '../firebase/firebase';
import { setUser } from '../redux/slices/authSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export default function useLogin() {
    const dispatch = useDispatch()
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error
    ] = useSignInWithEmailAndPassword(auth)
    const navigate = useNavigate()

    const signIn = async ({email, password}) => {
        try{
            const signedIn = await signInWithEmailAndPassword(email, password)
            console.log(signedIn)
            const loggedInUser = {
                uid: signedIn.user.uid,
                email: email,
                accessToken: signedIn.user.accessToken,
                loggedIn: Date.now()
            }
            localStorage.setItem("user", loggedInUser)
            dispatch(setUser(loggedInUser))
            navigate("/")

        }catch(error){
            console.log(error)
        }
    }

    return {user, loading, error, signIn}
}
