import Spacer from "./Spacer";

const Card = ({ title = "empty", children }) => {
  return (
    <div className="p-4 shadow-md shadow-black rounded bg-white flex items-center flex-col">
      <h1 className="text-2xl">{title}</h1>
      <Spacer />
      {children}
    </div>
  );
};

export default Card;
