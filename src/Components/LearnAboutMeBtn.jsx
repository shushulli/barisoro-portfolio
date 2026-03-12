// LearnAboutMeBtn component, receives action from landingpage
export const LearnAboutMeBtn = ({ action }) => {
  return (
    // button in landing page that leads to about me page
    <button 
      className="px-8 py-3 w-full max-w-[240px] bg-pink-500/40 backdrop-blur-md border border-pink-300/50 rounded-full shadow-[0_4px_15px_rgba(236,72,153,0.3)] hover:bg-pink-500 hover:shadow-[0_10px_25px_rgba(236,72,153,0.5)] hover:-translate-y-1 active:translate-y-0 active:scale-95 transition-all duration-300 ease-out flex justify-center items-center"
      onClick={action}
    >
      <span className="font-semibold text-lg tracking-wide text-white drop-shadow-sm"> 
        Learn about me! 
      </span>
    </button>
  );
};