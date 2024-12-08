import React from 'react';
import Image from 'next/image';

const FeaturedPost = () => {
  return (
    <div className="flex flex-col items-center p-[112px_0px] gap-[80px] w-full h-[1044px] mx-auto">
      <div className="flex flex-col items-center p-0 w-[692px] h-[134px]">
        <h6 className="w-[114px] h-[24px] text-center text-[#23A6F0] font-montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px]">
          Practice Advice
        </h6>
        <h3 className="w-[309px] h-[50px] text-center text-[#252B42] font-montserrat font-bold text-[40px] leading-[50px] tracking-[0.2px]">
          Featured Posts
        </h3>
        <p className="w-[469px] h-[40px] text-center text-[#737373] font-montserrat font-normal text-[14px] leading-[20px] tracking-[0.2px]">
          Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
        </p>
      </div>

      {/* Container for all three images and text */}
      <div className="flex flex-row justify-start items-center p-0 gap-[30px] w-full h-auto ml-[250px]">
        {/* First Post */}
        <div className="flex flex-col items-center p-0 w-[348px] h-[300px]">
          <Image 
            src="/unsplash_hHdHCfAifHU.png" 
            alt="Featured Post Image" 
            width={348}
            height={300}
            objectFit="cover"
          />
          <div className="flex flex-col w-full p-4 bg-white">
            <div className="flex flex-row items-center gap-4 w-[159px] h-[16px]">
              <div className="w-[45px] h-[16px] text-[#8EC2F2] text-sm leading-[16px] tracking-[0.2px]">
                Google
              </div>
              <div className="w-[56px] h-[16px] text-[#737373] text-sm leading-[16px] tracking-[0.2px]">
                Trending
              </div>
              <div className="w-[28px] h-[16px] text-[#737373] text-sm leading-[16px] tracking-[0.2px]">
                New
              </div>
            </div>
            <div className="w-[247px] h-[60px] text-[#252B42] text-[20px] leading-[30px] tracking-[0.2px] font-normal mt-4">
              Loudest à la Madison #1 (L&apos;integral)
            </div>
            <div className="w-[280px] h-[60px] text-[#737373] text-[14px] leading-[20px] tracking-[0.2px] font-normal mt-4">
              We focus on ergonomics and meeting you where you work. Its only a keystroke away.
            </div>
            <div className="flex flex-row justify-between items-center py-[15px] gap-[10px] w-[298px] h-[46px]">
              <div className="flex flex-row items-center p-0 gap-[5px] mx-auto w-[200px] h-[16px]">
                ⏰ 22 April 2021
              </div>
              <div className="flex flex-row items-center p-0 gap-[5px] mx-auto w-[200px] h-[16px]">
                📷 10 comments
              </div>
            </div>
            <a className="flex items-center gap-2 w-[104px] h-[24px] mt-2 ">
              Learn More
            </a>
          </div>
        </div>

        {/* Second Post */}
        <div className="flex flex-col items-center p-0 w-[348px] h-[300px]">
          <Image 
            src="/unsplash_tVEqStC2uz8.png" 
            alt="Featured Post Image 2" 
            width={348}
            height={300}
            objectFit="cover"
          />
          <div className="flex flex-col w-full p-4 bg-white">
            <div className="flex flex-row items-center gap-4 w-[159px] h-[16px]">
              <div className="w-[45px] h-[16px] text-[#8EC2F2] text-sm leading-[16px] tracking-[0.2px]">
                Google
              </div>
              <div className="w-[56px] h-[16px] text-[#737373] text-sm leading-[16px] tracking-[0.2px]">
                Trending
              </div>
              <div className="w-[28px] h-[16px] text-[#737373] text-sm leading-[16px] tracking-[0.2px]">
                New
              </div>
            </div>
            <div className="w-[247px] h-[60px] text-[#252B42] text-[20px] leading-[30px] tracking-[0.2px] font-normal mt-4">
              Loudest à la Madison #1 (L&apos;integral)
            </div>
            <div className="w-[280px] h-[60px] text-[#737373] text-[14px] leading-[20px] tracking-[0.2px] font-normal mt-4">
              We focus on ergonomics and meeting you where you work. Its only a keystroke away.
            </div>
            <div className="flex flex-row justify-between items-center py-[15px] gap-[10px] w-[298px] h-[46px]">
              <div className="flex flex-row items-center p-0 gap-[5px] mx-auto w-[200px] h-[16px]">
                ⏰ 22 April 2021
              </div>
              <div className="flex flex-row items-center p-0 gap-[5px] mx-auto w-[200px] h-[16px]">
                📷 15 comments
              </div>
            </div>
            <a className="flex items-center gap-2 w-[104px] h-[24px] mt-2 ">
              Learn More
            </a>
          </div>
        </div>

        {/* Third Post */}
        <div className="flex flex-col items-center p-0 w-[348px] h-[300px]">
          <Image 
            src="/unsplash_dEGu-oCuB1Y.png" 
            alt="Featured Post Image 3" 
            width={348}
            height={300}
            objectFit="cover"
          />
          <div className="flex flex-col w-full p-4 bg-white">
            <div className="flex flex-row items-center gap-4 w-[159px] h-[16px]">
              <div className="w-[45px] h-[16px] text-[#8EC2F2] text-sm leading-[16px] tracking-[0.2px]">
                Google
              </div>
              <div className="w-[56px] h-[16px] text-[#737373] text-sm leading-[16px] tracking-[0.2px]">
                Trending
              </div>
              <div className="w-[28px] h-[16px] text-[#737373] text-sm leading-[16px] tracking-[0.2px]">
                New
              </div>
            </div>
            <div className="w-[247px] h-[60px] text-[#252B42] text-[20px] leading-[30px] tracking-[0.2px] font-normal mt-4">
              Loudest à la Madison #1 (L&apos;integral)
            </div>
            <div className="w-[280px] h-[60px] text-[#737373] text-[14px] leading-[20px] tracking-[0.2px] font-normal mt-4">
              We focus on ergonomics and meeting you where you work. Its only a keystroke away.
            </div>
            <div className="flex flex-row justify-between items-center py-[15px] gap-[10px] w-[298px] h-[46px]">
              <div className="flex flex-row items-center p-0 gap-[5px] mx-auto w-[200px] h-[16px]">
                ⏰ 22 April 2021
              </div>
              <div className="flex flex-row items-center p-0 gap-[5px] mx-auto w-[200px] h-[16px]">
                📷 20 comments
              </div>
            </div>
            <a className="flex items-center gap-2 w-[104px] h-[24px] mt-2 ">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedPost;
