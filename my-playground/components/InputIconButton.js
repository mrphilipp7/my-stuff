/*
----------------props-----------------
icons -> (needed) it's an icon button duh
helperText-> (needed) explains the purpose of the button
onClick-> (needed) function to preform onClick

-------------use in main-------------
import { icons } from "../public/Icons";

<InputIconButton
    helperText={"some text"}
    icon={icons.iconchoice}
    onClick={() => function preformed}
/>
*/

const InputIconButton = ({
  icon = null,
  helperText = null,
  onClick = null,
}) => {
  //error handling
  if (icon === null) {
    return <p>Error: icon is needed</p>;
  }
  if (onClick === null) {
    return <p>Error: onClick function needed</p>;
  }
  if (helperText === null) {
    return <p>Error: helper text is needed</p>;
  }

  return (
    <div className="flex flex-col space-y-1 relative h-16 items-center">
      <button
        className="peer p-2 w-10 h-10 rounded-full hover:bg-gray-200  active:bg-gray-300 flex justify-center items-center"
        onClick={onClick}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-8 h-8"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d={icon} />
        </svg>
      </button>
      <div className="h-2 w-2 bg-gray-500 rotate-45 invisible peer-hover:visible"></div>
      <span className=" bg-gray-500 px-2 text-white absolute top-11 lefts-0 invisible peer-hover:visible rounded ">
        <p className="">{helperText}</p>
      </span>
    </div>
  );
};

export default InputIconButton;
