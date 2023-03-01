import InputSearch from "../components/InputSearch";

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

const modal = () => {
  return (
    <div className="w-screen h-screen bg-red-400">
      <div
        className={
          "w-full h-full backdrop-blur-sm flex justify-center items-center"
        }
      >
        <div
          className={
            "p-4 bg-white shadow-sm shadow-black rounded-md flex flex-col items-center"
          }
        >
          <InputSearch listInfo={"pages"}>
            {pages.map((pages) => {
              const list = <option key={pages.id} value={pages.name}></option>;
              return list;
            })}
          </InputSearch>
          <input list="brow" />
          <datalist id="brow">
            <option value="internet Explorer"></option>
          </datalist>
        </div>
      </div>
    </div>
  );
};

export default modal;
