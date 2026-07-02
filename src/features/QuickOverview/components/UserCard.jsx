const UserCard = ({ fullName, email, profile }) => {
  return (
    <article className="flex min-h-20 rounded-md bg-linear-to-b from-zinc-50/50 shadow border p-3 sm:p-4 items-center border-gray-100 gap-3 sm:gap-5">
      <div className="size-12 sm:size-14 rounded-full overflow-hidden shrink-0">
        <img src={profile} alt="Avatar" className="size-full object-cover" />
      </div>
      <div className="text-xs sm:text-sm min-w-0">
        <p>
          User
          <span className="inline-block text-blue-700 px-1">
            <strong>{fullName}</strong>
          </span>
          registered on the website
        </p>
        <p className="text-neutral-500/80 break-all sm:break-normal">{email}</p>
      </div>
    </article>
  );
};

export default UserCard;
