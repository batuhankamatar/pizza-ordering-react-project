import React from 'react';

function ProductList() {
  return (
    <section
      className="
        cards-intro-section
        flex
        flex-col
        w-full
        max-w-[420px]
        h-auto
        mt-[40px]
        mx-auto
        gap-[24px]
        lg:flex-row
        lg:items-center
        lg:justify-self-center
        lg:gap-[32px]
        lg:w-full
        lg:max-w-[1068px]
        lg:max-h-[430px]
        lg:mt-[-90px]
        mb-[40px]
      "
    >

      <div className="menu-item w-auto h-full max-h-[529px] flex flex-col justify-center p-[32px] bg-white rounded-[12px] gap-[24px] lg:flex-row lg:flex-wrap lg:justify-between lg:items-center lg:gap-[30px] lg:w-[334.67px] lg:h-[419px] lg:min-h-0 lg:flex-none lg:flex-grow">
        <a href="#" className="card-intro-link w-full">
          <img
            src="/images/iteration-2-images/pictures/food-1.png"
            alt="Terminal Pizza"
            className="main-card w-full min-w-[356px] h-auto min-h-[372px] object-cover lg:w-[270.67px] lg:h-[265px] lg:min-w-0 lg:min-h-0 lg:flex-none lg:align-self-stretch lg:flex-grow"
          />
        </a>
        <div className="item-details w-full flex flex-col items-start gap-[8px] lg:w-[270.67px] lg:h-[66px] lg:flex-none lg:align-self-stretch">
          <a href="#" className="card-intro-link w-full no-underline">
            <p className="card-intro-content-name w-full font-['Barlow'] font-semibold text-[22px] leading-[29px] text-[#292929] flex items-center lg:w-[270.67px] lg:h-[29px]">
              Terminal Pizza
            </p>
          </a>
          <div className="item-info-row w-full flex flex-row items-center mt-[4px]">
            <a href="#" className="rating-link flex items-center gap-[8px] no-underline font-['Barlow'] font-semibold text-[16px] leading-[29px] text-[rgba(27,27,27,0.7)]">
              <span className="rating flex items-center">4.9</span>
              <span className="comment-count flex items-center ml-[206.47px] lg:ml-[144.14px]">(200)</span>
            </a>
            <span className="price font-['Barlow'] font-bold text-[20px] leading-[24.76px] text-[#292929] whitespace-nowrap ml-auto lg:ml-[33.52px]">60₺</span>
          </div>
        </div>
      </div>

      <div className="menu-item w-auto h-full min-h-[529px] flex flex-col justify-center p-[32px] bg-white rounded-[12px] gap-[24px] lg:flex-row lg:flex-wrap lg:justify-between lg:items-center lg:gap-[30px] lg:w-[334.67px] lg:h-[419px] lg:min-h-0 lg:flex-none lg:flex-grow">
        <a href="#" className="card-intro-link w-full">
          <img
            src="/images/iteration-2-images/pictures/food-2.png"
            alt="Position Absolute Acı Pizza"
            className="main-card w-full min-w-[356px] h-auto min-h-[372px] object-cover lg:w-[270.67px] lg:h-[265px] lg:min-w-0 lg:min-h-0 lg:flex-none lg:align-self-stretch lg:flex-grow"
          />
        </a>
        <div className="item-details w-full flex flex-col items-start gap-[8px] lg:w-[270.67px] lg:h-[66px] lg:flex-none lg:align-self-stretch">
          <a href="#" className="card-intro-link w-full no-underline">
            <p className="card-intro-content-name w-full font-['Barlow'] font-semibold text-[22px] leading-[29px] text-[#292929] flex items-center lg:w-[270.67px] lg:h-[29px]">
              Position Absolute Acı Pizza
            </p>
          </a>
          <div className="item-info-row w-full flex flex-row items-center mt-[4px]">
            <a href="#" className="rating-link flex items-center gap-[8px] no-underline font-['Barlow'] font-semibold text-[16px] leading-[29px] text-[rgba(27,27,27,0.7)]">
              <span className="rating flex items-center">4.9</span>
              <span className="comment-count flex items-center ml-[206.47px] lg:ml-[144.14px]">(200)</span>
            </a>
            <span className="price font-['Barlow'] font-bold text-[20px] leading-[24.76px] text-[#292929] whitespace-nowrap ml-auto lg:ml-[33.52px]">60₺</span>
          </div>
        </div>
      </div>

      <div className="menu-item w-auto h-full min-h-[529px] flex flex-col justify-center p-[32px] bg-white rounded-[12px] gap-[24px] lg:flex-row lg:flex-wrap lg:justify-between lg:items-center lg:gap-[30px] lg:w-[334.67px] lg:h-[419px] lg:min-h-0 lg:flex-none lg:flex-grow">
        <a href="#" className="card-intro-link w-full">
          <img
            src="/images/iteration-2-images/pictures/food-3.png"
            alt="useEffect Tavuklu Burger"
            className="main-card w-full min-w-[356px] h-auto min-h-[372px] object-cover lg:w-[270.67px] lg:h-[265px] lg:min-w-0 lg:min-h-0 lg:flex-none lg:align-self-stretch lg:flex-grow"
          />
        </a>
        <div className="item-details w-full flex flex-col items-start gap-[8px] lg:w-[270.67px] lg:h-[66px] lg:flex-none lg:align-self-stretch">
          <a href="#" className="card-intro-link w-full no-underline">
            <p className="card-intro-content-name w-full font-['Barlow'] font-semibold text-[22px] leading-[29px] text-[#292929] flex items-center lg:w-[270.67px] lg:h-[29px]">
              useEffect Tavuklu Burger
            </p>
          </a>
          <div className="item-info-row w-full flex flex-row items-center mt-[4px]">
            <a href="#" className="rating-link flex items-center gap-[8px] no-underline font-['Barlow'] font-semibold text-[16px] leading-[29px] text-[rgba(27,27,27,0.7)]">
              <span className="rating flex items-center">4.9</span>
              <span className="comment-count flex items-center ml-[206.47px] lg:ml-[144.14px]">(200)</span>
            </a>
            <span className="price font-['Barlow'] font-bold text-[20px] leading-[24.76px] text-[#292929] whitespace-nowrap ml-auto lg:ml-[33.52px]">60₺</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductList;