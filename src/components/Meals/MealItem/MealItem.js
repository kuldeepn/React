import { useContext } from "react";
import CartContext from "../../../store/cart-context";
import MealItemForm from "./MealItemForm";

const MealItem = (props) => {
  const cartCtx = useContext(CartContext);

  const price = `₹${props.price.toFixed(2)}`;

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };
  return (
    <li className="flex flex-col justify-between m-4 pb-4 border-b">
      <div>
        <h3 className="m-1 font-bold">{props.name}</h3>
        <div className="italic">{props.description}</div>
        <div className="mt-1 font-bold text-[#ad5502] text-xl">{price}</div>
      </div>
      <div>
        <MealItemForm
          id={props.id}
          onAddToCart={addToCartHandler}
        ></MealItemForm>
      </div>
    </li>
  );
};

export default MealItem;
