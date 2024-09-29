import React from 'react';
import "./SpecialOffer.css"
import pic from "./Без имени-1 1.png"

const SpecialOffer = () => {
  return (
    <section className=" text-white">
      <div className='bg-footer'>
        
        <div className='flex justify-center items-center'>
          <button className="border-[2px] border-blue-400 mt-[50px] text-blue-400  py-2 px-4 rounded-md hover:bg-blue-400 hover:text-white font-medium">View All</button>
        </div>

        <div className='flex text-right justify-end gap-[50px]'>
          
          <div className=' text-right mt-[250px]'>
            <div>
              <p className='text-[#31546D] text-[40px] font-[400]'>BEST PRICE</p>
            </div>
            <div>
              <p className='text-[#31546D] text-[64px] font-[700]'>Agate Phone Grip</p>
            </div>
            <div className='flex text-right flex-wrap justify-end items-center gap-2 font-medium'>
              <p className='text-[#41a0b7] line-through text-[24px]'>44.50$</p>
              <span className='text-[#e35b3e] text-[35px]'>19.50$</span>
            </div>
            <div>
              <p className='text-[#31546d] font-medium text-16px tracking-wide'>These Pop Rock Crystal grip tops can be swapped with<br></br> other tops depending on your mood, outfit, nails,<br></br> phone case, holiday, etc.! Just gently squeeze the sides<br></br> to remove and swap out with another color or design!</p>
            </div>
            <div>
            <button className="border-[2px] border-blue-400 bg-blue-400 mt-[20px] text-white py-2 px-4 rounded-md  font-medium">BUT NOW</button>
            </div>
          </div>

          <div className='ellipse flex justify-center items-center text-center'>
            <div className='bg-white h-[570px] ml-[130px] w-[570px] mr-[50px] shadow-xl border-[#f2f2f2] border-[1px] rounded-full mb-[50px] flex justify-center items-center'>
              <div className='bg-white h-[364px] w-[364px] flex justify-center items-center shadow-xl border-[#f2f2f2] border-[1px] rounded-full'>
                <img src={pic} className='h-[250px] w-[250px]'></img>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default SpecialOffer;
