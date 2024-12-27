'use client';

import React from 'react';
import Image from 'next/image';

const Footer = () => {
  return (
    <div className="lg:w-full w-[280px] bg-[#FAFAFA]">
      {/* Top section with logo and social media icons */}
      <div className="flex justify-center items-center py-9">
        <div className="flex flex-row items-center max-w-screen-xl w-[1100px] px-6">
          <div className="w-[108px] h-[32px]">
            <h3 className="font-[Montserrat] font-bold text-[24px] leading-[32px] tracking-[0.1px] text-[#252B42]">
              Bandage
            </h3>
          </div>

          <div className="flex flex-row items-center justify-end lg:w-full w-[130px] gap-6 break-words">
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
                src="/ant-design_twitter-outlined.png"
                alt="Twitter Logo"
                width={24}
                height={24}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="w-[24px] h-[24px]">
              <Image
                src="/instagram.png"
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
        <div className="flex justify-center flex-col flex-wrap md:flex-wrap lg:flex-nowrap lg:flex-row gap-[40px] max-w-screen-xl mx-auto w-[1100px]">
          {/* Company Info Section */}
          <div className="flex flex-col items-start gap-[20px] w-[300px]">
            <h5 className="font-montserrat font-bold text-[16px] leading-[24px] text-[#252B42]">
              Company Info
            </h5>
            <a href="#" className="text-[#737373] text-[14px] font-bold">
              About Us
            </a>
            <a href="#" className="text-[#737373] text-[14px] font-bold">
              Career
            </a>
            <a href="#" className="text-[#737373] text-[14px] font-bold">
              We are Hiring
            </a>
            <a href="#" className="text-[#737373] text-[14px] font-bold">
              Blog
            </a>
          </div>

          {/* Legal Section */}
          <div className="flex flex-col items-start gap-[20px] w-[300px]">
            <h5 className="font-montserrat font-bold text-[16px] leading-[24px] text-[#252B42]">
              Legal
            </h5>
            <a href="#" className="text-[#737373] text-[14px] font-bold">
              Terms of Use
            </a>
            <a href="#" className="text-[#737373] text-[14px] font-bold">
              Privacy Policy
            </a>
          </div>

          {/* Features Section */}
          <div className="flex flex-col items-start gap-[20px] w-[300px]">
            <h5 className="font-montserrat font-bold text-[16px] leading-[24px] text-[#252B42]">
              Features
            </h5>
            <a href="#" className="text-[#737373] text-[14px] font-bold">
              Business Marketing
            </a>
            <a href="#" className="text-[#737373] text-[14px] font-bold">
              User Analytics
            </a>
            <a href="#" className="text-[#737373] text-[14px] font-bold">
              Live Chat
            </a>
          </div>

          {/* Resources Section */}
          <div className="flex flex-col items-start gap-[20px] w-[300px]">
            <h5 className="font-montserrat font-bold text-[16px] leading-[24px] text-[#252B42]">
              Resources
            </h5>
            <a href="#" className="text-[#737373] text-[14px] font-bold">
              IOS & Android
            </a>
            <a href="#" className="text-[#737373] text-[14px] font-bold">
              Watch a Demo
            </a>
            <a href="#" className="text-[#737373] text-[14px] font-bold">
              Customers
            </a>
            <a href="#" className="text-[#737373] text-[14px] font-bold">
              API
            </a>
          </div>

          {/* Get In Touch Section */}
          <div className="flex flex-col items-start gap-[10px] w-[200px]">
            <h5 className="font-montserrat font-bold text-[16px] leading-[24px] text-[#252B42]">
              Get In Touch
            </h5>
            <div className="relative w-[220px] flex items-center border border-[#428cdb] pl-8">
              <input
                type="email"
                className="w-full bg-[#F9F9F9] border-none rounded-l-[5px]"
                placeholder="your email"
              />
              <button className="bg-blue-500 text-white font-bold text-[14px] p-2">
                Subscribe
              </button>
            </div>
            <div className="relative">
              <p className="absolute inset-0 text-[12px] text-[#737373] w-[155px]">
                Lore ipsum dolor sit amet
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="lg:w-full bg-[#FAFAFA] w-[188px] py-4 flex justify-center items-center lg:translate-x-0 translate-x-[50px]">
        <p className="text-[#737373] font-bold text-[14px]">
          Made With Love By Finland. All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
