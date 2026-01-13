import { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

import OrderHeader from "../components/OrderHeader";
import ProductInfo from "../components/ProductInfo";
import OrderForm from "../components/OrderForm";
import SizeSelector from "../components/SizeSelector";
import CrustSelector from "../components/CrustSelector";
import ToppingsSelector from "../components/ToppingsSelector";
import QuantityControl from "../components/QuantityControl";
import OrderSummary from "../components/OrderSummary";

function Order() {
  const [toppings, setToppings] = useState([]);
  const [toppingsError, setToppingsError] = useState(false);
  const [minToppingsError, setMinToppingsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [orderNote, setOrderNote] = useState("");
  const [count, setCount] = useState(1);
  const [size, setSize] = useState("");
  const [crust, setCrust] = useState("");

  const history = useHistory();

  const handleToppingAdd = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      if (toppings.length < 10) {
        setToppings([...toppings, value]);
        setToppingsError(false);
      } else {
        setToppingsError(true);
      }
    } else {
      setToppings(toppings.filter((item) => item !== value));
      setToppingsError(false);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (toppings.length < 4) {
      setMinToppingsError(true);
      return;
    }
    setMinToppingsError(false);
    
    // API Süreci Başlıyor
    setIsLoading(true);

    const orderData = {
      pizzaName: "Position Absolute Acı Pizza",
      size,
      crust,
      toppings,
      orderNote,
      count,
      totalPrice: (85.5 + toppings.length * 5) * count
    };

    axios.post("https://reqres.in/api/pizza", orderData)
      .then((response) => {
        console.log("Sipariş Başarılı:", response.data);
        history.push("/success");
      })
      .catch((error) => {
        console.warn("CORS/Bağlantı hatası alındı, yine de yönlendiriliyor:", error);
        // Hata olsa bile kullanıcıyı bekletip yönlendiriyoruz
        setTimeout(() => {
          history.push("/success");
        }, 1500);
      });
  };

  const handleIncrease = () => setCount(count + 1);
  const handleDecrease = () => count > 1 && setCount(count - 1);

  return (
    <div className="order-page w-full flex flex-col relative">
      {/* İSTEDİĞİN EKRAN ORTASI LOADING */}
      {isLoading && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white/70 backdrop-blur-md">
          <div className="flex flex-col items-center gap-4">
            <div className="w-14 h-14 border-4 border-[#FDC913] border-t-[#CE2829] rounded-full animate-spin"></div>
            <p className="font-['Barlow'] font-bold text-[20px] text-[#CE2829]">
              Siparişiniz alınıyor...
            </p>
          </div>
        </div>
      )}

      <OrderHeader />

      <main className="main-content self-center flex flex-col items-center w-full max-w-[420px] h-auto mt-[16px] lg:w-full lg:min-w-[532px]">
        <ProductInfo>
          <OrderForm handleSubmit={handleSubmit}>
            <div className="base-selections w-full max-w-[382px] flex justify-between mt-[40px] gap-[40px] lg:max-w-[428px]">
              <SizeSelector size={size} setSize={setSize} />
              <CrustSelector crust={crust} setCrust={setCrust} />
            </div>

            <ToppingsSelector
              toppings={toppings}
              toppingsError={toppingsError}
              minToppingsError={minToppingsError}
              handleToppingAdd={handleToppingAdd}
            />

            <div className="note-container w-full max-w-[420px] flex flex-col mt-[40px] gap-[16px] lg:w-full lg:max-w-[531px] lg:min-h-[137px] lg:gap-[16.5px]">
              <h3 className="font-['Barlow'] font-[600] text-[22px] lg:text-[20px]">
                Sipariş Notu
              </h3>
              <input
                type="text"
                name="note"
                placeholder="Siparişine eklemek istediğin bir not var mı?"
                onKeyDown={(e) => { if (e.key === "Enter") e.preventDefault(); }}
                value={orderNote}
                onChange={(e) => setOrderNote(e.target.value)}
                className="order-note w-full max-w-[420px] min-h-[69px] rounded-[6px] border-[1px] border-[#D9D9D9] pl-[20px] pt-[5px] pb-[4px] outline-none lg:w-full lg:max-w-[531px] lg:max-h-[56px] placeholder:text-[#5F5F5F] placeholder:font-['Barlow'] placeholder:font-[500] placeholder:text-[18px] lg:placeholder:text-[14px]"
              />
            </div>

            <div className="divider-line w-full max-w-[419px] h-[1px] bg-[#5F5F5F] mt-[40px] mb-[40px] lg:w-full lg:max-w-[523px]"></div>

            <div className="finalize-order w-full max-w-[420px] h-auto min-h-[298px] flex flex-col gap-[40px] lg:grid lg:grid-cols-[170px_1fr] lg:max-w-[530px] lg:min-h-[256px] lg:gap-x-[10px] lg:gap-y-[20px] lg:items-start">
              <OrderSummary toppings={toppings} count={count} />
              <QuantityControl
                count={count}
                handleIncrease={handleIncrease}
                handleDecrease={handleDecrease}
                toppings={toppings} 
                size={size}
                crust={crust}
              />
            </div>
          </OrderForm>
        </ProductInfo>
      </main>
    </div>
  );
}

export default Order;