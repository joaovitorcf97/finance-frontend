import { ReactNode, createContext } from 'react';

export const DefaultUserContext = {
  loggedIn: false,
  user: [],
  login: () => {},
  logout: () => {},
};

export const UserContext = createContext(DefaultUserContext);

export function UserProvider({ children }: { children: ReactNode }) {
  const login = () => {
    // ... login logic
  };

  const logout = () => {
    // ... logout logic
  };

  return (
    <UserContext.Provider value={{ loggedIn: false, user: [], login, logout }}>
      {children}
    </UserContext.Provider>
  );
}
