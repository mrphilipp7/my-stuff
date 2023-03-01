import CurrencyInput from "react-currency-input-field";
/*
---------------------------Props-------------------------------------
    title     -> (needed) displays what the content in the header says
    id & name -> (needed) have both match
    value     -> (needed) state value that components tracks 
    changeVal -> (needed) call back to change 'value'
    maxLength -> (optional) limits how long string can be
    placeholder-> (optional) text that sits with empty value on screen

--------------------------Use in main--------------------------------

import InputCurrency from "../components/InputCurrency";
const[ stateVar, setStateVar] = useState(value)
const handleStateVarChange= (val) => setStateVar(val)

<InputCurrency
title={''}
id={''}
name={''}
value={stateVar}
changeVal={handleStateVarChange}
/>

*/

const InputCurrency = ({
  title = null,
  id = null,
  name = null,
  value = null,
  changeVal = null,
  maxLength,
  placeholder,
}) => {
  //error handling
  if (value === null || changeVal === null) {
    return <p>Error: value and callback are needed</p>;
  }

  if (title === null) {
    return <p>Error: title is required</p>;
  }

  if (name === null || id === null) {
    return <p>Error: need a name and id value</p>;
  }

  if (name != id) {
    return <p>Error: name and id do not match</p>;
  }

  return (
    <div className="py-4">
      <div className=" relative w-60">
        <CurrencyInput
          className="w-full p-2.5 border-2 border-gray-500 rounded-md outline-none text-black bg-white "
          id={id}
          name={name}
          prefix="$"
          allowDecimals={true}
          decimalsLimit={2}
          fixedDecimalLength={0}
          maxLength={maxLength}
          allowNegativeValue={false}
          placeholder={placeholder}
          disableAbbreviations={true}
          value={value}
          onValueChange={(value) => {
            changeVal(value);
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

export default InputCurrency;
