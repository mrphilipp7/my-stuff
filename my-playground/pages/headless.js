import { Tab } from "@headlessui/react";

const content1 = () => {
  return <p>Hey there</p>;
};

const headless = () => {
  return (
    <div className="inset-0 flex items-center justify-center flex-1 w-screen h-screen bg-slate-600">
      <div>
        <Tab.Group>
          <Tab.List>
            <div className="flex justify-center h-12 bg-red-700 rounded-md w-96">
              <Tab
                className={`ui-selected:bg-red-500 w-full outline-none px-4 box-content  border-4 rounded-lg border-gray-700 flex justify-center items-center ui-not-selected:hover:opacity-25`}
              >
                Feed
              </Tab>
              <Tab
                className={`ui-selected:bg-red-500 w-full outline-none px-4 box-content  border-4 rounded-lg border-gray-700 flex justify-center items-center ui-not-selected:hover:bg-gray-600`}
              >
                Home
              </Tab>
              <Tab
                className={`ui-selected:bg-red-500 w-full outline-none px-4 box-content border-4 rounded-lg border-gray-700 flex justify-center items-center ui-not-selected:hover:bg-gray-600`}
              >
                Account
              </Tab>
            </div>
          </Tab.List>
          <Tab.Panels>
            <Tab.Panel>{content1}</Tab.Panel>
            <Tab.Panel>Content 2</Tab.Panel>
            <Tab.Panel>Content 3</Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  );
};

export default headless;
