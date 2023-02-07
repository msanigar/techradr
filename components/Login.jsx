import { useContext } from 'react';
import { AuthContext } from '../contexts/authContext';

const NavBar = () => {
  const { user, login, logout } = useContext(AuthContext);
  return (
    <nav className="nav">
      {!user && (
        <button className="btn btn-secondary" onClick={login}>
          Login
        </button>
      )}
      {user && (
        <button className="btn btn-secondary" onClick={logout}>
          Logout
        </button>
      )}
    </nav>
  );
};

export default NavBar;
