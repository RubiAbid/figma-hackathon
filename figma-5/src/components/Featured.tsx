import React from 'react';

const Featured = () => {
  return (
    <div className="flex flex-col items-center justify-center p-0 gap-[30px] w-full mt-14">
      {/* Row 1: 4 products */}
      <div className="flex flex-row items-center justify-center gap-[30px] w-full">
        {/* Product 1 */}
        <div className="flex flex-col items-center w-[239px] h-[615px]">
          <div className="relative w-full h-[427px]">
            <img src="fixed-height (1).png" alt="Product Cover" className="w-full h-full object-cover" />
          </div>
          <div className="flex flex-col items-center p-[25px_25px_35px] gap-[10px] w-full h-[188px]">
            <h5 className="font-montserrat font-bold text-[16px] leading-[24px] text-center text-[#252B42]">
              Graphic Design
            </h5>
            <a href="#" className="font-montserrat font-bold text-[14px] leading-[24px] text-center text-[#737373]">
              English Department
            </a>
            <div className="flex items-start gap-[5px] w-[108px] h-[34px]">
              $16.48 <span className="line-through text-[#737373]">$6.48</span>
            </div>
            <div className="flex items-center gap-[6.08px] w-[82.23px] h-[16px]">
              🔵 🟢 🟠 ⚫
            </div>
          </div>
        </div>

        {/* Product 2 */}
        <div className="flex flex-col items-center w-[239px] h-[615px]">
          <div className="relative w-full h-[427px]">
            <img src="fixed-height (2).png" alt="Product Cover" className="w-full h-full object-cover" />
          </div>
          <div className="flex flex-col items-center p-[25px_25px_35px] gap-[10px] w-full h-[188px]">
            <h5 className="font-montserrat font-bold text-[16px] leading-[24px] text-center text-[#252B42]">
              Graphic Design
            </h5>
            <a href="#" className="font-montserrat font-bold text-[14px] leading-[24px] text-center text-[#737373]">
              English Department
            </a>
            <div className="flex items-start gap-[5px] w-[108px] h-[34px]">
              $16.48 <span className="line-through text-[#737373]">$6.48</span>
            </div>
            <div className="flex items-center gap-[6.08px] w-[82.23px] h-[16px]">
              🔵 🟢 🟠 ⚫
            </div>
          </div>
        </div>

        {/* Product 3 */}
        <div className="flex flex-col items-center w-[239px] h-[615px]">
          <div className="relative w-full h-[427px] bg-white">
            <img src="fixed-height (3).png" alt="Description" className="w-full h-full object-cover" />
          </div>
          <div className="flex flex-col items-center p-[25px_25px_35px] gap-[10px] w-full h-[188px]">
            <h5 className="font-montserrat font-bold text-[16px] leading-[24px] text-center text-[#252B42]">
              Graphic Design
            </h5>
            <a href="#" className="font-montserrat font-bold text-[14px] leading-[24px] text-center text-[#737373]">
              English Department
            </a>
            <div className="flex items-start gap-[5px] w-[108px] h-[34px]">
              $16.48 <span className="line-through text-[#737373]">$6.48</span>
            </div>
            <div className="flex items-center gap-[6.08px] w-[82.23px] h-[16px]">
              🔵 🟢 🟠 ⚫
            </div>
          </div>
        </div>

        {/* Product 4 */}
        <div className="flex flex-col items-center w-[239px] h-[615px]">
          <div className="relative w-full h-[427px]">
            <img src="fixed-height (4).png" alt="Product Cover" className="w-full h-full object-cover" />
          </div>
          <div className="flex flex-col items-center p-[25px_25px_35px] gap-[10px] w-full h-[188px]">
            <h5 className="font-montserrat font-bold text-[16px] leading-[24px] text-center text-[#252B42]">
              Graphic Design
            </h5>
            <a href="#" className="font-montserrat font-bold text-[14px] leading-[24px] text-center text-[#737373]">
              English Department
            </a>
            <div className="flex items-start gap-[5px] w-[108px] h-[34px]">
              $16.48 <span className="line-through text-[#737373]">$6.48</span>
            </div>
            <div className="flex items-center gap-[6.08px] w-[82.23px] h-[16px]">
              🔵 🟢 🟠 ⚫
            </div>
          </div>
        </div>
      </div>

      {/* Row 2: 2 products */}
      <div className="flex flex-row items-center justify-center gap-[30px] w-full">
        {/* Product 5 */}
        <div className="flex flex-col items-center w-[239px] h-[615px]">
          <div className="relative w-full h-[427px]">
            <img src="fixed-height (5).png" alt="Product Cover" className="w-full h-full object-cover" />
          </div>
          <div className="flex flex-col items-center p-[25px_25px_35px] gap-[10px] w-full h-[188px]">
            <h5 className="font-montserrat font-bold text-[16px] leading-[24px] text-center text-[#252B42]">
              Graphic Design
            </h5>
            <a href="#" className="font-montserrat font-bold text-[14px] leading-[24px] text-center text-[#737373]">
              English Department
            </a>
            <div className="flex items-start gap-[5px] w-[108px] h-[34px]">
              $16.48 <span className="line-through text-[#737373]">$6.48</span>
            </div>
            <div className="flex items-center gap-[6.08px] w-[82.23px] h-[16px]">
              🔵 🟢 🟠 ⚫
            </div>
          </div>
        </div>

        {/* Product 6 */}
        <div className="flex flex-col items-center w-[239px] h-[615px]">
          <div className="relative w-full h-[427px]">
            <img src="product-cover-5.png" alt="Product Cover" className="w-full h-full object-cover" />
          </div>
          <div className="flex flex-col items-center p-[25px_25px_35px] gap-[10px] w-full h-[188px]">
            <h5 className="font-montserrat font-bold text-[16px] leading-[24px] text-center text-[#252B42]">
              Graphic Design
            </h5>
            <a href="#" className="font-montserrat font-bold text-[14px] leading-[24px] text-center text-[#737373]">
              English Department
            </a>
            <div className="flex items-start gap-[5px] w-[108px] h-[34px]">
              $16.48 <span className="line-through text-[#737373]">$6.48</span>
            </div>
            <div className="flex items-center gap-[6.08px] w-[82.23px] h-[16px]">
              🔵 🟢 🟠 ⚫
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
