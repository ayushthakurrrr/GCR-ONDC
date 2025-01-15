// import React, { useEffect, useState } from 'react';
// import { useLocation, useNavigate, useParams } from 'react-router-dom';
// import axios from 'axios';
// import SellerDetails from '../components/SellerDetails';

// function ProductPage() {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const { productId } = useParams();

//   // Static product details from GCR
//   const product = location.state?.product;

//   // State to hold dynamic details from seller database
//   const [dynamicDetails, setDynamicDetails] = useState([]);

//   // Redirect to Home if no product data is passed
//   if (!product) {
//     navigate('/');
//     return null;
//   }

//   // Fetch dynamic details from seller database
//   useEffect(() => {
//     axios.get(`/api/sellers/products/${productId}`)
//       .then(response => setDynamicDetails(response.data))
//       .catch(error => console.error(error));
//   }, [productId]);

//   return (
//     <div>
//       <h2>{product.name}</h2>
//       <p>{product.description}</p>

//       <h3>Static Details</h3>
//       <ul>
//         <li>MRP. {product.attributes.mrp}</li>
//         <li>Category: {product.category_id}</li>
//         <li>Attributes: {JSON.stringify(product.attributes)}</li>
//         <li>Tags: {product.tags.join(', ')}</li>
//       </ul>

//       <h3>Available from Sellers (Dynamic Details)</h3>
//       {dynamicDetails.length === 0 ? (
//         <p>Loading seller details...</p>
//       ) : (
//         dynamicDetails.map(seller => (
//           <SellerDetails key={seller.seller_id} seller={seller} />
//         ))
//       )}
//     </div>
//   );
// }

// export default ProductPage;
// import React, { useEffect, useState } from 'react';
// import { useLocation, useNavigate, useParams } from 'react-router-dom';
// import axios from 'axios';
// import SellerDetails from '../components/SellerDetails';
// import '../css/ProductPage.css';

// function ProductPage() {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const { productId } = useParams();

//   // Static product details from GCR
//   const product = location.state?.product;

//   // State to hold dynamic details from seller database
//   const [dynamicDetails, setDynamicDetails] = useState([]);

//   // Redirect to Home if no product data is passed
//   if (!product) {
//     navigate('/');
//     return null;
//   }

//   // Fetch dynamic details from seller database
//   useEffect(() => {
//     axios
//       .get(`/api/sellers/products/${productId}`)
//       .then((response) => setDynamicDetails(response.data))
//       .catch((error) => console.error(error));
//   }, [productId]);

//   return (
//     <div className="product-page">
//       {/* Left Section - Static Details */}
//       <div className="product-left">
//         <div className="product-images">
//           {/* <img src={product.images[0]} alt={product.name} /> */}
//           <img src="https://media.istockphoto.com/id/658239786/vector/realistic-tv-screen-mock-up.jpg?s=612x612&w=0&k=20&c=IDP3qrk97UVUBg6zd_2Ytx6nL40Ibe5bGdLWOQb2_uY=" alt={product.name} />
//         </div>
//         <div className="product-info">
//           <h2>{product.name}</h2>
//           <p className="">MRP: ₹{product.attributes.mrp}</p>
//           <p>{product.description}</p>
//           <h3>Specifications</h3>
//           {Object.entries(product.attributes).map(([key, value]) => (
//             <div key={key} className="attribute-section">
//               <h4>{key.charAt(0).toUpperCase() + key.slice(1)}</h4>
//               {typeof value === 'object' ? (
//                 <ul>
//                   {Object.entries(value).map(([subKey, subValue]) => (
//                     <li key={subKey}>
//                       <strong>{subKey.charAt(0).toUpperCase() + subKey.slice(1)}:</strong> {subValue}
//                     </li>
//                   ))}
//                 </ul>
//               ) : (
//                 <p>{value}</p>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Right Section - Dynamic Details */}
//       <div className="product-right">
//         <h3>Available from Sellers</h3>
//         {dynamicDetails.length === 0 ? (
//           <p>Loading seller details...</p>
//         ) : (
//           dynamicDetails.map((seller) => (
//             <SellerDetails key={seller.seller_id} seller={seller} />
//           ))
//         )}
//       </div>
//     </div>
//   );
// }

// export default ProductPage;






import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import SellerDetails from '../components/SellerDetails';
import '../css/ProductPage.css';

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
    axios
      .get(`/api/sellers/products/${productId}`)
      .then((response) => setDynamicDetails(response.data))
      .catch((error) => console.error(error));
  }, [productId]);

  // Helper function to render attributes
  const renderAttributes = (attributes) => {
    return Object.entries(attributes).map(([key, value]) => {
      if (typeof value === 'object' && !Array.isArray(value)) {
        // If value is an object, render a nested list
        return (
          <div key={key} className="attribute-section">
            <h4>{key.charAt(0).toUpperCase() + key.slice(1)}</h4>
            <ul>
              {Object.entries(value).map(([subKey, subValue]) => (
                <li key={subKey}>
                  <strong>{subKey.charAt(0).toUpperCase() + subKey.slice(1)}:</strong>{' '}
                  {typeof subValue === 'object' ? (
                    <ul>
                      {Object.entries(subValue).map(([nestedKey, nestedValue]) => (
                        <li key={nestedKey}>
                          <strong>{nestedKey.charAt(0).toUpperCase() + nestedKey.slice(1)}:</strong> {nestedValue}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    subValue
                  )}
                </li>
              ))}
            </ul>
          </div>
        );
      } else if (Array.isArray(value)) {
        // If value is an array, render it as a comma-separated list
        return (
          <p key={key}>
            <strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong> {value.join(', ')}
          </p>
        );
      } else {
        // For simple key-value pairs, render them directly
        return (
          <p key={key}>
            <strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong> {value}
          </p>
        );
      }
    });
  };

  return (
    <div className="product-page">
      {/* Left Section - Static Details */}
      <div className="product-left">
        <div className="product-images">
          <img
            src={product.images[0] || 'https://media.istockphoto.com/id/658239786/vector/realistic-tv-screen-mock-up.jpg'}
            // src={'https://res.cloudinary.com/dlcx4dqd1/image/upload/v1736786290/Item%20Photos/Electronics/smartphone/g9jyofokrki6qaigzi2r.jpg'}
            alt={product.name}
          />
        </div>
        <div className="product-info">
          <h2>{product.name}</h2>
          <p className="">MRP: ₹{product.attributes.mrp}</p>
          <p>{product.description}</p>
          <h3>Specifications</h3>
          {renderAttributes(product.attributes)}
        </div>
      </div>

      {/* Right Section - Dynamic Details */}
      <div className="product-right">
        <h3>Available from Sellers</h3>
        {dynamicDetails.length === 0 ? (
          <p>Loading seller details...</p>
        ) : (
          dynamicDetails.map((seller) => <SellerDetails key={seller.seller_id} seller={seller} />)
        )}
      </div>
    </div>
  );
}

export default ProductPage;
