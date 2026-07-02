import SectionTitle from "../../../Components/common/SectionsTitle";
import OpenInPage from "./OpenInPage";
import users from "./../../../data/users";
import UserCard from "./UserCard";

const LastUsers = () => {
  return (
    <div className="col-span-full xl:col-span-2 max-h-max">
      <SectionTitle title="Latest Users" />

      <div className="mt-4 space-y-4 sm:mt-5 sm:space-y-5">
        {users.slice(-4).map((user) => (
          <UserCard key={user.id} {...user} />
        ))}

        <OpenInPage itemsLength={users.length} navigateTo="/users" />
      </div>
    </div>
  );
};

export default LastUsers;
