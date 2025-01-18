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
  const [dynamicLoading, setDynamicLoading] = useState(true);

  // State for AI-generated description
  const [aiDescription, setAiDescription] = useState('');
  const [aiLoading, setAiLoading] = useState(false);

  // Redirect to Home if no product data is passed
  if (!product) {
    navigate('/');
    return null;
  }

  // Fetch dynamic details from seller database
  useEffect(() => {
    setDynamicLoading(true);
    axios
      .get(`https://gcr-ondc-backend.vercel.app/api/sellers/products/${productId}`)
      .then((response) => {
        setDynamicDetails(response.data);
        setDynamicLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setDynamicLoading(false);
      });
  }, [productId]);

  // Fetch AI-generated description
  useEffect(() => {
    if (!product.name) return;
    setAiLoading(true);

    const query = `Write a compelling 50-word description highlighting the key features, benefits, and uniqueness of ${product.name}. Focus on engaging language to capture attention and emphasize why it stands out`;
    axios
      .get(`https://null-ai.vercel.app/api/${encodeURIComponent(query)}`)
      .then((response) => {
        setAiDescription(response.data.content || 'No description available.');
        setAiLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching AI description:', error);
        setAiDescription('Failed to fetch AI description.');
        setAiLoading(false);
      });
  }, [product.name]);

  // Helper function to render attributes
  const renderAttributes = (attributes) => {
    return Object.entries(attributes).map(([key, value]) => {
      if (typeof value === 'object' && !Array.isArray(value)) {
        return (
          <div key={key} className="attribute-section">
            <h4>{key.charAt(0).toUpperCase() + key.slice(1)}</h4>
            <div>
              {Object.entries(value).map(([subKey, subValue]) => (
                <p key={subKey}>
                  <strong>{subKey.charAt(0).toUpperCase() + subKey.slice(1)}:</strong> {String(subValue)}
                </p>
              ))}
            </div>
          </div>
        );
      } else if (Array.isArray(value)) {
        return (
          <div key={key} className="attribute-section">
            <h4>{key.charAt(0).toUpperCase() + key.slice(1)}</h4>
            <p>
              {value.map((item, index) => (
                <React.Fragment key={index}>
                  {item}
                  {index < value.length - 1 && <span>, &nbsp;</span>}
                </React.Fragment>
              ))}
            </p>
          </div>
        );
      } else {
        if (key != 'mrp') {
          return (
            <p className="single-attribute" key={key}>
              <strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong> {value}
            </p>
          );
        }
      }
    });
  };

  return (
    <div className="product-page">
      {/* Left Section - Static Details */}
      <div className="product-left">
        {product ? (
          <>
            <div className="product-images">
              <img
                src={(product.images && product.images[0]) || 'https://res.cloudinary.com/dyybjybnc/image/upload/v1737141053/ajztsqlue7nr4qasebji.jpg'}
                alt={product.name}
              />
            </div>
            <div className="product-info">
              <h2>{product.name}</h2>
              <p className="price">MRP: ₹{product.attributes.mrp}</p>
              <p>{product.description}</p>

              {/* AI-Generated Description Box */}
              <div className="ai-description-box">
                <div className="ai-logo">
                  <img
                    src="https://img.icons8.com/ios-filled/50/000000/artificial-intelligence.png"
                    alt="AI Logo"
                  />
                </div>
                <div className="ai-description-content">
                  <h4>AI-Generated Description</h4>
                  <p>
                    {aiLoading ? (
                      <span className="ai-loader">Fetching AI insights...</span>
                    ) : (
                      aiDescription
                    )}
                  </p>
                </div>
              </div>

              <h3>Specifications</h3>
              {renderAttributes(product.attributes)}
            </div>
          </>
        ) : (
          <div className="static-loader">
            <div className="image-placeholder"></div>
            <div className="text-placeholder short"></div>
            <div className="text-placeholder long"></div>
            <div className="text-placeholder long"></div>
          </div>
        )}
      </div>

      {/* Right Section - Dynamic Details */}
      <div className="product-right">
        <h3>Available from Sellers</h3>
        {dynamicLoading ? (
          <div className="dynamic-loader">
            {Array(5)
              .fill(null)
              .map((_, index) => (
                <div key={index} className="seller-placeholder">
                  <div className="seller-name-placeholder"></div>
                  <div className="seller-detail-placeholder"></div>
                </div>
              ))}
          </div>
        ) : dynamicDetails.length === 0 ? (
          <p>No sellers found for this product.</p>
        ) : (
          dynamicDetails.map((seller) => <SellerDetails key={seller.seller_id} seller={seller} />)
        )}
      </div>
    </div>
  );
}

export default ProductPage;
