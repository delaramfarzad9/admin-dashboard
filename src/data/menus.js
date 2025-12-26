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
        title: "dashboard",
        icon: HiOutlineHome,
      },
{
        id: crypto.randomUUID(),
        href: "/products",
        title: "products",
        icon: HiOutlineShoppingCart,
      },
      {
        id: crypto.randomUUID(),
        href: "/users",
        title: "users",
        icon: HiOutlineUsers,
      },
      {
        id: crypto.randomUUID(),
        href: "/tickets",
        title: "tickets",
        icon: HiOutlineChatBubbleLeftRight,
      },
      {
        id: crypto.randomUUID(),
        href: "/comments",
        title: "comments",
        icon: BiCommentDetail,
      },


    ]
}
]