import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    // Mock login
    const login = (email, password) => {
        // Simulate API call
        if (email && password) {
            const mockUser = { id: 1, email, name: email.split('@')[0] };
            setUser(mockUser);
            localStorage.setItem('user', JSON.stringify(mockUser));
            return true;
        }
        return false;
    };

    // Mock signup
    const signup = (email, password, name) => {
        if (email && password) {
            const mockUser = { id: 1, email, name };
            setUser(mockUser);
            localStorage.setItem('user', JSON.stringify(mockUser));
            return true;
        }
        return false;
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('user');
    };

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    return (
        <AuthContext.Provider value={{ user, login, signup, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
