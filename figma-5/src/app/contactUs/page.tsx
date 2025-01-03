'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Footer from '@/components/Footer';

const Page = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="absolute w-full top-0">
      {/* Navigation Section */}
      <div className="relative lg:w-full w-[414px] lg:-translate-x-0 -translate-x-[220px] flex flex-row items-center justify-between mt-[40px] px-4 lg:mb-0 mb-9">
        {/* Bandage Section */}
        <div className="lg:w-[197px] w-[500px] h-[58px] ">
          <div className="lg:w-[108px] lg:translate-x-0 sm:translate-x-0 translate-x-0 md:translate-x-[200px] px-[222px] mt-3 h-[32px] text-[#252B42] font-montserrat font-bold text-[24px] leading-[32px] tracking-[0.1px]">
            Bandage
          </div>
        </div>

        {/* Hamburger Icon for Small Screens */}
        <button 
          onClick={toggleMenu} 
          className="lg:hidden  flex flex-col items-center justify-between w-[30px] sm:translate-x-0 translate-x-0 md:translate-x-[200px] h-[25px] space-y-2 relative z-50"
        >
          <div className={`w-[30px] h-[5px] bg-black transition-all ${isMenuOpen ? 'transform rotate-45 translate-y-[8px]' : ''}`} />
          <div className={`w-[30px] h-[5px] bg-black transition-all ${isMenuOpen ? 'opacity-0' : ''}`} />
          <div className={`w-[30px] h-[5px] bg-black transition-all ${isMenuOpen ? 'transform -rotate-45 translate-y-[-8px]' : ''}`} />
        </button>

        {/* Navigation Buttons (Mobile) */}
        <div 
          className={`lg:hidden ${isMenuOpen ? 'block' : 'hidden'} absolute top-[50px] left-[225px] w-[350px] bg-white shadow-lg z-40`}
        >
          <div className="flex flex-col items-center gap-4 py-4">
            <Link href="/">
              <button className="px-4 py-2 text-center bg-transparent rounded hover:bg-gray-100">Home</button>
            </Link>
            <Link href="/HomeApppliances">
              <button className="px-4 py-2 text-center bg-transparent rounded hover:bg-gray-100">Product</button>
            </Link>
            <Link href="/pricing">
              <button className="px-4 py-2 text-center bg-transparent rounded hover:bg-gray-100">Pricing</button>
            </Link>
            <Link href="/contactUs">
              <button className="px-4 py-2 text-center bg-transparent rounded hover:bg-gray-100">Contact</button>
            </Link>
          </div>
        </div>

        {/* Regular Navigation Buttons (Visible on Large Screens) */}
        <div className="hidden lg:flex flex-row items-center gap-4 w-full lg:w-auto">
          <Link href="/">
            <button className="px-4 py-2 text-center bg-transparent rounded hover:bg-gray-100">Home</button>
          </Link>
          <Link href="/HomeApppliances">
            <button className="px-4 py-2 text-center bg-transparent rounded hover:bg-gray-100">Product</button>
          </Link>
          <Link href="/pricing">
            <button className="px-4 py-2 text-center bg-transparent rounded hover:bg-gray-100">Pricing</button>
          </Link>
          <Link href="/contactUs">
            <button className="px-4 py-2 text-center bg-transparent rounded hover:bg-gray-100">Contact</button>
          </Link>
        </div>

        {/* Login / Register button */}
        <div className="flex flex-row items-center gap-0 w-[290px] h-[30px] transform translate-x-[-145px]">
          <a href="#" className="lg:flex hidden md:hidden items-center gap-1 p-3 w-[166px] h-[54px] font-montserrat font-bold text-[14px] leading-[24px] text-center tracking-[0.2px] text-[#23A6F0]">
            Login
          </a>
          <button className="lg:flex hidden md:hidden items-center p-[15px_25px] w-[240px] h-[45px] bg-[#23A6F0] rounded-[5px] whitespace-nowrap">
            <span className="w-[137px] h-[22px] px-1 font-montserrat font-bold text-[14px] leading-[22px] tracking-[0.2px] text-[#FFFFFF]">
              Become a member
            </span>
            <Image 
              src="/arrow.png" 
              alt="Arrow Icon" 
              width={12} 
              height={10} 
            />
          </button>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="flex lg:flex-row flex-col lg:items-start lg:text-start text-center lg:w-[1050px] w-[700px] h-[742px] left-1/2 top-[104px] absolute transform -translate-x-1/2 lg:translate-x-[-550px] sm:translate-x-[-450px] p-[113px_0] gap-[80px] lg:ml-12 ml-[150px]">
        {/* Left Side (Content Section) */}
        <div className="flex flex-col w-1/2 h-full">
          {/* Contact Title */}
          <h5 className="font-montserrat font-bold text-[16px] leading-[24px] tracking-[0.1px] text-[#252B42]">
            Contact Us
          </h5>
          
          {/* Main Heading */}
          <h1 className="font-montserrat mt-6 font-bold lg:text-[58px] text-[40px] leading-[80px] tracking-[0.2px] text-[#252B42]">
            Get in touch today!
          </h1>
          
          {/* Description */}
          <h4 className="font-montserrat mt-6 font-normal text-[20px] leading-[30px] tracking-[0.2px] text-[#737373]">
            We know how large objects will act, but things on a small scale
          </h4>

          {/* Description */}
          <h4 className="lg:hidden md:hidden font-montserrat lg:mt-6 font-normal text-[20px] leading-[30px] tracking-[0.2px] text-[#737373] mt-[-5px]">
            just donot act that way
          </h4>
          
          {/* Phone Number */}
          <h3 className="font-montserrat mt-6 font-bold text-[20px] leading-[32px] tracking-[0.1px] text-[#252B42]">
            Phone: +451 215 215
          </h3>
          
          {/* Fax Number */}
          <h3 className="font-montserrat mt-2 font-bold text-[20px] leading-[32px] tracking-[0.1px] text-[#252B42]">
            Fax: +451 215 215
          </h3>
          
          {/* Social Media Links */}
          <div className="flex flex-row mt-6 items-center gap-[34px] w-[242px] h-[50px] lg:translate-x-0 translate-x-20">
            <Image 
              src="/Vector(15).png" 
              alt="twitter" 
              className="inset-0 top-[0.39%] bottom-[0.06%]" 
              width={22} 
              height={30} 
            />
            <Image 
              src="facebook(2).svg" 
              alt="Facebook" 
              className="w-[22px] h-[30px]" 
              width={22} 
              height={30} 
            />
            <Image 
              src="/instagram (2).svg" 
              alt="Instagram" 
              className="w-[30px] h-[30px]" 
              width={30} 
              height={30} 
            />
            <Image 
              src="linkedin.svg" 
              alt="LinkedIn" 
              className="w-[30px] h-[29.88px]" 
              width={30} 
              height={29.88} 
            />
          </div>
        </div>

        {/* Right Side (Image Section) */}
        <div className="lg:w-[632px] lg:h-[612px] w-[375px] h-[435px] lg:translate-x-0 translate-x-[-15px] lg:translate-y-0 translate-y-5">
          <Image 
            src="/none (1).png" 
            alt="Description" 
            className="w-full h-full object-cover" 
            width={632} 
            height={612} 
          />
        </div>
      </div>

      {/* Visit Our Office Section */}
      <div className="lg:w-full sm:w-[500px] md:w-[600px] w-[300px] h-auto bg-white flex-none order-1 self-stretch flex-grow-0 lg:translate-y-0 sm:translate-y-[200px] translate-y-[200px]">
        <div className="flex flex-col items-center p-8 md:p-16 lg:p-24 gap-8 md:gap-12 lg:gap-16 absolute w-full max-w-[1050px] h-auto left-1/2 top-[900px] transform -translate-x-1/2">
          <div className="flex flex-col items-center p-0 w-full max-w-[633px]  lg:translate-x-0 sm:translate-x-7 translate-x-6">
            <h6 className="w-full max-w-[132px] h-auto font-montserrat font-bold text-[14px] leading-[24px] text-center tracking-[0.2px] text-[#252B42]">
              VISIT OUR OFFICE
            </h6>
            <h2 className="w-full max-w-[531px] h-auto font-montserrat font-bold text-[24px] sm:text-[30px] md:text-[40px] leading-[32px] sm:leading-[38px] md:leading-[50px] text-center tracking-[0.2px] text-[#252B42] flex-none order-1 flex-grow-0">
              We help small businesses 
              with big ideas
            </h2>
          </div>




          <div className="flex lg:flex-row sm:flex-col flex-col items-center p-0 w-[985px] h-[403px] flex-none order-1 flex-grow-0  lg:translate-x-0 sm:translate-x-[20px] translate-x-4">
  
  {/* First Column */}
  <div className="flex flex-col items-start p-0 w-[327px] h-[343px] flex-none order-0 flex-grow-0">
    <div className="flex flex-col items-center p-[50px_40px] gap-[15px] w-[328px] h-[343px] bg-white flex-none order-0 flex-grow-0">
      <div className="w-[72px] h-[72px] flex-none order-0 flex-grow-0">
        <Image 
          src="/Vector (13).png" 
          alt="Icon" 
          className="w-full h-full object-contain" 
          width={72} 
          height={72} 
        />
      </div>
      <div className="w-[216px] h-[48px] flex-none order-1 flex-grow-0">
        georgia.young@example.com<br />
        georgia.young@ple.com
      </div>
      <h5 className="w-[100px] h-[24px] font-montserrat font-bold text-[16px] leading-[24px] text-center tracking-[0.1px] text-[#252B42] flex-none order-2 flex-grow-0">
        Get Support
      </h5>
      <button className="flex flex-col items-center p-[15px_36px] gap-[10px] w-[189px] h-[54px] border border-[#23A6F0] rounded-[37px] flex-none order-3 flex-grow-0">
        <span className="w-[117px] h-[24px] text-center text-[#23A6F0] font-montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px] flex-none order-0 flex-grow-0">
          Submit Request
        </span>
      </button>
    </div>
  </div>

  {/* Second Column */}
  <div className="flex flex-col items-start p-0 w-[329px] h-[403px] flex-none order-1 flex-grow-0">
    <div className="flex flex-col items-center p-[80px_40px] gap-[15px] w-[328px] h-[403px] bg-[#252B42] flex-none order-0 flex-grow-0">
      <div className="w-[72px] h-[72px] flex-none order-0 flex-grow-0">
        <Image 
          src="/Vector (14).png" 
          alt="Icon" 
          className="w-full h-full object-contain" 
          width={72} 
          height={72} 
        />
      </div>
      <div className="w-[216px] h-[48px] flex-none order-1 flex-grow-0">
        <p className="font-montserrat text-white text-center text-[14px] leading-[24px] tracking-[0.2px]">
          georgia.young@example.com <br />
          georgia.young@ple.com
        </p>
      </div>
      <h5 className="w-[100px] h-[24px] font-montserrat font-bold text-[16px] leading-[24px] text-center tracking-[0.1px] text-white flex-none order-2 flex-grow-0">
        Get Support
      </h5>
      <button className="flex flex-col items-center p-[15px_36px] gap-[10px] w-[189px] h-[54px] border border-[#23A6F0] rounded-[37px] flex-none order-3 flex-grow-0">
        <span className="w-[117px] h-[24px] text-center text-[#23A6F0] font-montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px] flex-none order-0 flex-grow-0">
          Submit Request
        </span>
      </button>
    </div>
  </div>

  {/* Third Column */}
  <div className="flex flex-col items-start p-0 w-[329px] h-[343px] flex-none order-2 flex-grow-0">
    <div className="flex flex-col items-center p-[50px_40px] gap-[15px] w-[328px] h-[343px] bg-white flex-none order-0 flex-grow-0">
      <div className="w-[72px] h-[72px] flex-none order-0 flex-grow-0">
        <Image 
          src="/Vector (13).png" 
          alt="Icon" 
          className="w-full h-full object-contain" 
          width={72} 
          height={72} 
        />
      </div>
      <div className="w-[216px] h-[48px] flex-none order-1 flex-grow-0">
        georgia.young@example.com<br />
        georgia.young@ple.com
      </div>
      <h5 className="w-[100px] h-[24px] font-montserrat font-bold text-[16px] leading-[24px] text-center tracking-[0.1px] text-[#252B42] flex-none order-2 flex-grow-0">
        Get Support
      </h5>
      <button className="flex flex-col items-center p-[15px_36px] gap-[10px] w-[189px] h-[54px] border border-[#23A6F0] rounded-[37px] flex-none order-3 flex-grow-0">
        <span className="w-[117px] h-[24px] text-center text-[#23A6F0] font-montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px] flex-none order-0 flex-grow-0">
          Submit Request
        </span>
      </button>
    </div>
  </div>
