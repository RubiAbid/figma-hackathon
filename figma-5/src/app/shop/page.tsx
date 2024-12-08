import React from 'react'

const Shop = () => {
  return (
    <div className="flex flex-col items-center p-[24px_0] w-full h-auto bg-[#FAFAFA]">
      
      {/* SHOP heading and breadcrumb container */}
      <div className="flex justify-between items-center w-full max-w-screen-xl mb-9">
        {/* SHOP heading on the left */}
        <h2 className="w-[63px] h-[32px] text-center font-montserrat font-bold text-[24px] leading-[32px] tracking-[0.1px] text-[#252B42] ml-[200px]">
          SHOP
        </h2>

        {/* Breadcrumb container on the right */}
        <div className="flex flex-row items-center gap-[5px] mr-[200px]">
          <a className="font-montserrat font-bold text-[14px] leading-[24px] text-center tracking-[0.2px] text-[#252B42]">
            Home
          </a>

          <div className="text-[#252B42]">
            &gt;
          </div>

          <div className="font-montserrat font-bold text-[14px] leading-[24px] text-center tracking-[0.2px] text-[#BDBDBD]">
            Shop
          </div>
        </div>
      </div>

      {/* Image Section */}
      <div className="w-full bg-[#FAFAFA] flex flex-col items-center">
        <div className="flex flex-row items-center justify-center p-0 pb-[48px] w-full h-[271px] relative">
          <div className="w-[205px] h-[223px] flex-none">
            <img
              src="col-md-4 (3).png"
              alt="Image description"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-[205px] h-[223px] flex-none ml-[16px]">
            <img
              src="card-item (2).png"
              alt="Image description"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-[205px] h-[223px] flex-none ml-[16px]">
            <img
              src="col-md-4 (1).png"
              alt="Image description"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-[205px] h-[223px] flex-none ml-[16px]">
            <img
              src="col-md-4 (2).png"
              alt="Image description"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="w-full bg-[#FAFAFA] flex flex-col items-center">
        <div className="w-full bg-[#FAFAFA] flex flex-col items-center">

{/* Combined Label and Views Section */}
<div className="w-full h-[98px] bg-white flex-none order-3 self-stretch flex-grow-0 flex justify-between items-center px-0 py-[24px] gap-[15px]">
  
  {/* "Showing all 12 results" Label */}
  <label className="w-auto h-[24px] font-montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px] text-[#737373] ml-[130px]">
    Showing all 12 results
  </label>

  <div className="flex justify-center items-center gap-[15px]">
  {/* "Views" Label */}
  <div className="w-[53px] h-[24px] font-montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px] text-[#737373] ml-[300px]">
    Views
  </div>

  {/* Image Section */}
  <div className="flex items-center p-[15px] w-[46px] h-[46px] border border-[#ECECEC] rounded-[5px] box-border">
    <img
      src="window.png"
      alt="Image description"
      className="w-full h-full object-cover"
    />
  </div>
  <div className="flex flex-row items-center p-[15px] w-[46px] h-[46px] border border-[#ECECEC] rounded-[5px] flex-none order-1 flex-grow-0 box-border">
  📋
</div>
</div>



<div className="flex flex-row items-center mr-[190px] gap-[15px] mx-auto w-[252px] h-[50px] flex-none order-2 flex-grow-0">
  {/* Select dropdown */}
  <div className="relative w-[141px] h-[50px] flex-none order-0 flex-grow-0">
    <select className="w-full h-full border border-[#ECECEC] rounded-[5px] bg-white text-[#737373] font-montserrat text-[14px] leading-[24px] focus:outline-none focus:ring-2 focus:ring-[#23A6F0]">
      <option value="" disabled selected>
        Popularity
      </option>
      {/* Other options can go here */}
      <option value="1">Option 1</option>
      <option value="2">Option 2</option>
      <option value="3">Option 3</option>
    </select>
  </div>

  {/* Filter button */}
  <button className="flex flex-col items-center p-[10px_20px] gap-2 w-[94px] h-[50px] bg-[#23A6F0] rounded-[5px] flex-none order-1 self-stretch">
    Filter
  </button>
</div>




  </div>
</div>

</div>





<div className="flex flex-col items-center p-0 w-[1050px] h-[175px] left-1/2 mt-[120px] transform ">
  <div className="flex flex-row gap-4">
    <div className="w-[103px] h-[34px] flex-none order-0 flex-grow-0">
      <img src="/vector.png" alt="Vector" className="w-full h-full object-contain" />
    </div>
    <div className="w-[103px] h-[34px] flex-none order-0 flex-grow-0">
      <img src="/fa-brands-2.png" alt="Vector" className="w-full h-full object-contain" />
    </div>
    <div className="w-[103px] h-[34px] flex-none order-0 flex-grow-0">
      <img src="/fa-brands-3.png" alt="Vector" className="w-full h-full object-contain" />
    </div>
    <div className="w-[103px] h-[34px] flex-none order-0 flex-grow-0">
      <img src="/fa-brands-4.png" alt="Vector" className="w-full h-full object-contain" />
    </div>
    <div className="w-[103px] h-[34px] flex-none order-0 flex-grow-0">
      <img src="/fa.png" alt="Vector" className="w-full h-full object-contain" />
    </div>
    <div className="w-[103px] h-[34px] flex-none order-0 flex-grow-0">
      <img src="/faa.png" alt="Vector" className="w-full h-full object-contain" />
    </div>
  </div>
</div>


      </div>
  </div>
    
  )
}

export default Shop;
