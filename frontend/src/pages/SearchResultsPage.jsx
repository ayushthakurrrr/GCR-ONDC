// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';

// function SearchResultsPage() {
//   const [products, setProducts] = useState([]);
//   const query = new URLSearchParams(window.location.search).get('q');

//   useEffect(() => {
//     axios.get(`/api/products/search`, { params: { name: query } })
//     .then(response => {
//         if (Array.isArray(response.data)) {
//           setProducts(response.data);
//         } else {
//           setProducts([]); // Handle unexpected response
//         }
//       })
//       .catch(error => console.error(error));
//   }, [query]);

//   return (
//     <div>
//       <h2>Search Results for "{query}"</h2>
//       {products.map(product => (
//         <div key={product.product_id}>
//           {/* <Link to={`/product/${product.product_id}`}>{product.name}</Link> */}
//           <Link to={`/product/${product.product_id}`} state={{ product }}>{product.name}</Link>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default SearchResultsPage;


// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Link, useLocation } from 'react-router-dom';

// function SearchResultsPage() {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const location = useLocation(); // Track URL changes

//   const getQuery = () => {
//     const params = new URLSearchParams(location.search);
//     return params.get('q') || '';
//   };

//   useEffect(() => {
//     const query = getQuery();
//     if (!query) return;

//     setLoading(true);
//     axios
//       .get(`/api/products/search`, { params: { name: query } })
//       .then((response) => {
//         if (Array.isArray(response.data)) {
//           setProducts(response.data);
//         } else {
//           setProducts([]);
//         }
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.error(error);
//         setLoading(false);
//       });
//   }, [location.search]);

//   if (loading) {
//     return <p>Loading...</p>;
//   }

//   return (
//     <div>
//       <h2>Search Results for "{getQuery()}"</h2>
//       {products.length === 0 && <p>No products found.</p>}
//       {products.map((product) => (
//         <div key={product.product_id}>
//           <Link to={`/product/${product.product_id}`} state={{ product }}>
//             {product.name}
//           </Link>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default SearchResultsPage;


import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useLocation } from 'react-router-dom';
import '../css/SearchResultsPage.css'; // Import the CSS file for styling

function SearchResultsPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const location = useLocation(); // Track URL changes

  const getQuery = () => {
    const params = new URLSearchParams(location.search);
    return params.get('q') || '';
  };

  useEffect(() => {
    const query = getQuery();
    if (!query) return;

    setLoading(true);
    axios
      .get(`/api/products/search`, { params: { name: query } })
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

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="search-results-page">
      {/* <h2 className="search-heading">Search Results for "{getQuery()}"</h2> */}
      {products.length === 0 && <p className="no-results">No products found.</p>}
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.product_id} className="product-card">
            <Link to={`/product/${product.product_id}`} state={{ product }}>
              <img
                src={product.images && product.images.length > 0 ? product.images[0] : '/placeholder.jpg'}
                alt={product.name}
                className="product-image"
              />
              <h3 className="product-name">{product.name}</h3>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SearchResultsPage;
