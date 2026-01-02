import { HiEye } from "react-icons/hi";
import Modal from "../../../Components/common/Modal";
import ModalFooter from "../../../Components/common/ModalFooter";
import clsx from "clsx";

const ChangeVisibilityIcon = ({product, handler}) => {
  const Trigger = () => (
    <button className="cursor-pointer text-xl text-sky-500">
      <HiEye className="text-xl" />
    </button>
  );
   const ModalFooterComponent = (props) => (
    <ModalFooter {...props} btnTask1="Cancel" btnTask2="Change" className="bg-blue-500 hover:bg-blue-600" />
  );
  
  return <Modal title="Change Publication Status" 
  Trigger={<Trigger />}
  Footer={ModalFooterComponent}
  onSubmit={() => handler(product.id)}
  >
<div className="font-semibold text-sm">
Are you sure you want to make this product <span className={clsx(
              product.isPublished ? "text-red-500" : "text-green-500"
            )}>{product.isPublished ? "Private" : "Public"}</span>?
</div>

  </Modal>;
};

export default ChangeVisibilityIcon;
