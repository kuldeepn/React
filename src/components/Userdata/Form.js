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

    const data = {
      username: enteredUsername,
      age: enteredAge,
    };

    console.log(data);
  };

  return (
    <div className="flex items-center justify-center h-96">
      <form className="p-4 bg-gray-800 text-center rounded-md w-96" onSubmit={SumbitHandler}>
        <span className="text-white text-2xl">Enter you details</span>
        <div className="py-2 text-left ">
          <label className="text-white"> Username </label>
          <input
            type="text"
            onChange={UserNameHandler}
            className="block"
          ></input>
          <label className="text-white"> Age (Years) </label>
          <input type="number" onChange={AgeHandler} className="block"></input>
        </div>
        <Button type="submit"> Add User </Button>
        <div className="px-24">
          {/* <Button type="reset"> Reset </Button> */}
        </div>
      </form>
    </div>
  );
};

export default Form;
