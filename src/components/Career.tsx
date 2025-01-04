import React from 'react';
import { FaBriefcase, FaGraduationCap, FaHandshake, FaUsers, FaRegBuilding, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

const Career: React.FC = () => {
  // Örnek iş ilanları
  const jobListings = [
    {
      title: "Yazılım Geliştirici",
      department: "Teknoloji",
      location: "İstanbul",
      type: "Tam Zamanlı",
      experience: "3-5 yıl",
      description: "React ve Node.js teknolojileri ile web uygulamaları geliştirme."
    },
    {
      title: "Operasyon Uzmanı",
      department: "Operasyon",
      location: "Ankara",
      type: "Tam Zamanlı",
      experience: "2-4 yıl",
      description: "Tedarik zinciri operasyonlarının yönetimi ve optimizasyonu."
    },
    {
      title: "Müşteri Hizmetleri Temsilcisi",
      department: "Müşteri Hizmetleri",
      location: "İzmir",
      type: "Tam Zamanlı",
      experience: "1-3 yıl",
      description: "Müşteri talep ve şikayetlerinin yönetimi."
    }
  ];

  return (
    <div className="career-page">
      {/* Hero Section */}
      <div className="hero-section text-center py-5 bg-light">
        <div className="container">
          <h1 className="display-4 fw-bold mb-4">Kariyer Fırsatları</h1>
          <p className="lead text-muted mb-4">
            TazePazar ailesine katılın, geleceği birlikte inşa edelim
          </p>
          <button className="btn btn-primary btn-lg">
            Açık Pozisyonlar
          </button>
        </div>
      </div>

      {/* Neden Biz Section */}
      <div className="container py-5">
        <div className="text-center mb-5">
          <h2 className="fw-bold">Neden TazePazar?</h2>
          <p className="text-muted">Birlikte büyüyeceğiniz dinamik bir ekibin parçası olun</p>
        </div>

        <div className="row g-4 mb-5">
          <div className="col-md-4">
            <div className="card border-0 shadow-sm h-100">
              <div className="card-body p-4 text-center">
                <div className="icon-circle bg-primary-light mb-3">
                  <FaUsers className="text-primary" size={24} />
                </div>
                <h4 className="fw-bold mb-3">Dinamik Ekip</h4>
                <p className="text-muted mb-0">
                  Genç ve dinamik bir ekiple birlikte çalışma fırsatı
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card border-0 shadow-sm h-100">
              <div className="card-body p-4 text-center">
                <div className="icon-circle bg-primary-light mb-3">
                  <FaGraduationCap className="text-primary" size={24} />
                </div>
                <h4 className="fw-bold mb-3">Sürekli Gelişim</h4>
                <p className="text-muted mb-0">
                  Eğitim ve gelişim programları ile kendinizi geliştirme imkanı
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card border-0 shadow-sm h-100">
              <div className="card-body p-4 text-center">
                <div className="icon-circle bg-primary-light mb-3">
                  <FaHandshake className="text-primary" size={24} />
                </div>
                <h4 className="fw-bold mb-3">Sosyal Haklar</h4>
                <p className="text-muted mb-0">
                  Rekabetçi maaş ve kapsamlı yan haklar paketi
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Açık Pozisyonlar */}
        <div className="open-positions mb-5">
          <h2 className="fw-bold text-center mb-4">Açık Pozisyonlar</h2>
          
          <div className="row g-4">
            {jobListings.map((job, index) => (
              <div key={index} className="col-md-6 col-lg-4">
                <div className="card border-0 shadow-sm h-100">
                  <div className="card-body p-4">
                    <h5 className="fw-bold mb-3">{job.title}</h5>
                    
                    <div className="d-flex align-items-center mb-2">
                      <FaRegBuilding className="text-primary me-2" />
                      <small className="text-muted">{job.department}</small>
                    </div>
                    
                    <div className="d-flex align-items-center mb-2">
                      <FaMapMarkerAlt className="text-primary me-2" />
                      <small className="text-muted">{job.location}</small>
                    </div>
                    
                    <div className="d-flex align-items-center mb-3">
                      <FaClock className="text-primary me-2" />
                      <small className="text-muted">{job.type}</small>
                    </div>
                    
                    <p className="text-muted small mb-4">{job.description}</p>
                    
                    <button className="btn btn-outline-primary w-100">
                      Başvur
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Başvuru Süreci */}
        <div className="application-process">
          <h2 className="fw-bold text-center mb-4">Başvuru Süreci</h2>
          
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="process-timeline">
                <div className="process-step">
                  <div className="step-number">1</div>
                  <h5 className="fw-bold">Başvuru</h5>
                  <p className="text-muted small">
                    Online başvuru formunu doldurarak süreci başlatın
                  </p>
                </div>
                
                <div className="process-step">
                  <div className="step-number">2</div>
                  <h5 className="fw-bold">Değerlendirme</h5>
                  <p className="text-muted small">
                    İK ekibimiz başvurunuzu değerlendirir
                  </p>
                </div>
                
                <div className="process-step">
                  <div className="step-number">3</div>
                  <h5 className="fw-bold">Mülakat</h5>
                  <p className="text-muted small">
                    Uygun adaylarla mülakatlar gerçekleştirilir
                  </p>
                </div>
                
                <div className="process-step">
                  <div className="step-number">4</div>
                  <h5 className="fw-bold">Teklif</h5>
                  <p className="text-muted small">
                    Başarılı adaylara iş teklifi sunulur
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

export default Career;