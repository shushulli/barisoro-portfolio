export const HireMeBtn = ({action}) => {
  return (

      
      <button className="w-40 h-10 rounded-md bg-pink-500 shadow-md shadow-yellow-300 active:ring-2 active:ring-amber-50 hover:bg-pink-500/50 active:bg-fuchsia-600 transition-colors duration-75 ease-in"
      onClick={action}>
        <span className="font-semibold text-xl text-center text-white"> Hire me! </span>
      </button>



  );
};
