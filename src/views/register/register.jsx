import { useState } from 'react';
import api from '../api/api';
import { useNavigate } from 'react-router-dom';

export default function Register() {
  const [form, setForm] = useState({ first_name: '', last_name: '', username: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleRegister = async () => {
    try {
      await api.post('/user/register', form);
      navigate('/login');
    } catch (err) {
      alert('Error al registrarse');
    }
  };

  return (
    <div>
      <h2>Registro</h2>
      <input name="first_name" placeholder="Nombre" onChange={handleChange} />
      <input name="last_name" placeholder="Apellido" onChange={handleChange} />
      <input name="username" placeholder="Email" onChange={handleChange} />
      <input name="password" placeholder="Password" type="password" onChange={handleChange} />
      <button onClick={handleRegister}>Registrar</button>
    </div>
  );
}
