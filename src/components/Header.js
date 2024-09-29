import { Gem } from 'lucide-react';
import React from 'react';

const Header = () => {
  return (
    <header className="">
      <div className='flex w-full justify-between'>
        <div className='flex text-white justify-center items-center ml-[50px] mt-[20px] gap-2'>
            <div className='border-[2px] h-[40px] w-[28px] justify-center items-center flex rounded-full'>
                <Gem size={16}/>
            </div>
            <div className='font-medium text-[18px]'>
                <p>Pop Rock Crystal</p>
            </div>
        </div>
        <div className='flex justify-between mt-[20px] w-1/2 text-white'>
            <div className='flex gap-10 font-medium ml-[150px]'>
                <a>Home</a>
                <a>Shop</a>
                <a>About Us</a>
                <a>Help</a>
            </div>
            <div className='flex gap-1 mr-[50px]'>
                <div className='bg-red-600 rounded-full h-[20px] w-[20px] justify-center items-center flex'>
                    <p className='flex mb-1 font-medium text-sm'>oo</p>
                </div>
                <div>
                    <Gem size={18}/>
                </div>
            </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
