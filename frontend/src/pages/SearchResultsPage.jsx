import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useLocation } from 'react-router-dom';
import '../css/SearchResultsPage.css'; // Import the CSS file for styling

function SearchResultsPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const location = useLocation(); // Track URL changes

  // Get query parameters from URL
  const getQueryParams = () => {
    const params = new URLSearchParams(location.search);
    return {
      name: params.get('q') || '',
      category: params.get('category') || '',
    };
  };

  // Fetch products based on query parameters
  useEffect(() => {
    const { name, category } = getQueryParams();
    if (!name && !category) return;

    setLoading(true);
    axios
      .get('/api/products/search', { params: { name, category } })
      .then((response) => {
        if (Array.isArray(response.data)) {
          setProducts(response.data);
        } else {
          setProducts([]);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, [location.search]);

  // Skeleton Loader
  const SkeletonLoader = () => (
    <div className="skeleton-grid">
      {Array(12)
        .fill(null)
        .map((_, index) => (
          <div key={index} className="skeleton-card">
            <div className="skeleton-image"></div>
            <div className="skeleton-text short"></div>
            <div className="skeleton-text long"></div>
          </div>
        ))}
    </div>
  );

  return (
    <div className="search-results-page">
      {loading ? (
        <SkeletonLoader />
      ) : products.length === 0 ? (
        <p className="no-results">No products found.</p>
      ) : (
        <div className="product-grid">
          {products.map((product) => (
            <div key={product.product_id} className="product-card">
              <Link to={`/product/${product.product_id}`} state={{ product }}>
                <img
                  src={
                    product.images && product.images.length > 0
                      ? product.images[0]
                      : 'https://res.cloudinary.com/dyybjybnc/image/upload/v1737141053/ajztsqlue7nr4qasebji.jpg'
                  }
                  alt={product.name}
                  className="product-image"
                />
                <h3 className="product-name">{product.name}</h3>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchResultsPage;
