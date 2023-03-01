const InputTextArea = () => {
  return (
    <div className="py-4">
      <div className="relative w-96">
        <textarea
          rows="4"
          className="w-full p-2.5 border-2 border-gray-500 rounded-md outline-none text-black bg-white appearance-none"
        ></textarea>
        <span className="absolute left-10 px-1 border-l-2 border-r-2 border-white bottom-32 bg-white text-gray-500 select-none">
          Learn
        </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6 absolute left-2 bottom-32 bg-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
          />
        </svg>
      </div>
    </div>
  );
};

export default InputTextArea;
