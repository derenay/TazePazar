import React from 'react';
import { FaLightbulb, FaChartLine, FaHandshake, FaSeedling, FaTruck, FaUsers } from 'react-icons/fa';

const VisionMission: React.FC = () => {
  return (
    <div className="vision-mission-page">
      {/* Hero Section */}
      <div className="hero-section text-center py-5 bg-light">
        <div className="container">
          <h1 className="display-4 fw-bold mb-4">Vizyon & Misyon</h1>
          <p className="lead text-muted mb-0">
            Geleceğe dair hedeflerimiz ve değerlerimiz
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container py-5">
        {/* Vizyon ve Misyon Kartları */}
        <div className="row mb-5">
          <div className="col-md-6 mb-4 mb-md-0">
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-body p-5">
                <div className="text-center mb-4">
                  <div className="icon-circle bg-primary-light mb-4">
                    <FaLightbulb className="text-primary" size={30} />
                  </div>
                  <h2 className="fw-bold">Vizyonumuz</h2>
                </div>
                <p className="text-muted">
                  Türkiye'nin en güvenilir ve tercih edilen online taze gıda platformu olmak. 
                  Teknoloji ve inovasyonu kullanarak, taze meyve ve sebzelerin tedarik zincirini 
                  yeniden şekillendirmek ve herkesin kaliteli ürünlere uygun fiyatlarla 
                  ulaşmasını sağlamak.
                </p>
                <ul className="list-unstyled mt-4">
                  <li className="d-flex align-items-center mb-3">
                    <FaChartLine className="text-primary me-3" />
                    <span>Sürdürülebilir büyüme</span>
                  </li>
                  <li className="d-flex align-items-center mb-3">
                    <FaHandshake className="text-primary me-3" />
                    <span>Güvenilir ortaklıklar</span>
                  </li>
                  <li className="d-flex align-items-center">
                    <FaSeedling className="text-primary me-3" />
                    <span>Çevre dostu yaklaşım</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-body p-5">
                <div className="text-center mb-4">
                  <div className="icon-circle bg-primary-light mb-4">
                    <FaUsers className="text-primary" size={30} />
                  </div>
                  <h2 className="fw-bold">Misyonumuz</h2>
                </div>
                <p className="text-muted">
                  Üreticiden tüketiciye en taze ürünleri, en hızlı şekilde ulaştırmak. 
                  Müşterilerimize kaliteli, taze ve güvenilir ürünler sunarken, 
                  üreticilerimizin de sürdürülebilir bir gelir elde etmelerini sağlamak.
                </p>
                <ul className="list-unstyled mt-4">
                  <li className="d-flex align-items-center mb-3">
                    <FaTruck className="text-primary me-3" />
                    <span>Hızlı ve güvenli teslimat</span>
                  </li>
                  <li className="d-flex align-items-center mb-3">
                    <FaHandshake className="text-primary me-3" />
                    <span>Adil ticaret</span>
                  </li>
                  <li className="d-flex align-items-center">
                    <FaUsers className="text-primary me-3" />
                    <span>Müşteri memnuniyeti</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Değerlerimiz */}
        <div className="values-section py-5">
          <h2 className="text-center fw-bold mb-5">Temel Değerlerimiz</h2>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body p-4">
                  <div className="text-center mb-3">
                    <div className="icon-circle bg-primary-light mb-3">
                      <FaHandshake className="text-primary" size={24} />
                    </div>
                    <h4 className="fw-bold">Dürüstlük</h4>
                  </div>
                  <p className="text-muted text-center mb-0">
                    Tüm iş süreçlerimizde şeffaflık ve dürüstlük ilkelerini benimseriz.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body p-4">
                  <div className="text-center mb-3">
                    <div className="icon-circle bg-primary-light mb-3">
                      <FaUsers className="text-primary" size={24} />
                    </div>
                    <h4 className="fw-bold">İnsan Odaklılık</h4>
                  </div>
                  <p className="text-muted text-center mb-0">
                    Müşterilerimizin ve çalışanlarımızın mutluluğu önceliğimizdir.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body p-4">
                  <div className="text-center mb-3">
                    <div className="icon-circle bg-primary-light mb-3">
                      <FaSeedling className="text-primary" size={24} />
                    </div>
                    <h4 className="fw-bold">Sürdürülebilirlik</h4>
                  </div>
                  <p className="text-muted text-center mb-0">
                    Çevreye duyarlı ve sürdürülebilir iş modelleri geliştiririz.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisionMission;