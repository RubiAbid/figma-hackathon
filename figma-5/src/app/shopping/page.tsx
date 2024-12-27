import React from 'react';
import ShopFeature from '@/components/ShopFeature';
import Link from 'next/link';  // Import Link for navigation
import type { Metadata } from "next";
import Footer from '@/components/Footer';
import HeaderSection from '@/components/HeaderSection';
import NavbarSection from '@/components/NavbarSection';
import Image from 'next/image';

export const metadata: Metadata = {
  title: "Shop - Create Next App",
  description: "Browse and shop the best products!",
};

const Shop = () => {
  return (
    <div className="flex flex-col items-center p-[24px_0] w-full h-auto bg-[#FAFAFA]">
      {/* Header */}
      <HeaderSection />
      {/* Navbar */}
      <NavbarSection />
      {/* SHOP heading and breadcrumb container */}
      <div className="flex flex-col sm:flex-row justify-between items-center w-full max-w-screen-xl mb-9 px-4 sm:px-6 md:px-8">
        {/* SHOP heading on the left */}
        <h2 className="w-auto text-center font-montserrat font-bold text-[24px] leading-[32px] tracking-[0.1px] text-[#252B42] sm:mr-[100px] translate-x-[-50px] sm:translate-x-[160px]  md:ml-[100px] lg:mt-0 mt-5">
          SHOP
        </h2>

        {/* Breadcrumb container on the right */}
        <div className="flex items-center gap-2 sm:gap-2 lg:mr-40 sm:mr-[120px] mr-20 lg:mt-0 mt-5">
        <Link href="/">
            <button className="font-montserrat font-bold text-[14px] leading-[24px] text-center tracking-[0.2px] text-[#252B42] bg-transparent border-none">
              Home
            </button>
          </Link>

          <div className="text-[#252B42]"> &gt; </div>
          <Link href="/shopping" className="font-montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px] text-[#BDBDBD]">
            Shop
          </Link>
        </div>
      </div>
      

      {/* Image Section */}
      <div className="w-full bg-[#FAFAFA] flex flex-col  items-center">
              <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-[24px] pb-[48px] lg:w-[1088px] sm:w-[330px] sm:gap-[2px] sm:translate-x-[20px]  w-[330px] max-w-screen-xl">
          {["/col-md-4.png",
            "/card-item (2).png",
            "/col-md-4 (1).png",
            "/col-md-4 (2).png",
            "/col-md-4 (3).png",
          ].map((src, index) => (
            <div key={index} className="w-[190px] h-[223px] sm:w-[150px] lg:translate-x-0 sm:translate-x-0 translate-x-[-40px] sm:h-[180px] mx-auto">
              <Image
                src={src}
                alt="Image description"
                width={190}
                height={223}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Combined Label and Views Section */}
      <div className="lg:w-full h-auto bg-white flex flex-col lg:flex-row justify-between items-center px-4 py-[24px] gap-8 sm:translate-x-[55px] lg:translate-x-0 translate-x-[-30px] lg:gap-[10px] lg:mr-0 sm:mr-10">
        {/* "Showing all 12 results" Label */}
        <label className="text-center sm:text-left font-montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px] text-[#737373] lg:translate-x-[170px]">
          Showing all 12 results
        </label>

        <div className="flex justify-center items-center gap-[15px]">
          <div className="font-montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px] text-[#737373]">
            Views
          </div>

          {/* Image Section */}
          {["/btn-sm-24.png",
            "/btn-sm-24 (1).png",
          ].map((src, index) => (
            <div
              key={index}
              className="flex items-center p-[15px] w-[50px] h-[50px] border border-[#ECECEC] rounded-[5px]"
            >
              <Image
                src={src}
                alt="View button"
                width={24}
                height={24}
                className="object-cover"
              />
            </div>
          ))}
        </div>

        {/* Select dropdown and Filter button */}
        <div className="flex flex-col sm:flex-row items-center gap-[15px] w-full sm:w-auto lg:-translate-x-[170px]">
          <div className="relative w-full sm:w-[141px] h-[50px]">
            <select className="w-full h-full border border-[#ECECEC] rounded-[5px] bg-white text-[#737373] font-montserrat text-[14px] leading-[24px] focus:outline-none focus:ring-2 focus:ring-[#23A6F0]">
              <option value="" selected>
                Popularity
              </option>
              <option value="1">Option 1</option>
              <option value="2">Option 2</option>
              <option value="3">Option 3</option>
            </select>
          </div>

          <button className="p-[10px_20px] bg-[#23A6F0] text-white rounded-[5px]">
            Filter
          </button>
        </div>
      </div>

    {/* Footer Section */}
<div className="translate-x-[-8%] sm:translate-x-[40px]">
  <Footer />
</div>

<div className=' lg:translate-x-0 sm:translate-x-[90px] '>
  <ShopFeature />
  </div>


      {/* Pagination */}
     
      <div className="box-border w-[313px] h-[74px] bg-white border border-[#BDBDBD] shadow-md rounded-[6.728px] flex-none order-3 flex-grow-0 lg:-ml-0 sm:ml-0 -ml-[50px] sm:translate-x-[40px] lg:translate-x-0 translate-x-[-20px]">
        <ul className="flex flex-row items-start p-0 w-[313px] h-[74px] left-0 top-0 space-x-[1px]">
          <li className="box-border text-[#BDBDBD] flex flex-row justify-center items-center p-[25px] w-[84px] h-[74px] bg-[#F3F3F3] border border-[#BDBDBD] flex-none order-0 flex-grow-0">
            First
          </li>
          <li className="box-border flex flex-row justify-center text-blue-400 items-center p-[25px_20px] w-[46px] h-[74px] bg-white border border-[#E9E9E9] flex-none order-1 flex-grow-0">
            1
          </li>
          <li className="box-border flex flex-row text-white justify-center items-center p-[25px_20px] w-[49px] h-[74px] bg-[#23A6F0] border border-[#E9E9E9] flex-none order-2 flex-grow-0">
            2
          </li>
          <li className="box-border flex text-blue-400 flex-row justify-center items-center p-[25px_20px] w-[49px] h-[74px] bg-white border border-[#E9E9E9] flex-none order-3 flex-grow-0">
            3
          </li>
          <li className="box-border text-blue-400 flex flex-row justify-center items-center p-[25px] w-[85px] h-[74px] bg-white border border-[#E8E8E8] flex-none order-4 flex-grow-0">
            Next
          </li>
          </ul>
      </div>
    </div>
  );
};

export default Shop;
