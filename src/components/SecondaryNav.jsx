import React from 'react';

function SecondaryNav() {
  return (
    <nav className="nav-intro">
      <div
        className="
          nav-intro
          flex
          flex-wrap
          justify-between
          mt-[53px]
          w-full
          mx-auto
          max-w-[378px]
          h-[278px]
          lg:w-full
          lg:min-w-[1068px]
          lg:flex-nowrap
          lg:flex-row
          lg:justify-between
          lg:items-start
          lg:content-start
          lg:gap-[22.39px]
          lg:h-auto
          lg:min-h-[197px]
          lg:mt-[16.55px]
          lg:justify-self-center
        "
      >
        <a href="#" className="nav-ramen flex flex-row items-center bg-white rounded-[50px] p-[12px_20px] gap-[10px] w-[146.72px] h-[66px] flex-none no-underline">
          <img src="images/iteration-2-images/icons/1.svg" alt="Ramen" className="w-[42px] h-[42px] flex-none" />
          <span className="font-['Barlow'] font-medium text-[18px] text-[#292929]">Ramen</span>
        </a>

        <a href="#" className="nav-pizza flex flex-row items-center bg-[#292929] rounded-[50px] p-[12px_20px] gap-[10px] w-[133.01px] h-[66px] flex-none no-underline">
          <img src="images/iteration-2-images/icons/2.svg" alt="Pizza" className="w-[42px] h-[42px] flex-none" />
          <span className="font-['Barlow'] font-medium text-[18px] text-white">Pizza</span>
        </a>

        <a href="#" className="nav-burger flex flex-row items-center bg-white rounded-[50px] p-[12px_20px] gap-[10px] w-[145.42px] h-[66px] flex-none no-underline">
          <img src="images/iteration-2-images/icons/3.svg" alt="Burger" className="w-[42px] h-[42px] flex-none" />
          <span className="font-['Barlow'] font-medium text-[18px] text-black">Burger</span>
        </a>

        <a href="#" className="nav-fries flex flex-row items-center bg-white rounded-[50px] p-[12px_20px] gap-[10px] w-[186.86px] h-[66px] flex-none no-underline">
          <img src="images/iteration-2-images/icons/4.svg" alt="French fries" className="w-[42px] h-[42px] flex-none" />
          <span className="font-['Barlow'] font-medium text-[18px] text-black">French fries</span>
        </a>

        <a href="#" className="nav-fast flex flex-row items-center bg-white rounded-[50px] p-[12px_20px] gap-[10px] w-[165.79px] h-[66px] flex-none no-underline">
          <img src="images/iteration-2-images/icons/5.svg" alt="Fast food" className="w-[42px] h-[42px] flex-none" />
          <span className="font-['Barlow'] font-medium text-[18px] text-black">Fast food</span>
        </a>

        <a href="#" className="nav-soft flex flex-row items-center bg-white rounded-[50px] p-[12px_20px] gap-[10px] w-[178.28px] h-[66px] flex-none no-underline">
          <img src="images/iteration-2-images/icons/6.svg" alt="Soft drinks" className="w-[42px] h-[42px] flex-none" />
          <span className="font-['Barlow'] font-medium text-[18px] text-black whitespace-nowrap">Soft Drinks</span>
        </a>
      </div>
    </nav>
  );
}

export default SecondaryNav;