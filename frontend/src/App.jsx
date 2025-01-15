import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import SearchResultsPage from './pages/SearchResultsPage';
import PaymentPage from './pages/PaymentPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product/:productId" element={<ProductPage />} />
        <Route path="/search" element={<SearchResultsPage />} />
        <Route path="/payment/:productId" element={<PaymentPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;