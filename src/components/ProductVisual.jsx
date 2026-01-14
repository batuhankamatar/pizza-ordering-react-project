import React from 'react';

function ProductVisual() {
  return (
    <div 
        className="
          main-img
          hidden
          w-full
          overflow-hidden       
          lg:flex 
          items-end            
          justify-center 
          h-[250px]           
          lg:h-[230px]     
          lg:w-full  
          lg:min-w-[1920px]  
          lg:bg-[#FAF7F2]
        "
      >
        <img
          src="/images/iteration-2-images/pictures/food-2-enhanced.png"
          alt="Teknolojik Yemekler"
          className="
            w-full 
            max-w-[581px] 
            h-auto 
            object-cover 
            object-center     
          "
        />
    </div>
  );
}

export default ProductVisual;