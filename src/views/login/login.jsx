import { useState, useContext } from 'react';
import api from '../api/api';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const { login } = useContext(AuthContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await api.post('/user/login', { username, password });
      if (res.data.success) {
        login(res.data.token);
        navigate('/');
      } else {
        setError(res.data.message);
      }
    } catch (err) {
      setError('Error en login');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <input placeholder="Email" value={username} onChange={(e) => setUsername(e.target.value)} />
      <input placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Entrar</button>
      {error && <p>{error}</p>}
    </div>
  );
}
