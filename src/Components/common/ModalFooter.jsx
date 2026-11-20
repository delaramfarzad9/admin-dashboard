import React from "react";

const ModalFooter = ({ onSubmit, onClose, btnTask1, btnTask2, className }) => {
  const submitHandler = () => {
    onSubmit();
    onClose();
  };

  return (
    <div className="flex flex-row items-center justify-end gap-3 p-2">
      <button
        className="h-10 px-4 text-sm font-semibold rounded-lg border border-gray-200 bg-white text-gray-700 cursor-pointer transition-all duration-200 hover:bg-gray-100 active:scale-95"
        onClick={onClose}
      >
        <span>{btnTask1}</span>
      </button>
      <button
        className={`h-10 px-4 text-sm font-semibold rounded-lg text-white shadow-sm cursor-pointer transition-all duration-200 active:scale-95 ${className}`}
        onClick={submitHandler}
      >
        <span>{btnTask2}</span>
      </button>
    </div>
  );
};

export default ModalFooter;
