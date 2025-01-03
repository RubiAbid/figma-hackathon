import React from 'react'
import Image from 'next/image'

const ContainerFluid = () => {
  return (
    <div className="flex flex-col sm:flex-col lg:flex-row md:flex-col sm:gap-[20px] items-center sm:translate-x-[130px]  lg:translate-y-0 translate-y-8 sm:translate-y-[100px] md:translate-y-0 lg:translate-x-0 justify-between lg:w-full w-[254px] md:w-[768px] h-auto md:h-[682px]">
      {/* Image */}
      <div className="relative order-2 md:order-2 lg:order-1 w-[270px] sm:w-[500px] md:w-[600px] sm:h-[300px] md:h-[500px] sm:left-[-5px] md:left-[-200px] top-[-24px] translate-y-[120px] lg:translate-y-0 lg:translate-x-[210px]">
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
      <div className="flex flex-col lg:justify-center justify-center items-center lg:items-start p-0 gap-[30px] w-full sm:w-[300px] md:w-[500px] h-auto sm:h-[300px] md:h-[326px] lg:order-2 order-1 md:order-1 lg:translate-x-[-140px] sm:translate-x-0 md:translate-x-[-180px]">
        <h5 className="w-[122px] h-[24px] font-montserrat font-bold text-[16px] sm:text-[18px] md:text-[16px] leading-[24px] sm:leading-[28px] md:leading-[24px] tracking-[0.1px] text-[#BDBDBD] lg:ml-0 ml-[70px]">
          Summer 2020
        </h5>

        <h1 className="lg:w-[500px] lg:max-w-[600px] w-[200px] lg:text-start text-center md:w-[375px] h-auto sm:h-[80px] md:h-[100px] font-montserrat font-bold text-[32px] sm:text-[35px] md:text-[40px] leading-[40px] sm:leading-[44px] md:leading-[50px] tracking-[0.2px] text-[#252B42] lg:ml-0 ml-[60px] lg:translate-y-0 translate-y-[-30px]">
  Part of the Neural Universe
</h1>

        <h4 className=" lg:w-[350px] lg:text-start text-center w-[190px] md:w-[376px] lg:h-auto sm:h-[84px] md:h-[60px] font-montserrat font-normal text-[16px] sm:text-[18px] md:text-[20px] leading-[24px] sm:leading-[26px] md:leading-[30px] tracking-[0.2px] text-[#737373] lg:ml-0 ml-[60px]">
          We know how large objects will act, but things on a small scale.
        </h4>

        <div className="flex lg:flex-row flex-col justify-center items-center lg:justify-start gap-[10px] lg:w-full w-[123px] h-[129px] md:w-[339px] break-words lg:ml-0 ml-[60px]">
  <button className="flex items-center justify-center p-[12px_40px] gap-[10px] w-[130px] sm:w-[150px] md:w-[156px] h-[52px] bg-[#2DC071] rounded-[5px]">
    <span className="text-white font-semibold text-[14px] sm:text-[16px] md:text-[14px] leading-[22px] tracking-[0.2px]">
      BUY NOW
    </span>
  </button>
  <button className="flex flex-col items-center p-[12px_40px] gap-[10px] w-[130px] sm:w-[160px] md:w-[173px] h-[52px] border-2 border-[#2DC071] rounded-[5px]">
    <span className="text-[#2DC071] lg:-translate-y-0 -translate-y-3">Button Text</span>
  </button>
</div>

      </div>
    </div>
  )
}

export default ContainerFluid
