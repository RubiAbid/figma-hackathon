import React from 'react';
import Image from 'next/image';

const ShopCard = () => {
  return (
    <div className="flex flex-col items-center justify-center p-0 gap-[10px] w-[240px] lg:w-full sm:w-[1416px] md:w-[900px] sm:translate-x-12 md:translate-x-0 lg:translate-x-0 mt-6">

      <h2 className="font-montserrat font-bold text-[24px] leading-[32px] tracking-[0.1px] text-[#252B42] lg:translate-x-0 translate-x-5 sm:translate-x-[-500px] md:translate-x-0">
        EDITORS PICK
      </h2>
      <p className="font-montserrat font-normal text-[14px] leading-[20px] text-center tracking-[0.2px] text-[#737373] lg:translate-x-0 translate-x-5 sm:translate-x-[-500px] md:translate-x-0">
        Problems trying to resolve the conflict between
      </p>

      <div className="flex flex-col lg:flex-row md:flex-row items-start p-0 gap-[30px] w-full lg:translate-y-0 sm:translate-y-[20px] md:translate-y-[10px] md:w-[1050px] h-auto md:h-[500px] ml-9">

        {/* Brown Image Section */}
        <div className="lg:w-[510px] md:w-[280px] lg:h-[500px] sm:h-[400px] sm:max-w-[330px] sm:w-[360px] w-[250px] md:max-w-[325px] lg:max-w-[510px] h-[345px] flex-none order-1 overflow-hidden lg:translate-x-0 sm:translate-x-[25px] md:translate-x-0">
          <Image 
            src="/brown.png" 
            alt="Description" 
            width={350} 
            height={500} 
            className="object-fill w-full h-full"
          />
        </div>

        {/* Beige Image Section */}
        <div className="sm:w-[350px] md:w-[280px] sm:h-[700px] md:h-[500px] lg:w-[243px] w-[250px] h-[500px] lg:h-[500px] flex-none order-2 lg:translate-x-0 sm:translate-x-[25px] md:translate-x-0">
          <Image 
            src="/beige.png" 
            alt="Description" 
            width={330} 
            height={500} 
            className="object-cover" 
          />
        </div>

        {/* Card-item and Yellow Image Section */}
        <div className="flex flex-col lg:flex-col md:flex-col items-start gap-[16px] w-full sm:w-[325px] md:w-[240px] lg:w-[240px] h-auto sm:h-[500px] lg:h-[500px] md:h-[500px] order-3 lg:translate-x-0 sm:translate-x-[25px] md:translate-x-0">

          {/* Card-item Image */}
          <div className="lg:w-full md:w-[220px] sm:w-[325px] w-[250px] h-auto md:h-[250px] lg:h-[250px] bg-white flex-none order-1">
            <Image 
              src="/card-item.png" 
              alt="Card Item" 
              width={325} 
              height={242} 
              className="object-cover"
            />
          </div>

          {/* Yellow Image */}
          <div className="sm:w-[325px] md:w-[220px] lg:w-[240px] w-[250px] h-auto md:h-[250px] lg:h-[250px] bg-white order-2">
            <Image 
              src="/yellow.png" 
              alt="Yellow Item" 
              width={325} 
              height={242} 
              className="object-cover" 
            />
          </div>

        </div>

      </div>
    </div>
  );
};

export default ShopCard;
