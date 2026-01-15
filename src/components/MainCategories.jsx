import React from 'react';

function MainCategories() {
  return (
    <nav
      className="
        nav-header
        flex
        flex-col
        w-full
        lg:w-full
        h-auto
        lg:h-[94px]
        bg-white
        items-center
        xs:flex
      "
    >
      <div
        className="
          nav-container
          flex
          flex-wrap
          lg:flex-nowrap
          items-center
          justify-center
          content-center
          w-full
          lg:w-auto
          h-auto
          lg:h-[42px]
          gap-x-[41px]
          gap-y-[29px]
          lg:gap-[53px]
          mt-[10px]
          lg:my-[32px]
          lg:mx-auto
          xs:flex
          xs:flex-col
          xs:h-auto
          xs:w-full
          xs:flex-row
        "
      >
        <a href="#" className="nav-item flex flex-row items-center gap-[16px] h-[42px] no-underline w-auto ml-[32px] lg:ml-0 min-w-[150px] lg:min-w-0">
          <img src="/images/iteration-2-images/icons/1.svg" alt="Kore" className="w-[42px] h-[42px] object-contain flex-none" />
          <span className="font-['Barlow'] font-medium text-[18px] text-[#292929] whitespace-nowrap">YENİ! Kore</span>
        </a>

        <a href="#" className="nav-item flex flex-row items-center gap-[16px] h-[42px] no-underline w-auto ml-[32px] lg:ml-0 min-w-[150px] lg:min-w-0">
          <img src="/images/iteration-2-images/icons/2.svg" alt="Pizza" className="w-[42px] h-[42px] object-contain flex-none" />
          <span className="font-['Barlow'] font-medium text-[18px] text-[#292929] whitespace-nowrap">Pizza</span>
        </a>

        <a href="#" className="nav-item flex flex-row items-center gap-[16px] h-[42px] no-underline w-auto ml-[32px] lg:ml-0 min-w-[150px] lg:min-w-0">
          <img src="/images/iteration-2-images/icons/3.svg" alt="Burger" className="w-[42px] h-[42px] object-contain flex-none" />
          <span className="font-['Barlow'] font-medium text-[18px] text-[#292929] whitespace-nowrap">Burger</span>
        </a>

        <a href="#" className="nav-item flex flex-row items-center gap-[16px] h-[42px] no-underline w-auto ml-[32px] lg:ml-0 min-w-[150px] lg:min-w-0">
          <img src="/images/iteration-2-images/icons/4.svg" alt="Kızartmalar" className="w-[42px] h-[42px] object-contain flex-none" />
          <span className="font-['Barlow'] font-medium text-[18px] text-[#292929] whitespace-nowrap">Kızartmalar</span>
        </a>

        <a href="#" className="nav-item flex flex-row items-center gap-[16px] h-[42px] no-underline w-auto ml-[32px] lg:ml-0 min-w-[150px] lg:min-w-0">
          <img src="/images/iteration-2-images/icons/5.svg" alt="Fast food" className="w-[42px] h-[42px] object-contain flex-none" />
          <span className="font-['Barlow'] font-medium text-[18px] text-[#292929] whitespace-nowrap">Fast food</span>
        </a>

        <a href="#" className="nav-item flex flex-row items-center gap-[16px] h-[42px] no-underline w-auto ml-[32px] lg:ml-0 min-w-[150px] lg:min-w-0">
          <img src="/images/iteration-2-images/icons/6.svg" alt="İçecek" className="w-[42px] h-[42px] object-contain flex-none" />
          <span className="font-['Barlow'] font-medium text-[18px] text-[#292929] whitespace-nowrap">Gazlı İçecek</span>
        </a>
      </div>
    </nav>
  );
}

export default MainCategories;