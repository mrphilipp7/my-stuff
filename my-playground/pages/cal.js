// App.js

import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Card from "../components/Card";
import InputCalendar from "../components/InputCalendar";
import InputTextArea from "../components/InputTextArea";
import InputFile from "../components/InputFile";
import Button from "../components/Button";
import { icons } from "../public/Icons";
import CurrrencyInput from "react-currency-input-field";
import InputCurrency from "../components/InputCurrency";
import InputIconButton from "../components/InputIconButton";
import CustomFieldInput from "../components/CustomFieldInput";
import FieldInput from "../components/FieldInput";

const initValues = {
  checked: "",
  not: "",
};

function cal() {
  const [date, setDate] = useState(new Date());
  const [demo, setDemo] = useState(0);
  const [cust, setCust] = useState("");
  const handleCust = (val) => {
    setCust(val);
  };
  const handleOnClick = (val) => {
    setDemo(val);
  };

  const [state, setState] = useState(initValues);
  //------------------universal handlechange for initValues state-------------
  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({
      ...state,
      [name]: value,
    });
  };

  return (
    <div className="flex items-center justify-center w-screen h-screen">
      {/* //here is the start */}
      <InputCalendar />
      <Card title={"Cycles"}>
        {/* <InputTextArea /> */}
        {/* <InputFile /> */}
        {/* <Button
          icon={icons.bucket}
          title={"download"}
          btnType={"secondary"}
          onClick={() => setDemo(demo + 1)}
        /> */}
        <button
          onClick={() => {
            setState({ checked: "test" });
          }}
        >
          CLick me
        </button>
        {/* <CustomFieldInput
          value={state.checked}
          changeVal={handleChange}
          name={"checked"}
        /> */}
        <CustomFieldInput
          value={state.checked}
          changeVal={handleChange}
          name={"checked"}
          title={"yes"}
        />
        <CustomFieldInput
          value={state.not}
          changeVal={handleChange}
          name={"not"}
          title={"no"}
        />
        <FieldInput
          defineValue={state.checked}
          changeValue={handleChange}
          defineName={"checked"}
        />
      </Card>
    </div>
  );
}

export default cal;
