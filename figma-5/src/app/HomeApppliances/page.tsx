import Footer from '@/components/Footer';
import HeaderSection from '@/components/HeaderSection'
import NavbarSection from '@/components/NavbarSection'
import Image from 'next/image'
import React from 'react'


const page = () => {
  return (
    <div>
        <HeaderSection/>
        <NavbarSection/>

        <div className="flex flex-col items-start p-6 w-full h-[92px] bg-[#FAFAFA]"
  aria-label="breadcrumb">
  <div className="flex flex-row items-center gap-4 px-[60px] py-2 w-fit">
    <a href="#"
      className="font-montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px] text-[#252B42]">
      Home
    </a>
    <span className="text-[#252B42]">&gt;</span>
    <span className="font-montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px] text-[#BDBDBD]">
      Shop
    </span>
  </div>
</div>
<div className="w-[1440px] h-[598px] bg-[#FAFAFA] flex-none px-[83px] order-2 self-stretch flex-grow-0 flex">
  {/* Left Image and Bottom Thumbnails */}
  <div className="flex flex-col items-start p-0 gap-[30px] w-[506px] h-[546px] relative">
    {/* PNG Image on the Left */}
    <div className="relative w-[506px] h-[546px] left-0 top-0 rounded-[5px]">
  {/* Carousel Image */}
  <Image 
  src="/carousel-inner.png" 
  alt="Carousel Image" 
  width={506} 
  height={430} 
  className="w-[506px] h-[430px]" 
/>

 {/* Chevron Left Image */}
<div className="absolute w-[24px] h-[44.47px] translate-y-[-206px] right-[10px] rotate-[180deg]">
  <Image 
    src="/ChevronLeft.png" 
    alt="Chevron Left" 
    width={24} 
    height={44.47} 
    className="w-full h-full" 
  />
</div>

<div className="absolute w-[24px] h-[44.47px] translate-y-[-200px] left-[10px]">
  <Image 
    src="/ChevronLeft.png" 
    alt="Chevron Left" 
    width={24} 
    height={44.47} 
    className="w-full h-full" 
  />
</div>

{/* JPG Images at the Bottom */}
<div className="flex gap-[15px] absolute bottom-0 left-0">
  <Image 
    src="/single-product-1-thumb-2.jpg" 
    className="w-[100px] h-[75px]" 
    alt="Product Image 1" 
    width={100} 
    height={75} 
  />
  <Image 
    src="/single-product-1-thumb-1.jpg" 
    className="w-[100px] h-[75px]" 
    alt="Product Image 2" 
    width={100} 
    height={75} 
  />
</div>
</div>
</div>

  {/* Floating Text and Stars beside Image */}
  <div className="flex flex-col items-start w-[510px] h-[471px] pl-[30px] gap-[10px]">
    {/* Heading */}
    <h4 className="font-montserrat font-normal text-[20px] leading-[30px] tracking-[0.2px] text-[#252B42]">
      Floating Phone
    </h4>
   {/* Stars and Reviews in Row */}
<div className="flex flex-row items-start gap-[10px]">
  {/* Star Icons */}
  <div className="flex flex-row items-start gap-[5px]">
    <Image src="/icn bxs-star.png" width={22} height={22} alt="star icon" />
    <Image src="/icn bxs-star.png" width={22} height={22} alt="star icon" />
    <Image src="/icn bxs-star.png" width={22} height={22} alt="star icon" />
    <Image src="/icn bxs-star.png" width={22} height={22} alt="star icon" />
    <Image src="/icn bx-star.png" width={22} height={22} alt="star icon" />
  </div>

  {/* Reviews Text */}
  <h6 className="font-montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px] text-[#737373]">
    10 Reviews
  </h6>
</div>
{/* Price and Availability as Column */}
<div className="flex flex-col items-start gap-[10px] mt-[10px]">
  {/* Price */}
  <h5 className="font-montserrat font-bold text-[24px] leading-[32px] text-center tracking-[0.1px] text-[#252B42]">
    $1,139.33
  </h5>

  {/* Availability Text */}
  <div className="flex flex-row items-center gap-[5px]">
    <span className="font-montserrat text-[14px] text-[#737373]">Availability: </span>
    <span className="font-montserrat font-bold text-[14px] text-[#252B42]">In Stock</span>
  </div>

  {/* Paragraph Text Below Availability */}
  <p className="font-montserrat font-normal text-[14px] leading-[20px] tracking-[0.2px] text-[#858585] mt-[10px] w-[464px]">
    Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.
  </p>

  {/* Horizontal Line Below Paragraph */}
  <hr className="w-[445px] h-0 mt-[13px] border-[1px] border-solid border-[#BDBDBD]" />

  {/* Colored Dots Below the Horizontal Line */}
  <div className="flex flex-row items-center gap-[10px] w-[150px] h-[20px] mt-[20px]">
    <span className="text-[24px]">🔵  🟢  🟠  ⚫</span>
  </div>
 {/* Button with Image on Side */}
<div className="flex flex-row items-center gap-[10px] w-[298px]  h-[44px] mt-[70px]">
    {/* Button */}
    <button className="flex flex-col items-center py-[10px] px-[20px] gap-[10px] w-[148px] h-[44px] bg-[#23A6F0] rounded-[5px]">
    <h6 className="w-[108px] h-[24px] font-montserrat font-bold text-[14px] leading-[24px] text-center tracking-[0.2px] text-[#FFFFFF]">
      Select Options
    </h6>
  </button>
  {/* First Image */}
  <div className="box-border w-[40px] h-[40px] bg-[#FFFFFF] border-[1px] border-[#E8E8E8] rounded-full flex items-center justify-center">
  <Image 
    src="/icn favorite.png"  // Ensure the image is in the public directory
    className="w-[20px] h-[20px]" 
    alt="Favorite Icon" 
    width={20}  // Added width and height attributes for optimization
    height={20} 
  />
</div>


  {/* Second Image */}
  <div className="box-border w-[40px] h-[40px] bg-[#FFFFFF] border-[1px] border-[#E8E8E8] rounded-full flex items-center justify-center">
  <Image 
    src="/icn favorite (1).png" 
    className="w-[20px] h-[20px]" 
    alt="Favorite Icon 1" 
    width={20} 
    height={20} 
  />
</div>

{/* Third Image */}
<div className="box-border w-[40px] h-[40px] bg-[#FFFFFF] border-[1px] border-[#E8E8E8] rounded-full flex items-center justify-center">
  <Image 
    src="/icn favorite (2).png" 
    className="w-[20px] h-[20px]" 
    alt="Favorite Icon 3" 
    width={20} 
    height={20} 
  />
</div>

</div>
</div>
</div>
    </div>
     {/* Navigation Section at the Bottom */}
     <nav className="flex justify-center items-center w-[1051px] h-[72px] mx-auto">
     <ul className="flex w-full justify-center  text-[#737373]">
  <li className="w-[134px] h-[72px] flex items-center justify-center ">Descriptive</li>
  <li className="w-[220px] h-[72px] flex items-center justify-center ">Additional Information</li>
  <li className="w-[138px] h-[72px] flex items-center justify-center ">Reviews (0)</li>
</ul>
</nav>
<div className="flex justify-center items-center w-[1056px] h-[427px] mx-auto">
  <div className="flex flex-row gap-[30px] w-[1056px] h-[427px]">

    {/* Image Section with Visible Background on the Right and Bottom */}
    <div className="flex flex-col items-start w-[325px] h-[382px] bg-[rgba(196,196,196,0.2)] rounded-[5.62379px] pr-[10px] pb-[10px]">
  <Image 
    src="/unsplash_QANOF9iJlFs.png" 
    alt="Image Description" 
    className="w-full h-full object-cover rounded-[5.62379px]" 
    width={325} 
    height={382} 
  />
</div>


    {/* Text Section */}
    <div className="flex flex-col items-start w-[332px] h-[427px]">
      <h5 className="font-montserrat font-bold text-[24px] leading-[32px] tracking-[0.1px] text-[#252B42]">
        The quick fox jumps over
      </h5>
      <h6 className="font-montserrat font-normal gap-5 text-[16px] leading-[20px] tracking-[0.2px] text-[#737373] mt-[10px]">
        Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.
        <br />
        <br />
        Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.
        <br />
        <br />
        Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.
      </h6>
    </div>

    {/* List Section */}
    <div className="flex flex-col items-start w-[332px] h-[427px]">
      <h5 className="font-montserrat font-bold text-[24px] leading-[32px] text-[#252B42]">
        The quick fox jumps over
      </h5>
      <ul className="flex flex-col items-start gap-[10px] w-full h-[126px] mt-6">
        <li className="flex items-center gap-[20px] w-full h-[24px]">
        <Image 
  src="/Vector (7).png" 
  alt="Chevron Left" 
  className="w-[9px] h-[16px]" 
  width={9} 
  height={16} 
/>
          <h5 className="font-montserrat font-semibold text-[14px] leading-[24px] text-[#737373]">
            The quick fox jumps over the lazy dog
          </h5>
        </li>
        <li className="flex items-center gap-[20px]  w-full h-[24px]">

        <Image 
    src="/Vector (7).png" 
    alt="Chevron Left" 
    className="w-[9px] h-[16px]" 
    width={9} 
    height={16} 
  />
  <h5 className="font-montserrat font-semibold text-[14px] leading-[24px] text-[#737373]">
    The quick fox jumps over the lazy dog
  </h5>
</li>
<li className="flex items-center gap-[20px] w-full h-[24px]">
  <Image 
    src="/Vector (7).png" 
    alt="Chevron Left" 
    className="w-[9px] h-[16px]" 
    width={9} 
    height={16} 
  />
  <h5 className="font-montserrat font-semibold text-[14px] leading-[24px] text-[#737373]">
    The quick fox jumps over the lazy dog
  </h5>
</li>
<li className="flex items-center gap-[20px] w-full h-[24px]">
  <Image 
    src="/Vector (7).png" 
    alt="Chevron Left" 
    className="w-[9px] h-[16px]" 
    width={9} 
    height={16} 
  />

          <h5 className="font-montserrat font-semibold text-[14px] leading-[24px] text-[#737373]">
            The quick fox jumps over the lazy dog
          </h5>
        </li>
      </ul>
      <h5 className="font-montserrat font-bold text-[24px] leading-[32px] text-[#252B42] mt-5">
        The quick fox jumps over
      </h5>
      <ul className="flex flex-col items-start gap-[10px] w-full h-[126px] mt-6">
        <li className="flex items-center gap-[20px] w-full h-[24px]">
        <Image 
    src="/Vector (7).png" 
    alt="Chevron Left" 
    className="w-[9px] h-[16px]" 
    width={9} 
    height={16} 
  />
  <h5 className="font-montserrat font-semibold text-[14px] leading-[24px] text-[#737373]">
    The quick fox jumps over the lazy dog
  </h5>
</li>
<li className="flex items-center gap-[20px] w-full h-[24px]">
  <Image 
    src="/Vector (7).png" 
    alt="Chevron Left" 
    className="w-[9px] h-[16px]" 
    width={9} 
    height={16} 
  />
  <h5 className="font-montserrat font-semibold text-[14px] leading-[24px] text-[#737373]">
    The quick fox jumps over the lazy dog
  </h5>
</li>
<li className="flex items-center gap-[20px] w-full h-[24px]">
  <Image 
    src="/Vector (7).png" 
    alt="Chevron Left" 
    className="w-[9px] h-[16px]" 
    width={9} 
    height={16} 
  />


          <h5 className="font-montserrat font-semibold text-[14px] leading-[24px] text-[#737373]">
            The quick fox jumps over the lazy dog
          </h5>
        </li> 
      </ul>
    </div>
  </div>
</div>




{/* BESTSELLER PRODUCTS Section (placed at the bottom) */}
<div className="flex flex-col items-center bg-[#FFFFFF] gap-[24px] w-full h-[1086px] bottom-0">
  <div className="flex flex-col items-center  p-[48px_0px] gap-[24px]  w-[1040px] h-[32px] flex-none order-0 flex-grow-0">
    <h3 className="w-full h-[32px] transform translate-y-[-14px] font-montserrat font-bold text-[24px] leading-[32px] text-center tracking-[0.1px] text-[#252B42] flex-none order-0 flex-grow-0">
      BESTSELLER PRODUCTS
    </h3>
    <div className="flex transform translate-y-[-14px] flex-wrap gap-[30px]  p-0 w-full">
{/* First Row: 4 Pictures */}
<div className="flex flex-row  gap-[30px] w-full">
  {/* First Picture */}
  <div className="flex flex-col items-start p-0  w-[238px] h-[442px]">
  <Image
  src="/fixed-height (16).png"
  alt="Image 1"
  className="w-[239px] h-[280px]"
  width={239}    // Set the width in pixels
  height={280}   // Set the height in pixels
/>
    <div className="flex flex-col items-start p-[25px_25px_35px] gap-2.5 w-[239px]">
      <h5 className="text-[#252B42] font-bold text-[16px]">Graphic Design</h5>
      <a href="#" className="text-[#737373] font-bold text-[14px]">English Department</a>
      <div className="flex flex-row gap-[5px]">
        <p className="text-[#BDBDBD] font-bold text-[16px]">$16.48</p>
        <p className="text-[#23856D] font-bold text-[16px]">$6.48</p>
      </div>
    </div>
  </div>
  {/* Second Picture */}
  <div className="flex flex-col items-start p-0 w-[238px] h-[442px]">
  <Image
  src="/fixed-height (17).png"
  className="w-[239px] h-[280px]"
  alt="Image 2"
  width={239}
  height={280}
/>
    <div className="flex flex-col items-start p-[25px_25px_35px] gap-2.5 w-[239px]">
      <h5 className="text-[#252B42] font-bold text-[16px]">Graphic Design</h5>
      <a href="#" className="text-[#737373] font-bold text-[14px]">English Department</a>
      <div className="flex flex-row gap-[5px]">
        <p className="text-[#BDBDBD] font-bold text-[16px]">$16.48</p>
        <p className="text-[#23856D] font-bold text-[16px]">$6.48</p>
      </div>
    </div>
  </div>
  {/* Third Picture */}
  <div className="flex flex-col items-start p-0 w-[238px] h-[442px]">
  <Image
  src="/fixed-height (18).png"
  className="w-[239px] h-[280px]"
  alt="Image 3"
  width={239}
  height={280}
/>
    <div className="flex flex-col items-start p-[25px_25px_35px] gap-2.5 w-[239px]">
      <h5 className="text-[#252B42] font-bold text-[16px]">Graphic Design</h5>
      <a href="#" className="text-[#737373] font-bold text-[14px]">English Department</a>
      <div className="flex flex-row gap-[5px]">
        <p className="text-[#BDBDBD] font-bold text-[16px]">$16.48</p>
        <p className="text-[#23856D] font-bold text-[16px]">$6.48</p>
      </div>
    </div>
  </div>

  {/* Fourth Picture */}
  <div className="flex flex-col items-start p-0 w-[238px] h-[442px]">
  <Image
  src="/fixed-height (19).png"
  alt="Image 4"
  className="w-[239px] h-[280px]"
  width={239}
  height={280}
/>
    <div className="flex flex-col items-start p-[25px_25px_35px] gap-2.5 w-[239px]">
      <h5 className="text-[#252B42] font-bold text-[16px]">Graphic Design</h5>
      <a href="#" className="text-[#737373] font-bold text-[14px]">English Department</a>
      <div className="flex flex-row gap-[5px]">
        <p className="text-[#BDBDBD] font-bold text-[16px]">$16.48</p>
        <p className="text-[#23856D] font-bold text-[16px]">$6.48</p>
      </div>
    </div>
  </div>
</div>
{/* Second Row: Second and Third Pictures */}
<div className="flex flex-row gap-[30px] transform translate-y-[-40px] w-full">
  {/* Second Image */}
  <div className="flex flex-col items-start p-0 w-[238px] h-[442px]">
  <Image
  src="/fixed-height (20).png"
  alt="Image 5"
  className="w-[239px] h-[280px]"
  width={239}
  height={280}
/>
    <div className="flex flex-col items-start p-[25px_25px_35px] gap-2.5 w-[239px]">
      <h5 className="text-[#252B42] font-bold text-[16px]">Graphic Design</h5>
      <a href="#" className="text-[#737373] font-bold text-[14px]">English Department</a>
      <div className="flex flex-row gap-[5px]">
        <p className="text-[#BDBDBD] font-bold text-[16px]">$16.48</p>
        <p className="text-[#23856D] font-bold text-[16px]">$6.48</p>
      </div>
    </div>
  </div>
  {/* Third Image */}
  <div className="flex flex-col items-start p-0 w-[238px] h-[442px]">
  <Image
  src="/fixed-height (21).png"
  alt="Image 6"
  className="w-[239px] h-[280px]"
  width={239}
  height={280}
/>
    <div className="flex flex-col items-start p-[25px_25px_35px] gap-2.5 w-[239px]">
      <h5 className="text-[#252B42] font-bold text-[16px]">Graphic Design</h5>
      <a href="#" className="text-[#737373] font-bold text-[14px]">English Department</a>
      <div className="flex flex-row gap-[5px]">
        <p className="text-[#BDBDBD] font-bold text-[16px]">$16.48</p>
        <p className="text-[#23856D] font-bold text-[16px]">$6.48</p>
      </div>
    </div>
  </div>
 {/* fourth Image */}
 <div className="flex flex-col items-start p-0 w-[238px] h-[442px]">
 <Image
  src="/fixed-height (16).png"
  alt="Image 6"
  className="w-[239px] h-[280px]"
  width={239}
  height={280}
/>
    <div className="flex flex-col items-start p-[25px_25px_35px] gap-2.5 w-[239px]">
      <h5 className="text-[#252B42] font-bold text-[16px]">Graphic Design</h5>
      <a href="#" className="text-[#737373] font-bold text-[14px]">English Department</a>
      <div className="flex flex-row gap-[5px]">
        <p className="text-[#BDBDBD] font-bold text-[16px]">$16.48</p>
        <p className="text-[#23856D] font-bold text-[16px]">$6.48</p>
      </div>
    </div>
  </div>
 {/* fifth Image */}
 <div className="flex flex-col items-start p-0 w-[238px] h-[442px]">
 <Image
  src="/fixed-height (17).png"
  alt="Image 6"
  className="w-[239px] h-[280px]"
  width={239}
  height={280}
/>
    <div className="flex flex-col items-start p-[25px_25px_35px] gap-2.5 w-[239px]">
      <h5 className="text-[#252B42] font-bold text-[16px]">Graphic Design</h5>
      <a href="#" className="text-[#737373] font-bold text-[14px]">English Department</a>
      <div className="flex flex-row gap-[5px]">
        <p className="text-[#BDBDBD] font-bold text-[16px]">$16.48</p>
        <p className="text-[#23856D] font-bold text-[16px]">$6.48</p>
      </div>
    </div>
</div>
</div>
{/* Footer Section */}
<div className="flex flex-col items-center translate-y-[-25px] p-0 w-[1050px] h-[200px] left-1/2 mt-[-15px] transform">
  <div className="flex gap-4">
  <div className="w-[150px] h-[50px]">
  <Image src="/Vector.png" alt="Vector" className="w-full h-full object-contain" width={150} height={50} />
</div>
<div className="w-[150px] h-[50px]">
  <Image src="/fa-brands-2.png" alt="Vector" className="w-full h-full object-contain" width={150} height={50} />
</div>
<div className="w-[150px] h-[50px]">
  <Image src="/fa-brands-3.png" alt="Vector" className="w-full h-full object-contain" width={150} height={50} />
</div>
<div className="w-[150px] h-[50px]">
  <Image src="/fa-brands-4.png" alt="Vector" className="w-full h-full object-contain" width={150} height={50} />
</div>
<div className="w-[150px] h-[50px]">
  <Image src="/fa.png" alt="Vector" className="w-full h-full object-contain" width={150} height={50} />
</div>
<div className="w-[150px] h-[50px]">
  <Image src="/faa.png" alt="Vector" className="w-full h-full object-contain" width={150} height={50} />
</div>

  </div>
</div>
</div>
</div>
</div>

<Footer/>
</div>
  );
};

export default page;
 