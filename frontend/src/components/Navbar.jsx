import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <h1>GCR Prototype</h1>
      <Link to="/">Home</Link>
    </nav>
  );
}

export default Navbar;