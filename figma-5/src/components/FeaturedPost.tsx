import React from 'react';
import Image from 'next/image'; // Import Next.js Image component

const FeaturedPost = () => {
  return (
<div className="flex flex-col items-center p-[112px_0px] gap-[80px]  sm:w-[256px] md:w-[256px] lg:w-full h-auto mx-auto lg:translate-x-0 translate-x-[-10px] lg:translate-y-0 sm:translate-y-[340px]">
      
      {/* Section for heading and description */}
      <div className="flex flex-col items-center p-0 lg:w-[692px] w-[250px] h-[134px] break-words lg:-translate-x-0 -translate-x-[60px]">
        <h6 className="w-[114px] h-[24px] text-center text-[#23A6F0] font-montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px]">
          Practice Advice
        </h6>
        <h3 className="lg:w-[309px] w-[200px] h-[50px] text-center text-[#252B42] font-montserrat font-bold text-[30px] lg:text-[40px] leading-[50px] tracking-[0.2px]">
          Featured Posts
        </h3>
        <p className="lg:w-[469px] w-[290px] lg:translate-y-0 translate-y-12 h-[40px] text-center text-[#737373] font-montserrat font-normal text-[14px] leading-[20px] tracking-[0.2px]">
          Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
        </p>
      </div>

      {/* Section for featured post cards */}
      <div className="flex flex-wrap justify-center lg:-translate-x-0 -translate-x-[60px] items-center gap-[30px] lg:w-full h-auto px-4">
        
        {/* First Post */}
        <div className="flex flex-col items-center p-0 lg:w-[348px] w-[250px] h-auto">
          <div className="relative lg:w-[348px] w-[285px] h-[300px]">
            {/* Image component requires layout="responsive" for dynamic sizing */}
            <Image 
              src="/unsplash_hHdHCfAifHU.png" 
              alt="Featured Post Image" 
              layout="fill" // Ensures the image scales responsively
              objectFit="cover" 
            />
          </div>
          <div className="flex flex-col lg:w-full p-4 bg-white w-[290px]">
            {/* Tags Section */}
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
            <p className="w-[280px] h-[60px] text-[#737373] text-[14px] leading-[20px] tracking-[0.2px] font-normal mt-4">
              We focus on ergonomics and meeting you where you work. Its only a keystroke away.
            </p>
            {/* Post Info Section */}
            <div className="flex flex-row justify-between items-center py-[15px] gap-[10px] w-full h-[46px]">
              <div className="text-sm text-[#737373]">⏰ 22 April 2021</div>
              <div className="text-sm text-[#737373]">📷 10 comments</div>
            </div>
            <a className="text-[#23A6F0] font-semibold cursor-pointer">Learn More</a>
          </div>
        </div>

        {/* Second Post (Same structure as first) */}
        <div className="flex flex-col items-center p-0 w-[348px] h-auto">
          <div className="relative lg:w-[348px] w-[285px] h-[300px]">
            <Image 
              src="/unsplash_tVEqStC2uz8.png" 
              alt="Featured Post Image 2" 
              layout="fill" 
              objectFit="cover" 
            />
          </div>
          <div className="flex flex-col lg:w-full p-4 w-[290px] bg-white">
            <div className="flex flex-row items-center gap-4 w-[159px] h-[16px]">
              <div className="text-[#8EC2F2] text-sm">Google</div>
              <div className="text-[#737373] text-sm">Trending</div>
              <div className="text-[#737373] text-sm">New</div>
            </div>
            <div className="text-[#252B42] text-[20px] leading-[30px] mt-4">
              Loudest à la Madison #1 (L&apos;integral)
            </div>
            <p className="text-[#737373] text-[14px] leading-[20px] mt-4">
              We focus on ergonomics and meeting you where you work. Its only a keystroke away.
            </p>
            <div className="flex flex-row justify-between items-center py-[15px]">
              <div className="text-sm">⏰ 22 April 2021</div>
              <div className="text-sm">📷 15 comments</div>
            </div>
            <a className="text-[#23A6F0] font-semibold">Learn More</a>
          </div>
        </div>

        {/* Third Post */}
        <div className="flex flex-col items-center p-0 w-[348px] h-auto">
          <div className="relative lg:w-[348px] w-[285px] h-[300px]">
            <Image 
              src="/unsplash_dEGu-oCuB1Y.png" 
              alt="Featured Post Image 3" 
              layout="fill" 
              objectFit="cover" 
            />
          </div>
          <div className="flex flex-col lg:w-full p-4 bg-white w-[290px] ">
            <div className="flex flex-row items-center gap-4">
              <div className="text-[#8EC2F2]">Google</div>
              <div className="text-[#737373]">Trending</div>
              <div className="text-[#737373]">New</div>
            </div>
            <div className="text-[#252B42] text-[20px] mt-4">
              Loudest à la Madison #1 (L&apos;integral)
            </div>
            <p className="text-[#737373] text-[14px] mt-4">
              We focus on ergonomics and meeting you where you work. Its only a keystroke away.
            </p>
            <div className="flex flex-row justify-between items-center py-[15px]">
              <div>⏰ 22 April 2021</div>
              <div>📷 20 comments</div>
            </div>
            <a className="text-[#23A6F0]">Learn More</a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default FeaturedPost;
