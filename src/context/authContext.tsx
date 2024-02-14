import { ReactNode, createContext, useEffect, useState } from 'react';
import { fecthUserProfile } from '../api/auth';

export type UserProps = {
  id: string;
  name: string;
  email: string;
  role: {
    id: string;
    name: string;
    permissions: string[];
  };
};

type AuthContextProps = {
  user: UserProps | null;
  loggedIn: boolean;
  login: (acessToken: string) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [loggedIn, _setLoggedIn] = useState(
    localStorage.getItem('acessToken') !== null ?? false
  );
  const [user, setUser] = useState<UserProps | null>(null);

  const setLoggedIn = (acessToken: string) => {
    localStorage.setItem('acessToken', acessToken);
    _setLoggedIn(true);
  };

  useEffect(() => {
    if (loggedIn) {
      fecthUserProfile(localStorage.getItem('acessToken')!)
        .then((response) => {
          setUser(response.data.user);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [loggedIn]);

  const login = async (acessToken: string) => {
    setLoggedIn(acessToken);

    await fecthUserProfile(acessToken)
      .then((response) => {
        setUser(response.data.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const logout = () => console.log('logout');

  return (
    <AuthContext.Provider value={{ user, loggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
