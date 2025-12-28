import { HiOutlineHome, HiOutlineUsers, HiOutlineChatBubbleLeftRight, HiOutlineShoppingCart } from "react-icons/hi2";
import { BiCommentDetail } from "react-icons/bi";
export default [
{
id: crypto.randomUUID(),
    title: "MENU",
    items: [
      {
        id: crypto.randomUUID(),
        href: "/",
        title: "Dashboard",
        icon: HiOutlineHome,
        
      },
{
        id: crypto.randomUUID(),
        href: "/products",
        title: "Products",
        icon: HiOutlineShoppingCart,
      },
      {
        id: crypto.randomUUID(),
        href: "/users",
        title: "Users",
        icon: HiOutlineUsers,
      },
      {
        id: crypto.randomUUID(),
        href: "/tickets",
        title: "Tickets",
        icon: HiOutlineChatBubbleLeftRight,
      },
      {
        id: crypto.randomUUID(),
        href: "/comments",
        title: "Comments",
        icon: BiCommentDetail,
      },


    ]
}
]