import React, { useState } from 'react';

const Form = () => {

  const [enteredValue, setValue] = useState('');
 
  const UserNameHandler = (event) => {
    setValue(event.target.value);
  }
  
  const AgeHandler = (event) => {
     setValue(event.target.value);
  }

    const SumbitHandler = (event) => {
        event.preventDefault();
}

  return (
    <div className="mx-11 my-11">
      <form className="mb-0 space-y-4" onSubmit={SumbitHandler}>
        <span className="text-white text-2xl">Enter you details</span>
        <div className="py-2">
          <label className="text-white" onChange={UserNameHandler}> Username </label>
          <div>
            <input type="text"></input>
          </div>
        </div>
        <div>
          <label className="text-white"> Age (Years) </label>
          <div>
            <input type="number" onChange={AgeHandler}></input>
          </div>
          <div className="py-5">
            <button
              type="sumbit"
              className="text-white border-solid border-2"
            >
              Add User
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
