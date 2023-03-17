import React, { createContext, useState, useEffect } from 'react';
import netlifyIdentity, { User } from 'netlify-identity-widget';

export const AuthContext = createContext({
  user: null,
  login: () => {},
  logout: () => {},
  authReady: false,
});

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // on login
    netlifyIdentity.on('login', (user) => {
      setUser(user);
      netlifyIdentity.close();
    });

    netlifyIdentity.on('logout', () => {
      setUser(null);
    });
    // for local development
    if (window.location.href.includes('localhost')) {
      setUser({
        id: 'anonymous',
        email: 'anony@mous.com',
      });
    }

    netlifyIdentity.init();
  }, [setUser]);

  const login = () => {
    netlifyIdentity.open();
  };

  const logout = () => {
    netlifyIdentity.logout();
  };

  const context = {
    login,
    logout,
    user,
  };

  return (
    <AuthContext.Provider value={context}>{children}</AuthContext.Provider>
  );
};

export default AuthContextProvider;
