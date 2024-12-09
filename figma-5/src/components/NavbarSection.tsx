'use client'; // Add this at the very top of the file

import React from 'react';
import Link from 'next/link'; // Import Link from Next.js
import Image from 'next/image'; // Import Image component from Next.js

const NavbarSection = () => {
  return (
    <div className="relative w-full h-[58px] grid items-center">
      {/* Bandage section */}
      <div className="absolute w-[187px] h-[58px] left-[calc(50%-187px/2-587px)] top-0">
        <div className="absolute w-[108px] h-[32px] left-0 top-[13px] text-[#252B42] font-montserrat font-bold text-[24px] leading-[32px] tracking-[0.1px]">
          Bandage
        </div>
      </div>
      
      {/* Navigation buttons */}
      <div className="flex flex-row items-center justify-start gap-[15px] w-[361px] h-[25px] mx-auto mt-[20px] transform -translate-y-[12px]">
        <a className="w-[43px] h-[24px]">Home</a>

        {/* Shop Button */}
        <Link href="/shop">
          <button className="w-[40px] h-[25px] text-black font-montserrat font-bold text-[14px] rounded-[5px] flex items-center justify-center">
            Shop
          </button>
        </Link>

        <button className="w-[45px] h-[24px]">List</button>
        <button className="w-[33px] h-[24px]">Blog</button>
        <button className="w-[58px] h-[24px]">Contact</button>
        <button className="w-[44px] h-[24px]">Pages</button>
      </div>

      {/* Login / Register button */}
      <div className="flex flex-row items-center p-0 absolute w-[324px] h-[54px] left-[calc(50%-324px/2+416.5px)] top-1/2 transform -translate-y-[27px]">
        <button className="flex items-center gap-2 p-3 w-[166px] h-[54px]">
          <div className="w-[20px] h-[20px] transform -translate-y-[5px]">
            <Image
              src="/Vector (5).png" // Path from the public folder
              alt="User Logo"
              width={20} // Set the width of the image
              height={20} // Set the height of the image
              className="w-full h-full object-contain"
            />
          </div>

          <a href="#" className="font-montserrat font-bold text-[14px] leading-[24px] text-center tracking-[0.2px] text-[#23A6F0] mb-2 ">
            Login / Register
          </a>
        </button>

        {/* Search icon and Cart */}
        <div className="flex items-center gap-5 p-3 rounded-[37px]">
          {/* Search Button */}
          <div className="flex flex-row items-center p-[23px] gap-[5px] absolute w-[46px] h-[46px] left-[180px] top-0 rounded-[37px]">
            <button className="flex flex-row items-center p-[0px] gap-5 absolute w-[56px] h-[46px] left-0 top-0 rounded-[37px]">
              <div className="w-[42px] h-[42px] flex-none order-0 flex-grow-0">
                <Image
                  src="/btn-32.png"  // Path from the public folder
                  alt="search Logo"
                  width={16} // Set the width of the image
                  height={16} // Set the height of the image
                  className="w-full h-full object-contain"
                />
              </div>
            </button>

            {/* Cart Button */}
            <div className="flex items-center gap-5">
            <button className="flex flex-row items-center p-[15px] gap-[5px] w-[56px] h-[46px] rounded-[37px]">
  <div className="w-[42px] h-[42px] flex-none order-0 flex-grow-0 ml-4">
    <Image
      src="/btn-32 (1).png"  // Path from the public folder
      alt="Cart Logo"
      width={16} // Increased width
      height={16} // Increased height
      className="w-full h-full object-contain"
    />
  </div>
</button>

              {/* Favourites Button */}
              <button className="flex items-center gap-1.5 p-3 w-14 h-[46px] rounded-[37px]">
                <div className="w-[42px] h-[42px] flex-none order-0 flex-grow-0">
                  <Image
                    src="/btn-32 (2).png"  // Path from the public folder
                    alt="heart Logo"
                    width={16} // Set the width of the image
                    height={16} // Set the height of the image
                    className="w-full h-full object-contain"
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarSection;
