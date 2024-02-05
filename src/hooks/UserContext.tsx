import { ReactNode, createContext, useState } from 'react';

interface UserProfile {
  id: string;
  name: string;
  email: string;
  role: {
    id: string;
    name: string;
    permissions: string[];
  };
}

export const DefaultUserContext = {
  loggedIn: false,
  user: undefined as UserProfile | undefined,
  login: (token: string) => {},
  logout: () => {},
};

export const UserContext = createContext(DefaultUserContext);

export function UserProvider({ children }: { children: ReactNode }) {
  const [loggedIn, _setLoggedIn] = useState(
    localStorage.getItem('acessToken') !== null ?? false
  );
  const [user] = useState(undefined as UserProfile | undefined);

  const setLoggedIn = (acessToken: string) => {
    console.log(acessToken);
    localStorage.setItem('acessToken', acessToken);
    _setLoggedIn(true);
  };

  const login = (token: string) => setLoggedIn(token);
  const logout = () => console.log('logout');

  return (
    <UserContext.Provider value={{ loggedIn, user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
}
