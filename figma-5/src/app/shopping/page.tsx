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
      <div className="flex justify-between items-center w-full max-w-screen-xl mb-9">
        {/* SHOP heading on the left */}
        <h2 className="w-[63px] h-[32px] text-center font-montserrat font-bold text-[24px] leading-[32px] tracking-[0.1px] text-[#252B42] ml-[200px]">
          SHOP
        </h2>

        {/* Breadcrumb container on the right */}
        <Link href="/">
          <button className="font-montserrat s font-bold text-[14px] leading-[24px] text-center tracking-[0.2px] text-[#252B42] bg-transparent border-none translate-x-[400px]">
            Home
          </button>
        </Link>
        <div className="text-[#252B42] translate-x-[90px]"> &gt; </div>
        <div className="font-montserrat font-bold text-[14px] leading-[24px] text-center tracking-[0.2px] text-[#BDBDBD] translate-x-[-215px]">
  <Link href="/shopping">
    Shop
  </Link>
</div>

      </div>
      

      {/* Image Section */}
      <div className="w-full bg-[#FAFAFA] flex flex-col items-center">
        <div className="flex justify-center items-center gap-[16px] p-0 pb-[48px] w-full h-[271px] relative">
          <div className="w-[205px] h-[223px] flex-none">
          <Image
              src="col-md-4 (3).png"
              alt="Image description"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-[205px] h-[223px] flex-none">
          <Image
              src="card-item (2).png"
              alt="Image description"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-[205px] h-[223px] flex-none">
          <Image
              src="col-md-4 (1).png"
              alt="Image description"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-[205px] h-[223px] flex-none">
          <Image
              src="col-md-4 (2).png"
              alt="Image description"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Combined Label and Views Section */}
      <div className="w-full h-[98px] bg-white flex justify-between items-center px-0 py-[24px] gap-[15px]">
        {/* "Showing all 12 results" Label */}
        <label className="w-auto h-[24px] font-montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px] text-[#737373] ml-[130px]">
          Showing all 12 results
        </label>

        <div className="flex justify-center items-center gap-[15px]">
          {/* "Views" Label */}
          <div className="w-[53px] h-[24px] font-montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px] text-[#737373]">
            Views
          </div>

          {/* Image Section */}
          <div className="flex items-center p-[15px] w-[50px] h-[50px] border border-[#ECECEC] rounded-[5px] box-border">
          <Image
              src="btn-sm-24.png"
              alt="Image description"
              className="w-[24px] h-[24px] object-cover"
            />
          </div>
          <div className="flex items-center p-[15px] w-[50px] h-[50px] border border-[#ECECEC] rounded-[5px] box-border">
          <Image
              src="btn-sm-24 (1).png"
              alt="Image description"
              className="w-[24px] h-[24px] object-cover"
            />
          </div>
        </div>

        {/* Select dropdown and Filter button */}
        <div className="flex items-center mr-[190px] gap-[15px] w-[252px] h-[50px]">
          {/* Select dropdown */}
          <div className="relative w-[141px] h-[50px]">
            <select className="w-full h-full border border-[#ECECEC] rounded-[5px] bg-white text-[#737373] font-montserrat text-[14px] leading-[24px] focus:outline-none focus:ring-2 focus:ring-[#23A6F0]" defaultValue="">
              <option value="" disabled>
                Popularity
              </option>
              <option value="1">Option 1</option>
              <option value="2">Option 2</option>
              <option value="3">Option 3</option>
            </select>
          </div>

          {/* Filter button */}
          <button className="flex items-center p-[10px_20px] w-[94px] h-[50px] bg-[#23A6F0] rounded-[5px]">
            Filter
          </button>
        </div>
      </div>

      {/* Footer Section */}
      <div className="flex flex-col items-center p-0 w-[1050px] h-[175px] left-1/2 mt-[120px] transform">
        <div className="flex gap-4">
          <div className="w-[103px] h-[34px]">
          <Image src="/vector.png" alt="Vector" className="w-full h-full object-contain" />
          </div>
          <div className="w-[103px] h-[34px]">
          <Image src="/fa-brands-2.png" alt="Vector" className="w-full h-full object-contain" />
          </div>
          <div className="w-[103px] h-[34px]">
          <Image src="/fa-brands-3.png" alt="Vector" className="w-full h-full object-contain" />
          </div>
          <div className="w-[103px] h-[34px]">
          <Image src="/fa-brands-4.png" alt="Vector" className="w-full h-full object-contain" />
          </div>
          <div className="w-[103px] h-[34px]">
          <Image src="/fa.png" alt="Vector" className="w-full h-full object-contain" />
          </div>
          <div className="w-[103px] h-[34px]">
          <Image src="/faa.png" alt="Vector" className="w-full h-full object-contain" />
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />

      {/* ShopFeature Section at the bottom */}
      <ShopFeature />

      <div className="box-border w-[313px] h-[74px] bg-white border border-[#BDBDBD] shadow-md rounded-[6.728px] flex-none order-3 flex-grow-0">
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
