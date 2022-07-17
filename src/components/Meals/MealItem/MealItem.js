import MealItemForm from "./MealItemForm";


const MealItem = (props) => {
  const price = `₹${props.price.toFixed(2)}`;

  return (
    <li className="flex flex-col justify-between m-4 pb-4 border-b">
      <h3 className="m-1 font-bold">{props.name}</h3>
      <div className="italic">{props.description}</div>
      <div className="mt-1 font-bold text-[#ad5502] text-xl">{price}</div>

      <div><MealItemForm></MealItemForm></div>
    </li>
  );
};

export default MealItem;
