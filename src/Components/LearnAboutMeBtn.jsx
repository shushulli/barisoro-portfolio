// LearnAboutMeBtn component, receives action from landingpage
export const LearnAboutMeBtn = ({action}) => {
  
  return (
// button in landing page that leads to about me page
      <button className=" h-10 rounded-md bg-pink-500/30 p-4 shadow-md shadow-yellow-300 active:ring-2 active:ring-amber-50 hover:bg-pink-500 active:bg-fuchsia-600 transition-colors duration-100 ease-in flex justify-center items-center"
      onClick={action}>
        <span className="font-semibold text-xl text-center text-white"> Learn about me! </span>
      </button>



  );
};
