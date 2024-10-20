import React from 'react';
import { useSignOut } from 'react-firebase-hooks/auth';
import { auth } from '../firebase/firebase';
import { useDispatch } from 'react-redux';
import { removeUser } from '../redux/slices/authSlice';

export default function useLogout() {
  const [signOut, loading, error] = useSignOut(auth)
  const dispatch = useDispatch()

  const logOut = async () => {
    try{
        const success = await signOut()
        localStorage.removeItem('user')
        dispatch(removeUser())
        if(success){
            return true
        }
    }
    catch(error){
        return false
    }
  }

  return {logOut, loading, error}
}
