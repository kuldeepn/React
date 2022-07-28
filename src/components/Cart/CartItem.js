import classes from './CartItem.module.css';

const CartItem = (props) => {
  const price = `₹${props.price.toFixed(2)}`;

  return (
    <li className={classes['cart-items']}>
      <div>
        <h2 className='text-lg font-bold'>{props.name}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>{price}</span>
          <span className={classes.amount}>x {props.amount}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={props.onRemove}>−</button>
        <button onClick={props.onAdd}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
