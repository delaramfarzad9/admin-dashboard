const ComingSoon = ({ title }) => {
  return (
    <div className="flex flex-col items-center justify-center h-[70vh] text-center">
      <h1 className="text-3xl font-bold text-gray-600 mb-4">{title}</h1>
      <p className="text-gray-500 text-sm max-w-md">
        This section is under development. New features and tools will be added soon.
      </p>
    </div>
  );
};

export default ComingSoon;
