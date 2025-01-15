// import React from 'react';
// import { Link } from 'react-router-dom';

// function SellerDetails({ seller }) {
//   return (
//     <div>
//       <h4>{seller.seller_name}</h4>
//       <p>Price: {seller.price.selling_price} {seller.price.currency}</p>
//       <p>MRP: {seller.price.mrp} {seller.price.currency}</p>
//       <p>Stock: {seller.stock_quantity}</p>
//       <p>Fulfillment Type: {seller.fulfillment_details.type}</p>
//       <p>Time to Ship: {seller.fulfillment_details.time_to_ship}</p>
//       <p>Returnable: {seller.fulfillment_details.returnable ? 'Yes' : 'No'}</p>
//       <p>Cancellable: {seller.fulfillment_details.cancellable ? 'Yes' : 'No'}</p>
//       <Link to={`/payment/${seller.seller_id}`}>Buy</Link>
//     </div>
//   );
// }

// export default SellerDetails;

import React, { useState } from 'react';
import '../css/SellerDetails.css';

function SellerDetails({ seller }) {
  const [expanded, setExpanded] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  // Calculate discount percentage
  const mrp = seller.price.mrp;
  const sellingPrice = seller.price.selling_price;
  const discount = Math.round(((mrp - sellingPrice) / mrp) * 100);

  // Determine availability status
  const availability = seller.stock_quantity > 0 ? 'Available' : 'Not Available';
  const availabilityClass = seller.stock_quantity > 0 ? 'available' : 'not-available';

  // Handle pop-up display
  const handlePopup = () => {
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 3000);
  };

  return (
    <div className="seller-details">
      {/* First Line: Seller Name and Discount */}
      <div className="seller-summary">
        <h4>{seller.seller_name}</h4>
        <span className="discount">({discount}% off)</span>
      </div>

      {/* Second Line: MRP and Selling Price */}
      <div className="seller-pricing">
        <p>
          <span className="mrp">₹{mrp}</span> ₹{sellingPrice}
        </p>
      </div>

      {/* Third Line: Explore Button */}
      <div className="explore-button">
        <button onClick={() => setExpanded(!expanded)}>
          {expanded ? 'Hide Details' : 'Explore'}
        </button>
      </div>

      {/* Expanded Section */}
      {expanded && (
        <div className="seller-details-expanded">
          <p className={`availability ${availabilityClass}`}>{availability}</p>
          <p><strong>Fulfillment Type:</strong> {seller.fulfillment_details.type}</p>
          <p><strong>Returnable:</strong> {seller.fulfillment_details.returnable ? 'Yes' : 'No'}</p>
          <p><strong>Cancellable:</strong> {seller.fulfillment_details.cancellable ? 'Yes' : 'No'}</p>
          <p><strong>Return Window:</strong> {seller.fulfillment_details.return_window}</p>

          {/* Buy Buttons */}
          <div className="buy-buttons">
            <button className="buy-button" onClick={handlePopup}>Buy from Here</button>
            <button className="buy-button" onClick={handlePopup}>Buy from Seller</button>
          </div>
        </div>
      )}

      {/* Pop-Up Notification */}
      {showPopup && (
        <div className="popup-notification">
          <p>This was not part of GCR, so not included in the prototype.</p>
        </div>
      )}
    </div>
  );
}

export default SellerDetails;





