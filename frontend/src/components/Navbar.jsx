// import React from 'react';
// import { Link } from 'react-router-dom';

// function Navbar() {
//   return (
//     <nav>
//       <h1>GCR Prototype</h1>
//       <Link to="/">Home</Link>
//     </nav>
//   );
// }

// export default Navbar;
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
          <img src="/2-removebg-preview.png" alt="GCR Logo" className="logo" />
        </Link>
      </div>

      {/* Search Bar */}
      <form className="navbar-search" onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search products..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      {/* Right Logo */}
      <div className="navbar-logo">
        <img src="/4-removebg-preview.png" alt="Right Logo" className="logo2" />
      </div>
    </nav>
  );
}

export default Navbar;

