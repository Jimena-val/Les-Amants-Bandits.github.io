import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ProductCard from './components/ProductCard'; 
import Cart from "./components/Cart";
import type { Category, Product } from './types';

const categories: Category[] = [
  { name: 'Femmes', imageUrl: 'https://res.cloudinary.com/demdit2up/image/upload/v1762753347/Rosie_Huntington-Whiteley_is_a_vision_of_elegance_in_khaki_green_suit_x3jhch.jpg' },
  { name: 'Hommes', imageUrl: 'https://res.cloudinary.com/demdit2up/image/upload/v1762753240/descarga_13_x8y8cg.jpg' },
  { name: 'Parfums', imageUrl: 'https://res.cloudinary.com/demdit2up/image/upload/v1762753776/363084a6b3f03ae5bfc70fdfb67b2478_b6bvpc.jpg' },
  { name: 'Accessoires', imageUrl: 'https://res.cloudinary.com/demdit2up/image/upload/v1762753283/0f24ffdb0a8354ff3f280b68f81d352a_ziinhs.jpg' },
];

const products: Product[] = [
  { 
    id: 1,
    name: 'Robe en Soie Noire',
    category: 'Femmes',
    imageUrl: 'https://res.cloudinary.com/demdit2up/image/upload/v1762754074/d0b517a3fb11211cdb693c21ddc28e80_oilimn.jpg',
    price: 120
  },
  { 
    id: 2,
    name: 'Veste en Cuir "Bandit"',
    category: 'Hommes',
    imageUrl: 'https://res.cloudinary.com/demdit2up/image/upload/v1762754150/43596db49d24868990905b70f08551a6_galwdl.jpg',
    price: 180
  },
  { 
    id: 3,
    name: 'Parfum "Nuit Rebelle"',
    category: 'Parfums',
    imageUrl: 'https://res.cloudinary.com/demdit2up/image/upload/v1762754384/c3e00849892e06a70d7a9bdb9d764a56_peoodd.jpg',
    price: 95
  },
  { 
    id: 4,
    name: 'Sac à main "L\'Amante"',
    category: 'Accessoires',
    imageUrl: 'https://res.cloudinary.com/demdit2up/image/upload/v1762754289/descarga_14_qxsiep.jpg',
    price: 150
  },
  { 
    id: 5,
    name: 'Chemise en Lin',
    category: 'Hommes',
    imageUrl: 'https://res.cloudinary.com/demdit2up/image/upload/v1762754563/15971e86f6aff0df2c62bb741fa26b60_monnqm.jpg',
    price: 70
  },
  { 
    id: 6,
    name: 'Jupe Plissée',
    category: 'Femmes',
    imageUrl: 'https://res.cloudinary.com/demdit2up/image/upload/v1762754782/d0bc588311a78f52b20ff3075411d369_upgzis.jpg',
    price: 85
  },
];


const CategoryCard: React.FC<{ category: Category }> = ({ category }) => (
  <div className="group relative overflow-hidden">
    <img src={category.imageUrl} alt={category.name} className="w-full h-96 object-cover transform group-hover:scale-105 transition-transform duration-500 ease-in-out" />
    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
      <h3 className="text-white text-3xl font-serif font-bold tracking-wider">{category.name}</h3>
    </div>
    <a href="#" className="absolute inset-0" aria-label={`Voir la catégorie ${category.name}`}></a>
  </div>
);

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cart, setCart] = useState<Product[]>([]);

  const addToCart = (product: Product) => {
    setCart((prev) => [...prev, product]);
    console.log("Producto añadido:", product);
    console.log("Carrito actual:", cart);
  };
  const removeFromCart = (id: number) => {
  setCart(cart.filter((item) => item.id !== id));
  };

  return (
    <div className="bg-black text-gray-200 font-sans antialiased">
      <Header cartCount={cart.length} />
      {/* Botón para ver el carrito */}
        <button
          className="fixed top-6 right-6 bg-white text-black px-4 py-2 rounded-lg z-50 shadow-lg"
          onClick={() => setIsCartOpen(true)}
        >
          🛒 Panier ({cart.length})
        </button>
      <main>
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center text-center text-white">
          <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
          <img src="https://res.cloudinary.com/demdit2up/image/upload/v1762753456/0b5b1f03fa0820bea10bc180ddb9d8a4_xyopfm.jpg" alt="Modèles portant des vêtements élégants" className="absolute inset-0 w-full h-full object-cover" />
          <div className="relative z-20 px-4">
            <h1 className="text-5xl md:text-8xl font-serif font-bold tracking-wider leading-tight">Les Amants Bandits</h1>
            <p className="mt-4 text-lg md:text-2xl text-gray-300">L'Élégance Rebelle</p>
            <a href="#categories" className="mt-8 inline-block bg-white text-black px-10 py-3 font-semibold tracking-widest uppercase hover:bg-gray-200 transition-colors duration-300">
              Découvrir
            </a>
          </div>
        </section>

        {/* Categories Section */}
        <section id="categories" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-serif text-center mb-16 text-white">Nos Catégories</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {categories.map((cat) => (
                <CategoryCard key={cat.name} category={cat} />
              ))}
            </div>
          </div>
        </section>

        {/* Featured Products Section */}
        <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-black">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-serif text-center mb-16 text-white">Nouveautés</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
              {products.map((prod) => (
                <div key={prod.id} className="w-full">
                 <ProductCard
                    product={prod}
                    onAddToCart={addToCart}
                />
            </div>
              ))}
            </div>
          </div>
        </section>

        {/* Brand Philosophy */}
        <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-serif mb-6 text-white">Notre Philosophie</h2>
            <p className="text-lg text-gray-400 leading-relaxed">
              Inspiré par l'esprit libre des rues parisiennes, Les Amants Bandits incarne une dualité entre l'élégance intemporelle et une audace moderne. Chaque pièce est conçue pour ceux qui osent vivre avec passion et défier les conventions, créant leur propre style.
            </p>
          </div>
        </section>
      </main>
      {isCartOpen && (
        <Cart
          cart={cart}
          onRemove={removeFromCart}
          onCheckout={() => alert("Commande envoyée !")}
      />
      )}


      <Footer />
    </div>
  );
}

export default App;