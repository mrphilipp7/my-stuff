// App.js

import { useState } from "react";
import Calendar from "react-calendar";
import DatePicker from "react-datepicker";
import { CalendarContainer } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { forwardRef } from "react";
import maxDate from "react-datepicker";
import addDays from "react-datepicker";

function InputCalendar() {
  const [startDate, setStartDate] = useState(new Date());
  const ExampleCustomInput = forwardRef(({ value, onClick }, ref) => (
    <div className="p-2">
      <div className="relative w-60">
        <button
          className=" example-custom-input w-full p-2.5 border-2 border-gray-500 rounded-md outline-none text-black bg-white "
          onClick={onClick}
          ref={ref}
          //disabled prop for read only
        >
          {value}
        </button>
        <span className="absolute bottom-9 left-2 px-1 border-l-2 border-r-2 border-white bg-white text-gray-500">
          Select a date
        </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          class="fill-gray-500 w-6 h-6 absolute right-2 top-3 pointer-events-none"
        >
          <path
            fill-rule="evenodd"
            d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z"
            clip-rule="evenodd"
          />
        </svg>
        <div className="w-1 h-8  absolute right-9 top-2 border-l-2 border-r-6 border-l-gray-500 border-r-transparent opacity-25 pointer-events-none"></div>
      </div>
    </div>
  ));
  return (
    <div>
      <DatePicker
        dateFormat="MM/dd/yyyy h:mm aa"
        showTimeInput
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        customInput={<ExampleCustomInput />}
        // placeholderText="Click to select a date"
        maxDate={new Date()}
        showPopperArrow={false}
        startDate={"sdf"}
      />
    </div>
  );
}

export default InputCalendar;
