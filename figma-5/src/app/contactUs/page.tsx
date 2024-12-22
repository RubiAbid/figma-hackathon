import Footer from '@/components/Footer'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const page = () => {
  return (
    <div className="flex flex-col min-h-screen w-full h-[358px]">
      <div className="absolute w-full top-0">
        {/* Navigation Section */}
        <div className="relative w-full flex flex-row items-center justify-between mt-[40px] px-4">
          {/* Bandage Section */}
          <div className="w-[197px] h-[58px]">
            <div className="w-[108px] px-[222px] mt-3 h-[32px] text-[#252B42] font-montserrat font-bold text-[24px] leading-[32px] tracking-[0.1px]">
              Bandage
            </div>
          </div>

   {/* Navigation Buttons */}
   <div className="flex flex-row items-center gap-[39px] w-[275px]">
            <Link href="/" passHref>
              <button className="w-[45px] h-[24px]">Home</button>
            </Link>
            <Link href="/HomeApppliances" passHref>
              <button className="w-[33px] h-[24px]">Product</button>
            </Link>
            <Link href="/pricing" passHref>
              <button className="w-[58px] h-[24px]">Pricing</button>
            </Link>
            <Link href="/contactUs" passHref>
              <button className="w-[44px] h-[24px]">Contact</button>
            </Link>
          </div>


          {/* Login / Register button */}
          <div className="flex flex-row items-center gap-0 w-[290px] h-[30px] transform translate-x-[-145px]">
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
/>
            </button>
          </div>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="flex flex-row items-start w-[1050px] h-[742px] left-1/2 top-[104px] absolute transform -translate-x-1/2 p-[113px_0] gap-[80px] ml-12">
        {/* Left Side (Content Section) */}
        <div className="flex flex-col w-1/2 h-full">
          {/* Contact Title */}
          <h5 className="font-montserrat font-bold text-[16px] leading-[24px] tracking-[0.1px] text-[#252B42]">
            Contact Us
          </h5>
          
          {/* Main Heading */}
          <h1 className="font-montserrat mt-6 font-bold text-[58px] leading-[80px] tracking-[0.2px] text-[#252B42]">
            Get in touch today!
          </h1>
          
          {/* Description */}
          <h4 className="font-montserrat mt-6 font-normal text-[20px] leading-[30px] tracking-[0.2px] text-[#737373]">
            We know how large objects will act, but things on a small scale
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
          <div className="flex flex-row mt-6 items-center gap-[34px] w-[242px] h-[50px]">
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
        <div className="w-[632px] h-[612px]">
  <Image 
    src="/none (1).png" 
    alt="Description" 
    className="w-full h-full object-cover" 
    width={632} 
    height={612} 
  />
</div>

      </div>



      <div className="w-[1440px] h-[714px]  flex-none order-1 self-stretch flex-grow-0">
  <div className="flex flex-col items-center py-[112px] gap-[80px]  w-[1050px] h-[341px] left-1/2 top-0 transform translate-x-[179px] translate-y-[800px] mb-[-30px]">
    <div className="flex flex-col items-center p-0 w-[633px] h-[134px] flex-none order-0 flex-grow-0">
      <h6 className="font-montserrat font-bold text-[14px] leading-[24px] text-center tracking-[0.2px] text-[#252B42]">
        VISIT OUR OFFICE
      </h6>
      
      {/* Main Heading */}
      <h2 className="font-montserrat font-bold text-[40px] leading-[50px] text-center tracking-[0.2px] text-[#252B42]">
        We help small businesses with big ideas
      </h2>
    </div>
  </div>
  <div className="flex flex-row justify-start mt-[-33px] items-start transform translate-y-[1200px] translate-x-[250px] h-screen">

{/* First Column */}
<div className="flex flex-col items-center p-[50px_40px] gap-[15px] w-[328px] h-[343px] bg-white flex-none order-0 flex-grow-0">
  {/* Icon Section */}
  <div className="w-[72px] h-[72px] flex-none order-0 flex-grow-0">
  <Image 
    src="/vector (13).png" 
    alt="Icon" 
    className="w-full h-full object-contain" 
    width={72} 
    height={72} 
  />
</div>


  {/* Email Section */}
  <div className="w-[216px] h-[48px] flex-none order-1 flex-grow-0">
    georgia.young@example.com<br />
    georgia.young@ple.com
  </div>

  {/* Support Text */}
  <h5 className="w-[100px] h-[24px] font-montserrat font-bold text-[16px] leading-[24px] text-center tracking-[0.1px] text-[#252B42] flex-none order-2 flex-grow-0">
    Get Support
  </h5>

  {/* Submit Button */}
  <button className="flex flex-col items-center p-[15px_36px] gap-[10px] w-[189px] h-[54px] border border-[#23A6F0] rounded-[37px] flex-none order-3 flex-grow-0">
    <span className="w-[117px] h-[24px] text-center text-[#23A6F0] font-montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px] flex-none order-0 flex-grow-0">
      Submit Request
    </span>
      </button>

</div>

{/* Second Column */}
<div className="flex flex-col items-center p-[80px_40px] gap-[15px] w-[328px] h-[403px] bg-[#252B42] flex-none order-0 flex-grow-0">
  {/* Icon Section */}
  <div className="w-[72px] h-[72px] flex-none order-0 flex-grow-0">
  <Image 
    src="/vector (14).png" 
    alt="Icon" 
    className="w-full h-full object-contain" 
    width={72} 
    height={72} 
  />
</div>


  {/* Email Section */}
  <div className="w-[216px] h-[48px] flex-none order-1 flex-grow-0">
    <p className="font-montserrat text-white text-center text-[14px] leading-[24px] tracking-[0.2px]">
      georgia.young@example.com <br />
      georgia.young@ple.com
    </p>
  </div>

  {/* Support Text */}
  <h5 className="w-[100px] h-[24px] font-montserrat font-bold text-[16px] leading-[24px] text-center tracking-[0.1px] text-white flex-none order-2 flex-grow-0">
    Get Support
  </h5>

  {/* Submit Button */}
  <button className="flex flex-col items-center p-[15px_36px] gap-[10px] w-[189px] h-[54px] border border-[#23A6F0] rounded-[37px] flex-none order-3 flex-grow-0">
    <span className="w-[117px] h-[24px] text-center text-[#23A6F0] font-montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px] flex-none order-0 flex-grow-0">
      Submit Request
    </span>
  </button>
</div>

{/* Third Column */}
<div className="flex flex-col items-center p-[50px_40px] gap-[15px] w-[328px] h-[343px] bg-white flex-none order-0 flex-grow-0">
  {/* Icon Section */}
  <div className="w-[72px] h-[72px] flex-none order-0 flex-grow-0">
  <Image 
    src="/vector (13).png" 
    alt="Icon" 
    className="w-full h-full object-contain" 
    width={72} 
    height={72} 
  />
</div>


  {/* Email Section */}
  <div className="w-[216px] h-[48px] flex-none order-1 flex-grow-0">
    georgia.young@example.com<br />
    georgia.young@ple.com
  </div>

  {/* Support Text */}
  <h5 className="w-[100px] h-[24px] font-montserrat font-bold text-[16px] leading-[24px] text-center tracking-[0.1px] text-[#252B42] flex-none order-2 flex-grow-0">
    Get Support
  </h5>

  {/* Submit Button */}
  <button className="flex flex-col items-center p-[15px_36px] gap-[10px] w-[189px] h-[54px] border border-[#23A6F0] rounded-[37px] flex-none order-3 flex-grow-0">
    <span className="w-[117px] h-[24px] text-center text-[#23A6F0] font-montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px] flex-none order-0 flex-grow-0">
      Submit Request
    </span>
  </button>
</div>
</div>
<div className="w-[1440px] h-[358px] bg-white flex-none order-2 flex-grow-0 relative">
  {/* Arrow Image */}
  <div className="absolute w-[150px] h-[45px] left-[50%] top-[966.1px] transform -translate-x-10">
  <Image 
    src="/Arrow 2 (1).png" 
    alt="Arrow 2" 
    className="w-full h-full object-contain" 
    width={150} 
    height={45} 
  />
</div>
  {/* Content Section */}
  <div className="flex flex-col items-center p-0 gap-[36px] w-[607px] h-[188px] flex-none order-0 flex-grow-0 justify-center transform -translate-y-[-1000px] translate-x-[460px]">
    <h6 className="w-[239px] h-[24px] font-montserrat font-bold text-[16px] leading-[24px] text-center tracking-[0.1px] text-[#252B42] flex-none order-0 flex-grow-0">
      We cant wait to meet you
    </h6>
    <h2 className="w-[272px] h-[80px] font-montserrat font-bold text-[58px] leading-[80px] text-center tracking-[0.2px] text-[#252B42] flex-none order-1 flex-grow-0">
      Lets Talk
    </h2>
  </div>
  {/* Button Section */}
  <div className="flex flex-row items-start p-0 gap-[10px] w-[186px] h-[52px] flex-none order-2 flex-grow-0 transform -translate-y-[-1000px]  translate-x-[670px]">
    <button className="flex flex-col items-center p-[15px_40px] gap-[10px] w-[186px] h-[52px] bg-[#23A6F0] rounded-[5px] flex-none order-0 flex-grow-0">
      Try it free now
    </button>
    <div className="flex justify-start items-center py-[67px] transform translate-x-[-750px]">
    <Footer />
  </div>
 </div>
 </div>
  </div>
    </div>
   
  )
}

export default page