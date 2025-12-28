import { HiOutlineTrash } from "react-icons/hi";
import Modal from "../../../Components/common/Modal";

const RemoveProductIcon = () => {
  const Trigger = () => (
    <button className="cursor-pointer text-xl text-red-500">
      <HiOutlineTrash className="text-xl" />
    </button>
  );

  return <Modal title="Remove Product" Trigger={<Trigger />}></Modal>;
};

export default RemoveProductIcon;
