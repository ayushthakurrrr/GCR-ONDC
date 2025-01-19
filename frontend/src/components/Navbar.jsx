import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../css/Navbar.css'; // Import the CSS for styling

function Navbar() {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  // Handle the search form submission
  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/search?q=${query}`);
    }
  };

  return (
    <nav className="navbar">
      {/* Left Logo - Acts as Home Link */}
      <div className="navbar-logo">
        <Link to="/">
          <img src="/gcr_logo-removebg-preview (1).png" alt="GCR Logo" className="logo" />
        </Link>
      </div>

      {/* Search Bar */}
      <form className="navbar-search" onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search products by name..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      {/* Right Logo */}
      <div className="navbar-logo">
        <img src="/ondc 2.png" alt="Right Logo" className="logo2" />
      </div>
    </nav>
  );
}

export default Navbar;

