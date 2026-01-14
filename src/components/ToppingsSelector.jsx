function ToppingsSelector({
  toppings,
  handleToppingAdd
}) {
  return (
    <>
      <div className="extras w-full max-w-[420px] mt-[40px] flex flex-col gap-[16px] lg:w-full lg:max-w-[486px] lg:gap-[0px]">
        <h3 className="w-full max-w-[420px] font-['Barlow'] font-[600] text-[22px] lg:text-[20px]">
          Ek Malzemeler
        </h3>

        <p className={`
          toppings-info w-full max-w-[420px] min-h-[56px] font-['Barlow'] font-[500] text-[20px] flex items-center 
          lg:text-[16px] 
          ${toppings.length < 4 ? "text-[#CE2829] font-bold" : "text-[#5F5F5F]"}
        `}>
          {toppings.length < 4 
            ? "En az 4, en fazla 10 malzeme seçebilirsiniz. 5₺" 
            : "En fazla 10 malzeme seçebilirsiniz. 5₺"}
          {toppings.length < 4 && <span className="text-[#D80027] ml-1">*</span>}
        </p>
      </div>

      <div className="extra-items w-full max-w-[420px] flex flex-wrap mt-[16px] gap-x-[52px] gap-y-[20px] lg:w-full lg:min-w-[608px] lg:gap-x-[13px] lg:gap-y-[13px]">
        {[
          "Pepperoni", "Sosis", "Kanada Jambonu", "Tavuk Izgara", "Soğan",
          "Domates", "Mısır", "Sucuk", "Jalapeno", "Sarımsak",
          "Biber", "Ton Balığı", "Ananas", "Kabak"
        ].map((item) => (
          <label 
            key={item} 
            className="topping-item flex items-center cursor-pointer group select-none flex w-[166px] lg:w-[191px]"
          >
            <input
              type="checkbox"
              name="topping"
              value={item}
              id={`${item}-mob`}
              onChange={handleToppingAdd}
              checked={toppings.includes(item)}
              disabled={toppings.length >= 10 && !toppings.includes(item)}
              className="accent-[#FDC913] w-[20px] h-[20px] flex-shrink-0 lg:hidden"
            />
            
            <input
              type="checkbox"
              name="topping"
              value={item}
              id={item}
              onChange={handleToppingAdd}
              checked={toppings.includes(item)}
              disabled={toppings.length >= 10 && !toppings.includes(item)}
              className="absolute opacity-0 w-0 h-0 peer hidden lg:block"
            />
            
            <div className="
              hidden
              lg:flex
              w-[38px] h-[38px] 
              bg-[#FAF7F2] 
              rounded-[6px] 
              items-center justify-center
              peer-checked:bg-[#FDC913]
              peer-disabled:opacity-40
            ">
              <svg 
                className={`w-5 h-5 text-[#292929] ${toppings.includes(item) ? 'block' : 'hidden'}`} 
                viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"
              >  
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </div>

            <span className={`
              ml-[12px] font-['Barlow'] font-[600] text-[20px] lg:text-[16px] whitespace-nowrap
              ${toppings.length >= 10 && !toppings.includes(item) ? "text-gray-400" : "text-[#5F5F5F]"}
            `}>
              {item}
            </span>
          </label>
        ))}
      </div>
    </>
  );
}

export default ToppingsSelector;