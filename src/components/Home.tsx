import React from 'react';
import { FaShoppingCart, FaSearch, FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  // Örnek veri - normalde API'den gelecek
  const featuredProducts = [
    {
      id: 1,
      name: "Taze Meyve Paketi",
      price: 149.99,
      image: "https://via.placeholder.com/200",
      rating: 4.5
    },
    {
      id: 2,
      name: "Organik Sebzeler",
      price: 99.99,
      image: "https://via.placeholder.com/200",
      rating: 4.8
    },
    {
      id: 3,
      name: "Günlük Süt Ürünleri",
      price: 79.99,
      image: "https://via.placeholder.com/200",
      rating: 4.6
    },
    // Daha fazla ürün eklenebilir
  ];

  const categories = [
    { id: 1, name: "Meyve & Sebze", icon: "🥬" },
    { id: 2, name: "Süt Ürünleri", icon: "🥛" },
    { id: 3, name: "Et & Tavuk", icon: "🥩" },
    { id: 4, name: "Fırın", icon: "🥖" },
    { id: 5, name: "İçecekler", icon: "🥤" },
    { id: 6, name: "Atıştırmalık", icon: "🍪" },
  ];

  return (
    <div className="home-container">
      {/* Hero Section */}
      <div className="hero-section bg-primary text-white py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h1 className="display-4 fw-bold">Taze Ürünler</h1>
              <p className="lead">
                Yerel üreticilerden taze ve kaliteli ürünler kapınızda!
              </p>
              <div className="mt-4">
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Ne aramıştınız?"
                  />
                  <button className="btn btn-light" type="button">
                    <FaSearch />
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-6 text-center">
              <img
                src="https://via.placeholder.com/500x300"
                alt="Hero"
                className="img-fluid rounded shadow"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Categories Section */}
      <div className="container mt-5">
        <h2 className="text-center mb-4">Kategoriler</h2>
        <div className="row g-4">
          {categories.map((category) => (
            <div key={category.id} className="col-6 col-md-4 col-lg-2">
              <Link to={`/category/${category.id}`} className="text-decoration-none">
                <div className="card h-100 border-0 shadow-sm hover-scale">
                  <div className="card-body text-center">
                    <span style={{ fontSize: '2rem' }}>{category.icon}</span>
                    <h6 className="mt-2 text-dark">{category.name}</h6>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Featured Products Section */}
      <div className="container mt-5">
        <h2 className="text-center mb-4">Öne Çıkan Ürünler</h2>
        <div className="row g-4">
          {featuredProducts.map((product) => (
            <div key={product.id} className="col-12 col-md-6 col-lg-3">
              <div className="card h-100 border-0 shadow-sm hover-scale">
                <img
                  src={product.image}
                  className="card-img-top"
                  alt={product.name}
                />
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <div className="d-flex justify-content-between align-items-center">
                    <span className="text-primary fw-bold">
                      {product.price.toFixed(2)} TL
                    </span>
                    <div className="d-flex align-items-center">
                      <FaStar className="text-warning me-1" />
                      <span>{product.rating}</span>
                    </div>
                  </div>
                  <button className="btn btn-primary w-100 mt-3">
                    <FaShoppingCart className="me-2" /> Sepete Ekle
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Features Section */}
      <div className="container mt-5 mb-5">
        <div className="row g-4">
          <div className="col-md-4">
            <div className="card border-0 shadow-sm">
              <div className="card-body text-center">
                <div className="display-4 mb-3">🚚</div>
                <h5>Ücretsiz Kargo</h5>
                <p className="text-muted">100 TL üzeri alışverişlerde</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card border-0 shadow-sm">
              <div className="card-body text-center">
                <div className="display-4 mb-3">⚡</div>
                <h5>Hızlı Teslimat</h5>
                <p className="text-muted">Aynı gün teslimat imkanı</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card border-0 shadow-sm">
              <div className="card-body text-center">
                <div className="display-4 mb-3">💯</div>
                <h5>Kalite Garantisi</h5>
                <p className="text-muted">%100 müşteri memnuniyeti</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;