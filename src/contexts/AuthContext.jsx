import { createContext, useContext, useEffect, useState } from 'react';
import { fetchUserAPI } from '../api/Auth';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem('accessToken'));
    const [user, setUser] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem('accessToken');

        const fetchUser = async () => {
            const { data, error } = await fetchUserAPI(token);

            if (error || !data.success) {
                setIsAuthenticated(false);
                setUser(null);
            } else {
                setIsAuthenticated(true);
                setUser(data);
            }
        };

        fetchUser();
    }, [isAuthenticated]);

    /* 로그인 */
    const login = async (token) => {
        localStorage.setItem('accessToken', token);
        setIsAuthenticated(true);
    };

    /* 로그아웃 */
    const logout = async () => {
        localStorage.removeItem('accessToken');
        setIsAuthenticated(false);
    };

    return <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
