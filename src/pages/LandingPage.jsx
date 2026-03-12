import sparkle from "../assets/images/sparkle.avif";
import ashley2 from "../assets/images/ashley2.png";
import { LearnAboutMeBtn } from "../Components/LearnAboutMeBtn.jsx";
import TextType from "../Components/TextType";
import { useNavigate } from "react-router-dom";

// Landing page
export const LandingPage = ({mode}) => {
  // useNavigate function for learn about me button
   const navigate = useNavigate();
   
  // function for directing to about me page using the useNavigate that was defined above
  const enterSite = () => {
    navigate("/aboutme"); 
  };

  return (
    <>
      {/* Entire Landing Page, flex col for centering it vertically */}
      <main className={`relative min-h-screen flex flex-col justify-center transition-all duration-700 ${mode ? 'bg-linear-to-b from-gray-900 via-purple-950 to-black text-white': 'bg-linear-to-b from-pink-500 to-indigo-600 via-fuchsia-700 text-white'}`}>
        
        {/* Sparkle bg image that pulses to make it look like it's sparkling*/}
        <img
          src={sparkle}
          alt="Sparkle background"
          className="absolute w-full h-full object-cover mix-blend-overlay opacity-30 animate-pulse pointer-events-none"
        />

        {/* Container for centering, padding, and limiting width*/}
        <div className="w-full max-w-6xl mx-auto p-6 z-10">
          
          {/* Grid*/}
          <div className="relative z-10 grid md:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Profile Image Section */}
            <section className="md:col-span-5 flex flex-col items-center justify-center p-4" data-aos="fade-right">
              <div className="relative mb-8">
                {/* Optional: subtle glow behind the image */}
                <div className="absolute inset-0 bg-white/20 blur-2xl rounded-full"></div>
                <img
                  src={ashley2}
                  alt="Profile Picture"
                  className="relative size-48 md:size-64 object-cover pl-8 hover:scale-105 transition-transform duration-500 ease-out"
                />
              </div>

              <div className="flex flex-col items-center gap-4 w-full">
                <LearnAboutMeBtn action={enterSite}/>

                {/* Glassmorphism Resume Button */}
                <a 
                  href="/resume.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-8 py-3 bg-white/5 backdrop-blur-md border border-white/40 rounded-full font-semibold tracking-wide hover:bg-white hover:text-fuchsia-900 transition-all duration-300 shadow-lg text-center w-full max-w-[240px] hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(255,255,255,0.2)]"
                >
                  View My Resume
                </a>
              </div>
            </section>

            {/* Brief Info Section - Authentic Glassmorphism */}
            <section className="md:col-span-7 flex flex-col justify-center bg-white/10 backdrop-blur-xl border border-white/20 p-8 md:p-12 rounded-3xl shadow-2xl" data-aos="fade-left">
              <h1 className="text-5xl md:text-7xl font-extrabold mb-4 tracking-tight drop-shadow-md">
                Ashley May Barisoro
              </h1>
              <p className="text-xl md:text-3xl font-light text-white/90 tracking-wide drop-shadow-sm">
                Web Developer
              </p>
                {/* typing effect */}
              <TextType
                text={["Adaptable", "Client-focused", "Creative", "Gritty", "Stubborn", "Fast learner"]}
                typingSpeed={95}
                pauseDuration={1500}
                showCursor
                cursorCharacter="|"
                deletingSpeed={40}
                cursorBlinkDuration={0.5}
                className="mt-4 text-sm text-pink-100 font-semibold tracking-wide drop-shadow-sm"
              />
            </section>

          </div>
        </div>
      
      </main>
    </>
  );
};