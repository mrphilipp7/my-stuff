import DropFileInput from "../components/fileDrop/src/components/drop-file-input/DropFileInput";

const filedrp = () => {
  const onFileChange = (files) => {
    console.log(files);
  };
  return (
    <div className="flex items-center justify-center w-screen h-screen bg-blue-200">
      <DropFileInput onFileChange={(files) => onFileChange(files)} />
    </div>
  );
};

export default filedrp;
