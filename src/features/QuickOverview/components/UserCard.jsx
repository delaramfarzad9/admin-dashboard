const UserCard = ({ fullName, email, profile }) => {
  return (
    <article className="group flex items-center gap-4 min-h-20 p-3 sm:p-4 bg-white border border-gray-200 rounded-2xl shadow-sm transition-all duration-200 hover:shadow-md hover:-translate-y-0.5">
      <div className="size-12 sm:size-14 shrink-0 rounded-full overflow-hidden ring-2 ring-chocolate/20 transition-shadow group-hover:ring-chocolate/40">
        <img src={profile} alt={fullName} className="size-full object-cover" />
      </div>
      <div className="min-w-0 flex-1">
        <h3 className="font-semibold text-gray-900 truncate">{fullName}</h3>
        <p className="text-sm text-gray-500 truncate">{email}</p>
      </div>
      <span className="hidden sm:inline-flex shrink-0 items-center px-2 py-0.5 rounded-md bg-chocolate/10 text-chocolate text-xs font-medium">
        New user
      </span>
    </article>
  );
};

export default UserCard;
