function CrustSelector({ crust, setCrust }) {
  return (
    <div className="crust-group w-full max-w-[163px] min-h-[78px] flex flex-col gap-[16px] lg:w-full lg:min-w-[285px] lg:max-h-[101px]">
      <h3 className="w-full max-w-[163px] min-h-[25px] font-['Barlow'] font-[600] text-[22px] lg:text-[20px]">
        Hamur Seç <span className="text-[#D80027]">*</span>
      </h3>

      <div className="lg:hidden">
        <select
          name="crust-mobile"
          value={crust}
          onChange={(e) => setCrust(e.target.value)}
          className="w-full max-w-[163px] outline-none font-['Barlow'] text-[18px] bg-[#FAF7F2] rounded-[6px]"
        >
          <option value="" disabled hidden>Hamur Kalınlığı</option>
          <option value="super-thin">Süpper İnce</option>
          <option value="thin">İnce</option>
          <option value="normal">Normal</option>
          <option value="thick">Kalın</option>
        </select>
      </div>

      <div className="hidden lg:relative lg:block lg:w-full lg:max-w-[285px]">
        <select
          name="crust-desktop"
          value={crust}
          onChange={(e) => setCrust(e.target.value)}
          className="w-full h-[56px] pl-[20px] outline-none font-['Barlow'] font-[500] text-[16px] text-[#5F5F5F] bg-[#FAF7F2] rounded-[6px] appearance-none cursor-pointer"
        >

          <option value="" disabled hidden>—Hamur Kalınlığı Seç —</option>
          <option value="super-thin">Süpper İnce</option>
          <option value="thin">İnce</option>
          <option value="normal">Normal</option>
          <option value="thick">Kalın</option>
        </select>

        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-[#5F5F5F]">
          <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20">
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
          </svg>
        </div>
      </div>
    </div>
  );
}

export default CrustSelector;