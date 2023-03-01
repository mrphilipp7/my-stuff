const CustomFieldInput = ({ value, changeVal, name, title }) => {
  return (
    <div className={`h-12 p-2`}>
      <div className={`w-60 relative`}>
        <input
          name={name}
          value={value}
          onChange={changeVal}
          type="text"
          className="w-full border-b-2 border-gray-500 peer focus:border-black outline-none "
        />
        <span
          className={`absolute left-0 text-gray-500 pointer-events-none  peer-focus:text-black peer-focus:text-sm peer-focus:translate-y-[-1.1rem]  transition peer-focus:duration-150 ease-in-out ${
            value != "" && value != null
              ? "text-black text-sm translate-y-[-1.1rem]"
              : ""
          }`}
        >
          {title}
        </span>
      </div>
    </div>
  );
};

export default CustomFieldInput;
