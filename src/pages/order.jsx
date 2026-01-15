import { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import pizzaImg from "../assets/loading-pizza.png";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import OrderHeader from "../components/OrderHeader";
import ProductInfo from "../components/ProductInfo";
import OrderForm from "../components/OrderForm";
import SizeSelector from "../components/SizeSelector";
import CrustSelector from "../components/CrustSelector";
import ToppingsSelector from "../components/ToppingsSelector";
import QuantityControl from "../components/QuantityControl";
import OrderSummary from "../components/OrderSummary";
import ProductVisual from "../components/ProductVisual";
import Footer from "../components/Footer"

function Order({ setOrderData }) {
  const [toppings, setToppings] = useState([]);
  const [toppingsError, setToppingsError] = useState(false);
  const [minToppingsError, setMinToppingsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [name, setName] = useState("");
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

  const handleIncrease = () => setCount(count + 1);
  const handleDecrease = () => count > 1 && setCount(count - 1);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (toppings.length < 4) {
      setMinToppingsError(true);
      return;
    }
    setMinToppingsError(false);
    
    setIsLoading(true);

    const orderData = {
      pizzaName: "Position Absolute Acı Pizza",
      name,
      size,
      crust,
      toppings,
      orderNote,
      count,
      totalPrice: (85.5 + toppings.length * 5) * count
    };

    axios.post("https://reqres.in/api/pizza", orderData, {
      headers: { "x-api-key": "reqres-free-v1" }
    })
    .then((response) => {
      console.log("API Yanıtı:", response.data);
      setOrderData(response.data);
      setTimeout(() => {
        history.push("/success", response.data);
      }, 2000);
    })
    .catch((error) => {
      console.error("Hata:", error);
      toast.error("Sipariş iletilemedi, internetinizi kontrol edin!", { position: "top-right" });
      setIsLoading(false);
    });
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="order-page w-full flex flex-col relative"
    >
      <ToastContainer />
      
      <AnimatePresence>
        {isLoading && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white/80 backdrop-blur-md"
            role="alert"
            aria-busy="true"
          >
            <div className="flex flex-col items-center gap-6 relative">
              <div 
                className="absolute w-56 h-56 rounded-full blur-2xl opacity-60"
                style={{
                  background: "radial-gradient(circle, #FDC913 10%, rgba(253, 201, 19, 0) 50%)",
                  zIndex: 1,
                  top: "40%", 
                  left: "50%",
                  transform: "translate(-50%, -50%)"
                }}
              />

              <motion.img
                src={pizzaImg}
                alt="Pizza hazırlanıyor"
                animate={{ 
                  y: [0, -40, 0], 
                  rotate: [0, 10, -10, 0],
                  scale: [1, 1.05, 1]
                }}
                transition={{ 
                  duration: 0.8, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
                className="w-32 h-32 object-contain relative z-10"
              />
              
              <motion.p 
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="font-['Barlow'] font-bold text-[22px] text-[#CE2829] tracking-wider relative z-10"
              >
                Siparişiniz alınıyor...
              </motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <OrderHeader />

      <motion.main 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="main-content self-center flex flex-col items-center w-full max-w-[420px] h-auto mt-[16px] lg:w-full lg:min-w-[532px] lg:mt-[0px]"
      >
        <ProductVisual />
        <ProductInfo>
          <OrderForm handleSubmit={handleSubmit}>
            <div className="base-selections w-full max-w-[382px] flex justify-between mt-[40px] gap-[40px] lg:w-full lg:max-w-[529px] lg:gap-[56px]">
              <section aria-labelledby="size-title">
                <SizeSelector size={size} setSize={setSize} />
              </section>
              <section aria-labelledby="crust-title">
                <CrustSelector crust={crust} setCrust={setCrust} />
              </section>
            </div>

            <section aria-labelledby="toppings-title">
              <ToppingsSelector
                toppings={toppings}
                toppingsError={toppingsError}
                minToppingsError={minToppingsError}
                handleToppingAdd={handleToppingAdd}
              />
            </section>

            <div className="name-container w-full max-w-[420px] flex flex-col mt-[40px] gap-[16px] lg:w-full lg:max-w-[531px] lg:gap-[16.5px]">
              <h3 className="font-['Barlow'] font-[600] text-[22px] lg:text-[20px]">
                İsim
                <span className="text-[#D80027]">*</span>
              </h3>
              <input
                id="name-input"
                type="text"
                placeholder="Adınızı giriniz (En az 3 karakter)"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="order-name w-full max-w-[420px] min-h-[50px] rounded-[6px] border-[1px] border-[#D9D9D9] pl-[20px] outline-none lg:w-full lg:max-w-[531px] placeholder:text-[#5F5F5F] lg:bg-[#FAF7F2]"
              />
              {name.length > 0 && name.length < 3 && (
                <span className="text-[#CE2829] text-sm font-['Barlow']">İsim en az 3 karakter olmalıdır!</span>
              )}
            </div>

            <div className="note-container w-full max-w-[420px] flex flex-col mt-[20px] gap-[16px] lg:w-full lg:max-w-[531px] lg:min-h-[137px] lg:gap-[16.5px]">
              <h3 id="note-title" className="font-['Barlow'] font-[600] text-[22px] lg:text-[20px]">
                Sipariş Notu
              </h3>
              <input
                id="order-note-input"
                type="text"
                name="note"
                aria-labelledby="note-title"
                placeholder="Siparişine eklemek istediğin bir not var mı?"
                onKeyDown={(e) => { if (e.key === "Enter") e.preventDefault(); }}
                value={orderNote}
                onChange={(e) => setOrderNote(e.target.value)}
                className="order-note w-full max-w-[420px] min-h-[69px] rounded-[6px] border-[1px] border-[#D9D9D9] pl-[20px] pt-[5px] pb-[4px] outline-none lg:w-full lg:max-w-[531px] lg:max-h-[56px] placeholder:text-[#5F5F5F] placeholder:font-['Barlow'] placeholder:font-[500] placeholder:text-[18px] lg:placeholder:text-[14px] lg:bg-[#FAF7F2]"
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
                name={name}
              />
            </div>
          </OrderForm>
        </ProductInfo>
      </motion.main>
      <div className="hidden lg:block">
        <Footer />
      </div>
    </motion.div>
  );
}

export default Order;