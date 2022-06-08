const Button = (props) => {
  return (
    <div className="py-5">
      <button type={props.type} classname={ props.className} className="btn">
        {props.children}
      </button>
    </div>
  );
};

export default Button;
