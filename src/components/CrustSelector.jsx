function CrustSelector({ crust, setCrust }) {
  return (
    <div 
      className="
        crust-group
        w-full                 
        max-w-[163px]        
        min-h-[78px]       
        flex                  
        flex-col               
        gap-[16px] 
        lg:w-full
        lg:min-w-[159px]      
        lg:max-h-[75px] 
      "
    >
      <h3 
        className="
          w-full               
          max-w-[163px]     
          min-h-[25px]      
          font-['Barlow']      
          font-[600]       
          text-[22px]
          lg:text-[20px]       
        "
      >
        Hamur Seç{" "}
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

      <select
        name="crust"
        id="crust-select"
        required
        value={crust}
        onChange={(e) => setCrust(e.target.value)}
        className="
          w-full
          max-w-[163px]
          outline-none
          font-['Barlow']
          text-[18px]
          bg-[#FAF7F2]       
          rounded-[6px] 
          lg:text-[16px]     
        "
      >
        <option value="" disabled hidden>Hamur Kalınlığı</option>
        <option value="thin">İnce</option>
        <option value="normal">Normal</option>
        <option value="thick">Kalın</option>
      </select>
    </div>
  );
}

export default CrustSelector;