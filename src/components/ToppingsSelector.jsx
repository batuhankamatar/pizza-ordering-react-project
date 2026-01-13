function ToppingsSelector({
  toppings,
  toppingsError,
  minToppingsError,
  handleToppingAdd
}) {
  return (
    <>
      <div 
        className="
          extras 
          w-full 
          max-w-[420px] 
          mt-[40px] 
          flex 
          flex-col 
          gap-[16px] 
          lg:w-full 
          lg:max-w-[486px] 
          lg:max-h-[81px] 
          lg:gap-[0px]
        "
      >
        <h3 
          id="toppings-title"
          className="
            w-full 
            max-w-[420px] 
            min-h-[25px] 
            font-['Barlow'] 
            font-[600] 
            text-[22px] 
            lg:w-full 
            lg:max-w-[154px] 
            lg:max-h-[25px] 
            lg:text-[20px]
          "
        >
          Ek Malzemeler
        </h3>

        <p
          role="alert"
          className={`
            toppings-info 
            w-full 
            max-w-[420px] 
            min-h-[56px] 
            font-['Barlow'] 
            font-[500] 
            text-[20px] 
            flex 
            items-center 
            transition-all 
            duration-300 
            ease-in-out 
            lg:w-full 
            lg:max-w-[486px] 
            lg:max-h-[56px] 
            lg:text-[16px] 
            ${toppings.length < 4 ? "text-red-600 font-bold" : "text-black"}
          `}
        >
          {toppings.length < 4 
            ? "En az 4, en fazla 10 malzeme seçebilirsiniz. 5₺" 
            : "En fazla 10 malzeme seçebilirsiniz. 5₺"} 
          
          {toppings.length < 4 && (
            <span 
              className="
                font-['Barlow'] 
                font-[600] 
                text-[22px] 
                text-[#D80027] 
                ml-1 
                lg:text-[20px]
              "
            >
              *
            </span>
          )} 
        </p>
      </div>

      <div 
        className="
          extra-items 
          w-full 
          max-w-[420px] 
          h-auto 
          flex 
          flex-wrap 
          mt-[16px] 
          gap-x-[52px] 
          gap-y-[20px] 
          lg:w-full 
          lg:max-w-[524px] 
          lg:max-h-[214px] 
          lg:gap-x-[13px] 
          lg:gap-y-[13px]
        "
      >
        {[
          "Pepperoni","Sosis","Kanada Jambonu","Tavuk Izgara","Soğan",
          "Domates","Mısır","Sucuk","Jalepeno","Sarımsak",
          "Biber","Ton Balığı","Ananas","Kabak"
        ].map((item) => (
          <label 
            key={item} 
            className="
              topping-item 
              w-full 
              max-w-[166px] 
              h-[26px] 
              flex 
              items-center 
              gap-[11px] 
              cursor-pointer 
              lg:w-full 
              lg:max-w-[166px] 
              lg:h-[26px] 
              overflow-visible 
              flex-nowrap
            " 
            htmlFor={item}
          >
            <input
              type="checkbox"
              name="topping"
              value={item}
              id={item}
              onChange={handleToppingAdd}
              aria-label={`${item} malzemesini ekle`}
              checked={toppings.includes(item)}
              disabled={toppings.length >= 10 && !toppings.includes(item)}
              className="
                accent-[#FDC913] 
                flex-shrink-0
              "
            />
            <span
              className={`
                font-['Barlow'] 
                font-[400] 
                text-[20px] 
                lg:text-[16px] 
                select-none 
                transition-all 
                duration-200 
                whitespace-nowrap 
                overflow-visible 
                ${toppings.length >= 10 && !toppings.includes(item) 
                  ? "opacity-40 text-gray-400" 
                  : "text-black"}
              `}
            >
              {item}
            </span>
          </label>
        ))}
      </div>
    </>
  );
}

export default ToppingsSelector;