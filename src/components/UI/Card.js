

const Card = (props) => {
  return (
    <div className="p-4 shadow-2xl rounded-xl bg-white ml-96">{props.children}</div>
  );
};

export default Card;