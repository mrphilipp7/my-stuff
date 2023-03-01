const InputRadio = ({ children }) => {
  if (children == null) {
    return <h1>Must have a populated list</h1>;
  }
  return <div className={`p-3`}>{children}</div>;
};

export default InputRadio;
