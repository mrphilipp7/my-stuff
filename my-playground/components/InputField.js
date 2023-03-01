//props list
/*
title: (needed) displays the top information
value: (needed) value assigned with state variable in main program
changeVal: (needed) callback to change main state variable
isDisabled: (optional) declare wether or not input is writeable. If it is c/p is blocked
type: (optional) change input type, defaults to text
length: (optional) limit character length
placeholder: (optional) temp placeholder inside
autocomplete: (optional) give hints about finishing 
*/
//needed in parent file//
/*
const[ex,setEx] = useState(value)
const changeEx = (val) => {
setEx(val);
};
then plug into 'changeVal={} prop'
*/

const InputField = ({
  title = null,
  value = null,
  changeVal = null,
  isDisabled = false,
  type = "text",
  length = null,
  required = false,
  placeholder = null,
  autocomplete = "false",
}) => {
  //error handling if statements
  if (type != "text" && type != "number") {
    return <h1>Error: type is not 'text' or 'number'</h1>;
  }
  if (length < 0) {
    return <h1>Error: length cannot be less than 0</h1>;
  }
  if (title == null || value == null || changeVal == null) {
    return <h1>Error: Title, Value, ChangeVar are required props</h1>;
  }
  return (
    //container
    <div className="py-4">
      <div className="relative w-60">
        {/* //add error handling about entering nums on type=number// */}
        <input
          autoComplete={autocomplete}
          placeholder={placeholder}
          required={required}
          maxLength={length}
          type={type}
          value={value}
          disabled={isDisabled}
          className="w-full p-2.5 border-2 border-gray-500 rounded-md outline-none text-black bg-white "
          onChange={(e) => {
            changeVal(e.target.value);
          }}
        />
        {/* // Title is absolute and moved to top of bar // */}
        <span className="absolute left-2 px-1 border-l-2 border-r-2 border-white bottom-9 bg-white text-gray-500 select-none">
          {title}
        </span>
      </div>
    </div>
  );
};

export default InputField;
