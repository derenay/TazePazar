import React, { useState } from 'react';
import { FaUser, FaPhone, FaEnvelope, FaCalendar, FaLock } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const PasswordChange: React.FC = () => {
  const [passwords, setPasswords] = useState({
    current: '',
    new: '',
    confirm: ''
  });

  const userFromStorage = localStorage.getItem('user') 
    ? JSON.parse(localStorage.getItem('user')!) 
    : null;

  const [user, setUser] = useState({
    name: userFromStorage?.name || '',
    surname: userFromStorage?.surname || '',
    email: userFromStorage?.email || 'test@example.com',
    phone: userFromStorage?.phone || '5551234567',
    birthDate: userFromStorage?.birthDate || '',
    gender: userFromStorage?.gender || 'male'
  });

  return (
    <div className="container py-5">
      <div className="row">
        {/* Sol Menü - UserProfile ile aynı */}
        <div className="col-12 col-md-3">
            <div className="card border-0 shadow-sm">
                <div className="card-body">
                <div className="d-flex align-items-center mb-4">
                    <div className="bg-primary rounded-circle p-3 me-3">
                     <FaUser className="text-white" size={24} />
                    </div>
                    <div>
                    <h6 className="mb-0">{user.name} {user.surname}</h6>
                    <small className="text-muted">Müşteri</small>
                    </div>
                </div>

                <ul className="nav flex-column">
                    <li className="nav-item">
                    <Link to="/profile" className="nav-link">
                        <FaUser className="me-2" /> Kullanıcı Bilgilerim
                    </Link>
                    </li>
                    <li className="nav-item">
                    <Link to="/profile/password" className="nav-link active">
                        <FaLock className="me-2" /> Şifre Değiştir
                    </Link>
                    </li>
                    <li className="nav-item">
                    <Link to="/orders" className="nav-link">
                        <FaCalendar className="me-2" /> Siparişlerim
                    </Link>
                    </li>
                </ul>
            </div>
          </div>
        </div>

        {/* Sağ İçerik */}
        <div className="col-12 col-md-9">
          <div className="card border-0 shadow-sm">
            <div className="card-body">
              <h4 className="mb-4">Şifre Değiştir</h4>
              
              <form>
                <div className="bg-light p-4 rounded">
                  <div className="mb-3">
                    <label className="form-label">Mevcut Şifre</label>
                    <input
                      type="password"
                      className="form-control"
                      value={passwords.current}
                      onChange={(e) => setPasswords({...passwords, current: e.target.value})}
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Yeni Şifre</label>
                    <input
                      type="password"
                      className="form-control"
                      value={passwords.new}
                      onChange={(e) => setPasswords({...passwords, new: e.target.value})}
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Yeni Şifre (Tekrar)</label>
                    <input
                      type="password"
                      className="form-control"
                      value={passwords.confirm}
                      onChange={(e) => setPasswords({...passwords, confirm: e.target.value})}
                    />
                  </div>

                  <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                    <button type="submit" className="btn btn-primary px-4">
                      Şifreyi Güncelle
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PasswordChange;