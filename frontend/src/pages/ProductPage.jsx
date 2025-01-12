// import React from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import SellerDetails from '../components/SellerDetails';

// function ProductPage() {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const product = location.state?.product;

//   // Redirect to Home if no product data is passed
//   if (!product) {
//     navigate('/');
//     return null;
//   }

//   return (
//     <div>
//       <h2>{product.name}</h2>
//       <p>{product.description}</p>
//       <h3>Available from Sellers</h3>
//       {product.sellers.map(seller => (
//         <SellerDetails key={seller.seller_id} seller={seller} />
//       ))}
//     </div>
//   );
// }

// export default ProductPage;


import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import SellerDetails from '../components/SellerDetails';

function ProductPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { productId } = useParams();

  // Static product details from GCR
  const product = location.state?.product;

  // State to hold dynamic details from seller database
  const [dynamicDetails, setDynamicDetails] = useState([]);

  // Redirect to Home if no product data is passed
  if (!product) {
    navigate('/');
    return null;
  }

  // Fetch dynamic details from seller database
  useEffect(() => {
    axios.get(`/api/sellers/products/${productId}`)
      .then(response => setDynamicDetails(response.data))
      .catch(error => console.error(error));
  }, [productId]);

  return (
    <div>
      <h2>{product.name}</h2>
      <p>{product.description}</p>

      <h3>Static Details</h3>
      <ul>
        <li>Category: {product.category_id}</li>
        <li>Attributes: {JSON.stringify(product.attributes)}</li>
        <li>Tags: {product.tags.join(', ')}</li>
      </ul>

      <h3>Available from Sellers (Dynamic Details)</h3>
      {dynamicDetails.length === 0 ? (
        <p>Loading seller details...</p>
      ) : (
        dynamicDetails.map(seller => (
          <SellerDetails key={seller.seller_id} seller={seller} />
        ))
      )}
    </div>
  );
}

export default ProductPage;

