import React from 'react';
import Image from 'next/image';

const HeaderSection = () => {
  return (
    <div className="flex flex-row justify-between items-start px-6 gap-7 mx-auto w-full h-[46px] bg-blue-950">
      {/* Contact button */}
      <button className="flex flex-row items-center p-2.5 gap-1.5 w-[145px] h-[44px] rounded-md flex-none order-0 flex-grow-0">
        <div className="w-[16px] h-[16px] flex-none order-0 flex-grow-0">
          📞
        </div>
        <h6 className="w-[104px] h-[24px] font-montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px] text-white flex-none order-1 flex-grow-0">
          (225) 555-0118
        </h6>
      </button>

      {/* Email button */}
      <button className="flex flex-row items-center p-2.5 gap-1.5 w-[260px] h-[44px] rounded-md order-1 flex-none">
        <div className="w-[16px] h-[16px] flex-none order-0 flex-grow-0">
          <Image
            src="/gmail.svg" // Path from the public folder
            alt="Gmail Logo"
            width={16} // Set the width of the image
            height={16} // Set the height of the image
            className="w-full h-full object-contain"
          />
        </div>
        <h6 className="w-[219px] h-[24px] font-montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px] text-white flex-none order-1 flex-grow-0">
          michelle.rivera@example.com
        </h6>
      </button>

      {/* Promotional text */}
      <div className="flex flex-row items-start p-[10px] gap-[10px] mx-auto w-[332px] h-[44px] flex-none order-1 flex-grow-0">
        <h6 className="w-[312px] h-[24px] font-montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px] text-white flex-none order-0 flex-grow-0">
          Follow Us and get a chance to win 80% off
        </h6>
      </div>

      {/* Social media icons */}
      <div className="flex flex-row items-center p-2.5 gap-3.5 mx-auto w-[233px] h-[46px] flex-none order-2 ml-11 pl-14 ">
        <h6 className="w-[83px] h-[24px] font-montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px] text-white flex-none order-0 flex-grow-0">
          Follow Us:
        </h6>
        <div className="flex flex-row gap-4 mt-2">
          <div className="w-[20px] h-[20px] transform -translate-y-[5px]">
            <Image
              src="/instagram.svg"  // Path from the public folder
              alt="Instagram Logo"
              width={20} // Set the width of the image
              height={20} // Set the height of the image
              className="w-full h-full object-contain"
            />
          </div>
          <div className="w-[20px] h-[20px] transform -translate-y-[5px]">
            <Image
              src="/youtube.svg"  // Path from the public folder
              alt="YouTube Logo"
              width={20} // Set the width of the image
              height={20} // Set the height of the image
              className="w-full h-full object-contain"
            />
          </div>
          <div className="w-[20px] h-[20px] transform -translate-y-[5px]">
            <Image
              src="/facebook.svg"  // Path from the public folder
              alt="Facebook Logo"
              width={20} // Set the width of the image
              height={20} // Set the height of the image
              className="w-full h-full object-contain"
            />
          </div>
          <div className="w-[20px] h-[20px] transform -translate-y-[5px]">
            <Image
              src="/twitter.svg"  // Path from the public folder
              alt="Twitter Logo"
              width={20} // Set the width of the image
              height={20} // Set the height of the image
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderSection;
