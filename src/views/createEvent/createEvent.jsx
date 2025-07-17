import { useState } from 'react';
import api from '../api/api';
import { useNavigate } from 'react-router-dom';

export default function CreateEvent() {
  const [form, setForm] = useState({ name: '', description: '' }); // Agregá los demás campos
  const navigate = useNavigate();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async () => {
    try {
      await api.post('/event', form);
      navigate('/');
    } catch (err) {
      alert('Error creando evento');
    }
  };

  return (
    <div>
      <h2>Crear Evento</h2>
      <input name="name" placeholder="Nombre" onChange={handleChange} />
      <input name="description" placeholder="Descripción" onChange={handleChange} />
      <button onClick={handleSubmit}>Crear</button>
    </div>
  );
}
