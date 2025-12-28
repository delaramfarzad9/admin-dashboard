import { BiShoppingBag } from "react-icons/bi";
import { HiDocumentText, HiUsers } from "react-icons/hi";
import { RiAdminFill } from "react-icons/ri";

const generateSummaries = ({
  productsLength = 0,
  usersLength = 0,
  ticketsLength = 0,
  adminsLength = 0,
}) => {
  return [
    {
      id: 1,
      title: "Total Products",
      value: productsLength,
      Icon: BiShoppingBag,
      
    },
    {
      id: 2,
      title: "Total Users",
      value: usersLength,
      Icon: HiUsers,
      
    },
    {
      id: 3,
      title: "Total Tickets",
      value: ticketsLength,
      Icon: HiDocumentText,
      
    },
    {
      id: 4,
      title: "Total Admins",
      value: adminsLength,
      Icon: RiAdminFill,
      
    },
  ];
  
};
const generateChartData = ({
  productsLength,
  usersLength,
  ticketsLength,
  adminsLength,
}) => {
  return [
    {
      name: "Total Products",
      value: productsLength,
    },
    {
      name: "Total Users",
      value: usersLength,
    },
    {
      name: "Total Admins",
      value: adminsLength,
    },
    {
      name: "Total Tickets",
      value: ticketsLength,
    },
  ];
};

export { generateSummaries,generateChartData };
