const pages = [
  // {
  //   id: 1,
  //   name: "Home",
  //   link: "/",
  // },
  {
    id: 1,

    name: "Cycle",
    link: "/cycle",
  },
  {
    id: 2,
    name: "Truckyard",
    link: "/truckyard",
  },
];

const InputSearch = ({ listInfo, children }) => {
  return (
    <div className="p-2">
      <div className="relative w-60">
        <input
          name={listInfo}
          list={listInfo}
          type="text"
          placeholder="search for app..."
          className="w-full p-2.5 pl-10 border-2 border-gray-500 rounded-md outline-none text-black bg-white"
        />
        {/* <datalist id={listInfo}>{children}</datalist> */}
        <datalist id={listInfo}>{children}</datalist>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6 absolute text-gray-500 left-2 top-3 pointer-events-none"
        >
          <path
            fillRule="evenodd"
            d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z"
            clipRule="evenodd"
          />
        </svg>
        <div className="w-1 h-8  absolute left-9 top-2 border-l-2 border-r-6 border-l-gray-500 border-r-transparent opacity-25 pointer-events-none"></div>
      </div>
    </div>
  );
};

export default InputSearch;
