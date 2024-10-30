import React from 'react';
import { Link } from 'react-router-dom';
import { furnitureData } from '../data/furniture';

const Collection = () => {
  return (
    <div className="pt-24 pb-16 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-serif text-stone-800 mb-12">Our Collection</h1>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {furnitureData.map((item) => (
            <Link
              key={item.id}
              to={`/furniture/${item.id}`}
              className="group"
            >
              <div className="aspect-square overflow-hidden rounded-lg mb-4">
                <img
                  src={item.images[0]}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h2 className="text-xl font-serif text-stone-800 mb-1">{item.name}</h2>
              <p className="text-stone-600">{item.category}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collection;