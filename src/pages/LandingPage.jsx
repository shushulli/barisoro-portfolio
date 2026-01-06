import sparkle from "../assets/images/sparkle.avif";
import oc_fanart from "../assets/images/oc_fanart.png"
import { Btn1 } from "../Components/Btn1";
import { LearnAboutMeBtn } from "../Components/LearnAboutMeBtn.jsx";
import { useNavigate } from "react-router-dom";


export const LandingPage = () => {
   const navigate = useNavigate();

  const enterSite = () => {
    navigate("/aboutme"); // redirect to main page
  };
  return (
    <>
      {/* Entire Landing Page */}
      <main className="relative min-h-screen bg-linear-to-b from-pink-500 to-indigo-600 via-fuchsia-700 text-white flex flex-col justify-center">
        {/* Background Image */}
        <img
          src={sparkle}
          alt="Sparkle background"
          className="absolute w-full h-full object-cover mix-blend-overlay opacity-20 animate-pulse"
        />

        {/* Container: max width, centered */}
        <div className="w-full max-w-6xl mx-auto p-6 z-10">
          {/* Grid Wrapper */}
          <div className="relative z-10 grid md:grid-cols-12 gap-8">
            {/* Profile Image Section */}
            <section className="md:col-span-5 flex flex-col items-center justify-center p-6 ">
              <img
                src={oc_fanart}
                alt="Profile Picture"
                className="size-40 md:w-60 md:h-60 rounded-full mb-6 shadow-md hover:animate-bounce "
              />
              <Btn1/>
              <LearnAboutMeBtn action = {enterSite}/>

              
            </section>

            {/* Brief Info Section */}
            <section className="md:col-span-7 flex flex-col justify-center border-2 border-white p-6 rounded-lg backdrop-blur-2xl shadow-md shadow-pink-300">
              <h1 className="text-4xl font-bold mb-2">Ashley May Barisoro</h1>
              <p className="text-lg font-normal leading-relaxed">
                Web Developer
              </p>
            </section>


          </div>
        </div>
      </main>
    </>
  );
};
