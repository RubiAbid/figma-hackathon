
import React from 'react';
import Image from 'next/image';

const HeaderSection = () => {
  return (
    <div className=" flex-row justify-between items-start px-[169px] gap-7 mx-auto w-full h-[46px] bg-[#23856D] 
                hidden sm:hidden md:flex lg:flex">
      {/* Contact button */}
      <button className="flex flex-row items-center p-2.5 gap-1.5 w-[145px] h-[44px] rounded-md flex-none order-0 flex-grow-0">
        <div className="w-[16px] h-[16px] flex-none order-0 flex-grow-0">
          <Image
            src="/Vector (1).png"
            alt="Call Icon"
            width={16}
            height={16}
            className="w-full h-full object-contain"
          />
        </div>
        <h6 className="w-[104px] h-[24px] font-montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px] text-white">
          (225) 555-0118
        </h6>
      </button>

      {/* Email button */}
      <button className="flex flex-row items-center p-2.5 gap-1.5 w-[260px] h-[44px] rounded-md order-1 flex-none">
        <div className="w-[16px] h-[16px] flex-none order-0 flex-grow-0">
          <Image
            src="/Vector (2).png"
            alt="Gmail Logo"
            width={16}
            height={16}
            className="w-full h-full object-contain"
          />
        </div>
        <h6 className="w-[219px] h-[24px] font-montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px] text-white">
          michelle.rivera@example.com
        </h6>
      </button>

      {/* Promotional text */}
      <div className="flex flex-row items-start p-[10px] gap-[10px] mx-auto w-[332px] h-[44px]">
        <h6 className="w-[312px] h-[24px] font-montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px] text-white">
          Follow Us and get a chance to win 80% off
        </h6>
      </div>

      {/* Social media icons */}
      <div className="flex flex-row items-center p-2 gap-3.5 mx-auto w-[233px] h-[46px]">
        <h6 className="w-[83px] h-[24px] font-montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px] text-white ">
          Follow Us:
        </h6>
        <div className="flex flex-row gap-4 mt-0">
          <div className="w-[20px] h-[20px]">
            <Image
              src="/Vector (2).png"
              alt="Instagram Logo"
              width={20}
              height={20}
              className="w-full h-full object-contain"
            />
          </div>
          <div className="w-[20px] h-[20px]">
            <Image
              src="/Vector (3).png"
              alt="YouTube Logo"
              width={20}
              height={20}
              className="w-full h-full object-contain"
            />
          </div>
          <div className="w-[20px] h-[20px]">
            <Image
              src="/icn settings icn-xs.png"
              alt="Facebook Logo"
              width={20}
              height={20}
              className="w-full h-full object-contain"
            />
          </div>
          <div className="w-[20px] h-[20px]">
            <Image
              src="/icn settings icn-xs (1).png"
              alt="Twitter Logo"
              width={20}
              height={20}
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderSection;

