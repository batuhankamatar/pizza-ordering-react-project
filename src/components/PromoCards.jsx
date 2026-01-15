import React from 'react';
import { Link } from 'react-router-dom';

function PromoCards() {
  return (
    <section
      className="
        cards-section
        relative
        justify-self-center
        mt-[53px]
        lg:mt-[68px]
        flex
        flex-col
        lg:flex-row
        items-center  
        gap-[16px]
        lg:gap-[11px]
        w-full
        max-w-[422px]
        lg:max-w-[1072px]
        lg:w-full
        h-auto
        lg:h-[449px]
        lg:justify-between
      "
    >
      <div
        className="
          card-left
          w-full
          lg:w-full
          lg:max-w-[531px]
          h-[336px]
          lg:h-[449px]
          rounded-[12px]
          flex-none
        "
      >
        <Link to="/pizza" className="card-big h-full w-full flex relative rounded-[12px] overflow-hidden no-underline">
          <img
            src="/images/iteration-2-images/cta/kart-1.png"
            alt="Özel Lezzetus Kartı"
            className="absolute z-[-1] rounded-[12px] w-full h-full object-cover"
          />
          <div className="left-content relative left-0 lg:left-[49px] top-0 lg:top-[44px] min-w-[158.61px] min-h-[251.75px] h-auto lg:h-[251.75px] lg:max-w-[159px] p-[20px] lg:p-0">
            <h2 className="mt-[5.84px] w-full lg:w-[288.18px] h-auto lg:h-[148px] font-['Quattrocento'] font-bold text-[68px] leading-[72px] flex items-center text-white">
              Özel
              <br />
              Lezzetus
            </h2>
            <p className="w-full lg:w-[275px] h-auto lg:h-[27px] font-['Barlow'] font-semibold text-[20px] leading-[27px] flex items-center text-white mt-2 lg:mt-0">
              Position: Absolute Acı Burger
            </p>
            <button className="left-btn mt-[25px] w-[138px] h-[48px] bg-white rounded-[50px] border-none cursor-pointer flex justify-center items-center">
              <span className="font-['Barlow'] font-semibold text-[14px] text-[#CE2829]">SİPARİŞ VER</span>
            </button>
          </div>
        </Link>
      </div>

      <div
        className="
          right-cards
          flex
          flex-col
          items-start
          gap-[16px]
          lg:gap-[9px]
          w-full
          lg:w-full
          lg:max-w-[530px]
          h-auto
          lg:min-h-[449px]
          flex-none
        "
      >
        <div className="top-card w-full max-w-[422px] lg:w-full lg:max-w-[530px] h-[270px] lg:h-[220px] rounded-[12px] flex flex-col items-start relative overflow-hidden">
          <Link to="/pizza" className="top-container h-full w-full flex items-center relative m-auto no-underline">
            <img
              src="/images/iteration-2-images/cta/kart-2.png"
              alt="Hackathlon Burger Menü"
              className="absolute left-0 top-0 w-full h-full object-cover z-[-1]"
            />
            <div className="top-content w-auto lg:w-[182.35px] min-h-[163px] lg:h-[163px] ml-[32px]">
              <h2 className="font-['Barlow'] font-semibold text-[32px] leading-[44px] flex items-center text-white h-auto lg:h-[86px]">
                Hackathlon
                <br />
                Burger Menü
              </h2>
              <button className="top-btn w-[138px] h-[48px] bg-white rounded-[50px] border-none flex justify-center items-center mt-[29px] cursor-pointer">
                <span className="font-['Barlow'] font-semibold text-[14px] text-[#CE2829]">SİPARİŞ VER</span>
              </button>
            </div>
          </Link>
        </div>

        <div className="bottom-card relative w-full max-w-[422px] lg:w-full lg:max-w-[530px] h-[270px] lg:h-[220px] rounded-[12px] overflow-hidden">
          <Link to="/pizza" className="bottom-container h-full w-full flex items-center relative m-auto no-underline">
            <img
              src="/images/iteration-2-images/cta/kart-3.png"
              alt="Çoooook hızlı"
              className="absolute left-0 top-0 w-full h-full object-cover z-[1]"
            />
            <div className="bottom-content relative w-full h-full z-[2] content-center ml-[32px]">
              <h2 className="w-full lg:w-[254px] h-auto lg:h-[88px] font-['Barlow'] font-semibold text-[32px] leading-[44px] text-[#292929] m-0">
                <span className="text-[#D80027]">Çoooook</span> hızlı
                <br />
                npm gibi kurye
              </h2>
              <button className="bottom-btn mt-[24.94px] w-[138px] h-[48px] bg-white rounded-[50px] border-none flex justify-center items-center cursor-pointer z-[3]">
                <span className="font-['Barlow'] font-semibold text-[14px] text-[#CE2829]">SİPARİŞ VER</span>
              </button>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default PromoCards;