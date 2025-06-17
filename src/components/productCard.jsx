
import React from 'react';

const ProductCard = ({ user }) => {
  return (
    <div className="bg-white rounded-lg p-4 border border-gray-200">
      <h3 className="text-lg font-bold mb-1">{user.name}</h3>
      <p className="text-sm text-gray-700">{user.email}</p>
      <p className="text-sm">Username:{user.username}</p>
    </div>
  );
};

export default ProductCard;
