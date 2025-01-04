import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaStore, FaInstagram } from 'react-icons/fa';
import { FiPackage } from 'react-icons/fi';
import { BsTwitter } from 'react-icons/bs';
import { FaUserCircle } from 'react-icons/fa';
import SearchBar from './SearchBar';
import '../../styles/SearchBar.css';




const Navbar: React.FC = () => {
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const isLoggedIn = !!localStorage.getItem('token');
  const user = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')!) : null;

  // Meyve ve Sebze kategorileri
  const categories = [
    {
      title: "Meyveler",
      subCategories: [
        "Narenciye",
        "Yumuşak Meyveler",
        "Sert Meyveler",
        "Egzotik Meyveler",
        "Kuru Meyveler"
      ]
    },
    {
      title: "Sebzeler",
      subCategories: [
        "Yeşil Sebzeler",
        "Kök Sebzeler",
        "Domates & Biber",
        "Patlıcan & Kabak",
        "Patates & Soğan"
      ]
    },
    {
      title: "Organik Ürünler",
      subCategories: [
        "Organik Meyveler",
        "Organik Sebzeler"
      ]
    },
    {
      title: "Paketli Ürünler",
      subCategories: [
        "Hazır Salata",
        "Doğranmış Meyveler",
        "Kurutulmuş Ürünler"
      ]
    }
  ];

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
      <div className="container">
        {/* Site Logo/Name */}
        <Link to="/" className="navbar-brand d-flex align-items-center">
          <FaStore className="me-2" size={24} />
          <span className="fw-bold">TazePazar</span>
        </Link>

        {/* Hamburger Menu */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Items */}
        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {/* Ürünler Dropdown */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="/products"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                onMouseEnter={() => setIsProductsOpen(true)}
                onMouseLeave={() => setIsProductsOpen(false)}
              >
                <FiPackage className="me-1" /> Ürünlerimiz
              </a>
              <ul 
                className={`dropdown-menu ${isProductsOpen ? 'show' : ''}`}
                onMouseEnter={() => setIsProductsOpen(true)}
                onMouseLeave={() => setIsProductsOpen(false)}
              >
                {categories.map((category, index) => (
                  <li key={index} className="dropdown-submenu">
                    <a className="dropdown-item dropdown-toggle" href="#">
                      {category.title}
                    </a>
                    <ul className="dropdown-menu">
                      {category.subCategories.map((sub, subIndex) => (
                        <li key={subIndex}>
                          <Link className="dropdown-item" to={`/products/${category.title.toLowerCase()}/${sub.toLowerCase()}`}>
                            {sub}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            </li>
            <li className="nav-item">
              <Link to="/seasonal" className="nav-link">Mevsim Ürünleri</Link>
            </li>
            <li className="nav-item">
              <Link to="/campaigns" className="nav-link">Kampanyalar</Link>
            </li>
          </ul>
          

          <SearchBar />  

          {/* Right Side Items */}
          <div className="d-flex align-items-center">
            {isLoggedIn && (
              <div className="dropdown me-3">
                <button 
                  className="btn btn-light d-flex align-items-center border-0" 
                  type="button" 
                  id="userDropdown" 
                  data-bs-toggle="dropdown" 
                  aria-expanded="false"
                >
                  <FaUserCircle size={24} className="text-primary me-2" />
                  <div className="d-flex flex-column align-items-start">
                    <small className="text-muted mb-0">Merhaba,</small>
                    <span className="fw-medium text-dark">{user?.name}</span>
                  </div>
                </button>
                <ul className="dropdown-menu dropdown-menu-end shadow-sm" aria-labelledby="userDropdown">
                  <li>
                    <Link to="/profile" className="dropdown-item">
                      <FaUserCircle className="me-2" /> Profilim
                    </Link>
                  </li>
                  <li>
                    <Link to="/orders" className="dropdown-item">
                      <FaShoppingCart className="me-2" /> Siparişlerim
                    </Link>
                  </li>
                  <li><hr className="dropdown-divider" /></li>
                  <li>
                    <button 
                      onClick={() => {
                        localStorage.removeItem('token');
                        localStorage.removeItem('user');
                        window.location.reload();
                      }} 
                      className="dropdown-item text-danger"
                    >
                      Çıkış Yap
                    </button>
                  </li>
                </ul>
              </div>
            )}

            {/* Sepet */}
            {isLoggedIn && (
              <Link to="/cart" className="btn btn-outline-primary me-3 position-relative">
                <FaShoppingCart className="me-1" /> Sepetim
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  0
                </span>
              </Link>
            )}

            {/* Auth Buttons */}
            {!isLoggedIn && (
              <div className="d-flex me-3">
                <Link to="/login" className="btn btn-outline-primary me-2">
                  Giriş Yap
                </Link>
                <Link to="/register" className="btn btn-primary">
                  Kayıt Ol
                </Link>
              </div>
            )}

            {/* Social Media Links */}
            <div className="d-flex">
              <a href="https://instagram.com" className="text-dark me-2" target="_blank" rel="noopener noreferrer">
                <FaInstagram size={20} />
              </a>
              <a href="https://twitter.com" className="text-dark" target="_blank" rel="noopener noreferrer">
                <BsTwitter size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;