import { useEffect, useState } from 'react';
import api from '../api/api';
import EventCard from '../components/EventCard';

export default function EventsList() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await api.get('/event');
        setEvents(res.data.collection);
      } catch (err) {
        console.error('Error cargando eventos');
      }
    };
    fetchEvents();
  }, []);

  return (
    <div>
      <h2>Eventos</h2>
      {events.map((e) => (
        <EventCard key={e.id} event={e} />
      ))}
    </div>
  );
}
