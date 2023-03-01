import { useState } from "react";
import InputField from "../components/InputField";
import InputSearch from "../components/InputSearch";
import InputV from "../components/InputV";
import SelectV from "../components/SelectV";
import { Listbox, Transition } from "@headlessui/react";
import { Fragment } from "react";
import {
  TicketIcon,
  CheckIcon,
  ChevronUpDownIcon,
  UserIcon,
  UserCircleIcon,
} from "@heroicons/react/20/solid";
import SillyInput from "../components/sillyInput";

//changes

const main = () => {
  const apps = [
    { name: "Yeah", class: "ues" },

  ];

  const [selected, setSelected] = useState(apps[0]);

  const [silly, setSilly] = useState("");

  return (
    <div className="flex w-screen h-screen bg-blue-400">
      <aside className="flex flex-col bg-black shadow-xl min-w-64 shadow-black">
        <div className="flex flex-col items-center justify-end h-32 ">dfsg</div>
        {/* // */}
        {/* // */}
        <div className="items-center justify-center flex-1 overflow-y-scroll bg-green-100">
          {/* <div className="w-11/12 h-1 my-2 bg-gray-500 rounded-full opacity-50" /> */}
          <h1>sdf</h1>
          <h1>sdffd</h1>
          <h1>sdf</h1>
          <h1>sdffd</h1>
          <h1>sdf</h1>
          <h1>sdffd</h1>
          <h1>sdf</h1>
          <h1>sdffd</h1>
          <h1>sdf</h1>
          <h1>sdffd</h1>
          <h1>sdf</h1>
          <h1>sdffd</h1>
          <h1>sdf</h1>
          <h1>sdffd</h1>
          <h1>sdf</h1>
          <h1>sdffd</h1>
          <h1>sdf</h1>
          <h1>sdffd</h1>
          <h1>sdf</h1>
          <h1>sdffd</h1>
          <h1>sdf</h1>
          <h1>sdffd</h1>
          <h1>sdf</h1>
          <h1>sdffd</h1>
          <h1>sdf</h1>
          <h1>sdffd</h1>
          <h1>sdf</h1>
          <h1>sdffd</h1>
          <h1>sdf</h1>
          <h1>sdffd</h1>
          <h1>sdf</h1>
          <h1>sdffd</h1>
          <h1>sdf</h1>
          <h1>sdffd</h1>
          <h1>sdffd</h1>
          <h1>sdf</h1>
          <h1>sdffd</h1>
          <h1>sdf</h1>
          <h1>sdffd</h1>
          <h1>sdffd</h1>
          <h1>sdf</h1>
          <h1>sdffd</h1>
          <h1>sdf</h1>
          <h1>sdffd</h1>
        </div>
      </aside>
      {/* //ehhh */}

      <div className="flex flex-col items-center justify-center flex-auto">
        <div className="flex flex-col items-center justify-center px-4 bg-white rounded-md h-96">
          <div className="flex justify-between w-full">
            <div className="relative text-center">
              <button
                type="button"
                className="inline-flex justify-center font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md peer hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 active:bg-blue-200/75"
                onClick={() => {}}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                  />
                </svg>
              </button>
              <p className="invisible peer-hover:visible">Trash</p>
            </div>
            <div className="relative text-center">
              <button
                type="button"
                className="inline-flex justify-center font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md active:bg-blue-200/75 peer hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                onClick={() => {}}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              <p className="invisible peer-hover:visible">Exit</p>
            </div>
            <div></div>
          </div>

          <Listbox value={selected} onChange={setSelected}>
            <div className="relative py-2 mt-1">
              <p className="text-gray-600 ">Select a group</p>
              <Listbox.Button className="relative py-2 pl-2 pr-10 text-left rounded-lg shadow-md cursor-default shadow-gray-300 w-60 bg-blue-100/75 focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 ">
                <span className="block truncate">{selected.name}</span>
                <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                  <ChevronUpDownIcon
                    className="w-5 h-5 text-gray-400"
                    aria-hidden="true"
                  />
                </span>
              </Listbox.Button>
              <Transition
                as={Fragment}
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div style={{ position: "relative", zIndex: 1 }}>
                  <Listbox.Options className="absolute py-1 mt-1 overflow-auto text-base rounded-md shadow-lg bg-blue-100/95 w-60 h-44 z-100 max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none scrollable">
                    {apps.map((app, appIdx) => (
                      <Listbox.Option
                        key={appIdx}
                        className={({ active }) =>
                          `relative cursor-default select-none py-2 pl-2 pr-4 ${
                            active ? "bg-white text-gray-900" : "text-gray-900"
                          }`
                        }
                        value={app}
                      >
                        {({ selected }) => (
                          <>
                            <span
                              className={`block truncate ${
                                selected ? "text-md" : "text-md"
                              }`}
                            >
                              {app.name}
                            </span>
                            {/* {selected ? (
                            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-900 ">
                              <CheckIcon
                                className="w-5 h-5"
                                aria-hidden="true"
                              />
                            </span>
                          ) : null} */}
                          </>
                        )}
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </div>
              </Transition>
            </div>
          </Listbox>
          {/* <form> */}
          <SillyInput placeHolder={"Account"} value={silly} setVal={setSilly}>
            <UserCircleIcon />
          </SillyInput>

          {/* <input type="submit" placeholder="submit" /> */}
          <button
            onClick={() => {
              console.log(selected.class);
            }}
            className="p-2 my-4 rounded-md shadow-md bg-indigo-300/95 w-60 hover:opacity-90 active:opacity-80 shadow-gray-400 active:shadow-gray-400/80"
          >
            Click here
          </button>
          {/* </form> */}
        </div>
      </div>
    </div>
  );
};

export default main;
