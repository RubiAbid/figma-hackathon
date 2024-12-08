import React from 'react';
import Image from 'next/image';

const ShopCard = () => {
  return (
    <div className="flex flex-col items-center justify-center p-0 gap-[10px] w-[1416px] mt-6">
      <h2 className="font-montserrat font-bold text-[24px] leading-[32px] tracking-[0.1px] text-[#252B42]">
        EDITORS PICK
      </h2>
      <p className="font-montserrat font-normal text-[14px] leading-[20px] text-center tracking-[0.2px] text-[#737373]">
        Problems trying to resolve the conflict between
      </p>
      <div className="flex flex-row items-start p-0 gap-[30px] w-[1050px] h-[500px]">
        <div className="w-[510px] h-[500px] flex-none order-0 flex-grow-0">
          <Image src="/brown.png" alt="Description" width={510} height={500} className="object-cover" />
        </div>
        <div className="w-full h-[500px]">
          <Image src="/beige.png" alt="Description" width={1050} height={500} className="object-cover" />
        </div>

        <div className="flex flex-col items-start p-0 gap-[16px] w-[240px] h-auto">
          <div className="w-[240px] h-[242px] bg-white flex-none order-1 flex-grow-0">
            <Image src="/card-item.png" alt="Card Item" width={240} height={242} className="object-cover" />
          </div>

          <div className="w-full h-[242px] bg-white order-2">
            <Image src="/yellow.png" alt="Card Item" width={240} height={242} className="object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopCard;
