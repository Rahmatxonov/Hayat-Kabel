// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import productsText from '../assets/images/PRODUCTS.png';
// import axios from 'axios';
// import { useTranslation } from 'react-i18next';
// // import cable from '../assets/images/product.jpg';

// const Products: React.FC = () => {
//   const navigate = useNavigate();
//   let [product, setProduct] = useState([]);
//   const { t } = useTranslation();

//   // const productData = [
//   //   {
//   //     id: 1,
//   //     image: cable,
//   //     title: 'Cable',
//   //     text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
//   //     btnText: 'View more',
//   //   },
//   //   {
//   //     id: 2,
//   //     image: cable,
//   //     title: 'Cable',
//   //     text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
//   //     btnText: 'View more',
//   //   },
//   //   {
//   //     id: 3,
//   //     image: cable,
//   //     title: 'Cable',
//   //     text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
//   //     btnText: 'View more',
//   //   },
//   //   {
//   //     id: 4,
//   //     image: cable,
//   //     title: 'Cable',
//   //     text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
//   //     btnText: 'View more',
//   //   },
//   //   {
//   //     id: 5,
//   //     image: cable,
//   //     title: 'Cable',
//   //     text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
//   //     btnText: 'View more',
//   //   },
//   //   {
//   //     id: 6,
//   //     image: cable,
//   //     title: 'Cable',
//   //     text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
//   //     btnText: 'View more',
//   //   },
//   //   {
//   //     id: 7,
//   //     image: cable,
//   //     title: 'Cable',
//   //     text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
//   //     btnText: 'View more',
//   //   },
//   //   {
//   //     id: 8,
//   //     image: cable,
//   //     title: 'Cable',
//   //     text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
//   //     btnText: 'View more',
//   //   },
//   // ];

//   const handleProductClick = (product: {
//     id: number;
//     image: string;
//     name: string;
//     description: string;
//     size: string;
//     color: string;
//     view: string;
//   }) => {
//     navigate(`/product/${product.id}`, { state: { product } });
//   };

//   async function ProductList() {
//     try {
//       const res = await axios.get(
//         'https://65f258c5034bdbecc7649f36.mockapi.io/app/products'
//       );
//       const product = await res.data;
//       setProduct(product);
//     } catch (error: any) {
//       alert('Error: ' + error.message);
//     }
//   }

//   useEffect(() => {
//     ProductList();
//   }, []);

//   return (
//     <div className="relative flex flex-col items-center justify-center h-auto min-h-screen p-4 mt-[200px] md:mt-0">
//       <div className="relative w-full max-w-screen-lg flex flex-col items-center">
//         <img className="w-full h-auto" src={productsText} alt="Products text" />
//         <h3 className="absolute top-8 left-1/2 transform -translate-x-1/2 text-white uppercase text-center font-semibold text-[32px] leading-[39px] tracking-[10px] md:text-[36px] md:leading-[44px] md:tracking-[12px]">
//           {t('products')}
//         </h3>
//       </div>

//       <div className="text-gray-600 body-font mt-10 max-w-screen-xl w-full mx-auto">
//         <div className="flex flex-wrap -m-4 justify-center">
//           {product.map((product: any, index) => (
//             <div
//               key={index}
//               className="lg:w-1/4 md:w-1/2 sm:w-full p-4 flex justify-center"
//             >
//               <div className="bg-[#10131f] rounded-[16px] shadow-lg border border-[#393838dc] max-w-sm w-full">
//                 <img
//                   className="h-40 rounded-t-[16px] w-full object-cover object-center bg-[#06113C33]"
//                   src={product.image}
//                   alt={product.name}
//                 />
//                 <div className="bg-[#10131f] p-5 rounded-b-[16px]">
//                   <h3 className="font-semibold text-[20px] leading-[24px] tracking-[2px] text-white pb-[10px]">
//                     {product.name}
//                   </h3>
//                   <p className="text-[#DDDDDD] text-[14px] md:text-[12px] leading-[20px] mb-4">
//                     {product.description}
//                   </p>
//                   <div className="flex flex-wrap gap-2">
//                     <p className="text-[#DDDDDD] text-[12px] md:text-[14px] font-light">
//                       <strong className="text-white">Size:</strong>{' '}
//                       {product.size}
//                     </p>
//                     <p className="text-[#DDDDDD] text-[12px] md:text-[14px] font-light">
//                       <strong className="text-white">Color:</strong>{' '}
//                       {product.color}
//                     </p>
//                     <p className="text-[#DDDDDD] text-[12px] md:text-[14px] font-light">
//                       <strong className="text-white">View:</strong>{' '}
//                       {product.view}
//                     </p>
//                   </div>
//                   <button
//                     onClick={() => handleProductClick(product)}
//                     className="mt-3 bg-[#F9E400] text-[#1B1A17] text-[16px] font-normal py-2 px-4 rounded-[10px] inline-flex items-center"
//                   >
//                     View more
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Products;

