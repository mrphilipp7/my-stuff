import { Listbox, Transition } from "@headlessui/react";
import { Fragment } from "react";

const SelectV = ({ selected, setSelected, name, apps }) => {
  return (
    <Listbox value={selected} onChange={setSelected}>
      <div className="relative mt-1">
        <Listbox.Button className="relative py-2 pl-3 pr-10 text-left rounded-lg shadow-md cursor-default w-60 bg-blue-100/75 focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm ">
          <span className="block truncate text-md">{selected.name}</span>
          {/* <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
            <ChevronUpDownIcon
              className="w-5 h-5 text-gray-400"
              aria-hidden="true"
            />
          </span> */}
        </Listbox.Button>
        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Listbox.Options className="absolute w-full py-1 mt-1 overflow-auto text-base rounded-md shadow-lg h-44 z-100 bg-blue-100/75 max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none scrollable">
            {apps.map((app, appIdx) => (
              <Listbox.Option
                key={appIdx}
                className={({ active }) =>
                  `relative cursor-default select-none py-2 pl-10 pr-4 ${
                    active ? "bg-white text-gray-900" : "text-gray-900"
                  }`
                }
                value={app}
              >
                {({ selected }) => (
                  <>
                    <span
                      className={`block truncate ${
                        selected ? "font-medium" : "font-normal"
                      }`}
                    >
                      {app.name}
                    </span>
                    {selected ? (
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-900 ">
                        {/* <CheckIcon className="w-5 h-5" aria-hidden="true" /> */}
                      </span>
                    ) : null}
                  </>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </div>
    </Listbox>
  );
};

export default SelectV;
