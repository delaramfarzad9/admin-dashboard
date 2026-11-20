import { HiOutlineTrash } from "react-icons/hi";
import Modal from "../../../Components/common/Modal";
import ModalFooter from "../../../Components/common/ModalFooter";

const RemoveProductIcon = ({ product, handler }) => {
  const Trigger = () => (
    <button
      aria-label="Delete product"
      title="Delete"
      className="flex items-center justify-center size-9 rounded-lg cursor-pointer text-red-500 transition-colors duration-150 hover:bg-red-50"
    >
      <HiOutlineTrash className="text-xl" />
    </button>
  );
  const ModalFooterComponent = (props) => (
    <ModalFooter
      {...props}
      btnTask1="Cancel"
      btnTask2="Delete"
      className="bg-red-500 hover:bg-red-600"
    />
  );

  return (
    <Modal
      title="Remove Product"
      onSubmit={() => handler(product._id)}
      Trigger={<Trigger />}
      Footer={ModalFooterComponent}
    >
      <div className="font-semibold text-sm">
        Are you sure you want to delete product
        <span className="px-2  text-base font-bold text-amber-900">
          {product.title}
        </span>
      </div>
    </Modal>
  );
};

export default RemoveProductIcon;
