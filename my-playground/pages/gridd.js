import React, {
  useState,
  useRef,
  useEffect,
  useMemo,
  useCallback,
} from "react";
import { render } from "react-dom";
import { AgGridReact } from "ag-grid-react"; // the AG Grid React Component

import "ag-grid-community/styles/ag-grid.css"; // Core grid CSS, always needed
import "ag-grid-community/styles/ag-theme-alpine.css"; // Optional theme CSS

import { FileUploader } from "react-drag-drop-files";
const fileTypes = ["JPG", "PNG", "GIF"];
const gridd = () => {
  // const [rowData] = useState([
  //   { make: "Toyota", model: "Celica", price: 35000 },
  //   { make: "Ford", model: "Mondeo", price: 32000 },
  //   { make: "Porsche", model: "Boxster", price: 72000 },
  // ]);

  // const [columnDefs] = useState([
  //   { field: "make" },
  //   { field: "model" },
  //   { field: "price" },
  // ]);
  const [file, setFile] = useState(null);
  const handleChange = (file) => {
    setFile(file);
  };
  return (
    // <div className="ag-theme-alpine" style={{ height: 400, width: 600 }}>
    //   <AgGridReact rowData={rowData} columnDefs={columnDefs}></AgGridReact>
    // </div>
    <>
      <FileUploader
        handleChange={handleChange}
        name="file"
        types={fileTypes}
        className="h-14 w-14"
      />
    </>
  );
};

export default gridd;
