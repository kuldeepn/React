import { useState } from 'react';
import DataListing from './components/Userdata/DataListing';
import Form from './components/Userdata/Form';

function App() {

  const [Userdata, setUserdata] = useState([]);  
  
  const addUserHandler = (uName,uAge) =>
  {
    setUserdata((prevUser)=> {
      return [...prevUser, { username: uName, age: uAge }]
    })
  }

  return (
    <div className='bg-black'>
      <Form onAddUser={addUserHandler}></Form>
      <DataListing users={Userdata}></DataListing>
    </div>
  );
}

export default App;
