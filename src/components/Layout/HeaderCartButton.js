import CartIcon from "../Cart/CartIcon";



const HeaderCartButton = (props) => {
    return (
      <button className="cart-button">
        <span className="w-5 h-5 mr-2">
          <CartIcon></CartIcon>
        </span>
        <span className="text-lg">Your cart</span>
        <span className="badge">
          <div className="bg-[#b94517] rounded-2xl px-2">3</div>
        </span>
      </button>
    );
}

export default HeaderCartButton;