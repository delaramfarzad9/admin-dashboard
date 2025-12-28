import { BiEdit } from "react-icons/bi";
import Modal from "../../../Components/common/Modal";
  const Trigger = () => (
    <button className="cursor-pointer text-xl text-green-500">
      <BiEdit className="text-xl" />
    </button>
  );

const EditProducttIcon = () => {

  return <Modal title="Edit Product Details" Trigger={<Trigger />}></Modal>;
};

export default EditProducttIcon;
