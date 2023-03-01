import { Transition } from "@headlessui/react";
import { useState, useEffect } from "react";
//add other cool stuff
const Home = () => {
  const [isShowing, setIsShowing] = useState(false);
  useEffect(() => {
    setIsShowing(true);
    setTimeout(() => {
      setIsShowing(false);
    }, 1500);
  }, []);

  return (
    <div className="relative flex h-screen bg items-center">
      <div className="w-full  flex justify-center items-center  space-x-4">
        <Transition
          show={isShowing}
          enter="transition-opacity duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <p className="text-4xl text-white font-bold">Welcome Home...</p>
        </Transition>
      </div>
    </div>
  );
};

export default Home;
