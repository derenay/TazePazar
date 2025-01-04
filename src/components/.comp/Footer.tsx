import React from 'react';
import { Link } from 'react-router-dom';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark text-light pt-5 pb-3 mt-5">
      <div className="container">
        <div className="row">
          {/* Kurumsal */}
          <div className="col-12 col-md-3 mb-4">
            <h5 className="mb-3 text-primary">Kurumsal</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link to="/about" className="text-light text-decoration-none hover-link">Hakkımızda</Link>
              </li>
              <li className="mb-2">
                <Link to="/vision" className="text-light text-decoration-none hover-link">Vizyon & Misyon</Link>
              </li>
              <li className="mb-2">
                <Link to="/career" className="text-light text-decoration-none hover-link">Kariyer</Link>
              </li>
              <li className="mb-2">
                <Link to="/contact" className="text-light text-decoration-none hover-link">İletişim</Link>
              </li>
            </ul>
          </div>

          {/* Müşteri Hizmetleri */}
          <div className="col-12 col-md-3 mb-4">
            <h5 className="mb-3 text-primary">Müşteri Hizmetleri</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link to="/faq" className="text-light text-decoration-none hover-link">Sıkça Sorulan Sorular</Link>
              </li>
              <li className="mb-2">
                <Link to="/shipping" className="text-light text-decoration-none hover-link">Teslimat Bilgileri</Link>
              </li>
              <li className="mb-2">
                <Link to="/return-policy" className="text-light text-decoration-none hover-link">İade Koşulları</Link>
              </li>
              <li className="mb-2">
                <Link to="/privacy" className="text-light text-decoration-none hover-link">Gizlilik Politikası</Link>
              </li>
            </ul>
          </div>

          {/* İletişim Bilgileri */}
          <div className="col-12 col-md-3 mb-4">
            <h5 className="mb-3 text-primary">İletişim</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <FaPhone className="me-2" />
                <a href="tel:+902121234567" className="text-light text-decoration-none hover-link">0212 123 45 67</a>
              </li>
              <li className="mb-2">
                <FaEnvelope className="me-2" />
                <a href="mailto:info@tazepazar.com" className="text-light text-decoration-none hover-link">info@tazepazar.com</a>
              </li>
              <li className="mb-2">
                <FaMapMarkerAlt className="me-2" />
                <span>İstanbul, Türkiye</span>
              </li>
            </ul>
          </div>

          {/* Bülten */}
          <div className="col-12 col-md-3 mb-4">
            <h5 className="mb-3 text-primary">E-Bülten</h5>
            <p className="small">Kampanyalardan haberdar olmak için bültenimize kayıt olun.</p>
            <form className="mb-3">
              <div className="input-group">
                <input 
                  type="email" 
                  className="form-control" 
                  placeholder="E-posta adresiniz"
                  aria-label="E-posta adresiniz"
                />
                <button className="btn btn-primary" type="submit">Kayıt Ol</button>
              </div>
            </form>
          </div>
        </div>

        {/* Sosyal Medya ve Alt Bilgi */}
        <div className="row mt-4 pt-4 border-top">
          <div className="col-12 col-md-6 mb-3 mb-md-0">
            <div className="d-flex gap-3">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-light hover-link">
                <FaFacebook size={24} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-light hover-link">
                <FaTwitter size={24} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-light hover-link">
                <FaInstagram size={24} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-light hover-link">
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>
          <div className="col-12 col-md-6 text-md-end">
            <p className="mb-0 small">© 2024 TazePazar. Tüm hakları saklıdır.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;