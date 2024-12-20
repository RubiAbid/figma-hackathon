import React from 'react';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <div className="relative overflow-visible">
      <Image 
        src="/heroSection.jpeg" 
        alt="Description of the image" 
        width={1440} 
        height={716} 
        className="object-cover"
      />
      {/* Text container positioned on top of the image */}
      <div className="absolute top-40 left-20 p-8 translate-x-14 flex flex-col justify-center items-start gap-[35px] w-[599] h-[331]">
        <h5 className="w-[122px] h-[24px] font-montserrat font-bold text-[16px] leading-[24px] tracking-[0.1px] text-[#FFFFFF]">
          Summer 2020
        </h5>
        <h1 className="w-[548px] h-[80px] font-montserrat font-bold text-[58px] leading-[80px] tracking-[0.2px] text-white">
          NEW COLLECTION
        </h1>
        <h4 className="w-[376px] h-[60px] font-montserrat font-normal text-[20px] leading-[30px] tracking-[0.2px] text-[#FAFAFA]">
          We know how large objects will act, but things on a small scale.
        </h4>
        <div className="flex flex-row items-start gap-[10px] w-[221px] h-[62px]">
          <button className="flex flex-col items-center p-[15px_40px] gap-[10px] w-[221px] h-[62px] bg-[#2DC071] rounded-[5px]">
            <h3 className="w-[141px] h-[32px] font-montserrat font-bold text-[24px] leading-[32px] text-center tracking-[0.1px] text-white">
              SHOP NOW
            </h3>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
