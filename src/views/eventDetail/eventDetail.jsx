import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../api/api';

export default function EventDetail() {
  const { id } = useParams();
  const [event, setEvent] = useState(null);

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const res = await api.get(`/event/${id}`);
        setEvent(res.data);
      } catch (err) {
        console.error('Error cargando detalle');
      }
    };
    fetchEvent();
  }, [id]);

  const handleEnroll = async () => {
    // TODO: conectar con POST /api/event/:id/enrollment
  };

  return (
    <div>
      {event ? (
        <>
          <h2>{event.name}</h2>
          <p>{event.description}</p>
          <p>Precio: {event.price}</p>
          <button onClick={handleEnroll}>Inscribirme</button>
        </>
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
}
