"use client";

import { auth } from "@/firebase/configuration";
import { User, createUserWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";

interface AuthContext {
    user: User | null;
    isPending: boolean;
}

const AuthContext = createContext<AuthContext>({ user: auth.currentUser, isPending: true });

export default function AuthContextProvider({ children }: { children: React.ReactNode }) {
    const [authContext, setAuthContext] = useState<AuthContext>({ user: auth.currentUser, isPending: true });

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            setAuthContext({ user: user, isPending: false });
        });
    }, []);

    return <AuthContext.Provider value={authContext}>{children}</AuthContext.Provider>;
}

export function useAuth() {
    return useContext(AuthContext);
}
export function getUserUid() {
    return useContext(AuthContext).user?.uid || "";
}
export function getUserEmail() {
    return useContext(AuthContext).user?.email || "No Email Configured";
}
export function getUserDisplayName() {
    return useContext(AuthContext).user?.displayName || "No Display Name Configured";
}
export function registerUser(email: string, password: string) {
    return createUserWithEmailAndPassword(auth, email, password);
}
export function updateUserProfile(user: User, name: string) {
    return updateProfile(user, { displayName: name });
}
export function logIn(credential: { email: string; password: string }) {
    return signInWithEmailAndPassword(auth, credential.email, credential.password);
}
export function logOut() {
    return signOut(auth);
}
export function resetPassword(email: string) {
    return sendPasswordResetEmail(auth, email);
}
