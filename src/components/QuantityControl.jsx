function QuantityControl({ count, handleIncrease, handleDecrease, toppings, size, crust, name }) {

  const selectedToppingsCount = toppings ? toppings.length : 0;

  const isFormValid = selectedToppingsCount >= 4 && size && crust && name && name.length >= 3;

  return (
    <div 
      className="
        quantity-wrapper
        w-full 
        max-w-[420px]
        min-h-[56px]                
        flex                   
        flex-row               
        justify-between                
        gap-[20px]  
        mt-[40px]     
        mb-[110px]  
        lg:flex-col
        lg:w-full
        lg:max-w-[170px]
        lg:min-h-[256px]
        lg:self-start
        lg:col-start-1
      "
    >
      <div 
        className="
          quantity-controls
          flex               
          flex-row
          w-full               
          max-w-[200px]      
          min-h-[56px]
          lg:w-full
          lg:max-w-[170px]
        "
      >
        <button 
          type="button" 
          onClick={handleDecrease}
          aria-label="Sipariş adedini bir azalt"
          className="
            w-full
            max-w-[57px]        
            min-h-[56px]       
            bg-[#FDC913] 
            rounded-l-[6px] 
            border-none
            outline-none
            cursor-pointer
            active:opacity-80
            flex
            items-center
            justify-center
          "
        >
          <span
            className="
              font-['Barlow'] 
              font-[700]     
              text-[22px]
              lg:text-[16px]
            "
          >
            -
          </span>
        </button>

        <div 
          className="
            quantity-display 
            w-full
            max-w-[67px]       
            min-h-[56px]        
            flex 
            items-center 
            justify-center
            border-y-[1px]  
            border-[#D9D9D9]     
          "
        >
          <span
            className="
              font-['Barlow'] 
              font-[400]    
              text-[22px]
              lg:text-[16px]
            "
          >
            {count}
          </span>
        </div>

        <button 
          type="button" 
          onClick={handleIncrease}
          aria-label="Sipariş adedini bir artır"
          className="
            w-full
            max-w-[57px]        
            min-h-[56px]       
            bg-[#FDC913] 
            rounded-r-[6px] 
            border-none
            outline-none
            cursor-pointer
            active:opacity-80
            flex
            items-center
            justify-center
          "
        >
          <span
            className="
              font-['Barlow'] 
              font-[700]     
              text-[22px]
              lg:text-[16px]
            "
          >
            +
          </span>
        </button>
      </div>

      <div 
        className="
          submit-btn-container
          w-full 
          max-w-[200px]      
          min-h-[56px]
        "
      >
        <button 
          type="submit" 
          disabled={!isFormValid}
          className={`
            order-button
            w-full 
            max-w-[200px]            
            min-h-[56px]   
            lg:w-full
            lg:min-w-[350px]  
            lg:ml-[180px]
            rounded-[6px]    
            border-none
            outline-none
            flex
            items-center
            justify-center
            transition-all 
            duration-200
            ${!isFormValid 
              ? "bg-gray-300 cursor-not-allowed opacity-70" 
              : "bg-[#FDC913] cursor-pointer active:scale-95"}
          `}
        >
          <span
            className={`
              font-['Barlow'] 
              font-[600]       
              text-[18px]      
              ${!isFormValid ? "text-gray-500" : "text-black"}
            `}
          >
            SİPARİŞ VER
          </span>
        </button>
      </div>
    </div>
  );
}

export default QuantityControl;