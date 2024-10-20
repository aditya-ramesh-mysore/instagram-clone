import React from 'react';
import { useSignOut } from 'react-firebase-hooks/auth';
import { auth } from '../firebase/firebase';

export default function useLogout() {
  const [signOut, loading, error] = useSignOut(auth)

  const logOut = async () => {
    try{
        const success = await signOut()
        localStorage.removeItem('user')
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
