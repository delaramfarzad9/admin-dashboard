import { BiEdit } from "react-icons/bi";
import Modal from "../../../Components/common/Modal";
const Trigger = () => (
  <button
    aria-label="Edit product"
    title="Edit"
    className="flex items-center justify-center size-9 rounded-lg cursor-pointer text-green-600 transition-colors duration-150 hover:bg-green-50"
  >
    <BiEdit className="text-xl" />
  </button>
);

const EditProducttIcon = () => {
  return <Modal title="Edit Product Details" Trigger={<Trigger />}></Modal>;
};

export default EditProducttIcon;
