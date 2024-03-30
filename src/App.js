import { useEffect } from "react";
import CartContainer from "./components/CartContainer";
import { Navbar } from "./components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { calculateTotals } from "./features/cart/CartSlice";
import Modal from "./components/Modal";

function App() {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);
  const { isOpen } = useSelector((state) => state.modal);
  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems]);
  return (
    <div>
      <main>
        {isOpen && <Modal />}
        <Navbar />
        <CartContainer />
      </main>
    </div>
  );
}

export default App;
