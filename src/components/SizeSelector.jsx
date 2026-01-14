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
        lg:max-w-[215px]  
        lg:min-h-[101px]
      "
    >
      <h3 className="w-full max-w-[148px] h-auto font-['Barlow'] font-[600] text-[22px] lg:text-[20px] lg:max-h-[25px]">
        Boyut Seç{" "}
        <span className="font-['Barlow'] font-[600] text-[22px] text-[#D80027] lg:text-[20px]">
          *
        </span>
      </h3>

      <div className="radio-group-mobile flex flex-col mt-[16px] gap-[13px] lg:hidden">
        {["S", "M", "L"].map((val) => (
          <div className="radio-item flex items-center gap-[13px]" key={val}>
            <input
              type="radio"
              name="size-mobile"
              value={val}
              id={`size-mobile-${val}`}
              checked={size === val}
              onChange={(e) => setSize(e.target.value)}
              className="accent-[#FDC913] w-[20px] h-[20px]"
            />
            <label htmlFor={`size-mobile-${val}`} className="font-['Barlow'] font-[400] text-[20px] text-[#5F5F5F]">
              {val === "S" ? "Küçük" : val === "M" ? "Orta" : "Büyük"}
            </label>
          </div>
        ))}
      </div>

      <div className="radio-group-desktop hidden lg:flex mt-[16px] gap-[10px] lg:flex lg:gap-[17.2px] lg:w-full lg:min-w-[283px]">
        {["S", "M", "L"].map((val) => (
          <label key={val} className="relative cursor-pointer select-none">
            <input
              type="radio"
              name="size-desktop"
              value={val}
              id={`size-desktop-${val}`}
              checked={size === val}
              onChange={(e) => setSize(e.target.value)}
              className="absolute opacity-0 w-0 h-0 peer"
            />
            <div className="
              checkmark
              w-[56px] h-[56px]
              bg-[#FAF7F2]
              rounded-full
              flex items-center justify-center
              font-['Barlow'] font-[500] text-[16px] text-[#5F5F5F]
              peer-checked:bg-[#FDC913]
              peer-checked:text-[#292929]
              transition-all
            ">
              {val}
            </div>
          </label>
        ))}
      </div>
    </div>
  );
}

export default SizeSelector;