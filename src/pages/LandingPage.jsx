import hearts from "../assets/images/hearts.png";
import sparkle  from "../assets/images/sparkle.avif";
import pfp from "../assets/images/pfp.png";

export const LandingPage = () => {
  return (
    <>

      <main className="relative min-h-screen  bg-linear-to-b from-pink-500 to-indigo-900 via-fuchsia-800 flex items-center justify-center p-6 text-white">

<img src ={sparkle} alt="Hearts background" className="absolute border-amber-300 border-2 w-full h-full object-cover mix-blend-overlay bg-center opacity-15" />

        {/* Content */}
        <div className="relative z-10 grid md:grid-cols-12 gap-6 w-full max-w-8xl">
          

          {/* Profile Image Section */}
          <section className="md:col-span-5 flex flex-col items-center rounded-lg p-6">
            <img
              src={pfp}
              alt="Profile Picture"
              className="size-50 md:size-60 rounded-full mb-6 border-4 border-white shadow-md"
            />
          </section>

          {/* Info Section */}
          <section className="md:col-span-7 flex flex-col justify-center items-center rounded-lg p-6 bg-white/10 shadow-md shadow-pink-400 border-2 border-white text-left">
                      <p className="text-lg font-normal leading-relaxed">
              Ashley May Barisoro <br />
            <h1 className="text-4xl font-bold mb-4">Web Developer</h1>
            </p>
          </section>

        </div>

      </main>
  
    </>
  );
};
