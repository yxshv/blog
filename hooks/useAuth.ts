import { auth } from '../firebase-config';
import {
    GoogleAuthProvider,
    signInWithPopup,
    setPersistence,
    onAuthStateChanged,
    browserSessionPersistence
} from 'firebase/auth';
import { useEffect, useState } from 'react';

const useAuth = () => {

    const [user, setUser] = useState<string | null>(null);
    const [loading,setLoading] = useState<boolean>(true);

    useEffect(() => {
        onAuthStateChanged(auth, async (user) => {
            if (user) {
                setUser(user.displayName);
            } else {
                setUser(null)
            }
            setLoading(false);
        })
    },[])
    
    const Login = () => {
        if (user) {
            setUser(user);
            return
        }

        setLoading(true)

        setPersistence(auth, browserSessionPersistence).then(
            async () => {
                try {
                    const userC = await signInWithPopup(auth, (new GoogleAuthProvider()));

                    setUser(userC.user.displayName);

                    return userC;
                } catch (e) {
                    console.log(e);
                }
                setLoading(false)
            }
        )
    }

    const Logout = () => {
        auth.signOut();
        setUser(null);
    }

    return {user,Login,Logout,loading}
}

export default useAuth;