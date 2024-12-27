import React from 'react';
import Image from 'next/image';

const HeroSection = () => {
  return (
    // Added pt-[58px] to account for fixed navbar height
    <div className="pt-[58px] relative z-0 overflow-visible w-[300px] h-[550px] sm:w-[414px] sm:h-[900px] lg:w-full lg:h-[716px]">
      <Image
        src="/heroSection.jpeg"
        alt="Description of the image"
        layout="fill"
        objectFit="cover"
        className="object-cover"
      />
      
      {/* Text container positioned on top of the image */}
      <div className="absolute top-[10%] left-[5%] md:top-40 md:left-20 p-4 md:p-8 translate-x-0 md:translate-x-14 flex flex-col sm:items-start md:items-start lg:items-start items-center sm:justify-center gap-5 md:gap-[35px] lg:w-[1439px] md:w-[599px] h-auto md:h-[331px] lg:translate-y-0 translate-y-[120px]">
        <h5 className="text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] font-extrabold tracking-[0.1px] text-[#FFFFFF] lg:-translate-y-0 -translate-y-6">
          Summer 2020
        </h5>
        
        <div className="flex lg:gap-0 gap-8 flex-col justify-center items-center sm:w-[220px] w-full lg:w-auto">
          <h1 className="text-center w-[220px] text-[24px] sm:w-[300px] lg:-mx-4 sm:mx-4 lg:w-[548px] h-auto font-montserrat font-bold sm:text-[24px] md:text-[40px] lg:text-[58px] leading-[30px] sm:leading-[30px] lg:leading-[80px] tracking-[0.2px] text-white break-words">
            NEW COLLECTION
          </h1>
          <h4 className="sm:w-[200px] sm:text-start lg:text-start lg:-translate-x-20 sm:h-[91px] text-[12px] sm:text-[10px] md:text-[18px] leading-[16px] sm:leading-[20px] md:leading-[30px] tracking-[0.2px] text-[#FAFAFA] lg:w-[376px] w-[150px] sm:max-w-[291px] md:max-w-[376px] break-words text-center">
            We know how large objects will act, but things on a small scale.
          </h4>
        </div>
        
        <div className="flex flex-row items-start gap-[10px] w-auto md:w-[221px] h-auto md:h-[62px]">
          <button className="flex flex-col items-center px-6 py-3 md:p-[15px_40px] gap-[10px] w-auto md:w-[221px] h-auto md:h-[62px] bg-[#2DC071] rounded-[5px]">
            <h3 className="text-[18px] md:text-[24px] leading-[28px] md:leading-[32px] text-center tracking-[0.1px] text-white">
              SHOP NOW
            </h3>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;