import React from 'react';
import { useParams } from 'react-router-dom';

function PaymentPage() {
  const { productId } = useParams();

  return (
    <div>
      <h2>Payment for Product ID: {productId}</h2>
      <button>Pay Now</button>
      <button>Visit Seller</button>
    </div>
  );
}

export default PaymentPage;
