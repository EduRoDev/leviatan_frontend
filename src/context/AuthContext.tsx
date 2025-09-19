import { createContext, useContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';
import type { LoginResponse } from '../utils/interfaces/login.interface';

interface AuthContextType {
    token: string | null;
    user: LoginResponse | null;
    login: (loginData: LoginResponse) => void;
    logout: () => void;
    isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
    children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
    const [token, setToken] = useState<string | null>(null);
    const [user, setUser] = useState<LoginResponse | null>(null);

    useEffect(() => {
        const savedToken = localStorage.getItem('access_token')
        const savedUser = localStorage.getItem('user')

        if (savedToken && savedUser) {
            setToken(savedToken);
            setUser(JSON.parse(savedUser));
        }

    }, []);

    const login = (loginData: LoginResponse) => {
        setToken(loginData.access_token);
        setUser(loginData);
        localStorage.setItem('access_token', loginData.access_token);
        localStorage.setItem('user', JSON.stringify(loginData));
    };

    const logout = () => {
        setToken(null);
        setUser(null);
        localStorage.removeItem('access_token');
        localStorage.removeItem('user');
    }

    const isAuthenticated = !!token;
    const value = {
        token,
        user,
        login,
        logout,
        isAuthenticated
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )

}

export function useAuth() {
    const context = useContext(AuthContext)
    if (context === undefined) {
        throw new Error('Debes usar el AuthProvider')
    }
    return context;
}