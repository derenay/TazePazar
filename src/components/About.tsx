import React from 'react';
import { FaTruck, FaLeaf, FaHandshake, FaUsers } from 'react-icons/fa';

const About: React.FC = () => {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <div className="hero-section text-center py-5 bg-light">
        <div className="container">
          <h1 className="display-4 fw-bold mb-4">TazePazar Hakkında</h1>
          <p className="lead text-muted mb-0">
            Taze meyve ve sebzeleri kapınıza getiriyoruz
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container py-5">
        {/* Hikayemiz */}
        <div className="row align-items-center mb-5">
          <div className="col-lg-6">
            <h2 className="fw-bold mb-4">Hikayemiz</h2>
            <p className="text-muted">
              2024 yılında kurulan TazePazar, taze meyve ve sebzeleri doğrudan üreticiden 
              tüketiciye ulaştırma misyonuyla yola çıktı. Kurulduğumuz günden bu yana, 
              kaliteli ürünleri uygun fiyatlarla müşterilerimize sunmaya devam ediyoruz.
            </p>
            <p className="text-muted">
              Türkiye'nin dört bir yanındaki üreticilerle yakın işbirliği içinde çalışarak, 
              en taze ve kaliteli ürünleri seçiyor ve özenle müşterilerimize ulaştırıyoruz.
            </p>
          </div>
          <div className="col-lg-6">
            <img 
              src="/images/about-hero.jpg" 
              alt="TazePazar" 
              className="img-fluid rounded shadow-sm"
            />
          </div>
        </div>

        {/* Değerlerimiz */}
        <div className="row mb-5">
          <div className="col-12 text-center mb-4">
            <h2 className="fw-bold">Değerlerimiz</h2>
          </div>
          <div className="col-md-3">
            <div className="text-center p-4">
              <FaLeaf className="text-primary mb-3" size={40} />
              <h5 className="fw-bold">Tazelik</h5>
              <p className="text-muted small">
                Her gün taze ürünleri müşterilerimizle buluşturuyoruz.
              </p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="text-center p-4">
              <FaHandshake className="text-primary mb-3" size={40} />
              <h5 className="fw-bold">Güvenilirlik</h5>
              <p className="text-muted small">
                Müşteri memnuniyeti bizim için her şeyden önemli.
              </p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="text-center p-4">
              <FaTruck className="text-primary mb-3" size={40} />
              <h5 className="fw-bold">Hızlı Teslimat</h5>
              <p className="text-muted small">
                Siparişlerinizi aynı gün içinde teslim ediyoruz.
              </p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="text-center p-4">
              <FaUsers className="text-primary mb-3" size={40} />
              <h5 className="fw-bold">Müşteri Odaklılık</h5>
              <p className="text-muted small">
                7/24 müşteri desteği ile yanınızdayız.
              </p>
            </div>
          </div>
        </div>

        {/* İstatistikler */}
        <div className="row bg-light rounded p-5 mb-5">
          <div className="col-md-3 text-center mb-4 mb-md-0">
            <h2 className="fw-bold text-primary">0+</h2>
            <p className="text-muted mb-0">Günlük Sipariş</p>
          </div>
          <div className="col-md-3 text-center mb-4 mb-md-0">
            <h2 className="fw-bold text-primary">5+</h2>
            <p className="text-muted mb-0">Çiftçi Ortağımız</p>
          </div>
          <div className="col-md-3 text-center mb-4 mb-md-0">
            <h2 className="fw-bold text-primary">0+</h2>
            <p className="text-muted mb-0">Mutlu Müşteri</p>
          </div>
          <div className="col-md-3 text-center">
            <h2 className="fw-bold text-primary">1</h2>
            <p className="text-muted mb-0">İl</p>
          </div>
        </div>

        {/* Ekibimiz */}
        <div className="row">
          <div className="col-12 text-center mb-4">
            <h2 className="fw-bold">Ekibimiz</h2>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card border-0 shadow-sm">
              <div className="card-body text-center p-4">
                <img 
                  src="/images/team-1.jpg" 
                  alt="Team Member" 
                  className="rounded-circle mb-3"
                  style={{ width: '120px', height: '120px', objectFit: 'cover' }}
                />
                <h5 className="fw-bold">Erenay Arsal</h5>
                <p className="text-muted small mb-0">Kurucu & CEO</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card border-0 shadow-sm">
              <div className="card-body text-center p-4">
                <img 
                  src="/images/team-2.jpg" 
                  alt="Team Member" 
                  className="rounded-circle mb-3"
                  style={{ width: '120px', height: '120px', objectFit: 'cover' }}
                />
                <h5 className="fw-bold">Enes Kahya</h5>
                <p className="text-muted small mb-0">Kurucu & CEO</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card border-0 shadow-sm">
              <div className="card-body text-center p-4">
                <img 
                  src="/images/team-3.jpg" 
                  alt="Team Member" 
                  className="rounded-circle mb-3"
                  style={{ width: '120px', height: '120px', objectFit: 'cover' }}
                />
                <h5 className="fw-bold">Mehmet Kaya</h5>
                <p className="text-muted small mb-0">Tedarik Zinciri Müdürü</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;