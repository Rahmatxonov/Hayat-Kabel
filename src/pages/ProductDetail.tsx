import React from 'react';
import { useLocation } from 'react-router-dom';

const ProductDetail: React.FC = () => {
  const location = useLocation();
  const { product } = location.state as {
    product: {
      image: string;
      name: string;
      description: string;
      size: string;
      color: string;
      view: string;
    };
  };

  return (
    <div className="min-h-screen text-white">
      <div className="container mx-auto px-4 mt-[100px] md:mt-[150px]">
        <div className="flex items-center space-x-2 text-gray-400 text-sm mt-8">
          <a href="/" className="hover:underline">
            Home page
          </a>
          <span>→</span>
          <a href="/catalog" className="hover:underline">
            Products catalog
          </a>
          <span>→</span>
          <span className="text-white">Products info</span>
        </div>
        <div className="flex flex-col md:flex-row md:items-center items-start mt-10">
          <div className="md:w-1/2">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-auto rounded-[16px] shadow-lg"
            />
          </div>
          <div className="md:w-1/2 md:pl-12 mt-8 md:mt-0">
            <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
            <p className="text-gray-300 mb-6 leading-7">
              {product.description}
            </p>
            <div className="text-gray-400 space-y-2">
              <p>
                <strong className="text-white">Size: </strong> {product.size}
              </p>
              <p>
                <strong className="text-white">Color: </strong> {product.color}
              </p>
              <p>
                <strong className="text-white">View: </strong> {product.view}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
