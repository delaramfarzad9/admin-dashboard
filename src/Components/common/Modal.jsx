import { Children, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import clsx from "clsx";
const Modal = ({ Trigger, title, children, onSubmit, Footer }) => {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  return (
    <>
      <div onClick={openModal} className="min-w-max min-h-max cursor-pointer">
        {Trigger}
      </div>
      <div
        className={clsx(
          "fixed inset-0 flex items-center justify-center z-50 backdrop-blur-md ",
          isOpen ? "" : "hidden",
        )}
      >
        <div className="flex border border-gray-200 shadow-xl flex-col bg-gray-100 space-y-5 rounded-xl p-5">
          <div className="flex flex-row justify-between items-center mb-5">
            <p className="font-bold text-lg text-left">{title} </p>
            <button
              type="button"
              aria-label="Close"
              onClick={closeModal}
              className="flex items-center justify-center size-8 rounded-lg text-gray-500 cursor-pointer transition-colors duration-150 hover:bg-gray-200 hover:text-gray-800"
            >
              <AiOutlineClose className="size-4" />
            </button>
          </div>
          <div>{children}</div>
          {/* modal Footer  */}
          {Footer && <Footer onSubmit={onSubmit} onClose={closeModal} />}
        </div>
      </div>
    </>
  );
};

export default Modal;
