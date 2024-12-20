import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Footer from '@/components/Footer'

const page = () => {
  return (
    <div className="flex flex-col min-h-screen w-full">
    <div className="absolute w-full top-0">
      {/* Navigation Section */}
      <div className="relative w-full flex flex-row items-center justify-between mt-[40px] px-4">
        {/* Bandage Section */}
        <div className="w-[197px] h-[58px]">
          <div className="w-[108px] px-[222px] mt-3 h-[32px] text-[#252B42] font-montserrat font-bold text-[24px] leading-[32px] tracking-[0.1px]">
            Bandage
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex flex-row items-center gap-[39px] w-[275px]">
          <Link href="/" passHref>
            <button className="w-[45px] h-[24px]">Home</button>
          </Link>
          <Link href="/HomeApppliances" passHref>
            <button className="w-[33px] h-[24px]">Product</button>
          </Link>
          <Link href="/pricing" passHref>
            <button className="w-[58px] h-[24px]">Pricing</button>
          </Link>
          <Link href="/contactUs" passHref>
            <button className="w-[44px] h-[24px]">Contact</button>
          </Link>
        </div>

        {/* Login / Register button */}
        <div className="flex flex-row items-center gap-0 w-[290px] h-[30px] transform translate-x-[-145px]">
          <a href="#" className="flex items-center gap-1 p-3 w-[166px] h-[54px] font-montserrat font-bold text-[14px] leading-[24px] text-center tracking-[0.2px] text-[#23A6F0]">
            Login
          </a>
          <button className="flex items-center p-[15px_25px] w-[240px] h-[45px] bg-[#23A6F0] rounded-[5px] whitespace-nowrap">
            <span className="w-[137px] h-[22px] px-1 font-montserrat font-bold text-[14px] leading-[22px] tracking-[0.2px] text-[#FFFFFF]">
              Become a member
            </span>
            <Image src="/arrow.png" alt="Arrow Icon" width={12} height={10} className="w-[12px] h-[10px]" />
            </button>
        </div>
      </div>
    </div>

    <div className="flex flex-col items-center py-12 w-full max-w-[870px] bg-white mt-16 translate-x-[240px] translate-y-[60px]">
  <h5 className="text-[#737373] font-montserrat font-bold text-[16px] leading-[24px] text-center">
    PRICING
  </h5>
  <h2 className="text-[#252B42] font-montserrat font-bold text-[40px] leading-[50px] text-center">
    Simple Pricing
  </h2>
  <div className="flex flex-row items-center gap-[15px] w-full justify-center mt-4">
    <a href="#" className="text-[#252B42] font-montserrat font-bold text-[14px] leading-[24px]">
      Home
    </a>
    <div className="flex items-center gap-2">
    <Image src="/icn arrow-right icn-xs.png" alt="Arrow icon" width={12} height={12} className="w-[12px] h-[12px]" />
    <h6 className="text-[#737373] font-montserrat font-bold text-[14px] leading-[24px]">
        Pricing
      </h6>
    </div>
  </div>
</div>

      <div className="flex flex-col items-center py-6 w-full max-w-[633px] mt-8 translate-x-[360px]">
        <h2 className="text-[#252B42] font-montserrat font-bold text-[40px] leading-[50px] text-center">
          Pricing
        </h2>
        <p className="text-[#737373] font-montserrat font-normal text-[14px] leading-[20px] text-center mt-2">
          Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
        </p>
      </div>


      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 translate-y-[120px]">
  <div className="flex flex-row items-center p-0 gap-4 w-[311px] h-[44px]">
    <div className="flex-none order-2 flex-grow-0 w-[186px] h-[28px] relative">
      <label className="absolute w-[68px] h-[24px] left-0 top-0 text-[#252B42] font-bold text-[16px] leading-[24px] tracking-[0.1px] font-montserrat">
        Monthly
      </label>
      <Image 
        src="/form-check-input.png" 
        alt="Image description" 
        width={45} 
        height={25} 
        className="absolute left-[80px] top-[1px]" 
      />
      <label className="absolute w-[51px] h-[24px] left-[135px] top-0 text-[#252B42] font-bold text-[16px] leading-[24px] tracking-[0.1px] font-montserrat">
        Yearly
      </label>
        {/* Add the button next to Yearly */}
        <button className="flex flex-col items-center p-[10px_20px] gap-[10px] w-[109px] h-[44px] bg-[#B3E3FF] rounded-[37px] flex-none order-1 flex-grow-0 ml-[190px] -translate-y-3">
        <h6 className="w-[69px] h-[24px] text-[#23A6F0] font-bold text-[14px] leading-[24px] text-center tracking-[0.2px] font-montserrat flex-none order-0 flex-grow-0">
          Save 25%
        </h6>
      </button>
    </div>
  </div>
</div>

<div className="flex flex-row p-0 w-[985px] h-[704px] justify-center items-center translate-y-[120px] translate-x-[210px]">

  <div className="flex flex-col  items-center p-0 w-[327px] h-[300px] border border-[#23A6F0] rounded-[10px] ">
    <h3 className="w-[64px] h-[32px] translate-y-[35px] text-[#252B42] font-bold text-[24px] leading-[32px] tracking-[0.1px] font-montserrat flex-none order-0 flex-grow-0">
      FREE
    </h3>
    <h5 className="w-[160px] h-[48px] text-[#737373] translate-y-[35px] font-bold text-[16px] leading-[24px] text-center tracking-[0.1px] font-montserrat flex-none order-1 flex-grow-0 mb-[35px]">
      Organize across all apps by hand
    </h5>
    <div className="flex flex-row items-center p-0 gap-[10px] w-[114px] h-[56px] flex-none order-2 flex-grow-0 ">
      <h2 className="w-[28px] h-[50px] text-[#23A6F0] translate-y-8 font-bold text-[40px] leading-[50px] tracking-[0.2px] font-montserrat flex-none order-0 flex-grow-0">
        0
      </h2>
      <div className="flex flex-col items-start p-0 w-[76px] h-[56px] flex-none order-1 flex-grow-0 translate-y-8">
        <h3 className="w-[16px] h-[32px] text-[#23A6F0] font-bold text-[24px] leading-[32px] tracking-[0.1px] font-montserrat flex-none order-0 flex-grow-0">
          $
        </h3>
        <h5 className="w-[76px] h-[24px] text-[#8EC2F2] font-bold text-[14px] leading-[24px] tracking-[0.2px] font-montserrat flex-none order-1 flex-grow-0">
          Per Month
        </h5>
      </div>
    </div>
    <div className="flex flex-row items-center p-0 gap-[10px] w-[247px] h-[32px] flex-none order-0 flex-grow-0 translate-y-[230px]">
    <div className="w-[32px] h-[32px] bg-[#2DC071] rounded-full flex-none order-0 flex-grow-0">
  <Image 
    src="/icn-circle circle-xs secondary-color-1.png" 
    alt="Icon" 
    className="w-full h-full object-cover rounded-full" 
    width={32} 
    height={32} 
  />
</div>

      <h6 className="w-[205px] h-[29.25px] text-[#252B42] font-bold text-[14px] leading-[24px] tracking-[0.2px] font-montserrat flex-none order-1 flex-grow-0">
        Unlimited product updates
      </h6>
    </div>
  </div>

  <div className="flex flex-col items-center p-0 w-[329px] h-[704px] flex-none order-1 flex-grow-0">
    <div className="box-border flex flex-col items-center p-[70px_40px] gap-[35px] w-[327px] h-[378px] bg-[#252B42] border border-[#23A6F0] translate-y-[140px] rounded-[10px] flex-none order-0 flex-grow-0">
      <h3 className="w-[139px]  h-[32px] text-[#FFFFFF] font-bold text-[24px] leading-[32px] tracking-[0.1px] font-montserrat flex-none order-0 translate-y-[12px] flex-grow-0 mb-[-129px]">
        STANDARD
      </h3>
      <h5 className="w-[160px] h-[48px] text-[#FFFFFF] font-bold text-[16px] leading-[24px] text-center tracking-[0.1px] font-montserrat translate-y-[13px] flex-none order-1 flex-grow-0">
        Organize across all apps by hand
      </h5>
      <div className="flex flex-row items-center p-0 gap-[10px] w-[174px] h-[56px] flex-none order-2 flex-grow-0">
        <h2 className="w-[88px] h-[50px] text-[#23A6F0] font-bold text-[40px] leading-[50px] tracking-[0.2px] translate-y-[12px] font-montserrat flex-none order-0 flex-grow-0">
          9.99
        </h2>
        <div className="flex flex-col items-start p-0 w-[76px] h-[56px] translate-y-[6px] flex-none order-1 flex-grow-0">
          <h3 className="w-[16px] h-[32px] text-[#23A6F0] font-bold text-[24px] leading-[32px] tracking-[0.1px] font-montserrat flex-none order-0 flex-grow-0">
            $
          </h3>
          <h5 className="w-[76px] h-[24px] text-[#8EC2F2] font-bold text-[14px] leading-[24px] tracking-[0.2px] font-montserrat flex-none order-1 flex-grow-0">
            Per Month
          </h5>
        </div>
      </div>
      <div className="flex flex-row items-center p-0 gap-[10px] w-[247px] h-[32px] flex-none order-0 flex-grow-0 translate-y-[340px]">
      <div className="w-[32px] h-[32px] bg-[#2DC071] rounded-full flex-none order-0 flex-grow-0">
      <Image
  src="/icn-circle circle-xs secondary-color-1.png"
  alt="Icon"
  className="w-full h-full object-cover rounded-full"
  width={32}  // Pass as a number, not a string
  height={32} // Pass as a number, not a string
/>

</div>

        <h6 className="w-[205px] h-[29.25px] text-white font-bold text-[14px] leading-[24px] tracking-[0.2px] font-montserrat flex-none order-1 flex-grow-0">
          Unlimited product updates
        </h6>
      </div>
      <div className="flex flex-row items-center p-0 gap-[10px] w-[247px] h-[32px] flex-none order-0 flex-grow-0 translate-y-[230px]">
      <div className="w-[32px] h-[32px] bg-[#2DC071] rounded-full flex-none order-0 flex-grow-0">
  <Image
    src="/icn-circle circle-xs secondary-color-1.png"
    alt="Icon"
    className="w-full h-full object-cover rounded-full"
    width={32}
    height={32}
  />
</div>


        <h6 className="w-[205px] h-[29.25px] text-white font-bold text-[14px] leading-[24px] tracking-[0.2px] font-montserrat flex-none order-1 flex-grow-0">
          Unlimited product updates
        </h6>
      </div>
    </div>
  </div>

  <div className="box-border flex flex-col  items-center p-[50px_40px] gap-[35px] w-[325px] h-[300px] bg-white border border-[#23A6F0] rounded-[10px] flex-none order-2 flex-grow-0">
    <h3 className="w-[122px] h-[32px]  text-[#252B42] -translate-y-4 font-bold text-[24px] leading-[32px] tracking-[0.1px] font-montserrat flex-none order-0 flex-grow-0">
      PREMIUM
    </h3>
    <h5 className="w-[160px] h-[48px] text-[#737373] font-bold -translate-y-[80px] text-[16px] leading-[24px] text-center tracking-[0.1px] font-montserrat flex-none order-1 flex-grow-0">
      Organize across all apps by hand
    </h5>
    <div className="flex flex-row items-center p-0 gap-[10px] w-[114px] h-[56px] flex-none order-2 flex-grow-0">
      <h2 className="w-[28px] h-[50px] text-[#23A6F0] font-bold text-[40px] leading-[50px] tracking-[0.2px] font-montserrat flex-none order-0 flex-grow-0 -translate-y-[80px] -translate-x-11">
        19.99
      </h2>
      <div className="flex flex-col items-start p-0 w-[76px] h-[56px] flex-none order-1 flex-grow-0 -translate-y-[80px] translate-x-8">
        <h3 className="w-[16px] h-[32px] text-[#23A6F0] font-bold text-[24px] leading-[32px] tracking-[0.1px] font-montserrat flex-none order-0 flex-grow-0">
          $
        </h3>
        <h5 className="w-[76px] h-[24px] text-[#8EC2F2] font-bold text-[14px] leading-[24px] tracking-[0.2px] font-montserrat flex-none order-1 flex-grow-0">
          Per Month
        </h5>
      </div>
      </div>

      <div className="flex flex-row items-center p-0 gap-2 w-[247px] h-[32px] translate-y-[145px]">
      <div className="flex items-center justify-center w-[32px] h-[32px] bg-[#2DC071] rounded-full">
  <Image
    src="/icn-circle circle-xs secondary-color-1.png"
    alt="icon"
    className="w-full h-full object-cover rounded-full"
    width={32}
    height={32}
  />
</div>

  
  <h6 className="font-montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px] text-[#252B42]">
    Unlimited product updates
  </h6>
</div>
</div>  
</div>



    {/* Footer Section */}
    <div className="flex flex-col gap-10 items-center p-0 w-[1050px] h-[175px]  mt-[50px] transform translate-x-[220px]">
    <h2 className="w-[385px] h-[30px] font-montserrat font-normal text-[20px] leading-[30px] text-center tracking-[0.2px] text-[#252B42] flex-none order-0 grow-0">
    Trusted By Over 4000 Big Companies
</h2>

  <div className="flex gap-4">
    <div className="w-[103px] h-[34px]">
      <Image 
        src="/vector.png" 
        alt="Vector" 
        width={103}   // Explicit width
        height={34}   // Explicit height
        className="w-full h-full object-contain" 
      />
    </div>
    <div className="w-[103px] h-[34px]">
      <Image 
        src="/fa-brands-2.png" 
        alt="Vector" 
        width={103}   // Explicit width
        height={34}   // Explicit height
        className="w-full h-full object-contain" 
      />
    </div>
    <div className="w-[103px] h-[34px]">
      <Image 
        src="/fa-brands-3.png" 
        alt="Vector" 
        width={103}   // Explicit width
        height={34}   // Explicit height
        className="w-full h-full object-contain" 
      />
    </div>
    <div className="w-[103px] h-[34px]">
      <Image 
        src="/fa-brands-4.png" 
        alt="Vector" 
        width={103}   // Explicit width
        height={34}   // Explicit height
        className="w-full h-full object-contain" 
      />
    </div>
    <div className="w-[103px] h-[34px]">
      <Image 
        src="/fa.png" 
        alt="Vector" 
        width={103}   // Explicit width
        height={34}   // Explicit height
        className="w-full h-full object-contain" 
      />
    </div>
    <div className="w-[103px] h-[34px]">
      <Image 
        src="/faa.png" 
        alt="Vector" 
        width={103}   // Explicit width
        height={34}   // Explicit height
        className="w-full h-full object-contain" 
      />
    </div>
  </div>
</div>





<div className="flex justify-center items-center mt-[80px] w-full h-screen">
  <div className="flex flex-col items-center px-0 py-[80px] gap-[50px] w-[1056px] h-[1037px]">
  
    {/* Main Section with Title and Description */}
    <div className="flex flex-col items-center px-0 py-[45px] w-[1050px] h-[210px]">
      <div className="flex flex-col items-center p-0 w-[651px] h-[120px]">
        <h2 className="font-montserrat font-bold text-[40px] leading-[50px] tracking-[0.2px] text-[#252B42]">
          Pricing FAQs
        </h2>
        <p className="font-montserrat font-normal text-[20px] leading-[30px] text-center tracking-[0.2px] text-[#737373]">
          Problems trying to resolve the conflict between the two major realms of Classical physics
        </p>
      </div>
    </div>

    {/* FAQs Section with Two Columns */}
    <div className="flex gap-[30px] w-[1056px]">
      {/* Left Column: 3 FAQs */}
      <div className="flex flex-col items-center gap-[30px] w-[50%]">
        {/* FAQ Item 1 */}
        <div className="flex flex-row items-start gap-[30px] w-[100%]">
          <div className="flex flex-col  items-start w-[491px] h-[159px]">
          <div className="w-[9px] h-[16px] translate-y-5 -translate-x-1">
  <Image 
    src="/icn-arrow-right-icn-xs-1.png" 
    alt="Arrow Icon" 
    className="w-full h-full object-contain" 
    width={9}  // Specify the width
    height={16} // Specify the height
  />
</div>



            <h5 className="font-montserrat font-bold text-[16px] leading-[24px] tracking-[0.1px] text-[#252B42] ml-[10px]">
              The quick fox jumps over the lazy dog
            </h5>
            <p className="font-montserrat font-normal text-[14px] leading-[20px] tracking-[0.2px] text-[#737373]">
              Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.
            </p>
          </div>
        </div>

        {/* FAQ Item 2 */}
        <div className="flex flex-row items-start gap-[30px] w-[100%]">
          <div className="flex flex-col items-start w-[491px] h-[159px]">
          <div className="w-[9px] h-[16px] translate-y-5 -translate-x-1">
  <Image 
    src="/icn arrow-right icn-xs (1).png" 
    alt="Arrow Icon" 
    className="object-contain"
    width={9} 
    height={16} 
  />
</div>

            <h5 className="font-montserrat font-bold text-[16px] leading-[24px] tracking-[0.1px] text-[#252B42] ml-[10px]">
              The quick fox jumps over the lazy dog
            </h5>
            <p className="font-montserrat font-normal text-[14px] leading-[20px] tracking-[0.2px] text-[#737373]">
              Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.
            </p>
          </div>
        </div>

        {/* FAQ Item 3 */}
        <div className="flex flex-row items-start gap-[30px] w-[100%]">
          <div className="flex flex-col items-start w-[491px] h-[159px]">
          <div className="w-[9px] h-[16px] translate-y-5 -translate-x-1">
  <Image 
    src="/icn arrow-right icn-xs (1).png" 
    alt="Arrow Icon" 
    width={9} 
    height={16} 
    className="object-contain"
  />
</div>

            <h5 className="font-montserrat font-bold text-[16px] leading-[24px] tracking-[0.1px] text-[#252B42] ml-[10px]">
              The quick fox jumps over the lazy dog
            </h5>
            <p className="font-montserrat font-normal text-[14px] leading-[20px] tracking-[0.2px] text-[#737373]">
              Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.
            </p>
          </div>
        </div>
      </div>

      {/* Right Column: 3 FAQs */}
      <div className="flex flex-col items-center gap-[30px] w-[50%]">
        {/* FAQ Item 1 */}
        <div className="flex flex-row items-start gap-[30px] w-[100%]">
          <div className="flex flex-col items-start w-[491px] h-[159px]">
          <div className="w-[9px] h-[16px] translate-y-5 -translate-x-1">
  <Image 
    src="/icn arrow-right icn-xs (1).png" 
    alt="Arrow Icon" 
    width={9} 
    height={16} 
    className="object-contain"
  />
</div>

            <h5 className="font-montserrat font-bold text-[16px] leading-[24px] tracking-[0.1px] text-[#252B42] ml-[10px]">
              The quick fox jumps over the lazy dog
            </h5>
            <p className="font-montserrat font-normal text-[14px] leading-[20px] tracking-[0.2px] text-[#737373]">
              Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.
            </p>
          </div>
        </div>

        {/* FAQ Item 2 */}
        <div className="flex flex-row items-start gap-[30px] w-[100%]">
          <div className="flex flex-col items-start w-[491px] h-[159px]">
          <div className="w-[9px] h-[16px] translate-y-5 -translate-x-1">
  <Image 
    src="/icn arrow-right icn-xs (1).png" 
    alt="Arrow Icon" 
    className="w-full h-full object-contain" 
    width={9} 
    height={16} 
  />
</div>

            <h5 className="font-montserrat font-bold text-[16px] leading-[24px] tracking-[0.1px] text-[#252B42] ml-[10px]">
              The quick fox jumps over the lazy dog
            </h5>
            <p className="font-montserrat font-normal text-[14px] leading-[20px] tracking-[0.2px] text-[#737373]">
              Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.
            </p>
          </div>
        </div>

        {/* FAQ Item 3 */}
        <div className="flex flex-row items-start gap-[30px] w-[100%]">
          <div className="flex flex-col items-start w-[491px] h-[159px]">
          <div className="w-[9px] h-[16px] translate-y-5 -translate-x-1">
  <Image 
    src="/icn arrow-right icn-xs (1).png" 
    alt="Arrow Icon" 
    className="w-full h-full object-contain" 
    width={9} 
    height={16} 
  />
</div>

            <h5 className="font-montserrat font-bold text-[16px] leading-[24px] tracking-[0.1px] text-[#252B42] ml-[10px]">
              The quick fox jumps over the lazy dog
            </h5>
            <p className="font-montserrat font-normal text-[14px] leading-[20px] tracking-[0.2px] text-[#737373]">
              Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.
            </p>
          </div>
        </div>
      </div>
    </div>


  {/* Bottom Message */}
  <p className="font-montserrat font-normal text-[20px] leading-[30px] text-center tracking-[0.2px] text-[#737373] w-[552px] h-[30px] flex-none order-2 grow-0 mt-[50px]">
      Haven’t got your answer? Contact our support
    </p>

  </div>


</div>
<div className="flex flex-col items-center  py-[80px] gap-[96px]  w-[1050px] h-[442px] left-1/2 transform translate-x-[175px] translate-y-[150px] mb-[130px] ">
  <div className="flex flex-col items-center gap-[36px] w-[607px] h-[282px]">
    <h2 className="w-[547px] h-[50px] font-montserrat font-bold text-[40px] leading-[50px] text-center tracking-[0.2px] text-[#252B42]">
      Start your 14 days free trial
    </h2>
    <h6 className="w-[411px] h-[40px] font-montserrat font-normal text-[14px] leading-[20px] text-center tracking-[0.2px] text-[#737373]">
      Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent.
    </h6>
    <div className="flex flex-row items-start gap-[10px] w-[186px] h-[52px]">
      <button className="flex flex-col items-center p-[15px_40px] gap-[10px] w-[186px] h-[52px] bg-[#23A6F0] rounded-[5px]">
        <span className="w-[106px] h-[22px] text-center font-montserrat font-bold text-[14px] leading-[22px] tracking-[0.2px] text-[#FFFFFF]">
          Try it free now
        </span>
      </button>
    </div>
    <div className="flex flex-row items-center p-[10px] gap-[34px] w-[242px] h-[50px]">
    <div className="w-[30px] h-[24.49px] flex-none">
  <Image 
    src="/ant-design_twitter-outlined.png" 
    alt="Twitter Logo" 
    className="w-full h-full object-contain" 
    width={30} 
    height={24.49} 
  />
</div>

<div className="w-[30px] h-[30px] flex-none">
  <Image 
    src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" 
    alt="Facebook Logo" 
    className="w-full h-full object-contain" 
    width={30} 
    height={30} 
  />
</div>

<div className="w-[30px] h-[30px] flex-none order-2 flex-grow-0">
  <Image 
    src="/instagram.png" 
    alt="Instagram Logo" 
    className="w-full h-full object-contain" 
    width={30} 
    height={30} 
  />
</div>
<div className="w-[30px] h-[30px] flex-none order-3 flex-grow-0">
  <Image 
    src="/Vector (12).png" 
    alt="LinkedIn Logo" 
    className="w-full h-full object-contain" 
    width={30} 
    height={30} 
  />
</div>

</div>
</div>
</div>


<Footer/>
</div>

  )
}

export default page
