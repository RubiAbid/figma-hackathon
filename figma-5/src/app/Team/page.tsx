'use client';

import React, { useState } from 'react';
import Link from 'next/link'
import Footer from '@/components/Footer'
import Image from 'next/image'

const Page = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className="flex flex-col min-h-screen w-full">
    <div className="absolute w-full top-0 lg:translate-x-0 translate-x-[-180px]">
      {/* Navigation Section */}
      <div className="relative w-full flex flex-row items-center justify-between mt-[40px] px-4">
        {/* Bandage Section */}
        <div className="w-[197px] h-[58px]">
          <div className="w-[108px] px-[222px] mt-3 h-[32px] text-[#252B42] font-montserrat font-bold text-[24px] leading-[32px] tracking-[0.1px]">
            Bandage
          </div>
        </div>

  {/* Regular Navigation (Large Screens) */}
  <div className="hidden lg:flex flex-row items-center gap-4">
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

{/* Hamburger Icon (Small Screens) */}
<button 
  onClick={toggleMenu} 
  className="lg:hidden flex flex-col items-center justify-between w-[20px] h-[25px] space-y-2 relative z-50 left-[115px] sm:translate-x-[-200px]"
>
  <div className={`w-[30px] h-[5px] bg-black transition-all ${isMenuOpen ? 'transform rotate-45 translate-y-[8px]' : ''}`} />
  <div className={`w-[30px] h-[5px] bg-black transition-all ${isMenuOpen ? 'opacity-0' : ''}`} />
  <div className={`w-[30px] h-[5px] bg-black transition-all ${isMenuOpen ? 'transform -rotate-45 translate-y-[-8px]' : ''}`} />
</button>

{/* Mobile Navigation Menu (Dropdown) */}
<div 
  className={`lg:hidden ${isMenuOpen ? 'block' : 'hidden'} absolute top-[80px] left-[45%] sm:translate-x-[-140px] w-full sm:w-[500px] bg-white shadow-lg
 z-40`}
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







          {/* Login / Register button */}
          <div className="hidden lg:flex flex-row items-center gap-0 w-[290px] h-[30px] transform translate-x-[-145px]">
            <a href="#" className="flex items-center gap-1 p-3 w-[166px] h-[54px] font-montserrat font-bold text-[14px] leading-[24px] text-center tracking-[0.2px] text-[#23A6F0]">
              Login
            </a>
            <button className="flex items-center p-[15px_25px] w-[240px] h-[45px] bg-[#23A6F0] rounded-[5px] whitespace-nowrap">
              <span className="w-[137px] h-[22px] px-1 font-montserrat font-bold text-[14px] leading-[22px] tracking-[0.2px] text-[#FFFFFF]">
                Become a member
              </span>
              <Image 
  src="/arrow.png" 
  alt="Arrow Icon" 
  width={12} 
  height={10} 
  className="w-[12px] h-[10px]" 
/>
            </button>
          </div>
        </div>
      </div>

      {/* Text and Content Section */}
      <div className="flex flex-col items-center p-12 absolute lg:w-full max-w-[870px] h-[280px] lg:translate-x-[-450px] sm:translate-x-[-250px] md:translate-x-[-300px] left-1/2 top-[104px] transform -translate-x-[150px] lg:translate-y-0 sm:translate-y-[100px]">
        <div className="flex flex-col items-center w-full">
          <h5 className="font-montserrat font-bold text-lg leading-[24px] text-center tracking-[0.1px] text-[#737373]">
            WHAT WE DO
          </h5>
          <h2 className="font-montserrat font-bold text-5xl leading-[80px] sm:text-4xl text-center tracking-[0.2px] text-[#252B42]">
            Innovation tailored for you
          </h2>
          <div className="flex items-center gap-4 w-full justify-center">
            <a href="/" className="font-montserrat font-bold text-sm leading-[24px] text-center tracking-[0.2px] text-[#252B42]">
              Home
            </a>
            <Image 
  src="/icn arrow-right icn-xs.png" 
  alt="Arrow Right" 
  className="w-[9px] h-[16px]" 
  width={9} 
  height={16} 
/>
            <h6 className="font-montserrat font-bold text-sm leading-[24px] text-center tracking-[0.2px] text-[#737373]">
              Team
            </h6>
          </div>
        </div>
      </div>


