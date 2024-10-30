import React from 'react';
import { useParams } from 'react-router-dom';
import { furnitureData } from '../data/furniture';
import { Ruler, TreePine, Package } from 'lucide-react';

const FurnitureDetail = () => {
  const { id } = useParams();
  const furniture = furnitureData.find(item => item.id === Number(id));

  if (!furniture) {
    return <div>Item not found</div>;
  }

  return (
    <div className="pt-24 pb-16 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Images */}
          <div className="space-y-4">
            {furniture.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`${furniture.name} - View ${index + 1}`}
                className="w-full rounded-lg"
              />
            ))}
          </div>

          {/* Details */}
          <div className="lg:sticky lg:top-24 h-fit">
            <h1 className="text-4xl font-serif text-stone-800 mb-4">{furniture.name}</h1>
            <p className="text-stone-600 mb-8">{furniture.category}</p>

            <div className="prose prose-stone max-w-none mb-8">
              <p>{furniture.description}</p>
            </div>

            {/* Specifications */}
            <div className="border-t border-stone-200 pt-8 mb-8">
              <h2 className="text-2xl font-serif text-stone-800 mb-6">Specifications</h2>
              <div className="grid gap-6">
                <div className="flex items-start gap-4">
                  <Ruler className="h-6 w-6 text-stone-600" />
                  <div>
                    <h3 className="font-medium text-stone-800">Dimensions</h3>
                    <p className="text-stone-600">{furniture.specifications.dimensions}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <TreePine className="h-6 w-6 text-stone-600" />
                  <div>
                    <h3 className="font-medium text-stone-800">Materials</h3>
                    <p className="text-stone-600">{furniture.specifications.materials}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Package className="h-6 w-6 text-stone-600" />
                  <div>
                    <h3 className="font-medium text-stone-800">Weight</h3>
                    <p className="text-stone-600">{furniture.specifications.weight}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Care Instructions */}
            <div className="border-t border-stone-200 pt-8">
              <h2 className="text-2xl font-serif text-stone-800 mb-4">Care Instructions</h2>
              <ul className="list-disc list-inside text-stone-600 space-y-2">
                {furniture.careInstructions.map((instruction, index) => (
                  <li key={index}>{instruction}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FurnitureDetail;