import React from 'react';
import ProductImage from './Без имени-1 1.png'; // Replace with your image path
import { ChevronDown, Triangle } from 'lucide-react';

const products = [
  { id: 1, name: 'CRYSTAL AGATE PHONE GRIP', price: 18.99, image: ProductImage },
  { id: 2, name: 'CRYSTAL AGATE PHONE GRIP', price: 18.99, image: ProductImage },
  { id: 3, name: 'CRYSTAL AGATE PHONE GRIP', price: 18.99, image: ProductImage },
  { id: 3, name: 'CRYSTAL AGATE PHONE GRIP', price: 18.99, image: ProductImage },
  { id: 3, name: 'CRYSTAL AGATE PHONE GRIP', price: 18.99, image: ProductImage },
  { id: 3, name: 'CRYSTAL AGATE PHONE GRIP', price: 18.99, image: ProductImage },
  { id: 3, name: 'CRYSTAL AGATE PHONE GRIP', price: 18.99, image: ProductImage },
  { id: 3, name: 'CRYSTAL AGATE PHONE GRIP', price: 18.99, image: ProductImage },
  // Add more products as needed
];

const Products = () => {
  return (
    <section className="pt-[50px] bg-white">

      <div className="container mx-auto">

        <div className='flex flex-col justify-center text-center items-center'>
           <h2 className="text-4xl font-bold text-center text-[#31546d]">All product</h2>
           <div className="bg-[#f2f2f2] h-[3px] w-[80px] mt-[15px]  mb-[20px]"></div>
        </div>

        <div className='flex ml-[50px] gap-16 mb-[50px] mt-[30px]'>
          <div className='flex font-medium gap-2'>
            <p className='text-[#9ab0c0]'>Filter:</p>
            <p className='text-[#31546d] flex gap-2 justify-center items-center'>All Products <ChevronDown size={19} className='mt-1'/></p>
          </div>
          <div className='flex font-medium gap-2'>
            <p className='text-[#9ab0c0]'>Sort:</p>
            <p className='text-[#31546d] flex gap-2'>Best Selling <ChevronDown size={19} className='mt-1'/></p>
          </div>
        </div>

        <div className="flex flex-wrap gap-10 ml-[50px]">
          {products.map((product) => (
            <div key={product.id} className="bg-white border-[2px] h-[412px] flex flex-col justify-center items-center text-center w-[322px] border-[#f2f2f2] p-6 rounded-2xl hover:shadow-xl transition-shadow">
              <img src={product.image} alt={product.name} className=" h-[190px] object-cover rounded-lg mb-4" />
              <h3 className="text-[18px] text-gray-600 mb-2 font-medium">{product.name}</h3>
              <p className="text-[16px] text-[#31546D] mb-4 font-medium">{product.price}$</p>
              <button className="border-[2px] border-blue-400 text-blue-400  py-2 px-4 rounded-md hover:bg-blue-400 hover:text-white font-medium">Buy Now</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