{/* Images Section at the Bottom */}
<div className="flex flex-col items-center justify-end w-full flex-grow mt-auto lg:translate-y-[300px] translate-y-[500px]">
  <div className="relative w-full h-[530px] flex flex-col sm:flex-row">
    
    {/* First Image (Top Image on small screen) */}
    <Image 
      src="/unsplash_Lks7vei-eAg.png" 
      alt="Unsplash Image" 
      className="lg:w-[700px] h-[530px] sm:w-[410px] md:w-[650px] sm:h-[530px] xs:w-[400px] xs:h-[300px] object-cover" 
      width={700} 
      height={530} 
    />
    
    {/* Second Image (Stacked below the first image on small screen) */}
    <Image 
      src="/unsplash_gMsnXqILjp4.png" 
      alt="Unsplash Image" 
      className="lg:w-[361px] w-[204px] h-[260px] lg:h-[260px] transform -scale-x-100   absolute lg:top-[2px] top-[550px] lg:left-[710px] xs:w-[300px] xs:h-[200px] xs:left-[50px] object-cover"
      width={361} 
      height={260} 
    />
    
    {/* Third Image */}
    <Image 
      src="/unsplash_PSmDDeXaEWE.png" 
      alt="Unsplash Image" 
      className="lg:w-[361px] w-[204px] h-[260px] lg:h-[260px]  transform -scale-x-100 sm:top-[820px] sm:left-[-5px] absolute top-[550px] lg:top-[270px] left-[210px] lg:left-[710px] xs:w-[300px] xs:h-[200px] xs:left-[50px] object-cover" 
      width={361} 
      height={260} 
    />
    
    {/* Fourth Image */}
    <Image 
      src="/unsplash_1-aA2Fadydc.png" 
      alt="Unsplash Image" 
      className="lg:w-[361px] w-[204px] h-[260px] lg:h-[260px]  transform -scale-x-100 sm:top-[550px] sm:left-[210px] absolute lg:top-[0px] lg:left-[1080px] top-[820px] xs:w-[300px] xs:h-[200px] xs:left-[50px] object-cover" 
      width={361} 
      height={260} 
    />
    
    {/* Fifth Image */}
    <Image 
      src="/unsplash_mcSDtbWXUZU.png" 
      alt="Unsplash Image" 
      className="lg:w-[361px] w-[204px] h-[260px] lg:h-[260px]  transform -scale-x-100 sm:top-[820px] sm:left-[210px] absolute top-[820px] lg:top-[270px] left-[210px] lg:left-[1080px] xs:w-[300px] xs:h-[200px] xs:left-[50px] object-cover" 
      width={361} 
      height={260} 
    />
  </div>
</div>




<div className="flex flex-col items-center w-full py-8 lg:translate-y-[320px] translate-y-[1100px] lg:translate-x-0 sm:translate-x-[-100px]">
  <h2 className="text-black font-montserrat font-bold text-[32px]">
    Meet Our Team
  </h2>
  <div className="flex lg:flex-row flex-col gap-[30px] justify-center mt-[20px]">
    {/* First Team Member */}
    <div className="bg-white p-[20px] w-[316px]  text-center">
    <Image 
  src="/team-1-user-1 (1) 2.jpg" 
  alt="Expert 1" 
  className="w-[316px] h-[231px] mx-auto" 
  width={316} 
  height={231} 
/>
      <h5 className="font-montserrat font-bold text-[18px] text-[#252B42] mt-4">Username</h5>
      <p className="font-montserrat text-sm text-[#737373]">Profession</p>

      {/* Social Media Icons */}
      <div className="flex justify-center gap-4 mt-4">
      <a href="#" className="w-[24px]  h-[24px]">
    <Image 
      src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" 
      alt="Facebook" 
      className="w-full h-full" 
      width={24} 
      height={24} 
    />
  </a>
  <a href="#" className="w-[24px] h-[24px]">
    <Image 
      src="/instagram.png" 
      alt="Instagram" 
      className="w-full h-full" 
      width={24} 
      height={24} 
    />
  </a>
  <a href="#" className="w-[24px] h-[24px]">
    <Image 
      src="/ant-design_twitter-outlined.png" 
      alt="Twitter" 
      className="w-full h-full" 
      width={24} 
      height={24} 
    />
  </a>
      </div>
    </div>

    {/* Second Team Member */}
    <div className="bg-white p-[20px] w-[316px] text-center">
    <Image 
  src="/team-1-user-2 2.jpg" 
  alt="Expert 2" 
  className="w-[316px] h-[231px] mx-auto" 
  width={316}
  height={231}
