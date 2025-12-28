import { HiEye } from "react-icons/hi";
import Modal from "../../../Components/common/Modal";

const ChangeVisibilityIcon = () => {
  const Trigger = () => (
    <button className="cursor-pointer text-xl text-sky-500">
      <HiEye className="text-xl" />
    </button>
  );

  return <Modal title="Change Publication Status" Trigger={<Trigger />}></Modal>;
};

export default ChangeVisibilityIcon;
