import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

export default function Navbar() {
  const { token, logout } = useContext(AuthContext);

  return (
    <nav>
      <Link to="/">Eventos</Link>
      {token ? (
        <>
          <Link to="/create">Crear Evento</Link>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <>
          <Link to="/login">Login</Link>
          <Link to="/register">Registro</Link>
        </>
      )}
    </nav>
  );
}
