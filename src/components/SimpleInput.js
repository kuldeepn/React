import { useRef, useState } from "react";

const SimpleInput = (props) => {

  const enteredValid = useRef();

  const [enteredName, setEnteredName] = useState("");
  const [enteredNameisValid, setEnteredNameisValid] = useState(true);

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (enteredName.trim() === '') {
      setEnteredNameisValid(false);
      return;
    }

    setEnteredNameisValid(true);

    const usingRef =enteredValid.current.value;
    console.log(enteredName);
    console.log(usingRef);
    setEnteredName("");
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          ref={enteredValid}
          onChange={nameInputChangeHandler}
          value={enteredName}
        />
        {!enteredNameisValid   && <p className="error-text">Name must not be an empty!</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
