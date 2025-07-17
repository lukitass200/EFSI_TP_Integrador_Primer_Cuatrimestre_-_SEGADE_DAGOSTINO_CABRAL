import { Link } from 'react-router-dom';

export default function EventCard({ event }) {
  return (
    <div>
      <h3>{event.name}</h3>
      <p>{event.description}</p>
      <Link to={`/event/${event.id}`}>Ver Detalle</Link>
    </div>
  );
}
