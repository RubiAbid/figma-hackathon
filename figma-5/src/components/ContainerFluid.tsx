import React from 'react'
import Image from 'next/image'

const ContainerFluid = () => {
  return (
    <div className="flex items-center justify-between w-[1440px] h-[682px]">
      {/* Image */}
      <div className="relative w-[725px] h-[682px] left-[-137px] top-[-24px]">
        <Image 
          src="/asian-woman.png" 
          alt="Description of the image"
          width={704}
          height={774}
          layout="responsive" 
          className="object-cover w-full h-full" 

        />
      </div>

      {/* Text Content */}
      <div className="flex flex-col justify-center items-start p-0 gap-[30px] w-[573px] h-[326px]">
        <h5 className="w-[122px] h-[24px] font-montserrat font-bold text-[16px] leading-[24px] tracking-[0.1px] text-[#BDBDBD]">
          Summer 2020
        </h5>

        <h1 className="w-[375px] h-[100px] font-montserrat font-bold text-[40px] leading-[50px] tracking-[0.2px] text-[#252B42]">
          Part of the Neural 
          Universe
        </h1>

        <h4 className="w-[376px] h-[60px] font-montserrat font-normal text-[20px] leading-[30px] tracking-[0.2px] text-[#737373]">
          We know how large objects will act, but things on a small scale.
        </h4>

        <div className="flex flex-row items-center justify-start gap-[10px] w-[339px] h-[52px]">
          <button className="flex items-center justify-center p-[15px_40px] gap-[10px] w-[156px] h-[52px] bg-[#2DC071] rounded-[5px]">
            <span className="text-white font-semibold text-[14px] leading-[22px] tracking-[0.2px]">
              BUY NOW
            </span>
          </button>
          <button className="flex flex-col items-center p-[15px_40px] gap-[10px] w-[173px] h-[52px] border-2 border-[#2DC071] rounded-[5px]">
            <span className="text-[#2DC071]">Button Text</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default ContainerFluid
