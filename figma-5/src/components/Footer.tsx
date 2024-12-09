'use client';

import React from 'react';
import Image from 'next/image';

const Footer = () => {
  return (
    <div className="w-full bg-[#FAFAFA]">
      {/* Top section with logo and social media icons */}
      <div className="flex justify-center items-center py-9">
        <div className="flex flex-row items-center max-w-screen-xl w-[1100px] px-6">
          <div className="w-[108px] h-[32px]">
            <h3 className="font-[Montserrat] font-bold text-[24px] leading-[32px] tracking-[0.1px] text-[#252B42]">
              Bandage
            </h3>
          </div>

          <div className="flex flex-row items-center justify-end w-full gap-6">
            <div className="w-[24px] h-[24px]">
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
                alt="Facebook Logo"
                width={24}
                height={24}
                className="w-full h-full object-contain"
              />
            </div>

            <div className="w-[24px] h-[24px]">
              <Image
                src="/ant-design_twitter-outlined.png"  // Ensure correct path
                alt="Twitter Logo"
                width={24}
                height={24}
                className="w-full h-full object-contain"
              />
            </div>

            <div className="w-[24px] h-[24px]">
              <Image
                src="/instagram.png"  // Ensure correct path
                alt="Instagram Logo"
                width={24}
                height={24}
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Company Info, Legal, Features, Resources section */}
      <div className="bg-white py-8 px-6">
        <div className="flex justify-center gap-[40px] flex-nowrap max-w-screen-xl mx-auto w-[1100px]">
          {/* Company Info Section */}
          <div className="flex flex-col items-start gap-[20px] w-[300px]">
            <h5 className="font-montserrat font-bold text-[16px] leading-[24px] tracking-[0.1px] text-[#252B42]">
              Company Info
            </h5>
            <a href="#" className="font-montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px] text-[#737373]">
              About Us
            </a>
            <a href="#" className="font-montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px] text-[#737373]">
              Career
            </a>
            <a href="#" className="font-montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px] text-[#737373]">
              We are Hiring
            </a>
            <a href="#" className="font-montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px] text-[#737373]">
              Blog
            </a>
          </div>

          {/* Legal Section */}
          <div className="flex flex-col items-start gap-[20px] w-[300px]">
            <h5 className="font-montserrat font-bold text-[16px] leading-[24px] tracking-[0.1px] text-[#252B42]">
              Legal
            </h5>
            <a href="#" className="font-montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px] text-[#737373]">
              Terms of Use
            </a>
            <a href="#" className="font-montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px] text-[#737373]">
              Privacy Policy
            </a>
          </div>

          {/* Features Section */}
          <div className="flex flex-col items-start gap-[20px] w-[300px]">
            <h5 className="font-montserrat font-bold text-[16px] leading-[24px] tracking-[0.1px] text-[#252B42]">
              Features
            </h5>
            <a href="#" className="font-montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px] text-[#737373]">
              Business Marketing
            </a>
            <a href="#" className="font-montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px] text-[#737373]">
              User Analytics
            </a>
            <a href="#" className="font-montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px] text-[#737373]">
              Live Chat
            </a>
          </div>

          {/* Resources Section */}
          <div className="flex flex-col items-start gap-[20px] w-[300px]">
            <h5 className="font-montserrat font-bold text-[16px] leading-[24px] tracking-[0.1px] text-[#252B42]">
              Resources
            </h5>
            <a href="#" className="font-montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px] text-[#737373]">
              IOS & Android
            </a>
            <a href="#" className="font-montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px] text-[#737373]">
              Watch a Demo
            </a>
            <a href="#" className="font-montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px] text-[#737373]">
              Customers
            </a>
            <a href="#" className="font-montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px] text-[#737373]">
              API
            </a>
          </div>

          {/* Get In Touch Section */}
          <div className="flex flex-col items-start gap-[10px] w-[200px]">
            <h5 className="font-montserrat font-bold text-[16px] leading-[24px] tracking-[0.1px] text-[#252B42]">
              Get In Touch
            </h5>
            <div className="relative w-[220px]  flex items-center border border-[#428cdb] pl-8">
              <input 
                type="email" 
                className="w-full bg-[#F9F9F9] border-none rounded-l-[5px] box-border "
                placeholder="your email"
              />
              <button className="bg-blue-500 text-white font-montserrat font-bold text-[14px] p-2">
                Subscribe
              </button>
            </div>
            <div className="relative">
              <p className="absolute inset-0 w-[155px] h-[28px] left-2 bottom-0 font-montserrat font-normal text-[12px] leading-[28px] tracking-[0.2px] text-[#737373] z-10">
                Lore ipsum dolor sit amet
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="w-full bg-[#FAFAFA] py-4 flex justify-center items-center">
        <p className="font-montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px] text-[#737373] w-[1100px]">
          Made With Love By Finland. All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
