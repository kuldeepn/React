

const Card = props => {
  return (
    <div className="p-4 shadow-2xl bg-white rounded-xl w-full">
      {props.children}
    </div>
  );
};

export default Card;