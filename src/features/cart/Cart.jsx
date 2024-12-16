import { Link } from "react-router-dom";
import LinkButton from "../../UI/LinkButton";
import Button from "../../UI/Button";
import CartItem from "./CartItem";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, getCart } from "./cartSlice";

function Cart() {
  const username = useSelector((state) => state.user.username);

  const cart = useSelector(getCart);
  const dispatch = useDispatch();
  console.log("Cart:", cart);
  // const cart =

  return (
    <div className="px-4 py-3">
      <LinkButton to="/menu">&larr; Back to menu </LinkButton>
      <h2 className="mt-7 text-2xl font-semibold">Your cart,{username}</h2>
      {cart.length === 0 ? (
        <p className="text-lg mt-3 text-red-600 font-semibold">
          Your Cart is Empty!<br></br> Add some pizzas to your cart.😋
        </p>
      ) : (
        <>
          <ul className="divide-y divide-stone-500 border-b mt-3">
            {cart.map((item, index) => (
              <CartItem item={item} key={item.id || index} />
            ))}
          </ul>

          <div className="mt-6 space-x-2">
            <Button to="/order/new" type="primary">
              Order pizzas
            </Button>

            <Button type="secondary" onClick={() => dispatch(clearCart())}>
              Clear cart
            </Button>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
