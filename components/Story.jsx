const Story = ({ id, username }) => {
  return (
    <div>
      <img
        src={`https://i.pravatar.cc/100?img=${id}`}
        alt={username}
        className="w-14 h-14 rounded-full p-[1.5px] border-2 border-red-500 object-contain cursor-pointer hover:scale-110 transition-transform duration-200 ease-out"
      />
      <p className="text-xs w-14 truncate text-center">{username}</p>
    </div>
  );
};

export default Story;
