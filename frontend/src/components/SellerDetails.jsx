// import React from 'react';
// import { Link } from 'react-router-dom';

// function SellerDetails({ seller }) {
//   return (
//     <div>
//       <h4>{seller.seller_name}</h4>
//       <p>Price: {seller.price.value} {seller.price.currency}</p>
//       <Link to={`/payment/${seller.product_id}`}>Buy Here</Link>
//       <a href={seller.seller_url} target="_blank" rel="">Go to Seller</a>
//     </div>
//   );
// }

// export default SellerDetails;

import React from 'react';
import { Link } from 'react-router-dom';

function SellerDetails({ seller }) {
  return (
    <div>
      <h4>{seller.seller_name}</h4>
      <p>Price: {seller.price.selling_price} {seller.price.currency}</p>
      <p>MRP: {seller.price.mrp} {seller.price.currency}</p>
      <p>Stock: {seller.stock_quantity}</p>
      <p>Fulfillment Type: {seller.fulfillment_details.type}</p>
      <p>Time to Ship: {seller.fulfillment_details.time_to_ship}</p>
      <p>Returnable: {seller.fulfillment_details.returnable ? 'Yes' : 'No'}</p>
      <p>Cancellable: {seller.fulfillment_details.cancellable ? 'Yes' : 'No'}</p>
      <Link to={`/payment/${seller.seller_id}`}>Buy Here</Link>
    </div>
  );
}

export default SellerDetails;

