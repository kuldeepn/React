const Button = (props) => {
  return (
    <div className='py-5'>
      <button
        type={props.type}
        className='text-white border-solid border-2'
      >
        Add User
      </button>
    </div>
  );
};

export default Button;
