import React from 'react';
import type { Product } from '../types';

interface Props {
  product: Product;
  onAddToCart: (product: Product) => void;
}

export default function ProductCard({ product, onAddToCart }: Props) {
  return (
    <div className="group relative text-center bg-gray-900 p-4 rounded-xl">
      <div className="overflow-hidden mb-4">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-[28rem] object-cover transform group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <h3 className="text-lg font-medium text-gray-200">{product.name}</h3>
      <p className="text-sm text-gray-400 mb-2">{product.category}</p>
      <p className="text-gray-300 font-semibold mb-4">${product.price.toFixed(2)}</p>
      <button
        onClick={() => onAddToCart(product)}
        className="bg-white text-black px-4 py-2 rounded-lg hover:bg-gray-200 transition"
      >
        Ajouter au panier
      </button>
    </div>
  );
}
