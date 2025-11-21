import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'

// Types
interface Appointment {
  id: number;
  patient_name: string;
  department: string;
  date: string;
}

function App() {
  const [user, setUser] = useState<string | null>(null);
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [department, setDepartment] = useState('');
  const [loading, setLoading] = useState(false);

  const API_URL = 'http://localhost:3000/appointments';

  useEffect(() => {
    if (user) {
      fetchAppointments();
    }
  }, [user]);

  const fetchAppointments = async () => {
    try {
      const response = await axios.get(API_URL);
      setAppointments(response.data);
    } catch (error) {
      console.error("Error fetching appointments", error);
    }
  };

  const handleLogin = () => {
    setUser("Hasta");
  };

  const handleBook = async () => {
    if (!department) return;
    setLoading(true);
    try {
      await axios.post(API_URL, {
        patient_name: user,
        department: department,
        date: new Date().toISOString()
      });
      await fetchAppointments();
      setDepartment('');
      alert("Randevu oluşturuldu!");
    } catch (error) {
      console.error("Error booking", error);
      alert("Hata oluştu");
    } finally {
      setLoading(false);
    }
  };

  if (!user) {
    return (
      <div className="container">
        <h1>Hastane Randevu Sistemi</h1>
        <button onClick={handleLogin} data-testid="login-btn">Giriş Yap</button>
      </div>
    );
  }

  return (
    <div className="container">
      <h1>Hoşgeldin, {user}</h1>

      <div className="card">
        <h2>Randevu Al</h2>
        <select
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
          data-testid="department-select"
        >
          <option value="">Bölüm Seçiniz</option>
          <option value="Kardiyoloji">Kardiyoloji</option>
          <option value="Dahiliye">Dahiliye</option>
          <option value="Göz">Göz</option>
        </select>
        <button onClick={handleBook} disabled={loading} data-testid="book-btn">
          {loading ? 'İşleniyor...' : 'Randevu Oluştur'}
        </button>
      </div>

      <div className="card">
        <h2>Randevularım</h2>
        <ul data-testid="appointment-list">
          {appointments.map((app) => (
            <li key={app.id}>
              {app.department} - {new Date(app.date).toLocaleDateString()}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default App
