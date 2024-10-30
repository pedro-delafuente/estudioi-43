import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="space-y-24 pb-16">
      {/* Hero Section */}
      <div className="h-screen relative flex items-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&q=80"
            alt="Wooden furniture craftsmanship"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-stone-900/40"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-6xl font-serif text-white mb-6">
            Crafting Timeless<br />Wood Furniture
          </h1>
          <p className="text-xl text-stone-100 mb-8 max-w-xl">
            Where traditional craftsmanship meets contemporary design
          </p>
          <Link
            to="/collection"
            className="inline-flex items-center px-6 py-3 bg-stone-100 text-stone-900 rounded-full hover:bg-white transition-colors"
          >
            View Collection
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>

      {/* Featured Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-serif text-stone-800 mb-12">Featured Pieces</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredItems.map((item) => (
            <Link
              key={item.id}
              to={`/furniture/${item.id}`}
              className="group"
            >
              <div className="aspect-square overflow-hidden rounded-lg mb-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-serif text-stone-800">{item.name}</h3>
              <p className="text-stone-600">{item.category}</p>
            </Link>
          ))}
        </div>
      </div>

      {/* Philosophy Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-serif text-stone-800 mb-6">Our Philosophy</h2>
            <p className="text-stone-600 mb-4">
              At Estudio 43, we believe in the timeless beauty of wood and its ability to transform spaces.
              Each piece is thoughtfully designed and meticulously crafted to last generations.
            </p>
            <p className="text-stone-600">
              Our commitment to sustainable practices ensures that every creation not only enhances your space
              but also respects our environment.
            </p>
          </div>
          <div className="aspect-[4/5] rounded-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1610701596007-11502861dcfa?auto=format&fit=crop&q=80"
              alt="Woodworking craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const featuredItems = [
  {
    id: 1,
    name: "Aurora Dining Table",
    category: "Dining",
    image: "https://images.unsplash.com/photo-1577140917170-285929fb55b7?auto=format&fit=crop&q=80"
  },
  {
    id: 2,
    name: "Horizon Lounge Chair",
    category: "Seating",
    image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&q=80"
  },
  {
    id: 3,
    name: "Terra Coffee Table",
    category: "Living",
    image: "https://images.unsplash.com/photo-1532372320572-cda25653a26d?auto=format&fit=crop&q=80"
  }
];

export default Home;