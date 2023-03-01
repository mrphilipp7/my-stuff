//props list
/*
defaultVal: phrase that sits as the default place holder 
title: sits at top of the input box
changeVal: callback needed 
children: this is the passed mapped list of options pulled from an array of objects in parent component
*/
//needed in parent file
/*
-------this is the state variable, the changefunction, and collection of array of objects-------
const demos = () => {
  const [selected, setSelected] = useState("");
  const changeSelected = (val) => {
    setSelected(val);
  };
  //will be grabbed from axios
  const Data = [
    { id: 1, value: "value", word: "VALUE" },
  ];

  -----example for written in parent component-----
<InputSelect
  defaultVal={"--Select a cycle--"}
  changeVal={changeSelected}
  title={"Cycle"}
>
  {Data.map((Data) => {
    const list = (
      //values passed to be displayed and stored
      <option key={Data.id} value={Data.value}>
        {Data.word}
      </option>
    );
    return list;
  })}
</InputSelect>
*/

const InputSelect = ({ children, defaultVal, title, changeVal }) => {
  if (defaultVal == null) {
    return <h1>Error: A default value is needed</h1>;
  }
  if (title == null) {
    return <h1>Error: A title is needed</h1>;
  }
  if (changeVal == null) {
    return <h1>Error: A call back is needed</h1>;
  }
  if (children == null) {
    return <h1>Error: most have a populated list</h1>;
  }
  return (
    <div className="py-4">
      <div className="relative w-60">
        <select
          defaultValue={"DEFAULT"}
          htmlFor="selector"
          name="selected"
          onChange={(e) => {
            changeVal(e.target.value);
          }}
          className="w-full p-2.5 border-2 border-gray-500 rounded-md outline-none text-black cursor-pointer appearance-none bg-white"
        >
          {/* //leave as the default text// */}
          <option disabled value="DEFAULT">
            {defaultVal}
          </option>
          {/* //map// */}
          {children}
          {/* //map end// */}
        </select>
        <span className="absolute bottom-9 left-2 px-1 border-l-2 border-r-2 border-white bg-white text-gray-500">
          {title}
        </span>
        {/* //down arrow// */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-5 h-5 absolute right-2 top-3.5 text-gray-500 pointer-events-none"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
          />
        </svg>
        {/* //spacer// */}
        <div className="w-1 h-8  absolute right-7 top-2 border-l-2 border-r-6 border-l-gray-500 border-r-transparent opacity-25 pointer-events-none"></div>
      </div>
    </div>
  );
};

export default InputSelect;
