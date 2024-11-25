import { createContext, useContext, useEffect, useState } from 'react';

const AuthContext = createContext();

const token = localStorage.getItem('accessToken');

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(!!token);

    useEffect(() => {
        const token = localStorage.getItem('accessToken');
        if (token) setIsAuthenticated(true);
    }, []);

    /* 로그인 */
    const login = (token) => {
        localStorage.setItem('accessToken', token);
        setIsAuthenticated(true);
    };

    /* 로그아웃 */
    const logout = () => {
        localStorage.removeItem('accessToken');
        setIsAuthenticated(false);
    };

    return <AuthContext.Provider value={{ isAuthenticated, login, logout }}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
