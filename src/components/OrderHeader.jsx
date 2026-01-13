import { Link } from "react-router-dom";

function OrderHeader() {
  return (
    <header 
      className="
        order-header
        bg-[#CE2829]          
        w-full                
        min-h-[207px]          
        flex                  
        flex-col              
        items-center          
        justify-start  
        lg:w-full
            
      "
    >
      <div 
        className="
          logo-container
          w-full
          max-w-[362px]         
          min-h-[46px]    
          flex                
          justify-center      
          mt-[81px]
          lg:mt-[66.5px]
        "
      >
        <img 
          src="/images/iteration-1-images/logo.svg" 
          alt="Teknolojik Yemekler" 
          className="
            order-logo
            w-full
            max-w-[362px]     
            min-h-[46px]       
            object-contain   
          " 
        />
      </div>
      
      <div 
        className="
          bread-crumb
          w-full              
          max-w-[226]
          min-h-[29px]    
          flex               
          gap-[4px]  
          mt-[30px]  
          ml-[120px]  
          lg:full  
          lg:max-w-[182px]  
          lg:mr-[480px]
        "
      >
        <Link to="/" id="home-page">
          <span 
            className="
              home-btn
              font-['Barlow']  
              font-[400]    
              text-[20px]   
              text-[#FAF7F2]   
              lg:text-[16px] 
            "
          >
            Anasayfa
          </span>
        </Link>
        
        <span 
          className="
            short-line
            font-['Barlow']   
            font-[400]   
            text-[20px]   
            text-[#FAF7F2] 
            lg:text-[16px]   
          "
        >
          -
        </span>
        
        <span 
          className="
            order-spn
            font-['Barlow']   
            font-[700]   
            text-[20px]   
            text-[#FAF7F2] 
            lg:text-[16px]   
          "
        >
          Sipariş oluştur
        </span>
      </div>
    </header>
  );
}

export default OrderHeader;