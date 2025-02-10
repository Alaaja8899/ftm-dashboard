'use client'
import { redirect } from 'next/navigation'
import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react'

interface AuthContextType {
    user: string;
    setUser: React.Dispatch<React.SetStateAction<string>>;
    logged: boolean;
    setLogged: React.Dispatch<React.SetStateAction<boolean>>;
}

const authContext = createContext<AuthContextType | undefined>(undefined);

interface AuthContextProviderProps {
    children: ReactNode;
}

function AuthContextProvider({ children }: AuthContextProviderProps) {
    const [user, setUser] = useState<string>(localStorage.getItem('user') || '');
    const [logged, setLogged] = useState<boolean>(false);

    useEffect(() => {
        if (user) {
            setLogged(true);
        } else {
            setLogged(false);
            redirect('auth/login');
        }
    }, [user, logged]);

    const values: AuthContextType = { user, setUser, logged, setLogged };

    return (
        <authContext.Provider value={values}>
            {children}
        </authContext.Provider>
    );
}

export const useAuthContext = (): AuthContextType => {
    const context = useContext(authContext);
    if (context === undefined) {
        throw new Error('useAuthContext must be used within an AuthContextProvider');
    }
    return context;
}

export default AuthContextProvider;