/>

      <h5 className="font-montserrat font-bold text-[18px] text-[#252B42] mt-4">Username</h5>
      <p className="font-montserrat text-sm text-[#737373]">Profession</p>

      {/* Social Media Icons */}
      <div className="flex justify-center gap-4 mt-4">
      <a href="#" className="w-[24px] h-[24px]">
  <Image 
    src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" 
    alt="Facebook" 
    className="w-full h-full" 
    width={24}
    height={24}
  />
</a>
<a href="#" className="w-[24px] h-[24px]">
  <Image 
    src="/instagram.png" 
    alt="Instagram" 
    className="w-full h-full" 
    width={24}
    height={24}
  />
</a>
<a href="#" className="w-[24px] h-[24px]">
  <Image 
    src="/ant-design_twitter-outlined.png" 
    alt="Twitter" 
    className="w-full h-full" 
    width={24}
    height={24}
  />
</a>

      </div>
    </div>

    {/* Third Team Member */}
    <div className="bg-white p-[20px] w-[316px] text-center">
    <Image 
  src="/team-1-user-3 2.jpg" 
  alt="Expert 3" 
  className="w-[316px] h-[231px] mx-auto" 
  width={316} 
  height={231} 
/>

      <h5 className="font-montserrat font-bold text-[18px] text-[#252B42] mt-4">Username</h5>
      <p className="font-montserrat text-sm text-[#737373]">Profession</p>

      {/* Social Media Icons */}
      <div className="flex justify-center gap-4 mt-4">
      <a href="#" className="w-[24px] h-[24px]">
  <Image 
    src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" 
    alt="Facebook" 
    className="w-full h-full" 
    width={24} 
    height={24} 
  />
</a>
<a href="#" className="w-[24px] h-[24px]">
  <Image 
    src="/instagram.png" 
    alt="Instagram" 
    className="w-full h-full" 
    width={24} 
    height={24} 
  />
</a>
<a href="#" className="w-[24px] h-[24px]">
  <Image 
    src="/ant-design_twitter-outlined.png" 
    alt="Twitter" 
    className="w-full h-full" 
    width={24} 
    height={24} 
  />
</a>

      </div>
    </div>
  </div>

  {/* New Row for Additional Team Members */}
  <div className="flex lg:flex-row flex-col gap-[30px] justify-center mt-[50px]">
    {/* Fourth Team Member */}
    <div className="bg-white p-[20px] w-[316px] text-center">
    <Image 
  src="/team-1-user-1 (2).jpg" 
  alt="Expert 4" 
  className="w-[316px] h-[231px] mx-auto" 
  width={316} 
  height={231} 
/>

      <h5 className="font-montserrat font-bold text-[18px] text-[#252B42] mt-4">Username</h5>
      <p className="font-montserrat text-sm text-[#737373]">Profession</p>

      {/* Social Media Icons */}
      <div className="flex justify-center gap-4 mt-4">
      <a href="#" className="w-[24px] h-[24px]">
  <Image 
    src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" 
    alt="Facebook" 
    className="w-full h-full" 
    width={24} 
    height={24} 
  />
</a>
<a href="#" className="w-[24px] h-[24px]">
  <Image 
    src="/instagram.png" 
    alt="Instagram" 
    className="w-full h-full" 
    width={24} 
    height={24} 
  />
</a>
<a href="#" className="w-[24px] h-[24px]">
  <Image 
    src="/ant-design_twitter-outlined.png" 
    alt="Twitter" 
    className="w-full h-full" 
    width={24} 
    height={24} 
  />
</a>

      </div>
    </div>

    {/* Fifth Team Member */}
    <div className="bg-white p-[20px] w-[316px] text-center">
    <Image 
  src="/team-1-user-2 (1).jpg" 
  alt="Expert 5" 
  className="w-[316px] h-[231px] mx-auto" 
  width={316} 
  height={231} 
