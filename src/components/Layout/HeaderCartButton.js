import { useContext } from "react";
import CartContext from "../../store/cart-context";
import CartIcon from "../Cart/CartIcon";

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);

  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0  );

  return (
    <button className="cart-button" onClick={props.onClick}>
      <span className="w-5 h-5 mr-2">
        <CartIcon></CartIcon>
      </span>
      <span className="text-lg">Your cart</span>
      <span className="badge">
        <div className="bg-[#b94517] rounded-2xl px-2">{numberOfCartItems}</div>
      </span>
    </button>
  );
};

export default HeaderCartButton;
