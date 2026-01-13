function Success() {
	return (
		<div 
			className="
				order-success
				bg-[#CE2829]
				h-screen
				min-h-[1080px]
				w-[100vw]
				flex
        justify-start
        items-center
        flex-col
        lg:w-full
        lg:w-min-[1920px]
			"
		>
			<img
          src="/images/iteration-1-images/logo.svg"
          alt="Teknolojik Yemekler"
          className="
            home-logo
            max-w-[362px] 
            w-[90vw]       
            h-auto
						mt-[149px]
          "
      />
				<h1
            className="
              font-['Roboto_Condensed']
              font-[300]
              text-[72px]
              leading-[92px]
              tracking-[1.5px]
              uppercase
              text-[#ffffff]
              text-center
              max-w-[398px]
              w-[90vw]
							min-h-[570px]
							flex
							items-center
              lg:w-full
              lg:min-w-[724px]
              lg:max-h-[195px]
              justify-center
            "
          >
            TEBRİKLER!<br />SİPARİŞİNİZ ALINDI!
          </h1>
		</div>
	)
}

export default Success