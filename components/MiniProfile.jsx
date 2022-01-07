const MiniProfile = () => {
  return (
    <div className="flex items-center justify-between mt-14 ml-10">
      <img
        src="https://res.cloudinary.com/coffmanjrp-dev/image/upload/v1635197000/coffmanjrp.io/paul_coffman_jr_e56ec322cd.png"
        alt="profile"
        className="w-16 h-16 rounded-full border p-[2px]"
      />
      <div className="flex-1 mx-4">
        <h2 className="font-bold">coffmanjrp</h2>
        <h3 className="text-sm text-gray-400">Welcome to Instagram</h3>
      </div>
      <button className="text-blue-400 text-sm font-semibold">Sign out</button>
    </div>
  );
};

export default MiniProfile;
