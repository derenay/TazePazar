import React, { useState } from 'react';
import { FaUser, FaPhone, FaEnvelope, FaCalendar, FaLock } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const UserProfile: React.FC = () => {
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

  // Telefon numarasını maskeleme
  const maskPhoneNumber = (phone: string) => {
    return phone.substring(0, 2) + '****' + phone.substring(6);
  };

  return (
    <div className="container py-5">
      <div className="row">
        {/* Sol Menü */}
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
                  <Link to="/profile" className="nav-link active">
                    <FaUser className="me-2" /> Kullanıcı Bilgilerim
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/profile/password" className="nav-link">
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
          <div className="card border-0 shadow-sm mb-4">
            <div className="card-body">
              <h4 className="mb-4">Profil Bilgileri</h4>
              
              <form>
                <div className="row">
                  {/* Ad */}
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Ad</label>
                    <input
                      type="text"
                      className="form-control"
                      value={user.name}
                      onChange={(e) => setUser({...user, name: e.target.value})}
                    />
                  </div>

                  {/* Soyad */}
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Soyad</label>
                    <input
                      type="text"
                      className="form-control"
                      value={user.surname}
                      onChange={(e) => setUser({...user, surname: e.target.value})}
                    />
                  </div>

                  {/* Doğum Tarihi */}
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Doğum Tarihi</label>
                    <input
                      type="date"
                      className="form-control"
                      value={user.birthDate}
                      onChange={(e) => setUser({...user, birthDate: e.target.value})}
                    />
                  </div>

                  {/* Cinsiyet */}
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Cinsiyet</label>
                    <div>
                      <div className="form-check form-check-inline">
                        <input
                          type="radio"
                          className="form-check-input"
                          name="gender"
                          id="female"
                          value="female"
                          checked={user.gender === 'female'}
                          onChange={(e) => setUser({...user, gender: e.target.value})}
                        />
                        <label className="form-check-label" htmlFor="female">Kadın</label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input
                          type="radio"
                          className="form-check-input"
                          name="gender"
                          id="male"
                          value="male"
                          checked={user.gender === 'male'}
                          onChange={(e) => setUser({...user, gender: e.target.value})}
                        />
                        <label className="form-check-label" htmlFor="male">Erkek</label>
                      </div>
                    </div>
                  </div>
                </div>

                <h4 className="mb-4 mt-4">İletişim Bilgileri</h4>

                {/* İletişim Bilgileri Kartı */}
                <div className="bg-light p-4 rounded mb-4">
                  <div className="row">
                    {/* E-posta */}
                    <div className="col-12 mb-4">
                      <label className="form-label">E-posta Adresi</label>
                      <div className="d-flex align-items-center">
                        <input
                          type="email"
                          className="form-control me-2"
                          value={user.email}
                          disabled
                        />
                        <button type="button" className="btn btn-outline-primary">
                          Değiştir
                        </button>
                      </div>
                    </div>

                    {/* Telefon */}
                    <div className="col-12">
                      <label className="form-label">Cep Telefonu</label>
                      <div className="d-flex align-items-center">
                        <input
                          type="text"
                          className="form-control me-2"
                          value={maskPhoneNumber(user.phone)}
                          disabled
                        />
                        <button type="button" className="btn btn-outline-primary">
                          Değiştir
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Güncelle Butonu */}
                <div className="d-grid gap-2 d-md-flex justify-content-md-end mt-4">
                  <button type="submit" className="btn btn-primary px-4">
                    Güncelle
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;