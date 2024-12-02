export const Author = ({ user, profile_image }) => {
  return (
    <div className="flex gap-3 items-center">
      <img className="w-9 h-9 rounded-[28px]" src={profile_image} alt="" />
      <div className="text-[#97989F] font-medium">{user}</div>
    </div>
  );
};