/>

      <h5 className="font-montserrat font-bold text-[18px] text-[#252B42] mt-4">Username</h5>
      <p className="font-montserrat text-sm text-[#737373]">Profession</p>

      {/* Social Media Icons */}
      <div className="flex justify-center gap-4 mt-4">
      <a href="#" className="w-[24px] h-[24px]">
  <Image 
    src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" 
    alt="Facebook" 
    className="w-full h-full" 
    width={24} 
    height={24} 
  />
</a>
<a href="#" className="w-[24px] h-[24px]">
  <Image 
    src="/instagram.png" 
    alt="Instagram" 
    className="w-full h-full" 
    width={24} 
    height={24} 
  />
</a>
<a href="#" className="w-[24px] h-[24px]">
  <Image 
    src="/ant-design_twitter-outlined.png" 
    alt="Twitter" 
    className="w-full h-full" 
    width={24} 
    height={24} 
  />
</a>

      </div>
    </div>

    {/* Sixth Team Member */}
    <div className="bg-white p-[20px] w-[316px] text-center">
    <Image 
  src="/team-1-user-3 (1).jpg" 
  alt="Expert 6" 
  className="w-[316px] h-[231px] mx-auto" 
  width={316} 
  height={231} 
/>

      <h5 className="font-montserrat font-bold text-[18px] text-[#252B42] mt-4">Username</h5>
      <p className="font-montserrat text-sm text-[#737373]">Profession</p>

      {/* Social Media Icons */}
      <div className="flex justify-center gap-4 mt-4">
      <a href="#" className="w-[24px] h-[24px]">
  <Image 
    src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" 
    alt="Facebook" 
    className="w-full h-full" 
    width={24} 
    height={24} 
  />
</a>
<a href="#" className="w-[24px] h-[24px]">
  <Image 
    src="/instagram.png" 
    alt="Instagram" 
    className="w-full h-full" 
    width={24} 
    height={24} 
  />
</a>
<a href="#" className="w-[24px] h-[24px]">
  <Image 
    src="/ant-design_twitter-outlined.png" 
    alt="Twitter" 
    className="w-full h-full" 
    width={24} 
    height={24} 
  />
</a>

      </div>
    </div>
  </div>


  {/* New Row for Additional Team Members (Three More) */}
  <div className="flex lg:flex-row flex-col gap-[30px] justify-center mt-[50px]">
    {/* Seventh Team Member */}
    <div className="bg-white p-[20px] w-[316px] text-center">
    <Image 
  src="/media (2).png" 
  alt="Expert 7" 
  className="w-[316px] h-[231px] mx-auto" 
  width={316} 
  height={231} 
/>

      <h5 className="font-montserrat font-bold text-[18px] text-[#252B42] mt-4">Username</h5>
      <p className="font-montserrat text-sm text-[#737373]">Profession</p>
      {/* Social Media Icons */}
      <div className="flex justify-center gap-4 mt-4">
      <a href="#" className="w-[24px] h-[24px]">
  <Image 
    src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" 
    alt="Facebook" 
    className="w-full h-full" 
    width={24} 
    height={24} 
  />
</a>
<a href="#" className="w-[24px] h-[24px]">
  <Image 
    src="/instagram.png" 
    alt="Instagram" 
    className="w-full h-full" 
    width={24} 
    height={24} 
  />
</a>
<a href="#" className="w-[24px] h-[24px]">
  <Image 
    src="/ant-design_twitter-outlined.png" 
    alt="Twitter" 
    className="w-full h-full" 
    width={24} 
    height={24} 
  />
</a>

      </div>
    </div>

    {/* Eighth Team Member */}
    <div className="bg-white p-[20px] w-[316px] text-center">
    <Image 
  src="/team-1-user-2 (2).jpg" 
  alt="Expert 8" 
  className="mx-auto" 
  width={316} 
  height={231} 
/>

      <h5 className="font-montserrat font-bold text-[18px] text-[#252B42] mt-4">Username</h5>
      <p className="font-montserrat text-sm text-[#737373]">Profession</p>
      {/* Social Media Icons */}
      <div className="flex justify-center gap-4 mt-4">
      <a href="#" className="w-[24px] h-[24px]">
  <Image 
    src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" 
    alt="Facebook" 
    className="w-full h-full" 
    width={24} 
    height={24} 
  />