</div>




<div className="w-[1440px] h-[300px] bg-white flex-none order-2 flex-grow-0 relative lg:translate-y-0 sm:translate-y-[700px] translate-y-[700px] lg:translate-x-0 sm:translate-x-10 translate-x-9">

{/* Arrow Image */}
<Image 
  src="/Arrow 2 (1).png" 
  alt="Arrow 2" 
  className="absolute w-[72.56px] h-[71.84px] left-[686.29px] top-[-6.1px]  transform rotate-[15.56deg]" 
  width={72.56}  // Added width property
  height={21.84} // Optional: if you want to explicitly set the height too
/>

  {/* Content Section */}
  <div className="flex flex-col items-center p-[80px_0] absolute w-[1050px] h-[348px] left-1/2 top-0 transform -translate-x-1/2">
    
  {/* Text Section */}
<div className="flex flex-col items-center p-0 w-[607px] h-[188px] flex-none order-0 flex-grow-0">
  <h6 className="w-[239px] h-[24px] font-montserrat font-bold text-[16px] leading-[24px] text-center tracking-[0.1px] text-[#252B42]">
    WE Cant WAIT TO MEET YOU
  </h6>
  <h2 className="w-[272px] h-[80px] font-montserrat font-bold text-[58px] leading-[80px] text-center tracking-[0.2px] text-[#252B42]">
    Let’s Talk
  </h2>
</div>

{/* Button Section */}
<div className="flex flex-row items-start p-0 w-[186px] mt-[-70px] h-[52px] flex-none order-2 flex-grow-0">
  <button className="flex flex-col items-center p-[15px_40px] gap-[10px] w-[186px] h-[52px] bg-[#23A6F0] rounded-[5px]">
    Try it free now
  </button>
</div>
  </div>
  
</div>
        </div>
      </div>

<div className='lg:translate-y-[2000px] md:translate-y-[2800px] sm:translate-y-[2700px] lg:translate-x-0 sm:translate-x-9 translate-y-[2700px] translate-x-7 md:translate-x-[200px]'>
    <Footer/>
</div>

    </div>
  );
};

export default Page;
