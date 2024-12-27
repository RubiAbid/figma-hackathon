

'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const NavbarSection = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Mobile menu items
  const mobileMenuItems = [
    { href: "#", label: "Home" },
    { href: "/products", label: "Products" },
    { href: "/pricing", label: "Pricing" },
    { href: "/contact", label: "Contact" }
  ];

  // Desktop menu items
  const desktopMenuItems = [
    { href: "#", label: "Home" },
    { href: "/shopping", label: "Shop" },
    { href: "/about", label: "About" },
    { href: "/HomeApppliances", label: "Blog" },
    { href: "/contactUs", label: "Contact" },
    { href: "/pricing", label: "Pages" },
    { href: "/Team", label: "Team" }
  ];

  return (
    <div className="relative lg:w-full w-[414px] h-auto min-h-[58px] pl-4 grid items-center">
      {/* Mobile Menu Button */}
      <button 
        className="lg:hidden absolute right-4 top-4 z-50 lg:-translate-x-0 -translate-x-[125px] sm:-translate-x-2"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <div className="w-6 h-6 flex flex-col justify-around">
          <span className={`block w-full h-0.5 bg-black transform transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2.5' : ''}`}></span>
          <span className={`block w-full h-0.5 bg-black transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-full h-0.5 bg-black transform transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2.5' : ''}`}></span>
        </div>
      </button>

      {/* Bandage section */}
      <div className="absolute w-[187px] h-[58px] left-4 lg:left-[calc(50%-187px/2-587px)] top-0 lg:-translate-x-0 -translate-x-14 sm:-translate-x-[-13px]">
        <div className="absolute pl-[44px] w-[108px] h-[32px] left-0 top-[13px] text-[#252B42] font-montserrat font-bold text-[24px] leading-[32px] tracking-[0.1px]">
          Bandage
        </div>
      </div>
      
      {/* Mobile Navigation */}
      <div className={`
        lg:hidden
        ${isMenuOpen ? 'flex' : 'hidden'}
        flex-col absolute top-[58px] -left-[60px] w-full bg-white sm:translate-x-[90px] shadow-lg z-40 p-4 
      `}>
        {mobileMenuItems.map((item, index) => (
          <Link 
            key={index}
            href={item.href} 
            className="w-full h-[24px] flex justify-center items-center text-black text-[14px] font-montserrat py-2"
          >
            {item.label}
          </Link>
        ))}
      </div>

      {/* Desktop Navigation */}
      <div className="hidden lg:flex lg:flex-row lg:items-center lg:justify-start lg:gap-[15px] lg:w-[361px] lg:h-[25px] lg:mx-auto lg:mt-[20px] lg:transform lg:-translate-y-[12px] lg:-translate-x-[25px]">
        {desktopMenuItems.map((item, index) => (
          <Link 
            key={index}
            href={item.href} 
            className="w-auto h-[24px] flex justify-center items-center text-black text-[14px] font-montserrat font-bold"
          >
            {item.label}
          </Link>
        ))}
      </div>

      {/* Login / Register button */}
      <div className="hidden lg:flex flex-row items-center p-0 absolute w-[324px] h-[54px] left-[calc(50%-324px/2+416.5px)] top-1/2 transform -translate-y-[27px]">
        <button className="flex items-center gap-2 p-3 w-[166px] h-[54px]">
          <div className="w-[20px] h-[20px] transform -translate-y-[5px]">
            <Image
              src="/Vector (5).png"
              alt="User Logo"
              width={20}
              height={20}
              className="w-full h-full object-contain"
            />
          </div>
          <a href="#" className="font-montserrat font-bold text-[14px] leading-[24px] text-center tracking-[0.2px] text-[#23A6F0] mb-2">
            Login / Register
          </a>
        </button>

        {/* Search icon and Cart */}
        <div className="flex items-center gap-5 p-3 rounded-[37px]">
          {/* Search Button */}
          <div className="flex flex-row items-center p-[23px] gap-[5px] absolute w-[46px] h-[46px] left-[180px] top-0 rounded-[37px] 
                  sm:w-[60px] sm:h-[50px]">  {/* Increase size on small screens */}
    <button className="flex flex-row items-center p-[0px] gap-5 absolute w-[56px] h-[46px] left-0 top-0 rounded-[37px] 
                      sm:w-[64px] sm:h-[50px]"> {/* Adjust button size */}
      <div className="w-[42px] h-[42px] flex-none order-0 flex-grow-0 sm:w-[48px] sm:h-[48px]">
                <Image
                  src="/btn-32.png"
                  alt="search Logo"
                  width={16}
                  height={16}
                  className="w-full h-full object-contain"
                />
              </div>
            </button>

            {/* Cart Button */}
            <div className="flex items-center gap-5">
            <button className="flex flex-row items-center p-[15px] gap-[5px] w-[56px] h-[46px] rounded-[37px] 
                      sm:w-[64px] sm:h-[50px]">  {/* Increase size for small screens */}
      <div className="w-[42px] h-[42px] flex-none order-0 flex-grow-0 ml-4 sm:w-[48px] sm:h-[48px]">
                  <Image
                    src="/btn-32 (1).png"
                    alt="Cart Logo"
                    width={16}
                    height={16}
                    className="w-full h-full object-contain"
                  />
                </div>
              </button>

              {/* Favourites Button */}
              <button className="hidden lg:flex items-center gap-1.5 p-3 w-14 h-[46px] rounded-[37px]">
                <div className="w-[42px] h-[42px] flex-none order-0 flex-grow-0">
                  <Image
                    src="/btn-32 (2).png"
                    alt="heart Logo"
                    width={16}
                    height={16}
                    className="w-full h-full object-contain"
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile icons */}
      <div className="flex lg:hidden items-center gap-4 absolute right-16 top-4 -translate-x-[110px] sm:-translate-x-[-9px] -translate-y-2">
        <Image 
          src="/btn-32.png" 
          alt="search" 
          width={44} 
          height={44} 
          className="cursor-pointer"
        />
        <Image 
          src="/btn-32 (1).png" 
          alt="cart" 
          width={44} 
          height={244} 
          className="cursor-pointer"
        />
      </div>
    </div>
  );
};

export default NavbarSection;

