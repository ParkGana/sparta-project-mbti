import { createContext, useContext, useEffect, useState } from 'react';
import { fetchUser } from '../api/Auth';

const AuthContext = createContext();

const token = localStorage.getItem('accessToken');

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(!!token);
    const [user, setUser] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem('accessToken');

        const fetchUserData = async () => {
            const { data, error } = await fetchUser(token);

            if (error) {
                setIsAuthenticated(false);
                setUser(null);
            } else {
                setIsAuthenticated(true);
                setUser(data);
            }
        };

        fetchUserData();
    }, [isAuthenticated]);

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

    return <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