</a>
<a href="#" className="w-[24px] h-[24px]">
  <Image 
    src="/instagram.png" 
    alt="Instagram" 
    className="w-full h-full" 
    width={24} 
    height={24} 
  />
</a>

        <a href="#" className="w-[24px] h-[24px]">
  <Image 
    src="/ant-design_twitter-outlined.png" 
    alt="Twitter" 
    className="w-full h-full" 
    width={24} 
    height={24} 
  />
</a>

      </div>
    </div>

    {/* Ninth Team Member */}
    <div className="bg-white p-[20px] w-[316px] text-center">
    <Image 
  src="/media (3).png" 
  alt="Expert 9" 
  className="mx-auto" 
  width={316} 
  height={231} 
/>

      <h5 className="font-montserrat font-bold text-[18px] text-[#252B42] mt-4">Username</h5>
      <p className="font-montserrat text-sm text-[#737373]">Profession</p>
      {/* Social Media Icons */}
      <div className="flex justify-center gap-4 mt-4">
      <a href="#" className="w-[24px] h-[24px]">
  <Image 
    src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" 
    alt="Facebook" 
    className="w-full h-full" 
    width={24} 
    height={24} 
  />
</a>
<a href="#" className="w-[24px] h-[24px]">
  <Image 
    src="/instagram.png" 
    alt="Instagram" 
    className="w-full h-full" 
    width={24} 
    height={24} 
  />
</a>
<a href="#" className="w-[24px] h-[24px]">
  <Image 
    src="/ant-design_twitter-outlined.png" 
    alt="Twitter" 
    className="w-full h-full" 
    width={24} 
    height={24} 
  />
</a>

      </div>
    </div>
  </div>
</div>


<div className="flex flex-col items-center  py-[80px] gap-[96px]  w-[1050px] h-[442px] left-1/2 transform md:translate-x-[-146px] lg:translate-x-[190px] translate-x-[-310px]   lg:translate-y-[320px] translate-y-[1100px] ">
  <div className="flex flex-col items-center gap-[36px] w-[607px] h-[282px]">
    <h2 className="lg:w-[547px] w-[280px] h-[50px] font-montserrat font-bold text-[40px] leading-[50px] text-center tracking-[0.2px] text-[#252B42] lg:mb-0 mb-12">
      Start your 14 days free trial
    </h2>
    <h6 className="lg:w-[411px] w-[300px] h-[40px] font-montserrat font-normal text-[14px] leading-[20px] text-center tracking-[0.2px] text-[#737373]">
      Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent.
    </h6>
    <div className="flex flex-row items-start gap-[10px] w-[186px] h-[52px]">
      <button className="flex flex-col items-center p-[15px_40px] gap-[10px] w-[186px] h-[52px] bg-[#23A6F0] rounded-[5px]">
        <span className="w-[106px] h-[22px] text-center font-montserrat font-bold text-[14px] leading-[22px] tracking-[0.2px] text-[#FFFFFF]">
          Try it free now
        </span>
      </button>
    </div>
    <div className="flex flex-row items-center p-[10px] gap-[34px] w-[242px] h-[50px]">
    <div className="w-[30px] h-[24.49px] flex-none">
  <Image 
    src="/ant-design_twitter-outlined.png" 
    alt="Twitter Logo" 
    className="w-full h-full object-contain" 
    width={30} 
    height={24.49} 
  />
</div>

<div className="w-[30px] h-[30px] flex-none">
  <Image 
    src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" 
    alt="Facebook Logo" 
    className="w-full h-full object-contain" 
    width={30} 
    height={30} 
  />
</div>

<div className="w-[30px] h-[30px] flex-none order-2 flex-grow-0">
  <Image 
    src="/instagram.png" 
    alt="Instagram Logo" 
    className="w-full h-full object-contain" 
    width={30} 
    height={30} 
  />
</div>

<div className="w-[30px] h-[30px] flex-none order-3 flex-grow-0">
  <Image 
    src="/Vector (15).png" 
    alt="LinkedIn Logo" 
    className="w-full h-full object-contain" 
    width={30} 
    height={30} 
  />
</div>
</div>
<div className='lg:translate-x-[30px] -translate-x-1 sm:translate-x-[-5px]'>
<Footer/>
</div>
  </div>
</div>
</div>


  )
}

export default Page;