import { useNavigate } from 'react-router-dom';
import productsText from '../assets/images/PRODUCTS.png';
import { useTranslation } from 'react-i18next';
import cable from '../assets/images/product.jpg';

const Products: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const productData = [
    {
      id: 1,
      image: cable,
      title: 'Cable',
      text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
      btnText: 'View more',
    },
    {
      id: 2,
      image: cable,
      title: 'Cable',
      text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
      btnText: 'View more',
    },
    {
      id: 3,
      image: cable,
      title: 'Cable',
      text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
      btnText: 'View more',
    },
    {
      id: 4,
      image: cable,
      title: 'Cable',
      text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
      btnText: 'View more',
    },
    {
      id: 5,
      image: cable,
      title: 'Cable',
      text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
      btnText: 'View more',
    },
    {
      id: 6,
      image: cable,
      title: 'Cable',
      text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
      btnText: 'View more',
    },
    {
      id: 7,
      image: cable,
      title: 'Cable',
      text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
      btnText: 'View more',
    },
    {
      id: 8,
      image: cable,
      title: 'Cable',
      text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
      btnText: 'View more',
    },
  ];

  const handleProductClick = (product: {
    id: number;
    image: string;
    name: string;
    description: string;
    size: string;
    color: string;
    view: string;
  }) => {
    navigate(`/product/${product.id}`, { state: { product } });
  };

  //   try {
  //     const res = await axios.get(
  //       'https://65f258c5034bdbecc7649f36.mockapi.io/app/products'
  //     );
  //     const product = await res.data;
  //     setProduct(product);
  //   } catch (error: any) {
  //     alert('Error: ' + error.message);
  //   }
  // }

  // useEffect(() => {
  //   ProductList();
  // }, []);

  return (
    <div className="relative flex flex-col items-center justify-center h-auto min-h-screen p-4 mt-[200px] md:mt-0">
      <div className="relative w-full max-w-screen-lg flex flex-col items-center">
        <img className="w-full h-auto" src={productsText} alt="Products text" />
        <h3 className="absolute top-8 left-1/2 transform -translate-x-1/2 text-white uppercase text-center font-semibold text-[32px] leading-[39px] tracking-[10px] md:text-[36px] md:leading-[44px] md:tracking-[12px]">
          {t('products')}
        </h3>
      </div>

      <div className="text-gray-600 body-font mt-10 max-w-screen-xl w-full mx-auto">
        <div className="flex flex-wrap -m-4 justify-center">
          {productData.map((product: any, index) => (
            <div
              key={index}
              className="lg:w-1/4 md:w-1/2 sm:w-full p-4 flex justify-center"
            >
              <div className="bg-[#10131f] rounded-[16px] shadow-lg border border-[#393838dc] max-w-sm w-full">
                <img
                  className="h-40 rounded-t-[16px] w-full object-cover object-center bg-[#06113C33]"
                  src={product.image}
                  alt={product.name}
                />
                <div className="bg-[#10131f] p-5 rounded-b-[16px]">
                  <h3 className="font-semibold text-[20px] leading-[24px] tracking-[2px] text-white pb-[10px]">
                    {product.title}
                  </h3>
                  <p className="text-[#DDDDDD] text-[14px] md:text-[12px] leading-[20px] mb-4">
                    {product.text}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <p className="text-[#DDDDDD] text-[12px] md:text-[14px] font-light">
                      <strong className="text-white">Size:</strong>{' '}
                      {product.size}
                    </p>
                    <p className="text-[#DDDDDD] text-[12px] md:text-[14px] font-light">
                      <strong className="text-white">Color:</strong>{' '}
                      {product.color}
                    </p>
                    <p className="text-[#DDDDDD] text-[12px] md:text-[14px] font-light">
                      <strong className="text-white">View:</strong>{' '}
                      {product.view}
                    </p>
                  </div>
                  <button
                    onClick={() => handleProductClick(product)}
                    className="mt-3 bg-[#F9E400] text-[#1B1A17] text-[16px] font-normal py-2 px-4 rounded-[10px] inline-flex items-center"
                  >
                    View more
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
