import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Footer from '@/components/Footer';


const About = () => {
  return (
    <div className="absolute w-full top-0">
      {/* Navigation Section */}
      <div className="relative w-full flex flex-row items-center justify-between mt-[40px] px-4">
        {/* Bandage Section */}
        <div className="w-[197px] h-[58px]">
          <div className="w-[108px] px-[222px]  mt-3 h-[32px] text-[#252B42] font-montserrat font-bold text-[24px] leading-[32px] tracking-[0.1px]">
            Bandage
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex flex-row items-center gap-[39px] w-[275px]">
        <Link href="/">
  <button className="w-[45px] h-[24px]">Home</button>
</Link>
 {/* Product Button */}
 <Link href="/HomeApppliances">
    <button className="w-[33px] h-[24px]">Product</button>
  </Link>          <Link href="/pricing">
    <button className="w-[58px] h-[24px]">Pricing</button>
  </Link>

  {/* Contact Button */}
  <Link href="/contactUs">
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
            <Image src="/arrow.png" alt="Arrow Icon" width={12} height={10} className="w-[12px] h-[10px]" />
            </button>
        </div>
      </div>

     {/* About Section */}
<div className="w-full h-auto bg-white flex flex-row justify-center items-center px-4 py-[112px]">
  {/* Text and Button Section */}
  <div className="flex flex-col items-start gap-[25px] w-[610px] h-[321px] p-0 px-[144px]">
    <h5 className="font-montserrat font-bold text-[16px] leading-[24px] tracking-[0.1px] text-[#252B42] mt-[20px]">
      ABOUT COMPANY
    </h5>
    <h1 className="font-montserrat font-bold text-[58px] leading-[80px] tracking-[0.2px] text-[#252B42] mt-[20px]">
      ABOUT US
    </h1>
    <h4 className="font-montserrat font-normal text-[20px] leading-[30px] tracking-[0.2px] text-[#737373] mt-[20px]">
      We know how large objects will act, <br />but things on a small scale.
    </h4>

    {/* Button */}
    <button className="flex flex-row items-center p-[15px_40px] gap-[10px] w-[195px] h-[52px] bg-[#23A6F0] rounded-[5px] mb-[9px]">
      <span className="w-[115px] h-[22px]  text-[#FFFFFF] text-center font-montserrat font-bold text-[14px] leading-[22px] tracking-[0.2px] flex-none whitespace-nowrap">
        Get Quote Now
      </span>
    </button>
  </div>
{/* Image Content */}
  <div className="w-[50%] flex justify-center">
    <Image 
      src="/none.png" 
      alt="About Us Image" 
      width={632} 
      height={612} 
      className="object-cover"
    />
  </div>
</div>
<div className="flex flex-col items-center ml-[-340px] w-[1550px]  -translate-y-[80px] h-[256px] top-0 transform ">
  <div className="flex flex-row justify-center items-center gap-[60px] w-[1018px] h-[188px]">
    <div className="flex flex-col items-start gap-[80px] w-[394px] h-[188px] p-[24px_0]">
      <p className="w-[116px] h-[20px] text-[#E74040] font-montserrat font-normal text-[14px] leading-[20px] tracking-[0.2px]">
        Problems trying
      </p>
      <h2 className="w-[394px] h-[96px] text-[#252B42] font-montserrat font-bold text-[24px] leading-[32px] tracking-[0.1px]">
        Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
      </h2>
    </div>
  </div>
  <div className="flex flex-col items-end -translate-y-[70px] gap-[49px] w-[1440px] h-[40px] mt-[10px] translate-x-[40px]">
  <p className="w-[545px] h-auto font-montserrat font-normal text-[14px] leading-[20px] tracking-[0.2px] text-[#737373] overflow-hidden text-ellipsis">
    Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
  </p>
</div>
</div>
<div className="w-[1240px] h-[264px] bg-white flex-none order-2 flex-grow-0">
  <div className="w-[1050px] h-[264px] left-1/2 top-0 p-[80px_0] flex flex-row items-center gap-[50px] transform translate-x-[170px]">
    <div className="flex flex-col items-center w-[238px] h-[104px]">
    <h1 className="text-center text-[#252B42] text-[58px] leading-[80px] font-montserrat font-bold tracking-[0.2px]">15k</h1>
    <h5 className="text-[#737373]">Happy Customers</h5>
    </div>
    <div className="flex flex-col items-center w-[241px] h-[104px]">
    <h1 className="text-center text-[#252B42] text-[58px] leading-[80px] font-montserrat font-bold tracking-[0.2px]">
    150K</h1>
      <h5 className="text-[#737373]">Monthly Visitors</h5>
    </div>
    <div className="flex flex-col items-center w-[240px] h-[104px]">
    <h1 className="text-center text-[#252B42] text-[58px] leading-[80px] font-montserrat font-bold tracking-[0.2px]"
    >15</h1>
      <h5 className="text-[#737373]">Countries Worldwide</h5>
    </div>
    <div className="flex flex-col items-center w-[240px] h-[104px]">
    <h1 className="text-center text-[#252B42] text-[58px] leading-[80px] font-montserrat font-bold tracking-[0.2px]">
    100+</h1>
      <h5 className="text-[#737373]">Top Partners</h5>
    </div>
  </div>
</div>
<div className="w-[1050px] h-[764px] left-1/2 top-0 transform -translate-x-1/2 mx-9 relative">
  <div className="absolute w-[989px] h-[540px] top-[112px] bg-white rounded-[20px] flex justify-center items-center">
    <Image src="/cover.png" alt="cover photo" width={989} height={540} className="object-cover rounded-[20px]" />
  </div>

  <button className="absolute w-[92.6px] h-[92.6px] bg-[#23A6F0] rounded-full flex items-center justify-center left-[calc(50%-46.3px)] top-[calc(50%-46.3px)]">
  <div className="w-[19px] h-[23px] flex items-center justify-center">
    <Image src="/Vector (6).png" alt="button icon" width={19} height={23} />
  </div>
</button>
</div>
<div className="flex flex-col items-center p-[112px_0] gap-[112px] w-[1050px] max-w-full  transform translate-x-[90px]">
<div className="flex flex-col items-center p-[112px_0] gap-[112px] w-[1050px] max-w-full mx-auto h-[819px]">
  <div className="flex flex-col items-center p-0 w-[607px] h-[100px]">
    <h2 className="w-[316px] h-[50px] font-montserrat font-bold text-[40px] leading-[50px] transfer translate-x-[90px] tracking-[0.2px] text-[#252B42] text-center">
      Meet Our Team
    </h2>
    <p className="w-[469px] h-[40px] font-montserrat transfer translate-x-[100px] font-normal text-[14px] leading-[20px] text-center tracking-[0.2px] text-[#737373]">
      Problems trying to resolve the conflict between 
      the two major realms of Classical physics: Newtonian mechanics
    </p>
  </div>
</div>



<div className="flex flex-row items-center transform translate-x-[80px] gap-[30px] w-full max-w-[1034px] h-[383px] mt-[-100px]">
  <div className="flex flex-col -translate-y-[500px] items-center w-[316px] h-[383px] bg-white">
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



  <div className="flex flex-col -translate-y-[500px] items-center w-[316px] h-[383px] bg-white">
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





<div className="flex flex-col -translate-y-[500px] items-center w-[316px] h-[383px] transform bg-white">
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







<div className="flex flex-col items-center p-0 w-[1530px]  bg-[#FAFAFA] h-[360px] transfer -translate-y-[600px] translate-x-[50px]">
  <div className="w-full text-center mb-6">
    <h2 className="font-montserrat font-bold mb-[30px] text-[40px] leading-[50px] mt-8 tracking-[0.2px] text-[#252B42]">
      Big Companies Are Here
    </h2>
    <p className="w-[547px] h-[40px] font-montserrat mb-[30px] font-normal text-[14px] leading-[20px] text-center tracking-[0.2px] text-[#737373] flex-none order-1 transform translate-x-[450px]">
  Problems trying to resolve the conflict between <br />
  the two major realms of Classical physics: Newtonian mechanics
</p>

  </div>




  <div className="w-full flex flex-wrap justify-center gap-4">
  <div className="w-[103px] h-[34px]">
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



<div className="w-full mt-[-710px]">
  <div className="flex h-[636px] bg-[#2A7CC7] relative w-[137%] translate-x-[-91px]">
    <div className="flex flex-col items-start p-0 w-[55%] gap-[24px] m-auto h-auto flex-none order-0 flex-grow-0 px-4 lg:px-[40px] transform translate-x-[-80px] translate-y-9">
      <h5 className="w-full h-auto font-montserrat font-bold text-[16px] leading-[24px] tracking-[0.1px] text-[#FFFFFF]">
        WORK WITH US
      </h5>
      <h2 className="w-full sm:w-[440px] h-auto font-montserrat font-bold text-[40px] leading-[50px] tracking-[0.2px] text-[#FFFFFF]">
        Now Let’s grow Yours
      </h2>
      <p className="w-full sm:w-[440px] h-auto font-montserrat font-normal text-[14px] leading-[20px] tracking-[0.2px] text-[#FFFFFF]">
        The gradual accumulation of information about atomic and small-scale behavior during the first quarter of the 20th
      </p>
      <button className="flex flex-col items-center px-[40px] text-white py-[15px] gap-[10px] w-auto sm:w-[132px] h-[52px] border border-[#FAFAFA] rounded-[5px]">
        Button
      </button>
    </div>
    <div className="absolute right-0 top-0 bottom-[-3px] w-[45%]">
  <Image src="/sidepic.png" alt="Image description" width={500} height={300} className="w-full h-full object-cover" />
</div>

  </div>
</div>
 {/* Footer */}
 <Footer />
 
  </div>
</div>
)}
export default About;
