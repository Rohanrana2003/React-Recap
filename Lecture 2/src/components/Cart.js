import { useDispatch, useSelector } from "react-redux";
import MenuItems from "./MenuItems";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((store) => store.cart.items);

  const clearCartItems = () => {
    dispatch(clearCart());
  };

  return (
    <div className="flex justify-center flex-col items-center">
      <div className="relative my-10">
        <h1 className="font-bold text-5xl"> Your Orders</h1>
        {cart.length > 0 && (
          <button
            onClick={clearCartItems}
            className="absolute top-4 -right-48 bg-red-700 text-white font-semibold px-4 py-2 rounded-md cursor-pointer shadow-black shadow-md"
          >
            Clear All
          </button>
        )}
      </div>

      <div className="w-[50%]">
        <MenuItems itemCards={cart} />
      </div>
    </div>
  );
};

export default Cart;
