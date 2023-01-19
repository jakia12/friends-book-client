import React, { createContext, useContext, useEffect, useState } from 'react'
import { getAuth, createUserWithEmailAndPassword, Auth, User, signInWithEmailAndPassword, signOut, onAuthStateChanged, updateProfile, sendPasswordResetEmail, signInWithPopup, GoogleAuthProvider, UserCredential } from "firebase/auth";
import app from '../firebase/firebase.config';

export interface AuthProviderProps {
    children?: React.ReactNode
}


interface AuthContextModel {
    auth: Auth;
    user: User | null,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
    loading: boolean,
    createUser: (email: string, password: string) => Promise<UserCredential>;
    logOut: () => void;
    login: (email: string, password: string) => Promise<UserCredential>;



}

const auth = getAuth(app);
const Authcontext = createContext<AuthContextModel>({} as AuthContextModel);

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {

    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    const createUser = (email: string, password: string): Promise<UserCredential> => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    //login
    const login = (email: string, password: string): Promise<UserCredential> => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }


    //sigh out
    const logOut = (): Promise<void> => {
        setLoading(true);
        return signOut(auth);
    }

    //get current user
    useEffect(() => {
        const unSubscribe = auth.onAuthStateChanged((user) => {
            setUser(user);
            setLoading(false);
        });


        return () => unSubscribe();
    }, []);


    //display user


    // const updateUserProfile = ( profile:string): Promise<void> => {
    //     return updateProfile(auth.currentUser,  profile );
    // }



    //google sign in
    // const googleProvider = new GoogleAuthProvider();

    // // const googleSignIn = (): Promise<void> => {
    // //     return signInWithPopup(auth, googleProvider);
    // // }

    const getInfo = { user, setLoading, loading, createUser, logOut, login, auth }
    return (
        <Authcontext.Provider value={getInfo}>
            {children}
        </Authcontext.Provider>
    )
}

export default AuthProvider;

export const useUserContext = (): AuthContextModel => {
    return useContext(Authcontext)
}
