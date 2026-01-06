export const Footer = () => {
  return (
    <footer className="bg-fuchsia-950 shadow text-center h-auto flex flex-col justify-center items-center text-white p-6 space-y-6" id="contact"> 

      <h1 className="text-md md:text-xl font-normal text-pink-100 text-center"> Piqued your interest? </h1>
 <h1 className="text-sm md:text-lg font-normal text-pink-100 text-center"> Feel free to reach out using the form below or any of the available links below! </h1>
      <div className="grid grid-cols-12 w-full gap-6">

        {/* div for social media links as text */}
        <div className="col-span-12 sm:col-span-5 flex flex-col justify-center items-start gap-6">
          <a href="www.linkedin.com/in/ashley-may-barisoro-02896a322" target="_blank" rel="noopener noreferrer" className="text-white hover:text-pink-400 font-medium">
            LinkedIn
          </a>
          <a href="mailto:abbarisoro@apc.edu.ph" target="_blank" rel="noopener noreferrer" className="text-white hover:text-pink-400 font-medium">
            Outlook : abbarisoro@student.apc.edu.ph
          </a>
 
 
        </div>

        {/* div for form, email, subject, message, submit button */}
        <div className="col-span-12 sm:col-span-7 flex flex-col gap-3">
          <input 
            type="email" 
            placeholder="Email" 
            className="p-3 rounded-md w-full bg-white text-black placeholder-black"
          />
          <input 
            type="text" 
            placeholder="Subject" 
            className="p-3 rounded-md w-full bg-white text-black placeholder-black"
          />
          <textarea 
            placeholder="Message" 
            className="p-3 rounded-md w-full bg-white text-black placeholder-black resize-none"
          />
          <button 
            className="bg-pink-500 hover:bg-pink-400 text-white px-4 py-2 rounded-md transition"
          >
            Submit
          </button>
        </div>

      </div>

      {/* pink interactive button for back to top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="mt-4 rounded-md bg-pink-500 p-4 shadow-md shadow-yellow-300 active:ring-2 active:ring-amber-50 hover:bg-pink-500/50 active:bg-fuchsia-600 transition-colors duration-75 ease-in flex justify-center items-center"
      >
        Back to Top
      </button>
      
    </footer>
  );
};
