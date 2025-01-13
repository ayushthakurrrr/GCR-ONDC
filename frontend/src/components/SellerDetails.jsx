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

  // Calculate discount percentage
  const mrp = seller.price.mrp;
  const sellingPrice = seller.price.selling_price;
  const discount = Math.round(((mrp - sellingPrice) / mrp) * 100);

  return (
    <div className="seller-details">
      <div className="seller-summary">
        <h4>{seller.seller_name}</h4>
        <p className="price">
          <span className="mrp">₹{mrp}</span> ₹{sellingPrice}
          <span className="discount"> ({discount}% off)</span>
        </p>
        <button onClick={() => setExpanded(!expanded)}>
          {expanded ? 'Hide Details' : 'Explore'}
        </button>
      </div>

      {expanded && (
        <div className="seller-details-expanded">
          <p><strong>Stock Available:</strong> {seller.stock_quantity} units</p>
          <p><strong>Fulfillment Type:</strong> {seller.fulfillment_details.type}</p>
          <p><strong>Returnable:</strong> {seller.fulfillment_details.returnable ? 'Yes' : 'No'}</p>
          <p><strong>Cancellable:</strong> {seller.fulfillment_details.cancellable ? 'Yes' : 'No'}</p>
          <p><strong>Return Window:</strong> {seller.fulfillment_details.return_window}</p>
        </div>
      )}
    </div>
  );
}

export default SellerDetails;


