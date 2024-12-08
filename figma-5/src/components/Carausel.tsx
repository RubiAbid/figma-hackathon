import React from 'react'
import Image from 'next/image'

const Carusel = () => {
  return (
    <div className="flex items-center justify-center p-[112px_0px] gap-[80px] w-full h-[711px] bg-[#23856D] flex-col sm:flex-row sm:gap-[40px] md:gap-[80px] lg:gap-[80px]">
      <div className="flex flex-col items-start p-[60px_0_0] gap-[30px] w-full sm:w-[380px] md:w-[509px] lg:w-[509px] sm:h-[400px] md:h-[432px]">
        <h5 className="font-montserrat font-normal text-[16px] sm:text-[18px] md:text-[20px] leading-[24px] sm:leading-[28px] md:leading-[30px] tracking-[0.2px] text-white">
          Summer 2020
        </h5>

        <h1 className="font-montserrat font-bold text-[32px] sm:text-[40px] md:text-[58px] leading-[40px] sm:leading-[50px] md:leading-[80px] tracking-[0.2px] text-white">
          Vita Classic Product
        </h1>

        <h4 className="font-montserrat font-normal text-[14px] sm:text-[16px] md:text-[14px] leading-[20px] sm:leading-[24px] md:leading-[20px] tracking-[0.2px] text-white">
          We know how large objects will act, We know how our objects will act, We know
        </h4>

        <div className="flex flex-row items-center gap-[34px] w-full h-[52px]">
          <h5 className="font-semibold text-[20px] sm:text-[22px] md:text-[24px] leading-[28px] sm:leading-[30px] md:leading-[32px] text-center tracking-[0.1px] text-white">
            $16.48
          </h5>

          <button className="flex items-center py-[15px] px-[40px] gap-[10px] w-[184px] h-[52px] bg-[#2DC071] rounded-[5px]">
            <span className="font-montserrat font-bold text-[14px] sm:text-[16px] leading-[22px] text-center tracking-[0.2px] text-[#FFFFFF]">
              ADD TO CART
            </span>
          </button>
        </div>
      </div>

      <div className="w-full sm:w-[380px] md:w-[443px] lg:w-[443px] sm:h-[480px] md:h-[660px] flex-none order-0 flex-grow-0 mt-12 sm:mt-8 md:mt-0">
        <Image 
          src="/shop-hero-2-png-picture-1.png" 
          alt="Shop Hero Image" 
          className="w-full h-full object-cover" 
          width={443} 
          height={685} 
        />
      </div>
    </div>
  )
}

export default Carusel
