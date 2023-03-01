import { icons } from "../public/Icons";
//props
/*
icon -> (needed) icons to append to front of button
title -> (needed) what button will say
btnType -> (needed) determines what the button will look like
onClick -> (needed) function needed to act out button
*/

//in main
/*
'import {icons} from '../public/Icons' if you wish to use icons
icon={icons.[icon_name]} is the prop passed  
//Button should be written as 
<Button
  icon={icons.chooseIcon}
  title={"ChooseTitle"}
  btnType={"type on of 1"}
  onClick={() => }
/>
*/

const Button = ({ icon, title = null, btnType = "", onClick = null }) => {
  if (onClick === null) {
    return <p>'Error: onClick' prop is needed</p>;
  }
  if (
    btnType.toLowerCase() != "primary" &&
    btnType.toLowerCase() != "secondary" &&
    btnType.toLowerCase() != "text"
  ) {
    return <p>Error: Invalid 'btnType' prop</p>;
  }

  let exists = Object.values(icons).includes(icon);
  if (exists === false) {
    return <p>Error: icon does not exist</p>;
  }

  // if (title === null) {
  //   return <p>Error: Title is needed</p>;
  // }

  if (btnType.toLowerCase() === "primary") {
    return (
      <button
        onClick={onClick}
        className="py-4 px-16 rounded bg-purple-500 text-white hover:opacity-90 active:opacity-80 duration-150 flex"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="w-6 h-6 mr-1 "
        >
          <path stroke-linecap="round" stroke-linejoin="round" d={icon} />
        </svg>

        <p>{title}</p>
      </button>
    );
  } else if (btnType.toLowerCase() === "secondary") {
    return (
      <button
        data-mdb-ripple="true"
        data-mdb-ripple-color="light"
        onClick={onClick}
        className="py-2 px-4 rounded  bg-sky-500 text-white hover:opacity-90 active:opacity-80 duration-150 flex  shadow-md shadow-gray-600 active:shadow-gray-500"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="w-6 h-6 mr-1"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d={icon} />
        </svg>
        {title}
      </button>
    );
  } else if (btnType.toLowerCase() === "text") {
    return (
      <button
        onClick={onClick}
        className="py-2 px-4 rounded text-black hover:bg-gray-100 active:bg-gray-200 duration-150 flex"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="w-6 h-6 mr-1"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d={icon} />
        </svg>
        {title}
      </button>
    );
  } else {
    return <p>'btnType' contains invalid type</p>;
  }
};

const SecondaryButton = ({ icon, title }) => {
  return (
    <button className="py-2 px-4 rounded bg-sky-500 text-white hover:opacity-90 active:opacity-80 duration-150 flex">
      {title}
    </button>
  );
};

const PrimaryButton = ({ icon, title }) => {
  return (
    <button className="py-2 px-4 rounded bg-purple-500 text-white hover:opacity-90 active:opacity-80 duration-150 flex">
      {title}
    </button>
  );
};

export default Button;
