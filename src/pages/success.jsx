import { useLocation } from "react-router-dom";
import Footer from "../components/Footer"

function Success() {
  const location = useLocation();
  const orderData = location.state;

  if (!orderData) {
    return (
      <div className="bg-[#CE2829] h-screen flex items-center justify-center text-white font-['Barlow']">
        Sipariş verisi bulunamadı!
      </div>
    );
  }

  const crustMap = {
    "super-thin": "Süpper İnce",
    "thin": "İnce",
    "medium": "Orta",
    "thick": "Kalın"
  };

  const toppings = orderData.toppings || [];
  const count = orderData.count || 1;

  return (
    <>
      <div
          className="
            order-success
            bg-[#CE2829]
            h-screen
            min-h-[1080px]
            w-[100vw]
            flex
            justify-start
            items-center
            flex-col
            lg:w-full
            lg:w-min-[1920px]
          "
        >
          <img
              src="/images/iteration-1-images/logo.svg"
              alt="Teknolojik Yemekler"
              className="
                home-logo
                max-w-[362px]
                w-[90vw]      
                h-auto
                mt-[149px]
                lg:mt-[56px]
              "
          />
            <p
              className="
              hidden
              lg:flex
              lg:font-['Satisfy']
              lg:font-[400]
              lg:text-[32px]
              lg:text-[#FDC913]
              lg:mt-[70.46px]
              lg:flex-col
              lg:items-center
              "
            >
              lezzetin yolda
                <span  
                  className="
                    hidden
                    lg:flex
                    lg:font-['Roboto_Condensed']
                    lg:font-[300]
                    lg:text-[86px]
                    lg:text-[#FFFFFF]
                    lg:uppercase
                  "
                >
                  SİPARİŞ ALINDI
                </span>
            </p>
            <h1
              className="
                font-['Roboto_Condensed']
                font-[300]
                text-[72px]
                leading-[92px]
                tracking-[1.5px]
                uppercase
                text-[#ffffff]
                text-center
                max-w-[398px]
                w-[90vw]
                min-h-[570px]
                flex
                items-center
                lg:w-full
                lg:min-w-[724px]
                lg:max-h-[195px]
                justify-center
                lg:hidden
              "
            >
              TEBRİKLER!<br />SİPARİŞİNİZ ALINDI!
            </h1>
            <div className="divider-line hidden w-full max-w-[419px] h-[1px] bg-[#FAF7F2] mt-[40px] mb-[40px] lg:flex lg:w-full lg:max-w-[523px]"></div>

          <div className="hidden lg:flex lg:flex-col lg:items-center lg:w-full px-4">

            <h2 className="font-['Barlow'] font-[600] text-[22px] text-white mb-[40px]">
              {orderData.pizzaName}
            </h2>

            <div className="lg:flex lg:flex-col lg:gap-[13px] lg:items-start lg:w-full lg:max-w-[202px] lg:font-['Barlow']">
              <p className="lg:flex lg:font-[400] text-[16px] text-[#FFFFFF]">Boyut:&nbsp;<span className="lg:font-[700] lg:text-[16px]"> {orderData.size}</span></p>
              <p className="lg:flex lg:font-[400] text-[16px] text-[#FFFFFF]">Hamur:&nbsp;<span className="font-[700] lg:text-[16px]">{crustMap[orderData.crust] ||orderData.crust}</span></p>
              <p className="text-left lg:block lg:font-[400] text-[16px] text-[#FFFFFF]">
                Ek Malzemeler:&nbsp;<span className="font-[700] lg:text-[16px]">
                  {orderData.toppings && orderData.toppings.join(", ")}
                </span>
              </p>
              {orderData.orderNote && (
                <p className="hidden lg:block lg:font-[400] text-[16px] text-[#FFFFFF] mt-[10px]">
                  Sipariş Notu:&nbsp;
                  <span className="lg:font-[700] lg:text-[16px]">
                    {orderData.orderNote}
                  </span>
                </p>
              )}
            </div>
          </div>
          <div 
          className="
            order-summary 
            hidden                   
            min-h-[202px]       
            flex                  
            flex-col               
            mt-[40px] 
            pl-[49px] 
            pt-[42px]  
            rounded-[6px]     
            border-[1px]       
            border-[#D9D9D9]  
            lg:flex 
            lg:w-full
            lg:max-w-[350px]   
            lg:max-h-[197px]
            lg:col-start-2
            lg:row-start-1
            lg:bg-[#CE2829]
          "
        >
          <h3 
            className="
              font-['Barlow']      
              font-[600]       
              text-[20px]    
              lg:w-full
              lg:max-w-[154px]   
              lg:max-h-[25px]
              lg:text-[#FFFFFF]
            "
          >
            Sipariş Toplamı
          </h3>

          <div 
            className="
              choices-price 
              w-full              
              max-w-[302px]      
              min-h-[25px]      
              flex                 
              flex-row             
              gap-[75px]        
              mt-[22px]      
              lg:w-full
              lg:max-w-[253px]   
              lg:gap-[26px]
            "
          >
            <span 
              className="
                choices 
                w-full 
                max-w-[154px]              
                min-h-[25px]     
                font-['Barlow']      
                font-[600]       
                text-[18px]       
                text-[#FFFFFF]       
              "
            >
              Seçimler
            </span>
            <span 
              className="
                choices-summary 
                w-full               
                max-w-[73px]      
                min-h-[25px]     
                font-['Barlow']    
                font-[600]       
                text-[18px]       
                text-[#FFFFFF]     
              "
            >
              {(toppings?.length || 0) * 5}.00₺
            </span>
          </div>

          <div 
            className="
              total-price 
              w-full              
              max-w-[302px]     
              min-h-[25px]      
              flex                
              flex-row             
              gap-[75px]        
              mt-[12px]  
              lg:gap-[26px]       
            "
          >
            <p 
              className="
                total 
                w-full 
                max-w-[154px]             
                min-h-[25px]      
                font-['Barlow']      
                font-[600]       
                text-[18px]       
                text-[#FFFFFF]       
              "
            >
              Toplam
            </p>
            <p 
              className="
                price-total 
                w-full              
                max-w-[73px]      
                min-h-[25px]     
                font-['Barlow']      
                font-[600]       
                text-[18px]      
                text-[#FFFFFF]       
              "
            >
              {((85.5 + (toppings?.length || 0) * 5) * count).toFixed(2)}₺
            </p>
          </div>
        </div>
      </div>
      <div className="hidden lg:flex">
        <Footer />
      </div>
    </>
  );
}

export default Success;