import Head from "next/head";
import InputField from "../components/InputField";
import InputSelect from "../components/InputSelect";
import { useState } from "react";
import InputCheckBox from "../components/InputCheckBox";
import InputRadio from "../components/InputRadio";
import InputSearch from "../components/InputSearch";
import { DataGrid } from "@mui/x-data-grid";
import InputDataGrid from "../components/InputDataGrid";

const demos = () => {
  const Data = [
    { id: 1, name: "btn-radio", value: "Value1", label: "label1" },
    { id: 2, name: "btn-radio", value: "Value2", label: "label2" },
    { id: 3, name: "btn-radio", value: "Value3", label: "label3" },
  ];

  const [selected, setSelected] = useState("");
  const isSelected = (value) => {
    return selected === value;
  };
  const handleRadioClick = (e) => {
    setSelected(e.target.value);
  };

  //demo shit
  const rows = [
    { id: 1, col1: "Hello", col2: "World", col3: "asdf", col4: "fds" },
    {
      id: 2,
      col1: "DataGridPro",
      col2: "is Awesome",
      col3: "asdfa",
      col4: "fre",
    },
    { id: 3, col1: "MUI", col2: "is Amazing" },
    { id: 4, col1: "MUI", col2: "is Amazing" },
    { id: 5, col1: "MUI", col2: "is Amazing" },
    { id: 6, col1: "MUI", col2: "is Amazing" },
    { id: 7, col1: "MUI", col2: "is shitty" },
    { id: 8, col1: "MUI", col2: "is Amazing" },
    { id: 9, col1: "MUI", col2: "is Amazingz" },
    { id: 10, col1: "MUI", col2: "is Amazings" },
    { id: 11, col1: "MUI", col2: "is Amazing" },
    { id: 12, col1: "MUI", col2: "is shitty" },
  ];

  const columns = [
    { field: "col1", headerName: "Column 1", width: 150, editable: false },
    { field: "col2", headerName: "Column 2", editable: true },
  ];

  return (
    <>
      <Head>
        <title>MSC Dashboard | Demos</title>
        <meta name="description" content="Demo page for Dashboard" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="w-screen h-screen bg-gray-300 flex justify-center items-center">
        <div className="  bg-white flex flex-col  items-center justify-end py-3 px-5  shadow-md shadow-black rounded">
          <h1 className="text-3xl">Temperature Controls</h1>
          {/* //spacer// */}
          <div className="w-11/12 h-1 bg-gray-500 rounded-lg my-4 opacity-25"></div>
          {/* //collection of fields// */}
          {/* //-- */}
          {/* //-- */}
          <InputDataGrid
            Rows={rows}
            Columns={columns}
            styling={"xl-width xl-height p-4"}
          />
        </div>
      </div>
    </>
  );
};

export default demos;
