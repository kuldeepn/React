import React, { useState } from "react";
import Button from "./Button";

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

    const data = {
      username: enteredUsername,
      age: enteredAge,
    };

    console.log(data);
  };

  return (
    <div className="mx-11 my-11">
      <form className="mb-0 space-y-4 flex-auto p-6" onSubmit={SumbitHandler}>
        <span className="text-white text-2xl">Enter you details</span>
        <div className="py-2">
          <label className="text-white"> Username </label>
          <div>
            <input type="text" onChange={UserNameHandler}></input>
          </div>
        </div>
        <div>
          <label className="text-white"> Age (Years) </label>
          <div>
            <input type="number" onChange={AgeHandler}></input>
          </div>
          <Button type="submit"></Button>
        </div>
      </form>
    </div>
  );
};

export default Form;
