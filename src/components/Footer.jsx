import React from 'react';

function Footer() {
  return (
    <footer className="mt-16 w-full bg-[#1A1A1A] flex flex-col items-center">
      <div className="footer-top w-full flex flex-col items-start justify-start lg:max-w-full lg:h-[471.45px] lg:items-center">
        <div className="footer-frame flex flex-col lg:flex-row lg:items-start w-full max-w-[412px] lg:max-w-[1066px] px-[58px] lg:px-0 mt-[81px] lg:mt-[58px] gap-0 lg:gap-0">

          <div className="footer-item w-full max-w-[306px] flex flex-col">
            <img 
              src="/images/iteration-2-images/footer/logo-footer.svg" 
              alt="Logo" 
              className="footer-logo w-[185px] h-auto mb-6 object-contain" 
            />
            <div className="space-y-4">
              <div className="footer-location flex items-center gap-[13px] min-h-[64.78px]">
                <img src="images/iteration-2-images/footer/icons/icon-1.png" alt="Konum" className="w-7 h-7 flex-shrink-0" />
                <span className="font-['Barlow'] font-normal text-lg text-white leading-8">
                  341 Londonderry Road,<br />Istanbul Türkiye
                </span>
              </div>
              <div className="footer-email flex items-center gap-[13px] h-[64.78px]">
                <img src="images/iteration-2-images/footer/icons/icon-2.png" alt="Email" className="w-7 h-7 flex-shrink-0" />
                <p className="email-address font-['Barlow'] font-normal text-lg text-white">aciktim@teknolojikyemekler.com</p>
              </div>
              <div className="footer-phone flex items-center gap-[13px] h-[64.78px]">
                <img src="images/iteration-2-images/footer/icons/icon-3.png" alt="Telefon" className="w-7 h-7 flex-shrink-0" />
                <p className="phone-nr font-['Barlow'] font-normal text-lg text-white">+90 216 123 45 67</p>
              </div>
            </div>
          </div>

          <div className="footer-li mt-20 lg:mt-[68.91px] lg:ml-[51px] w-full max-w-[306px] gap-[7px]">
            <h4 className="font-['Barlow'] font-medium text-[24px] text-white mb-[26.09px]">Hot Menu</h4>
            <nav className="footer-menu-nav">
              <ul className="flex flex-col gap-[7.9px]">
                {['Terminal Pizza', '5 Kişilik Hackathlon Pizza', 'useEffect Tavuklu Pizza', 'Beyaz Console Frosty', 'Testler Geçti Mutlu Burger', 'Position Absolute Acı Burger']
                .map((item) => (
                  <li key={item}>
                    <a href="#" className="font-['Barlow'] font-regular text-lg !text-[#FFFFFF] no-underline whitespace-nowrap">{item}</a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className="footer-insta mt-[42px] lg:mt-[29.18px] lg:ml-[56px] w-full min-w-[347px]">
            <h4 className="font-['Barlow'] font-medium text-2xl text-white mb-10">Instagram</h4>
            <ul className="insta-gallery flex flex-row flex-wrap justify-between gap-[10px] w-full lg:w-[347px]">
              {[0, 1, 2, 3, 4, 5].map((i) => (
                <li key={i} className="w-[105px] h-[105px]">
                  <a href="#" className="instagram-post-link">
                    <img 
                      src={`images/iteration-2-images/footer/insta/li-${i}.png`} 
                      alt={`Instagram ${i}`} 
                      className="w-[104.5px] h-[94.5px] rounded-[3px] object-cover" 
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="sub-footer-wrapper w-full border-t border-white/15 bg-[#1A1A1A] mt-10">
        <div className="footer-bottom max-w-[1066px] mx-auto px-[58px] lg:px-0 py-8 flex justify-between items-center">
          <p className="copyright-text font-['Barlow'] font-normal text-base text-white">
            © 2023 Teknolojik Yemekler.
          </p>
          <div className="flex gap-4">
             <img src="/images/iteration-2-images/footer/icons/Frame.png" alt="Icon" className="w-[18px] h-[18px]" />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;