import { Link } from "react-router-dom";

function ProductInfo({ children }) {
  return (
    <div 
      className="
        item-info              
        w-full                 
        max-w-[420px]        
        h-full        
        flex                   
        flex-col               
        justify-between  
        lg:max-w-none       
        lg:w-full   
      "
    >
      <main className="
        main-info
        lg:flex
        lg:w-full
        lg:min-w-[1920px]  
        lg:h-auto
        lg:min-h-[460px]
        lg:bg-[#FAF7F2]     
        lg:flex-col
        lg:items-center     
        lg:-ml-[calc((1920px-100%)/2)]
      ">
        <div className="lg:w-full lg:max-w-[532px]"> 
          
          <div className="bread-crumb hidden w-full max-w-[226px] min-h-[29px] gap-[4px] mt-[30px] lg:flex lg:w-full lg:max-w-[182px]">
            <Link to="/" id="home-page">
              <span className="home-btn font-['Barlow'] font-[500] text-[20px] text-[#5F5F5F] lg:text-[16px]">Anasayfa</span>
            </Link>
            <span className="short-line font-['Barlow'] font-[500] text-[20px] text-[#5F5F5F] lg:text-[16px]">-</span>
            <span className="order-spn font-['Barlow'] font-[500] text-[20px] text-[#CE2829] lg:text-[16px]">Sipariş oluştur</span>
          </div>

          <p className="item-name w-full max-w-[420px] min-h-[56px] font-['Barlow'] font-[600] text-[27px] lg:w-full lg:min-w-[488px] lg:text-[22px] lg:mt-[10px]">
            Position Absolute Acı Pizza
          </p>

          <div className="item-info-row w-full max-w-[420px] min-h-[37px] flex justify-between mt-[16px] lg:w-full lg:min-w-[531px]">
            <span className="price w-full max-w-[106px] min-h-[37px] font-['Barlow'] font-[700] text-[28px] lg:w-full lg:min-w-[106px]">85.50₺</span>
            <div className="votes w-full max-w-[140px] min-h-[27px] flex justify-between lg:w-full lg:max-w-[118px]">
              <span className="rating font-['Barlow'] font-[400] text-[20px] lg:text-[16px]">4.9</span>
              <span className="comment-count font-['Barlow'] font-[400] text-[20px] lg:text-[16px]">(200)</span>
            </div>
          </div>

          <div className="item-details w-full max-w-[420px] h-auto flex flex-col mt-[21px] lg:w-full lg:min-w-[532px]">
            <p className="description w-full max-w-[409px] h-auto font-['Barlow'] font-[400] text-[20px] leading-[29px] mt-[21px] lg:w-full lg:min-w-[532px] lg:text-[16px]">
              Frontent Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli lezzetli bir yemektir. . Küçük bir pizzaya bazen pizzetta denir.
            </p>
          </div>
        </div>
      </main>
      <div className="form-content-area w-full flex justify-center">
        <div className="lg:w-full lg:max-w-[532px]">
          {children}
        </div>
      </div>
    </div>
  );
}

export default ProductInfo;