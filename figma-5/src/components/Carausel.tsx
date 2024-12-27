import React from 'react'
import Image from 'next/image'

const Carusel = () => {
  return (
    <div className="flex items-center justify-center lg:flex-row w-[280px] p-[32px_0px] gap-[40px] lg:w-full sm:w-[430px] lg:h-auto bg-[#23856D] flex-col sm:flex-col sm:gap-[40px] md:gap-[80px] lg:gap-[80px] lg:translate-x-0 sm:translate-x-[-30px] lg:translate-y-0 sm:translate-y-[70px]">
<div className="flex flex-col  items-center justify-center lg:items-start lg:justify-start p-[20px_0_0] gap-[50px] w-full sm:w-[500px] md:w-[509px] lg:w-[509px] sm:h-[400px] md:h-[432px] lg:translate-y-0 sm:translate-y-[-30px]">
  <h5 className="font-montserrat font-normal text-[14px] sm:text-[18px] md:text-[20px] leading-[20px] sm:leading-[24px] md:leading-[28px] tracking-[0.2px] text-white max-w-[300px] sm:max-w-full text-center">
    Summer 2020
  </h5>
  <h1 className="font-montserrat font-bold  text-[35px] lg:text-[60px] sm:text-[32px] md:text-[58px] leading-[24px] sm:leading-[32px] md:leading-[50px] tracking-[0.2px] text-white max-w-full sm:max-w-full ml-[20px] lg:-ml-1 break-words lg:text-start text-center">
    Vita Classic Product
  </h1>
  <h4 className="font-montserrat font-normal lg:text-[14px] text-[15px] sm:text-[16px] md:text-[14px] leading-[20px] sm:leading-[24px] md:leading-[20px] tracking-[0.2px] text-white max-w-[65%] lg:max-w-[60%] break-words ml-[22px] lg:ml-0 lg:text-start text-center">
    We know how large objects will act, We know how our objects will act.
  </h4>
  <div className="flex lg:flex-row flex-col lg:items-start lg:justify-start items-center justify-center gap-[20px] w-full h-[52px]">
    <h5 className="font-semibold text-[16px] sm:text-[20px] md:text-[24px] leading-[28px] sm:leading-[30px] md:leading-[32px] lg:text-start text-center tracking-[0.1px] text-white">
      $16.48
    </h5>
    <button className="flex items-center py-[12px] px-[30px] gap-[10px] w-[160px] h-[48px] bg-[#2DC071] rounded-[5px]">
      <span className="font-montserrat font-bold text-[14px] sm:text-[16px] leading-[22px] text-center tracking-[0.2px] text-[#FFFFFF]">
        ADD TO CART
      </span>
    </button>
  </div>
</div>


      <div className="w-full sm:w-[400px] lg:translate-x-0 sm:translate-x-4 md:w-[443px] lg:w-[443px] sm:h-[560px] lg:translate-y-0 translate-y-8 md:h-[660px] flex-none order-0 flex-grow-0 mt-12 sm:mt-8 md:mt-0">
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
