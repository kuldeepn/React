import React, { useState, useRef } from "react";
import Button from "../Button/Button";
import ErrorModal from "./ErrorModal";

const Form = (props) => {
  const [error, setError] = useState("");
  const InputUsername = useRef();
  const InputAge = useRef();

  const SumbitHandler = (event) => {
    event.preventDefault();
    const enteredUsername = InputUsername.current.value;
    const enteredAge = InputAge.current.value;

    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Invalid error",
        message: "Please enter a valid username and age",
      });
      return;
    }

    if (+enteredAge < 1) {
      setError({
        title: "Invalid error",
        message: "Please enter an age greater than 1",
      });
      return;
    }

    props.onAddUser(enteredUsername, enteredAge);
    InputUsername.current.value = "";
    InputAge.current.value = "";
  };

  const ErroHandler = () => {
    setError(null);
  };

  return (
    <React.Fragment>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={ErroHandler}
        ></ErrorModal>
      )}
      <div className="flex items-center justify-center h-80">
        <form className="card p-4" onSubmit={SumbitHandler}>
          <h1 className="text-white text-2xl py-3">Enter your details</h1>
          <hr className="h-5"></hr>
          <div className="text-left px-16">
            <label className="text-white"> Username </label>
            <input
              type="text"
              ref={InputUsername}
              className="block rounded-md w-60"
            ></input>
            <label className="text-white"> Age (Years) </label>
            <input
              type="number"
              ref={InputAge}
              className="block rounded-md w-60"
            ></input>
          </div>
          <Button type="submit"> Add User </Button>
        </form>
      </div>
    </React.Fragment>
  );
};

export default Form;
