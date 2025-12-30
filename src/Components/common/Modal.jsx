import ModalFooter from "./ModalFooter";
import { Children, useState } from "react";
import clsx from "clsx";
const Modal = ({ Trigger, title, children, onSubmit }) => {
const [isOpen, setIsOpen] = useState(false);
const openModal=()=>setIsOpen(true);
const closeModal=()=>setIsOpen(false);
  return <>
  <div onClick={openModal} className="min-w-max min-h-max cursor-pointer">{Trigger} 
  </div>
  <div className={clsx("fixed inset-0 flex items-center justify-center z-50 backdrop-blur-md " ,isOpen ? "" : "hidden")}>
   <div className="flex border border-gray-200 shadow-xl flex-col bg-gray-100 space-y-5 rounded-xl p-5">
     <p className="font-bold text-lg text-rose-500 text-left">{title} </p>
    <div>{children}</div>
    {/* modal Footer  */}
<ModalFooter onSubmit={onSubmit} onClose={closeModal}/>
   </div>
  </div>
  </>

};

export default Modal;
