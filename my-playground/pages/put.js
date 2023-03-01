import React from "react";
import FieldInput from "../components/FieldInput";
const initValues = {
  num1: 0,
  num2: 0,
  num3: 0,
};

function put() {
  const [state, setState] = React.useState(initValues);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({
      ...state,
      [name]: value,
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <br></br>

        {/* {state.num3} */}
        <br></br>
        {/* //this can be it// */}

        <FieldInput
          definePlaceholder="Minimum Temp in °F"
          defineValue={state.num3}
          changeValue={handleChange}
          defineName="num3"
          mLength={5}
        />
        <br></br>

        {/* //end of this is it// */}
        <button
          onClick={() => {
            console.log(state.num3);
          }}
        >
          click here
        </button>
        <button
          onClick={() => {
            setState({ num3: 12 });
          }}
        >
          CLick me
        </button>
      </header>
    </div>
  );
}

export default put;
