

'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Footer from '@/components/Footer';

const About = () => {
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
          <div className="lg:w-[108px] px-[222px] mt-3 h-[32px] text-[#252B42] font-montserrat font-bold text-[24px] leading-[32px] tracking-[0.1px] lg:translate-x-0 sm:translate-x-[100px]">
            Bandage
          </div>
        </div>


{/* Hamburger Icon for Small Screens */}
<button 
  onClick={toggleMenu} 
  className="lg:hidden md:block flex flex-col items-center justify-between w-[30px] h-[25px] space-y-2 relative z-50 sm:translate-x-[140px]"
>
  <div className={`w-[30px] h-[5px] bg-black transition-all ${isMenuOpen ? 'transform rotate-45 translate-y-[8px]' : ''}`} />
  <div className={`w-[30px] h-[5px] bg-black transition-all ${isMenuOpen ? 'opacity-0' : ''}`} />
  <div className={`w-[30px] h-[5px] bg-black transition-all ${isMenuOpen ? 'transform -rotate-45 translate-y-[-8px]' : ''}`} />
</button>


{/* Navigation Buttons (Mobile) */}
<div 
  className={`lg:hidden ${isMenuOpen ? 'block' : 'hidden'} absolute top-[50px] left-[225px] w-[350px] bg-white shadow-lg z-40 lg:translate-x-0 sm:translate-x-[90px]`}
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
        <a href="#" className="lg:flex items-center gap-1 p-3 w-[166px] h-[54px] font-montserrat font-bold text-[14px] leading-[24px] text-center tracking-[0.2px] text-[#23A6F0] hidden md:hidden">
  Login
</a>

          <button className="lg:flex items-center p-[15px_25px] w-[240px] h-[45px] bg-[#23A6F0] rounded-[5px] whitespace-nowrap md:hidden hidden">
  <span className="w-[137px] h-[22px] px-1 font-montserrat font-bold text-[14px] leading-[22px] tracking-[0.2px] text-[#FFFFFF]">
    Become a member
  </span>
  <Image src="/arrow.png" alt="Arrow Icon" width={12} height={10} className="w-[12px] h-[10px]" />
</button>

        </div>
      </div>
      {/* About Section */}
      <div className="w-full h-auto bg-white flex flex-col md:flex-row justify-center items-center px-4 py-[112px] ">
        {/* Text and Button Section */}
        <div className="flex flex-col items-start gap-[25px] lg:w-full md:w-[610px] h-auto p-0 px-[144px]">
          <h5 className="font-montserrat font-bold text-[16px] leading-[24px] tracking-[0.1px] text-[#252B42] mt-[20px] whitespace-nowrap">
            ABOUT COMPANY
          </h5>
          <h1 className="font-montserrat  w-[200px] lg:w-full font-bold text-[40px] md:text-[45px] leading-[50px] md:leading-[80px] tracking-[0.2px] text-[#252B42] mt-[20px] whitespace-nowrap lg:-translate-x-0 -translate-x-[35px]">
            ABOUT US
          </h1>
          <h4 className="font-montserrat w-[190px] lg:w-full font-normal text-[16px] text-center lg:text-start md:text-[20px] leading-[24px] md:leading-[30px] tracking-[0.2px] text-[#737373] mt-[20px] lg:-translate-x-0 -translate-x-[35px] ">
            We know how large objects will act, <br />but things on a small scale.
          </h4>

          {/* Button */}
          <button className="flex flex-row items-center p-[15px_40px] gap-[10px] w-[195px] h-[52px] bg-[#23A6F0] rounded-[5px] mb-[9px] lg:-translate-x-0 -translate-x-[35px]">
            <span className="w-[115px] h-[22px] text-[#FFFFFF] text-center font-montserrat font-bold text-[14px] leading-[ 22px] tracking-[0.2px] flex-none whitespace-nowrap">
              Get Quote Now
            </span>
          </button>
        </div>
        {/* Image Content */}
        <div className="lg:w-full md:w-[50%] flex justify-center lg:-translate-x-[190px] md:-translate-x-[120px] -translate-x-[35px]">
          <Image 
            src="/none.png" 
            alt="About Us Image" 
            width={632} 
            height={612} 
            className="object-cover"
          />
        </div>
      </div>
      <div className="flex flex-col lg:flex-row items-center w-full max-w-[1550px] -translate-y-[80px] h-auto">
  <div className="flex lg:flex-row flex-col justify-center items-center gap-[60px] w-full max-w-[1018px] h-auto">
    <div className="flex flex-col items-start gap-[40px] w-full max-w-[394px] p-[24px_0]">
      <p className="text-[#E74040] font-montserrat font-normal text-[14px] leading-[20px] tracking-[0.2px] lg:translate-x-0 translate-x-[130px]">
        Problems trying
      </p>
      <h2 className="text-[#252B42] lg:text-start text-center font-montserrat font-bold text-[24px] leading-[32px] tracking-[0.1px] lg:w-full w-[250px] lg:translate-x-0 translate-x-[50px]">
        Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
      </h2>
    </div>
  </div>
  
  <div className="flex flex-col   lg:text-start gap-[20px] lg:w-full w-[340px]  max-w-[600px] mt-[20px] px-4">
    <p className="font-montserrat font-normal text-[14px] leading-[20px] tracking-[0.2px] text-[#737373] lg:-translate-x-0 -translate-x-[12px]">
      Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
    </p>
  </div>
</div>



<div className="w-full bg-white flex-none order-2 flex-grow-0">
  <div className="w-full max-w-[1050px] mx-auto p-[40px_0] flex flex-col md:flex-col lg:flex-row items-center gap-[50px] md:gap-0">
    <div className="flex flex-col items-center w-full md:w-[238px] h-[104px]">
      <h1 className="text-center text-[#252B42] text-[48px] md:text-[50px] leading-[60px] md:leading-[80px] font-montserrat font-bold tracking-[0.2px]">
        15k
      </h1>
      <h5 className="text-[#737373]">Happy Customers</h5>
    </div>

    <div className="flex flex-col items-center w-full md:w-[241px] h-[104px]">
      <h1 className="text-center text-[#252B42] text-[48px] md:text-[50px] leading-[60px] md:leading-[80px] font-montserrat font-bold tracking-[0.2px]">
        150K
      </h1>
      <h5 className="text-[#737373]">Monthly Visitors</h5>
    </div>

    <div className="flex flex-col items-center w-full md:w-[240px] h-[104px]">
      <h1 className="text-center text-[#252B42] text-[48px] md:text-[50px] leading-[60px] md:leading-[80px] font-montserrat font-bold tracking-[0.2px]">
        15
      </h1>
      <h5 className="text-[#737373]">Countries Worldwide</h5>
    </div>

    <div className="flex flex-col items-center w-full md:w-[240px] h-[104px]">
      <h1 className="text-center text-[#252B42] text-[48px] md:text-[50px] leading-[60px] md:leading-[80px] font-montserrat font-bold tracking-[0.2px]">
        100+
      </h1>
      <h5 className="text-[#737373]">Top Partners</h5>
    </div>
  </div>
</div>




      <div className="lg:w-full w-[395px] md:w-[1050px] h-[764px] left-1/2 top-0 transform lg:-translate-x-[550px] -translate-x-[216px] mx-9 relative lg:mb-[-100px] mb-[-500px] lg:mt-0 mt-[-100px]">
        <div className="absolute lg:w-[989px] w-[307px] h-[316px] lg:h-[540px] top-[112px] bg-white rounded-[20px] flex justify-center items-center">
          <Image src="/cover.png" alt="cover photo" width={989} height={540} className="object-cover rounded-[20px]" />
        </div>

        <button className="md:hidden sm:hidden lg:block absolute lg:w-[92.6px] w-[65px] h-[65px] lg:h-[92.6px] bg-[#23A6F0] rounded-full flex items-center justify-center left-[calc(50%-46.3px)] top-[calc(50%-46.3px)] lg:-translate-x-[220px] -translate-x-[35px] lg:-translate-y-0 -translate-y-[100px]">
          <div className="lg:w-[19px] lg:h-[23px] flex items-center justify-cente translate-x-10">
            <Image src="/Vector (6).png" alt="button icon" width={19} height={23} />
          </div>
        </button>
      </div>
      <div className="flex flex-col items-center p-[112px_0] gap-[112px] w-[1050px] max-w-full  transform translate-x-[90px]">
<div className="flex flex-col items-center p-[112px_0] gap-[112px] w-[1050px] max-w-full mx-auto h-[819px]">
  <div className="flex flex-col items-center p-0 w-[607px] h-[100px]">
    <h2 className="lg:w-[316px] w-[200px] lg:h-[50px] lg:-mt-0 -mt-[99px] font-montserrat font-bold text-[40px] leading-[50px] transfer lg:translate-x-[90px] -translate-x-[110px] tracking-[0.2px] text-[#252B42] text-center">
      Meet Our Team
    </h2>
    <p className="lg:w-[469px] lg:h-[40px] w-[200px]  translate-x-[-100px] font-montserrat transfer lg:translate-x-[100px] font-normal text-[14px] leading-[20px] text-center tracking-[0.2px] text-[#737373]">
      Problems trying to resolve the conflict between
      the two major realms of Classical physics: Newtonian mechanics
    </p>
  </div>
</div>
<div className="flex lg:flex-row flex-col items-center lg:transform lg:translate-x-[80px] translate-x-[-120px] gap-[30px] w-full max-w-[1034px] h-[383px] lg:mt-[-100px]">
  <div className="flex flex-col lg:-translate-y-[500px] -translate-y-[690px] items-center lg:w-[316px] lg:h-[383px] bg-white"> 
    <Image 
      src="/team-1-user-1.jpg" 
      alt="Image description" 
      className="w-full h-[231px] object-cover" 
      width={316} 
      height={231} 
    />
    <div className="flex flex-col items-center justify-start w-full h-[152px] text-center p-2">
      <h5 className="font-montserrat font-bold text-[16px] text-[#252B42]">Username</h5>
      <h6 className="font-montserrat font-normal text-[14px] text-[#737373]">Profession</h6>
      <div className="flex gap-2 mt-[5px]"> 
        <div className="w-[24px] h-[24px] flex-none order-0 flex-grow-0">
          <Image 
            src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" 
            alt="Facebook" 
            className="w-full h-full object-contain" 
            width={24} 
            height={24} 
          />
        </div>
        <div className="w-[24px] h-[24px] flex-none order-0 flex-grow-0">
          <Image 
            src="/instagram.png" 
            alt="Instagram" 
            className="w-full h-full object-contain" 
            width={24} 
            height={24} 
          />
        </div>
        <div className="w-[24px] h-[24px] flex-none order-0 flex-grow-0">
          <Image 
            src="/ant-design_twitter-outlined.png" 
            alt="Twitter" 
            className="w-full h-full object-contain" 
            width={24} 
            height={24} 
          />
        </div>
      </div>
    </div>
  </div>
  <div className="flex flex-col lg:-translate-y-[500px]  -translate-y-[700px] items-center w-[316px] h-[383px] bg-white">
  <Image 
    src="/media.png" 
    alt="Image description" 
    className="w-full h-[231px] object-cover" 
    width={316} 
    height={231} 
  />
  <div className="flex flex-col items-center justify-start w-full h-[152px] text-center p-2">
    <h5 className="font-montserrat font-bold text-[16px] text-[#252B42]">Username</h5>
    <h6 className="font-montserrat font-normal text-[14px] text-[#737373]">Profession</h6>
    <div className="flex gap-2 mt-[5px]"> 
      <div className="w-[24px] h-[24px] flex-none order-0 flex-grow-0">
        <Image 
          src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" 
          alt="Facebook" 
          className="w-full h-full object-contain" 
          width={24} 
          height={24} 
        />
      </div>
      <div className="w-[24px] h-[24px] flex-none order-0 flex-grow-0">
        <Image 
          src="/instagram.png" 
          alt="Instagram" 
          className="w-full h-full object-contain" 
          width={24} 
          height={24} 
        />
      </div>
      <div className="w-[24px] h-[24px] flex-none order-0 flex-grow-0">
        <Image 
          src="/ant-design_twitter-outlined.png" 
          alt="Twitter" 
          className="w-full h-full object-contain" 
          width={24} 
          height={24} 
        />
      </div>
    </div>
  </div>
</div>
<div className="flex flex-col lg:-translate-y-[500px] -translate-y-[700px]  items-center w-[316px] h-[383px] transform bg-white">
  <Image src="/media (1).png" alt="Image description" className="w-full h-[231px] object-cover" width={316} height={231} />
  <div className="flex flex-col items-center justify-start w-full h-[152px] text-center p-2">
    <h5 className="font-montserrat font-bold text-[16px] text-[#252B42]">Username</h5>
    <h6 className="font-montserrat font-normal text-[14px] text-[#737373]">Profession</h6>
    <div className="flex gap-2 mt-[5px]"> 
      <div className="w-[24px] h-[24px] flex-none order-0 flex-grow-0">
        <Image 
          src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" 
          alt="Facebook" 
          className="w-full h-full object-contain" 
          width={24} 
          height={24} 
        />
      </div>
      <div className="w-[24px] h-[24px] flex-none order-0 flex-grow-0">
        <Image 
          src="/instagram.png" 
          alt="Instagram" 
          className="w-full h-full object-contain" 
          width={24} 
          height={24} 
        />
      </div>
      <div className="w-[24px] h-[24px] flex-none order-0 flex-grow-0">
        <Image 
          src="/ant-design_twitter-outlined.png" 
          alt="Twitter" 
          className="w-full h-full object-contain" 
          width={24} 
          height={24} 
        />
      </div>
    </div>
  </div>
  </div>
  </div>

  <div className="flex lg:flex-col items-center p-0 lg:w-full w-[320px] h-[1100px] bg-[#FAFAFA] lg:h-[360px] transform -translate-y-[660px] lg:translate-x-[100px] translate-x-[-130px] lg:mt-5 mt-[700px]">
        <div className="lg:w-full text-center mb-6 lg:translate-y-0 sm:translate-y-[-370px]">
        <h2 className="font-montserrat font-bold mb-[30px] lg:w-full w-[200px] lg:translate-x-0 translate-x-[70px] text-[40px] leading-[50px] lg:mt-8 mt-[-550px] tracking-[0.2px] text-[#252B42] 
  sm:text-[30px] sm:leading-[38px] sm:text-center sm:mt-[0]">
  Big Companies Are Here
</h2>
 <p className="lg:w-[547px] w-[300px] h-[40px] font-montserrat mb-[30px] font-normal  translate-x-[10px] text-[14px] leading-[20px] text-center tracking-[0.2px] text-[#737373] flex-none order-1 transform lg:translate-x-[250px]">
            Problems trying to resolve the conflict between <br />
           the two major realms of Classical physics: Newtonian mechanics
          </p>
        </div>

        <div className="w-full flex lg:flex-row flex-col justify-center lg:gap-10 gap-[100px] lg:translate-x-0 translate-x-[-180px] lg:translate-y-0 translate-y-[130px]">
          <div className="w-[103px] h-[34px] mb-6">
            <Image src="/Vector.png" alt="Vector" width={103} height={34} className="object-contain" />
          </div>
          <div className="w-[103px] h-[34px]">
            <Image src="/fa-brands-2.png" alt="Brand 2" width={103} height={34} className="object-contain" />
          </div>
          <div className="w-[103px] h-[34px]">
            <Image src="/fa-brands-3.png" alt="Brand 3" width={103} height={34} className="object-contain" />
          </div>
          <div className="w-[103px] h-[34px]">
            <Image src="/fa-brands-4.png" alt="Brand 4" width={103} height={34} className="object-contain" />
          </div>
          <div className="w-[103px] h-[34px]">
            <Image src="/fa.png" alt="Brand 5" width={103} height={34} className="object-contain" />
          </div>
          <div className="w-[103px] h-[34px]">
            <Image src="/faa.png" alt="Brand 6" width={103} height={34} className="object-contain" />
          </div>
        </div>
      </div>


      <div className="lg:w-full  w-[300px] lg:mt-[-710px] mt-[-765px]"> {/* Changed to w-full for responsiveness */}
  <div className="flex lg:h-[636px] h-auto bg-[#2A7CC7] lg:w-[1440px] relative w-full  lg:translate-x-[-90px] translate-x-[-130px]"> {/* Changed to w-full for responsiveness */}
    <div className="flex flex-col lg:items-start items-center text-center lg:text-start p-4 lg:p-10 w-full lg:w-[105%] gap-[24px] m-auto h-auto flex-none order-0 flex-grow-0 lg:translate-x-[130px]">
      <h5 className="w-full h-auto font-montserrat font-bold text-[16px] leading-[24px] tracking-[0.1px] text-[#FFFFFF]">
        WORK WITH US
      </h5>
      <h2 className="w-full sm:w-[300px] lg:w-full h-auto font-montserrat font-bold text-[32px] lg:text-[40px] leading-[40px] lg:leading-[50px] tracking-[0.2px] text-[#FFFFFF]">
        Now Let’s grow Yours
      </h2>
      <p className="lg:w-[400px] sm:w-[300px] h-auto font-montserrat font-normal text-[14px] leading-[20px] tracking-[0.2px] text-[#FFFFFF]">
        The gradual accumulation of information about atomic and small-scale behavior during the first quarter of the 20th
      </p>
      <button className="flex flex-col items-center px-[40px] text-white py-[15px] gap-[10px] w-auto sm:w-[132px] h-[52px] border border-[#FAFAFA] rounded-[5px]">
        Button
      </button>
    </div>
          <div className="absolute right-0 top-0 bottom-[-3px] w-[43%] hidden lg:block">
  <Image src="/sidepic.png" alt="Image description" width={500} height={300} className="w-full h-full object-cover" />
</div>
    </div>
      </div>
{/* Footer Wrapper */}
<div className="lg:translate-x-[100px] translate-x-[-130px]">
  <Footer />
</div>

    </div>
    </div>

  );
}

export default About;


