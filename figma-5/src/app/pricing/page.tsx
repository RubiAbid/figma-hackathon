import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

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
            <Image src="/arrow.png" alt="Arrow Icon" width="12" height="10" className="w-[12px] h-[10px]" />
          </button>
        </div>
      </div>
    </div>

    <div className="flex flex-col items-center py-12 w-full max-w-[870px] bg-white mt-16 translate-x-[240px] translate-y-[60px]">
  <h5 className="text-[#737373] font-montserrat font-bold text-[16px] leading-[24px] text-center">
    PRICING
  </h5>
  <h2 className="text-[#252B42] font-montserrat font-bold text-[40px] leading-[50px] text-center">
    Simple Pricing
  </h2>
  <div className="flex flex-row items-center gap-[15px] w-full justify-center mt-4">
    <a href="#" className="text-[#252B42] font-montserrat font-bold text-[14px] leading-[24px]">
      Home
    </a>
    <div className="flex items-center gap-2">
    <Image src="icn arrow-right icn-xs.png" alt="Arrow icon" className="w-[12px] h-[12px]" />
      <h6 className="text-[#737373] font-montserrat font-bold text-[14px] leading-[24px]">
        Pricing
      </h6>
    </div>
  </div>
</div>

      <div className="flex flex-col items-center py-6 w-full max-w-[633px] mt-8 translate-x-[360px]">
        <h2 className="text-[#252B42] font-montserrat font-bold text-[40px] leading-[50px] text-center">
          Pricing
        </h2>
        <p className="text-[#737373] font-montserrat font-normal text-[14px] leading-[20px] text-center mt-2">
          Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
        </p>
      </div>
    </div>
  )
}

export default page
