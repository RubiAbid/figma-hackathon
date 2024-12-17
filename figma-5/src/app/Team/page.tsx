import React from 'react'
import Link from 'next/link'
import Footer from '@/components/Footer'

const page = () => {
  return (
    <div className="flex flex-col min-h-screen w-full">
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
              <img src="/arrow.png" alt="Arrow Icon" width="12" height="10" className="w-[12px] h-[10px]" />
            </button>
          </div>
        </div>
      </div>

      {/* Text and Content Section */}
      <div className="flex flex-col items-center p-12 absolute w-full max-w-[870px] h-[280px] left-1/2 top-[104px] transform -translate-x-1/2">
        <div className="flex flex-col items-center w-full">
          <h5 className="font-montserrat font-bold text-lg leading-[24px] text-center tracking-[0.1px] text-[#737373]">
            WHAT WE DO
          </h5>
          <h2 className="font-montserrat font-bold text-5xl leading-[80px] text-center tracking-[0.2px] text-[#252B42]">
            Innovation tailored for you
          </h2>
          <div className="flex items-center gap-4 w-full justify-center">
            <a href="/" className="font-montserrat font-bold text-sm leading-[24px] text-center tracking-[0.2px] text-[#252B42]">
              Home
            </a>
            <img src="icn arrow-right icn-xs.png" alt="Arrow Right" className="w-[9px] h-[16px]" />
            <h6 className="font-montserrat font-bold text-sm leading-[24px] text-center tracking-[0.2px] text-[#737373]">
              Team
            </h6>
          </div>
        </div>
      </div>

     {/* Images Section at the Bottom */}
<div className="flex flex-col items-center justify-end w-full flex-grow mt-auto translate-y-[300px]">
  <div className="relative w-full h-[530px]">
    <img src="unsplash_Lks7vei-eAg.png" alt="Unsplash Image" className="w-[700px] h-[530px]" />
    <img src="unsplash_gMsnXqILjp4.png" alt="Unsplash Image" className="w-[361px] h-[260px] transform -scale-x-100 absolute top-0 left-[710px]" />
    <img src="unsplash_PSmDDeXaEWE.png" alt="Unsplash Image" className="w-[361px] h-[260px] transform -scale-x-100 absolute top-0 left-[1080px]" />
    <img src="unsplash_1-aA2Fadydc.png" alt="Unsplash Image" className="w-[361px] h-[260px] transform -scale-x-100 absolute top-[270px] left-[710px]" />
    <img src="unsplash_mcSDtbWXUZU.png" alt="Unsplash Image" className="w-[361px] h-[260px] transform -scale-x-100 absolute top-[270px] left-[1080px]" />
  </div>
</div>



<div className="flex flex-col items-center w-full py-8 translate-y-[320px]">
  <h2 className="text-black font-montserrat font-bold text-[32px]">
    Meet Our Team
  </h2>
  <div className="flex flex-row gap-[30px] justify-center mt-[20px]">
    {/* First Team Member */}
    <div className="bg-white p-[20px] w-[316px] text-center">
      <img 
        src="team-1-user-1 (1) 2.jpg" 
        alt="Expert 1" 
        className="w-[316px] h-[231px] mx-auto" 
      />
      <h5 className="font-montserrat font-bold text-[18px] text-[#252B42] mt-4">Username</h5>
      <p className="font-montserrat text-sm text-[#737373]">Profession</p>

      {/* Social Media Icons */}
      <div className="flex justify-center gap-4 mt-4">
        <a href="#" className="w-[24px] h-[24px]">
          <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" alt="Facebook" className="w-full h-full" />
        </a>
        <a href="#" className="w-[24px] h-[24px]">
          <img src="instagram.png" alt="Instagram" className="w-full h-full" />
        </a>
        <a href="#" className="w-[24px] h-[24px]">
          <img src="ant-design_twitter-outlined.png" alt="Twitter" className="w-full h-full" />
        </a>
      </div>
    </div>

    {/* Second Team Member */}
    <div className="bg-white p-[20px] w-[316px] text-center">
      <img 
        src="team-1-user-2 2.jpg" 
        alt="Expert 2" 
        className="w-[316px] h-[231px] mx-auto" 
      />
      <h5 className="font-montserrat font-bold text-[18px] text-[#252B42] mt-4">Username</h5>
      <p className="font-montserrat text-sm text-[#737373]">Profession</p>

      {/* Social Media Icons */}
      <div className="flex justify-center gap-4 mt-4">
        <a href="#" className="w-[24px] h-[24px]">
          <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" alt="Facebook" className="w-full h-full" />
        </a>
        <a href="#" className="w-[24px] h-[24px]">
          <img src="instagram.png" alt="Instagram" className="w-full h-full" />
        </a>
        <a href="#" className="w-[24px] h-[24px]">
          <img src="ant-design_twitter-outlined.png" alt="Twitter" className="w-full h-full" />
        </a>
      </div>
    </div>

    {/* Third Team Member */}
    <div className="bg-white p-[20px] w-[316px] text-center">
      <img 
        src="team-1-user-3 2.jpg" 
        alt="Expert 3" 
        className="w-[316px] h-[231px] mx-auto" 
      />
      <h5 className="font-montserrat font-bold text-[18px] text-[#252B42] mt-4">Username</h5>
      <p className="font-montserrat text-sm text-[#737373]">Profession</p>

      {/* Social Media Icons */}
      <div className="flex justify-center gap-4 mt-4">
        <a href="#" className="w-[24px] h-[24px]">
          <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" alt="Facebook" className="w-full h-full" />
        </a>
        <a href="#" className="w-[24px] h-[24px]">
          <img src="instagram.png" alt="Instagram" className="w-full h-full" />
        </a>
        <a href="#" className="w-[24px] h-[24px]">
          <img src="ant-design_twitter-outlined.png" alt="Twitter" className="w-full h-full" />
        </a>
      </div>
    </div>
  </div>

  {/* New Row for Additional Team Members */}
  <div className="flex flex-row gap-[30px] justify-center mt-[50px]">
    {/* Fourth Team Member */}
    <div className="bg-white p-[20px] w-[316px] text-center">
      <img 
        src="team-1-user-1 (2).jpg" 
        alt="Expert 4" 
        className="w-[316px] h-[231px] mx-auto" 
      />
      <h5 className="font-montserrat font-bold text-[18px] text-[#252B42] mt-4">Username</h5>
      <p className="font-montserrat text-sm text-[#737373]">Profession</p>

      {/* Social Media Icons */}
      <div className="flex justify-center gap-4 mt-4">
        <a href="#" className="w-[24px] h-[24px]">
          <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" alt="Facebook" className="w-full h-full" />
        </a>
        <a href="#" className="w-[24px] h-[24px]">
          <img src="instagram.png" alt="Instagram" className="w-full h-full" />
        </a>
        <a href="#" className="w-[24px] h-[24px]">
          <img src="ant-design_twitter-outlined.png" alt="Twitter" className="w-full h-full" />
        </a>
      </div>
    </div>

    {/* Fifth Team Member */}
    <div className="bg-white p-[20px] w-[316px] text-center">
      <img 
        src="team-1-user-2 (1).jpg" 
        alt="Expert 5" 
        className="w-[316px] h-[231px] mx-auto" 
      />
      <h5 className="font-montserrat font-bold text-[18px] text-[#252B42] mt-4">Username</h5>
      <p className="font-montserrat text-sm text-[#737373]">Profession</p>

      {/* Social Media Icons */}
      <div className="flex justify-center gap-4 mt-4">
        <a href="#" className="w-[24px] h-[24px]">
          <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" alt="Facebook" className="w-full h-full" />
        </a>
        <a href="#" className="w-[24px] h-[24px]">
          <img src="instagram.png" alt="Instagram" className="w-full h-full" />
        </a>
        <a href="#" className="w-[24px] h-[24px]">
          <img src="ant-design_twitter-outlined.png" alt="Twitter" className="w-full h-full" />
        </a>
      </div>
    </div>

    {/* Sixth Team Member */}
    <div className="bg-white p-[20px] w-[316px] text-center">
      <img 
        src="team-1-user-3 (1).jpg" 
        alt="Expert 6" 
        className="w-[316px] h-[231px] mx-auto" 
      />
      <h5 className="font-montserrat font-bold text-[18px] text-[#252B42] mt-4">Username</h5>
      <p className="font-montserrat text-sm text-[#737373]">Profession</p>

      {/* Social Media Icons */}
      <div className="flex justify-center gap-4 mt-4">
        <a href="#" className="w-[24px] h-[24px]">
          <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" alt="Facebook" className="w-full h-full" />
        </a>
        <a href="#" className="w-[24px] h-[24px]">
          <img src="instagram.png" alt="Instagram" className="w-full h-full" />
        </a>
        <a href="#" className="w-[24px] h-[24px]">
          <img src="ant-design_twitter-outlined.png" alt="Twitter" className="w-full h-full" />
        </a>
      </div>
    </div>
  </div>


  {/* New Row for Additional Team Members (Three More) */}
  <div className="flex flex-row gap-[30px] justify-center mt-[50px]">
    {/* Seventh Team Member */}
    <div className="bg-white p-[20px] w-[316px] text-center">
      <img 
        src="media (2).png" 
        alt="Expert 7" 
        className="w-[316px] h-[231px] mx-auto" 
      />
      <h5 className="font-montserrat font-bold text-[18px] text-[#252B42] mt-4">Username</h5>
      <p className="font-montserrat text-sm text-[#737373]">Profession</p>
      {/* Social Media Icons */}
      <div className="flex justify-center gap-4 mt-4">
        <a href="#" className="w-[24px] h-[24px]">
          <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" alt="Facebook" className="w-full h-full" />
        </a>
        <a href="#" className="w-[24px] h-[24px]">
          <img src="instagram.png" alt="Instagram" className="w-full h-full" />
        </a>
        <a href="#" className="w-[24px] h-[24px]">
          <img src="ant-design_twitter-outlined.png" alt="Twitter" className="w-full h-full" />
        </a>
      </div>
    </div>

    {/* Eighth Team Member */}
    <div className="bg-white p-[20px] w-[316px] text-center">
      <img 
        src="team-1-user-2 (2).jpg" 
        alt="Expert 8" 
        className="w-[316px] h-[231px] mx-auto" 
      />
      <h5 className="font-montserrat font-bold text-[18px] text-[#252B42] mt-4">Username</h5>
      <p className="font-montserrat text-sm text-[#737373]">Profession</p>
      {/* Social Media Icons */}
      <div className="flex justify-center gap-4 mt-4">
        <a href="#" className="w-[24px] h-[24px]">
          <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" alt="Facebook" className="w-full h-full" />
        </a>
        <a href="#" className="w-[24px] h-[24px]">
          <img src="instagram.png" alt="Instagram" className="w-full h-full" />
        </a>
        <a href="#" className="w-[24px] h-[24px]">
          <img src="ant-design_twitter-outlined.png" alt="Twitter" className="w-full h-full" />
        </a>
      </div>
    </div>

    {/* Ninth Team Member */}
    <div className="bg-white p-[20px] w-[316px] text-center">
      <img 
        src="media (3).png" 
        alt="Expert 9" 
        className="w-[316px] h-[231px] mx-auto" 
      />
      <h5 className="font-montserrat font-bold text-[18px] text-[#252B42] mt-4">Username</h5>
      <p className="font-montserrat text-sm text-[#737373]">Profession</p>
      {/* Social Media Icons */}
      <div className="flex justify-center gap-4 mt-4">
        <a href="#" className="w-[24px] h-[24px]">
          <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" alt="Facebook" className="w-full h-full" />
        </a>
        <a href="#" className="w-[24px] h-[24px]">
          <img src="instagram.png" alt="Instagram" className="w-full h-full" />
        </a>
        <a href="#" className="w-[24px] h-[24px]">
          <img src="ant-design_twitter-outlined.png" alt="Twitter" className="w-full h-full" />
        </a>
      </div>
    </div>
  </div>
</div>


<div className="flex flex-col items-center  py-[80px] gap-[96px]  w-[1050px] h-[442px] left-1/2 transform translate-x-[190px] translate-y-[320px] ">
  <div className="flex flex-col items-center gap-[36px] w-[607px] h-[282px]">
    <h2 className="w-[547px] h-[50px] font-montserrat font-bold text-[40px] leading-[50px] text-center tracking-[0.2px] text-[#252B42]">
      Start your 14 days free trial
    </h2>
    <h6 className="w-[411px] h-[40px] font-montserrat font-normal text-[14px] leading-[20px] text-center tracking-[0.2px] text-[#737373]">
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
    <img src="ant-design_twitter-outlined.png" alt="Twitter Logo" className="w-full h-full object-contain" />
  </div>
  <div className="w-[30px] h-[30px] flex-none">
    <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" alt="Facebook Logo" className="w-full h-full object-contain" />
  </div>
  <div className="w-[30px] h-[30px] flex-none order-2 flex-grow-0">
  <img src="instagram.png" alt="Instagram Logo" className="w-full h-full object-contain" />
</div>
<div className="w-[30px] h-[30px] flex-none order-3 flex-grow-0">
  <img src="Vector (12).png" alt="LinkedIn Logo" className="w-full h-full object-contain" />
</div>


</div>
<div className='translate-x-[30px]'>
<Footer/>
</div>
  </div>
</div>





</div>


  )
}

export default page;