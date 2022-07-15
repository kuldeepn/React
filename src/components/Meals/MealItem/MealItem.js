const MealItem = (props) => {
  const price = `₹${props.price.toFixed(2)}`;

  return (
    <li>
      <div>{props.name}</div>
      <div>{props.description}</div>
      <div>{price}</div>

      <div></div>
    </li>
  );
};

export default MealItem;
