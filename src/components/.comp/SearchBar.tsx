import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

const SearchBar: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Arama işlemi burada yapılacak
    console.log('Aranan:', searchTerm);
  };

  return (
    <form onSubmit={handleSearch} className="search-form">
      <div className="search-container">
        <input
          type="text"
          placeholder="Ürün ara..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
        <button type="submit" className="search-button">
          <FaSearch />
        </button>
      </div>
    </form>
  );
};

export default SearchBar;