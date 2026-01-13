function SizeSelector({ size, setSize }) {
  return (
    <div 
      className="
        size-group
        w-full              
        max-w-[148px]      
        min-h-[151px]       
        flex                
        flex-col 
        lg:w-full
        lg:max-w-[147px]  
        lg:min-h-[155px]
      "
    >
      <h3 
        className="
          w-full               
          max-w-[148px]      
          h-auto      
          font-['Barlow']      
          font-[600]       
          text-[22px] 
          lg:text-[20px]
          lg:max-h-[25px]

        "
      >
        Boyut Seç{" "}
        <span 
          className="
            font-['Barlow']   
            font-[600]    
            text-[22px]     
            text-[#D80027]  
            lg:text-[20px]   
          "
        >
          *
        </span>
      </h3>

      <div 
        className="
          radio-group
          w-full               
          max-w-[102px]    
          min-h-[110px]    
          flex               
          flex-col            
          mt-[16px]       
          justify-between  
          lg:w-full
          lg:min-w-[101px]    
          lg:max-h-[110px]
          lg:gap-[10px]
        "
      >
        {["S", "M", "L"].map((val) => (
          <div 
            className="
              radio-item
              flex               
              items-center       
              gap-[13px]   
              lg:gap-[11px] 
            " 
            key={val}
          >
            <input
              type="radio"
              name="size"
              value={val}
              id={`size-${val}`}
              required={val === "S"}
              checked={size === val}
              onChange={(e) => setSize(e.target.value)}
              className="
                accent-[#FDC913]  
                outline-none 
                focus:outline-none
                focus:ring-0
                select-none
              "
            />
            <label 
              htmlFor={`size-${val}`}
              className="
                font-['Barlow']   
                font-[400]    
                text-[20px]   
                cursor-pointer 
                lg:font-[500]
                lg:text-[16px]    
              "
            >
              {val === "S" ? "Küçük" : val === "M" ? "Orta" : "Büyük"}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SizeSelector;