import React from 'react';
import type { Product } from '../types';

interface CartProps {
  cart: Product[];
  onRemove: (id: number) => void;
  onCheckout: () => void;
}

export default function Cart({ cart, onRemove, onCheckout }: CartProps) {
  const total = cart.reduce((acc, p) => acc + p.price, 0);

  return (
    <div className="fixed top-0 right-0 w-80 h-full bg-gray-900 text-white p-6 shadow-lg z-50 overflow-y-auto">
      <h2 className="text-2xl font-serif mb-4">🛒 Votre Panier</h2>
      {cart.length === 0 ? (
        <p className="text-gray-400">Votre panier est vide.</p>
      ) : (
        <>
          <ul className="divide-y divide-gray-700">
            {cart.map((item) => (
              <li key={item.id} className="py-3 flex justify-between items-center">
                <div>
                  <p className="font-semibold">{item.name}</p>
                  <span className="text-sm text-gray-400">${item.price.toFixed(2)}</span>
                </div>
                <button
                  onClick={() => onRemove(item.id)}
                  className="text-red-400 hover:text-red-600"
                >
                  ✕
                </button>
              </li>
            ))}
          </ul>

          <div className="mt-4 font-bold text-lg">Total: ${total.toFixed(2)}</div>

          <button
            onClick={onCheckout}
            className="bg-green-600 w-full mt-4 py-2 rounded-lg hover:bg-green-700 transition"
          >
            Finaliser la commande
          </button>
        </>
      )}
    </div>
  );
}
