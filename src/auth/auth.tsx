/* eslint-disable react/prop-types */
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { createContext, PropsWithChildren, useContext, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext<{
  user?: unknown;
  login?: (data: unknown) => void;
  logout?: () => void;
}>({});

export const AuthProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useLocalStorage('user', null);
  const login = (data: unknown) => {
    console.log('login');
    setUser(data);
    navigate('/');
  };

  // call this function to sign out logged in user
  const logout = () => {
    setUser(null);
    navigate('/login', { replace: true });
  };

  const value = useMemo(
    () => ({
      user,
      login,
      logout,
    }),
    [user],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};
