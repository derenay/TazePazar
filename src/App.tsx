import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import './styles/Login.css';
import Dashboard from './components/Dashboard'; // Bunu oluşturmanız gerekecek
import PrivateRoute from './routes/PrivateRoute';
import PublicRoute from './routes/PublicRoute';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/.comp/Navbar';
import Home from './components/Home';
import './styles/Navbar.css';
import Footer from './components/.comp/Footer';
import './styles/Footer.css';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {/* Public Routes */}
       
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />

        {/* Protected Routes */}
      
          <Route path="/dashboard" element={<Dashboard />} />
          {/* Diğer korumalı sayfalarınızı buraya ekleyebilirsiniz */}
        
        {/* Default Route */}
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="*" element={<Navigate to="/home" />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;