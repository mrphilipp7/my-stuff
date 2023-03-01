const InputV = ({ val = null, setVal = null, placeholder = null }) => {
  //error if statements
  {
    if (val === null) {
      return (
        <p className="p-2 text-center text-red-500 border-2 border-red-500 rounded-md w-60">
          Missing Value
        </p>
      );
    }
    if (setVal === null) {
      return (
        <p className="p-2 text-center text-red-500 border-2 border-red-500 rounded-md w-60">
          Missing Callback
        </p>
      );
    }
    if (placeholder === null) {
      return (
        <p className="p-2 text-center text-red-500 border-2 border-red-500 rounded-md w-60">
          Missing placeholder
        </p>
      );
    }
  }

  return (
    <div className="py-2 text-gray-600">
      <p className="">{placeholder}</p>
      <input
        // required
        type="text"
        className={`p-2 text-gray-900 rounded-md shadow-md resize-none w-60 bg-blue-100/75 peer shadow-gray-300`}
        onChange={(e) => {
          setVal(e.target.value);
        }}
        value={val}
      />
    </div>
  );
};

export default InputV;
