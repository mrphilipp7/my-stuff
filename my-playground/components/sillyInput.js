import { UserCircleIcon } from "@heroicons/react/20/solid";

const sillyInput = ({
  placeHolder,
  value = "",
  setVal,
  children,
  required,
  type,
}) => {
  return (
    <div className="py-4 bg-transparent w-60">
      <div className="relative w-full">
        <input
          required={required}
          type={type}
          value={value}
          onChange={(e) => {
            setVal(e.target.value);
          }}
          className={`border-b-4 outline-none shadow-sm pt-2 peer w-full text-white border-white pb-2 bg-transparent`}
        />
        <span
          className={`text-white absolute left-0 bottom-3 peer-focus:-translate-y-7  transition duration-150 ease-in-out pointer-events-none ${
            value != "" ? "-translate-y-7  " : ""
          }`}
        >
          {placeHolder}
        </span>
        <div className="absolute w-6 h-6 text-white right-1 bottom-3">
          {children}
        </div>
      </div>
    </div>
  );
};

export default sillyInput;
