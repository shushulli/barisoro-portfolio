export const Btn1 = () => {
  return (
    <div className="bg-white rounded-full px-3 py-2 flex gap-2 fixed left-0">
      
      <button className="w-10 h-10 rounded-full bg-pink-500 flex items-center justify-center">
        <span className="text-white text-sm">IG</span>
      </button>

      <button className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center">
        <span className="text-white text-sm">FB</span>
      </button>

      <button className="w-10 h-10 rounded-full bg-black flex items-center justify-center">
        <span className="text-white text-sm">X</span>
      </button>

    </div>
  );
};
