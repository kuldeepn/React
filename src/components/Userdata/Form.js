import React, { useState } from "react";
import Button from "../Button/Button";
import ErrorModal from "./ErrorModal";

const Form = (props) => {
  const [enteredUsername, setUserName] = useState("");
  const [enteredAge, setAge] = useState("");
  const [error, setError] = useState("");

  const UserNameHandler = (event) => {
    setUserName(event.target.value);
  };

  const AgeHandler = (event) => {
    setAge(event.target.value);
  };

  const SumbitHandler = (event) => {
    event.preventDefault();
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
    setUserName("");
    setAge("");
  };

  const ErroHandler = () => {
    setError(null);
  };

  return (
    <div>
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
              onChange={UserNameHandler}
              value={enteredUsername}
              className="block rounded-md w-60"
            ></input>
            <label className="text-white"> Age (Years) </label>
            <input
              type="number"
              onChange={AgeHandler}
              value={enteredAge}
              className="block rounded-md w-60"
            ></input>
          </div>
          <Button type="submit"> Add User </Button>
        </form>
      </div>
    </div>
  );
};

export default Form;
