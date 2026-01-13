function OrderForm({ children, handleSubmit }) {
  return (
    <form 
      onSubmit={handleSubmit}
      className="
        order-form             
        w-full                 
        flex                   
        flex-col               
      "
    >
      {children}
    </form>
  );
}

export default OrderForm;