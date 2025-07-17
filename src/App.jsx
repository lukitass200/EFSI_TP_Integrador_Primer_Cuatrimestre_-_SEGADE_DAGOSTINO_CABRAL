import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from '../src/context/authContext';
import Navbar from './components/Navbar';
import Login from './views/Login';
import Register from './views/Register';
import EventsList from './views/EventsList';
import EventDetail from './views/EventDetail';
import CreateEvent from './views/CreateEvent';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<EventsList />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/event/:id" element={<EventDetail />} />
          <Route path="/create" element={<CreateEvent />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
