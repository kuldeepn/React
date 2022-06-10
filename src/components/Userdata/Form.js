import React, { useState } from "react";
import Button from "../Button/Button";

const Form = (props) => {
  const [enteredUsername, setUserName] = useState("");
  const [enteredAge, setAge] = useState("");

  const UserNameHandler = (event) => {
    setUserName(event.target.value);
  };

  const AgeHandler = (event) => {
    setAge(event.target.value);
  };

  const SumbitHandler = (event) => {
    event.preventDefault();
    
    props.onAddUser(enteredUsername, enteredAge);
    setUserName("");
    setAge("");
  };

  return (
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
  );
};

export default Form;
