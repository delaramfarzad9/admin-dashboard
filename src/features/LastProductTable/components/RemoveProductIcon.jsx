import { HiOutlineTrash } from "react-icons/hi";
import Modal from "../../../Components/common/Modal";

const RemoveProductIcon = ({ product, handler }) => {
  const Trigger = () => (
    <button className="cursor-pointer text-xl text-red-500">
      <HiOutlineTrash className="text-xl" />
    </button>
  );

  return <Modal
   title="Remove Product" 
  onSubmit={() => handler(product.id)} 
  Trigger={<Trigger />}>
      <div className="font-semibold text-sm">Are you sure you want to delete product 
        <span className="px-2  text-base font-bold text-amber-900">{product.title}</span>
      </div>
  </Modal>;
};

export default RemoveProductIcon;
