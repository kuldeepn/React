const DataListing = (props) => {
  return (
    <div className="flex justify-center text-xl">
      <ul className="text-black card w-96">
        {props.users.map((user) => (
          <div className="p-2">
            <li>
              <div className='rounded-md py-2 bg-slate-300'>
                {user.username} ({user.age} years old)
              </div>
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default DataListing;
