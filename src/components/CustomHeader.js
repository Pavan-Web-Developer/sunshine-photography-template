const CustomHeader = ({ title }) => {
  return (
    <div className="flex items-center w-full my-8">
      <div className="flex-grow h-0.5 bg-gray-300"></div>
      <h1 className="text-4xl font-bold mx-4">{title}</h1>
      <div className="flex-grow h-0.5 bg-gray-300"></div>
    </div>
  );
};

export default CustomHeader;
