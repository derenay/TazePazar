import React, { useState } from 'react';
import { FaHeart, FaRegHeart, FaStar, FaChevronDown } from 'react-icons/fa';

// Örnek ürün verisi
const products = [
  {
    id: 1,
    name: "Elma",
    price: 24.99,
    rating: 4.5,
    image: "/images/products/apple.jpg",
    category: "Yerli Meyveler"
  },
  {
    id: 1,
    name: "Elma",
    price: 24.99,
    rating: 4.5,
    image: "/images/products/apple.jpg",
    category: "Yerli Meyveler"
  },
  {
    id: 1,
    name: "Elma",
    price: 24.99,
    rating: 4.5,
    image: "/images/products/apple.jpg",
    category: "Yerli Meyveler"
  },
  {
    id: 1,
    name: "Elma",
    price: 24.99,
    rating: 4.5,
    image: "/images/products/apple.jpg",
    category: "Yerli Meyveler"
  },
  {
    id: 1,
    name: "Elma",
    price: 24.99,
    rating: 4.5,
    image: "/images/products/apple.jpg",
    category: "Yerli Meyveler"
  },
  {
    id: 1,
    name: "Elma",
    price: 24.99,
    rating: 4.5,
    image: "/images/products/apple.jpg",
    category: "Yerli Meyveler"
  },
  {
    id: 1,
    name: "Elma",
    price: 24.99,
    rating: 4.5,
    image: "/images/products/apple.jpg",
    category: "Yerli Meyveler"
  },
  {
    id: 1,
    name: "Elma",
    price: 24.99,
    rating: 4.5,
    image: "/images/products/apple.jpg",
    category: "Yerli Meyveler"
  },
  {
    id: 1,
    name: "Elma",
    price: 24.99,
    rating: 4.5,
    image: "/images/products/apple.jpg",
    category: "Yerli Meyveler"
  },
  // Diğer ürünler...
];

// Kategori listesi
const categories = [
  "Tüm Meyveler",
  "Yerli Meyveler",
  "İthal Meyveler",
  "Turunçgiller",
  "Egzotik Meyveler",
  "Sezonluk Meyveler",
  "Kuru Meyveler"
];

const Products: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("Tüm Meyveler");
  const [favorites, setFavorites] = useState<number[]>([]);
  const [sortBy, setSortBy] = useState("featured");

  const toggleFavorite = (productId: number) => {
    setFavorites(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  return (
    <div className="container-fluid py-4">
      <div className="row gx-4">
        {/* Sol Kategori Menüsü */}
        <div className="col-lg-2">
          <div className="card border-0 shadow-sm">
            <div className="card-body">
              <h5 className="fw-bold mb-4">Kategoriler</h5>
              <div className="category-list">
                {categories.map((category, index) => (
                  <button
                    key={index}
                    className={`category-item btn btn-link text-start w-100 py-2 ${
                      selectedCategory === category ? 'active' : ''
                    }`}
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Sağ Ürün Grid */}
        <div className="col-lg-10">
          {/* Üst Sıralama Menüsü */}
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h4 className="mb-0">{selectedCategory}</h4>
            <div className="dropdown position-relative">
              <button 
                className="btn btn-outline-secondary dropdown-toggle" 
                type="button" 
                data-bs-toggle="dropdown"
              >
                <FaChevronDown className="me-2" />
                Sırala
              </button>
              <ul className="dropdown-menu">
                <li>
                  <button 
                    className="dropdown-item" 
                    onClick={() => setSortBy("featured")}
                  >
                    Öne Çıkanlar
                  </button>
                </li>
                <li>
                  <button 
                    className="dropdown-item" 
                    onClick={() => setSortBy("priceAsc")}
                  >
                    Fiyat: Düşükten Yükseğe
                  </button>
                </li>
                <li>
                  <button 
                    className="dropdown-item" 
                    onClick={() => setSortBy("priceDesc")}
                  >
                    Fiyat: Yüksekten Düşüğe
                  </button>
                </li>
                <li>
                  <button 
                    className="dropdown-item" 
                    onClick={() => setSortBy("rating")}
                  >
                    En Çok Değerlendirilenler
                  </button>
                </li>
              </ul>
            </div>
          </div>

          {/* Ürün Grid */}
          <div className="row g-4">
            {products.map(product => (
              <div key={product.id} className="col-sm-6 col-md-4 col-lg-3">
                <div className="card product-card border-0 shadow-sm h-100">
                  {/* Favori Butonu */}
                  <button 
                    className="btn btn-favorite"
                    onClick={() => toggleFavorite(product.id)}
                  >
                    {favorites.includes(product.id) ? (
                      <FaHeart className="text-danger" />
                    ) : (
                      <FaRegHeart />
                    )}
                  </button>

                  {/* Ürün Görseli */}
                  <img 
                    src={product.image} 
                    className="card-img-top" 
                    alt={product.name}
                  />

                  <div className="card-body">
                    {/* Ürün Adı */}
                    <h5 className="card-title mb-2">{product.name}</h5>

                    {/* Değerlendirme */}
                    <div className="d-flex align-items-center mb-2">
                      <div className="rating me-2">
                        {[...Array(5)].map((_, i) => (
                          <FaStar 
                            key={i}
                            className={i < Math.floor(product.rating) ? 'text-warning' : 'text-muted'}
                          />
                        ))}
                      </div>
                      <small className="text-muted">({product.rating})</small>
                    </div>

                    {/* Fiyat */}
                    <div className="d-flex justify-content-between align-items-center">
                      <h5 className="text-primary mb-0">
                        {product.price.toFixed(2)} ₺
                      </h5>
                      <button className="btn btn-primary btn-sm">
                        Sepete Ekle
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;