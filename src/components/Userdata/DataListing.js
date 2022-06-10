const DataListing = (props) => {
  return (
    <div className="flex items-center justify-center py-4">
      <ul className="text-white rounded-md px-2 text-center w-96 bg-slate-800">
        {props.users.map((user) => (
          <li className="py-2 ">
            {user.username} ({user.age} years old)
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DataListing;
