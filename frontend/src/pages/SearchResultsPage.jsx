import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function SearchResultsPage() {
  const [products, setProducts] = useState([]);
  const query = new URLSearchParams(window.location.search).get('q');

  useEffect(() => {
    axios.get(`/api/products/search`, { params: { name: query } })
    .then(response => {
        if (Array.isArray(response.data)) {
          setProducts(response.data);
        } else {
          setProducts([]); // Handle unexpected response
        }
      })
      .catch(error => console.error(error));
  }, [query]);

  return (
    <div>
      <h2>Search Results for "{query}"</h2>
      {products.map(product => (
        <div key={product.product_id}>
          {/* <Link to={`/product/${product.product_id}`}>{product.name}</Link> */}
          <Link to={`/product/${product.product_id}`} state={{ product }}>{product.name}</Link>
        </div>
      ))}
    </div>
  );
}

export default SearchResultsPage;