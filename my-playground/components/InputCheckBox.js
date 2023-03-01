//props
/*
title: displays title to right of checkmark
changeVal: is the callback function
checked: is the bool represented
*/
//code in parent component
/*
const [checked, setChecked] = useState(true);
const changeChecked = (val) => {
setChecked(val);
};

<InputCheckBox
title="Cycles"
changeVal={changeChecked}
checked={checked}
/>
*/

const InputCheckBox = ({ title, changeVal, checked }) => {
  //error handling if statements
  if (title == null) {
    return <h1>Error: Title is needed</h1>;
  }
  if (changeVal == null) {
    return <h1>Error: Callback is needed</h1>;
  }
  if (checked == null) {
    return <h1>Error: Checkbox must contain 'bool' value</h1>;
  }
  return (
    <div className="p-3 relative">
      <div className=" w-38">
        <label className="p-2 border-2 border-gray-500 rounded-md cursor-pointer select-none">
          <input
            type="checkbox"
            checked={checked}
            onChange={(e) => changeVal(e.target.checked)}
            className="mx-3 appearance-none"
          />
          {title}
        </label>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className={`w-7 h-7 absolute bottom-2.5 left-4  stroke-2 pointer-events-none ${
            checked
              ? "fill-blue-500 ease-in duration-100"
              : "fill-gray-500 ease-in duration-100"
          }`}
        >
          <path
            fillRule="evenodd"
            d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    </div>
  );
};

export default InputCheckBox;
