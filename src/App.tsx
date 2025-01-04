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
import UserProfile from './components/UserProfile';
import './styles/UserProfile.css';
import PasswordChange from './components/PasswordChange';
import './styles/About.css';
import About from './components/About';
import VisionMission from './components/VisionMission';
import './styles/VisionMission.css';
import Career from './components/Career';
import './styles/Career.css';
import Products from './components/Products';
import './styles/Products.css';


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {/* Public Routes */}
       
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/profile/password" element={<PasswordChange />} />
          <Route path="/about" element={<About />} />
          <Route path="/vision" element={<VisionMission />} />
          <Route path="/career" element={<Career />} />
          <Route path="/products" element={<Products />} />




        {/* Protected Routes */}
      
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/user-profile" element={<UserProfile />} />
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