const InputFile = () => {
  return (
    <div className="relative flex justify-center">
      <label
        for="upload-photo"
        className="cursor-pointer hover:opacity-50 active:opacity-100 active:delay-1000 active:ease-in active:transition duration-150 peer "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-7 h-7 cursor-pointer pointer-events-none"
          for="upload-photo"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 10.5v6m3-3H9m4.06-7.19l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"
          />
        </svg>
      </label>
      <div className="h-3 w-3 bg-gray-500 rotate-45 absolute left-1.5 top-8  invisible peer-hover:visible " />

      <span className="absolute top-9 px-1 rounded bg-gray-500 text-white w-24 flex justify-center invisible peer-hover:visible">
        Upload File
      </span>

      <input
        type="file"
        name="photo"
        id="upload-photo"
        className="opacity-0 absolute -z-10"
      />
    </div>
  );
};

export default InputFile;
