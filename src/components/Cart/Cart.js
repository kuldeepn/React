
const Cart = (props) => {
  const cartItems = (
    <ul className="cart-items">
      {[{ id: "c1", name: "Sushi", amount: 2, price: 12.99 }].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );

  return (
    <div>
      {cartItems}
      <div className='total'>
        <span>Total Amount</span>
        <span>35.62</span>
      </div>
      <div className='actions'>
        <button className="button--alt">Close</button>
        <button className='button'>Order</button>
      </div>
    </div>
  );
};

export default Cart;