import Footer from '@/components/Footer';
import HeaderSection from '@/components/HeaderSection';
import NavbarSection from '@/components/NavbarSection';
import Image from 'next/image';
import React from 'react';

const page = () => {
  return (
    <div>
      <HeaderSection />
      <div className='lg:translate-x-0 sm:translate-x-[-70px] translate-x-0'>
        <NavbarSection />
      </div>

      <div className="flex flex-col items-start p-6 w-full h-[92px] bg-[#FAFAFA]" aria-label="breadcrumb">
        <div className="flex flex-row items-center gap-4 px-[60px] py-2 w-fit">
          <a href="#" className="font-montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px] text-[#252B42]">
            Home
          </a>
          <span className="text-[#252B42]">&gt;</span>
          <span className="font-montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px] text-[#BDBDBD]">
            Shop
          </span>
        </div>
      </div>

      <div className="lg:w-full max-w-[1440px] w-full bg-[#FAFAFA] flex flex-col lg:flex-row px-[20px] sm:px-[17px] lg:px-[83px] gap-[20px] lg:gap-[30px]">
        {/* Left Image Section */}
        <div className="flex flex-col items-center w-full lg:w-[506px] relative">
          {/* Carousel Image */}
          <Image 
            src="/carousel-inner.png" 
            alt="Carousel Image" 
            width={506} 
            height={430} 
            className="w-full max-w-[506px] h-auto rounded-[5px]" 
          />
          
          {/* Chevron Navigation */}
          <div className="absolute w-[24px] h-[44px] top-1/2 transform -translate-y-1/2 right-[10px] rotate-180">
            <Image 
              src="/ChevronLeft.png" 
              alt="Next" 
              width={24} 
              height={44} 
              className="w-full h-full" 
            />
          </div>
          <div className="absolute w-[24px] h-[44px] top-1/2 transform -translate-y-1/2 left-[10px]">
            <Image 
              src="/ChevronLeft.png" 
              alt="Prev" 
              width={24} 
              height={44} 
              className="w-full h-full" 
            />
          </div>

          {/* Thumbnail Images */}
          <div className="flex gap-[10px] mt-[15px] translate-x-[-50px] lg:translate-x-[-150px]">
            <Image 
              src="/single-product-1-thumb-2.jpg" 
              className="w-[70px] sm:w-[80px] lg:w-[100px] h-[50px] sm:h-[60px] lg:h-[75px]" 
              alt="Thumbnail 1" 
              width={100} 
              height={75} 
            />
            <Image 
              src="/single-product-1-thumb-1.jpg" 
              className="w-[70px] sm:w-[80px] lg:w-[100px] h-[50px] sm:h-[60px] lg:h-[75px]" 
              alt="Thumbnail 2" 
              width={100} 
              height={75} 
            />
          </div>
        </div>

        {/* Right Text Section */}
        <div className="flex flex-col w-full lg:w-[510px] gap-[15px]">
          <h4 className="font-montserrat font-semibold text-[18px] sm:text-[20px] leading-[26px] sm:leading-[30px] text-[#252B42]">
            Floating Phone
          </h4>

          {/* Star Ratings */}
          <div className="flex flex-row gap-[10px] items-center">
            <div className="flex flex-row gap-[5px]">
              {[...Array(4)].map((_, i) => (
                <Image 
                  key={i} 
                  src="/icn bxs-star.png" 
                  alt="Star" 
                  width={22} 
                  height={22} 
                />
              ))}
              <Image src="/icn bx-star.png" alt="Empty Star" width={22} height={22} />
            </div>
            <h6 className="text-[14px] sm:text-[16px] text-[#737373] font-semibold">10 Reviews</h6>
          </div>

          {/* Price */}
          <h5 className="text-[22px] sm:text-[24px] font-bold text-[#252B42]">$1,139.33</h5>

          {/* Availability */}
          <div className="flex flex-row gap-[5px]">
            <span className="text-[14px] text-[#737373]">Availability:</span>
            <span className="text-[14px] font-bold text-[#252B42]">In Stock</span>
          </div>

          {/* Description */}
          <p className="text-[14px] sm:text-[16px] leading-[20px] sm:leading-[24px] text-[#858585] max-w-full">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.
          </p>

          {/* Divider */}
          <hr className="w-full border-[#BDBDBD]" />

          {/* Color Options */}
          <div className="flex gap-[10px] mt-[15px]">
            <span className="text-[24px]">🔵 🟢 🟠 ⚫</span>
          </div>

          {/* Buttons */}
          <div className="flex gap-[10px] items-center mt-[30px]">
            <button className="w-[130px] sm:w-[140px] bg-[#23A6F0] py-[12px] rounded-[5px] text-white text-[14px]">
              Select Options
            </button>

            {/* Favorite & Share Icons */}
            {[1, 2, 3].map((i) => (
              <div 
                key={i} 
                className="w-[36px] sm:w-[40px] h-[36px] sm:h-[40px] flex items-center justify-center border rounded-full bg-white border-[#E8E8E8]"
              >
                <Image 
                  src={`/icn favorite${i === 3 ? '' : ` (${i})`}.png`} 
                  alt={`Icon ${i}`} 
                  width={20} 
                  height={20} 
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <nav className="flex justify-center items-center lg:w-full md:w-[1000px] w-[380px] h-[72px] mx-auto lg:translate-x-0 sm:translate-x-[-140px] translate-x-[-33px] md:translate-x-[-230px]">
        <ul className="flex w-full justify-center text-[#737373] md:gap-8 lg:text-[14px] text-[13px]">
          <li className="w-[134px] h-[72px] flex items-center justify-center text-center">Descriptive</li>
          <li className="w-[220px] h-[72px] flex items-center justify-center text-center lg:translate-x-0 translate-x-[-33px]">Additional Information</li>
          <li className="w-[138px] h-[72px] flex items-center justify-center text-center lg:translate-x-0 translate-x-[-65px]">Reviews (0)</li>
        </ul>
      </nav>

      <div className="flex flex-col lg:flex-row sm:flex-col gap-[30px] lg:w-full md:w-[600px] w-full sm:w-[2000px] lg:translate-x-[200px] sm:translate-x-[5px] translate-x-[-60px] sm:h-[427px] mx-auto">
        {/* Image Section with Visible Background on the Right and Bottom */}
        <div className="flex flex-col items-start sm:w-[325px] sm:h-[382px] bg-[rgba(196,196,196,0.2)] rounded-[5.62379px] pr-[10px] pb-[10px] mb-4 sm:mb-0">
          <Image 
            src="/unsplash_QANOF9iJlFs.png"  
            alt="Image Description" 
            className="w-full h-full object-cover rounded-[5.62379px]" 
            width={325} 
            height={382} 
          />
        </div>

        {/* Text Section */}
        <div className="flex flex-col items-start sm:w-[280px] lg:w-[332px] w-full">
          <h5 className="font-montserrat font-bold lg:text-[24px] text-[20px] leading-[32px] tracking-[0.1px] text-[#252B42]">
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
        <div className="flex flex-col items-start sm:w-[332px] sm:h-[427px]">
          <h5 className="font-montserrat font-bold lg:text-[24px] text-[20px] leading-[32px] text-[#252B42]">
            The quick fox jumps over
          </h5>
          <ul className="flex flex-col items-start gap-[10px] w-full mt-6 sm:h-auto">
            <li className="flex items-center gap-[20px] sm:gap-[10px] lg:w-full w-full h-[24px] sm:h-[20px]">
              <Image 
                src="/Vector (7).png" 
                alt="Chevron Left" 
                className="w-[9px] h-[16px] sm:w-[7px] sm:h-[12px]" 
                width={9} 
                height={16} 
              />
              <h5 className="font-montserrat font-semibold lg:text-[14px] text-[13px] leading-[24px] text-[#737373] sm:text-[12px] sm:leading-[16px] lg:translate-x-0 translate-x-[-20px]">
                The quick fox jumps over the lazy dog
              </h5>
            </li>
            <li className="flex items-center gap-[20px] sm:gap-[10px] lg:w-full w-full h-[24px] sm:h-[20px]">
              <Image 
                src="/Vector (7).png" 
                alt="Chevron Left" 
                className="w-[9px] h-[16px] sm:w-[7px] sm:h-[12px]" 
                width={9} 
                height={16} 
              />
              <h5 className="font-montserrat font-semibold lg:text-[14px] text-[13px] leading-[24px] text-[#737373] sm:text-[12px] sm:leading-[16px] lg:translate-x-0 translate-x-[-20px]">
                The quick fox jumps over the lazy dog
              </h5>
            </li>
            <li className="flex items-center gap-[20px] sm:gap-[10px] lg:w-full w-full h-[24px] sm:h-[20px]">
              <Image 
                src="/Vector (7).png" 
                alt="Chevron Left" 
                className="w-[9px] h-[16px] sm:w-[7px] sm:h-[12px]" 
                width={9} 
                height={16} 
              />
              <h5 className="font-montserrat font-semibold lg:text-[14px] text-[13px] leading-[24px] text-[#737373] sm:text-[12px] sm:leading-[16px] lg:translate-x-0 translate-x-[-20px]">
                The quick fox jumps over the lazy dog
              </h5>
            </li>
            <li className="flex items-center gap-[20px] sm:gap-[10px] lg:w-full w-full h-[24px] sm:h-[20px]">
              <Image 
                src="/Vector (7).png" 
                alt="Chevron Left" 
                className="w-[9px] h-[16px] sm:w-[7px] sm:h-[12px]" 
                width={9} 
                height={16} 
              />
              <h5 className="font-montserrat font-semibold lg:text-[14px] text-[13px] leading-[24px] text-[#737373] sm:text-[12px] sm:leading-[16px] lg:translate-x-0 translate-x-[-20px]">
                The quick fox jumps over the lazy dog
              </h5>
            </li>
            {/* Repeat for other list items */}
          </ul>



          <h5 className="font-montserrat font-bold lg:text-[24px] text-[20px] leading-[32px] text-[#252B42] mt-5">
      The quick fox jumps over
    </h5>
    <ul className="flex flex-col items-start gap-[10px] w-full h-[126px] mt-6">
      <li className="flex items-center gap-[20px] lg:w-full w-[400px] h-[24px]">
        <Image 
          src="/Vector (7).png" 
          alt="Chevron Left" 
          className="w-[9px] h-[16px]" 
          width={9} 
          height={16} 
        />
        <h5 className="font-montserrat  lg:translate-x-0 translate-x-[-20px] font-semibold lg:text-[14px] text-[13px] leading-[24px] text-[#737373]">
          The quick fox jumps over the lazy dog
        </h5>
      </li>
      <li className="flex items-center gap-[20px] lg:w-full w-[400px] h-[24px]">
        <Image 
          src="/Vector (7).png" 
          alt="Chevron Left" 
          className="w-[9px] h-[16px]" 
          width={9} 
          height={16} 
        />
        <h5 className="font-montserrat lg:translate-x-0 translate-x-[-20px] font-semibold lg:text-[14px] text-[13px] leading-[24px] text-[#737373]">
          The quick fox jumps over the lazy dog
        </h5>
      </li>
      <li className="flex items-center gap-[20px] lg:w-full w-[400px] h-[24px]">
        <Image 
          src="/Vector (7).png" 
          alt="Chevron Left" 
          className="w-[9px] h-[16px]" 
          width={9} 
          height={16} 
        />
        <h5 className="font-montserrat lg:translate-x-0 translate-x-[-20px] font-semibold lg:text-[14px] text-[13px] leading-[24px] text-[#737373]">
          The quick fox jumps over the lazy dog
        </h5>
      </li> 
    </ul>
  </div>
</div>




      {/* BESTSELLER PRODUCTS Section (placed at the bottom) */}
      <div className="flex flex-col items-center bg-[#FFFFFF] gap-[24px] w-full h-[1086px] bottom-0 lg:ml-0 -ml-4 lg:translate-y-0 sm:translate-y-[750px] lg:translate-x-0 sm:translate-x-[-110px] md:translate-x-[-130px]">
        <div className="flex flex-col items-center p-[48px_0px] gap-[24px] w-[1040px] h-[32px] flex-none order-0 flex-grow-0">
          <h3 className="lg:w-full w-[300px] h-[32px] transform translate-y-[-14px] font-montserrat font-bold lg:text-[24px] leading-[32px] text-start tracking-[0.1px] text-[#252B42] flex-none order-0 flex-grow-0">
            BESTSELLER PRODUCTS
          </h3>
          <div className="flex transform translate-y-[-14px] flex-wrap gap-[30px] p-0 w-full">
            {/* First Row: 4 Pictures */}
            <div className="flex lg:flex-row flex-col gap-[30px] lg:w-full w-full lg:translate-x-0 translate-x-[350px]">
              {/* First Picture */}
              <div className="flex flex-col items-start p-0 w-[238px] h-[442px]">
                <Image
                  src="/fixed-height (16).png"
                  alt="Image 1"
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
              {/* Second Picture */}
              <div className="flex flex-col items-start p-0 w-[238px] h-[442px] lg:translate-y-0 translate-y-[-50px]">
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
              <div className="flex flex-col items-start p-0 w-[238px] h-[442px] lg:translate-y-0 translate-y-[-90px]">
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
              <div className="flex flex-col items-start p-0 w-[238px] h-[442px] lg:translate-y-0 translate-y-[-130px]">
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
                    <p className="text-[#23856D] font-bold text-[16px] lg:mb-0 mb-[100px]">$6.48</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Second Row: Second and Third Pictures */}
            <div className="lg:flex flex-row gap-[30px] transform translate-y-[-40px] w-full hidden">
              {/* First Image */}
              <div className="flex flex-col items start p-0 w-[238px] h-[442px]">
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
              {/* Second Image */}
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
              {/* Third Image */}
              <div className="flex flex-col items-start p-0 w-[238px] h-[442px]">
                <Image
                  src="/fixed-height (16).png"
                  alt="Image 7"
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
              {/* Fourth Image */}
              <div className="flex flex-col items-start p-0 w-[238px] h-[442px]">
                <Image
                  src="/fixed-height (17).png"
                  alt="Image 8"
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
          </div>
        </div>

        {/* Footer Section */}
        <div className="flex lg:flex-row flex-col sm:translate-x-[250px] lg:translate-x-[480px] items-center translate-y-[1830px] lg:translate-y-2 sm:translate-y-[1830px]  p-0 w-full h-[200px] mt-[-15px] transform">
          <div className="flex lg:flex-row flex-col lg:gap-4 gap-10 sm:w-full lg:translate-y-[870px] translate-y-[-120px] md:translate-y-[-130px] md:translate-x-2  lg:translate-x-[-220px] translate-x-[-50px]">
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

      <div className='lg:translate-y-[120px] translate-y-[1300px] sm:translate-y-[2000px]'>
        <Footer />
      </div>
    </div>
  );
};

export default page;