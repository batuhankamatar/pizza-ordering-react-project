import React from 'react';

function ProductHeader() {
  return (
    <div
      className="
        intro-menu-text
        flex
        flex-col
        items-center
        justify-self-center
        w-full
        max-w-[395px] 
        h-auto
        mt-[53px]
        lg:w-full
        lg:max-w-[1296px]
        lg:h-auto
        lg:max-h-[111px]
        lg:mt-[64px]
      "
    >
      <h3
        className="
          intro-menu-small
          flex
          items-center
          justify-center
          text-center
          text-[#CE2829]
          font-['Satisfy']
          font-normal
          text-[32px]
          line-height-[44px]
          w-full
          h-auto
          lg:w-[408px]
          lg:h-[46px]
        "
      >
        en çok paketlenen menüler
      </h3>
      <h2
        className="
          intro-menu-large
          flex
          items-center
          justify-center
          text-center
          text-[#292929]
          font-['Barlow']
          font-semibold
          text-[42px]
          line-height-[56px]
          w-full
          max-w-[308px]
          mt-[26px]
          flex-wrap
          lg:max-w-[712px]
          lg:w-[712px]
          lg:h-[56px]
          lg:mt-0
        "
      >
        Acıktıran Kodlara Doyuran Lezzetler
      </h2>
    </div>
  );
}

export default ProductHeader;