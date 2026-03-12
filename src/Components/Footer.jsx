import { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const Footer = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        SERVICE_ID, 
        TEMPLATE_ID, 
        form.current, {
          publicKey: PUBLIC_KEY,
        }
      )
      .then(
        () => {
          console.log('SUCCESS!');
          alert('Message sent successfully!');
          e.target.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
          alert('Failed to send the message, please try again.');
        }
      );
  };

  return (
    <footer className="bg-fuchsia-950 w-full py-16 px-6 flex flex-col justify-center items-center text-white shadow-inner" id="contact"> 
      <div className="w-full max-w-5xl mx-auto flex flex-col items-center space-y-10">
        
        <div className="text-center space-y-3">
          <h1 className="text-3xl md:text-4xl font-bold text-pink-100 drop-shadow-sm" data-aos="fade-up"> 
            Piqued your interest? 
          </h1>
          <p className="text-sm md:text-lg font-light text-pink-200/80" data-aos="fade-up"> 
            Feel free to reach out using the form below or any of the available links! 
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 w-full gap-10 md:gap-16 items-start">

          <div className="md:col-span-5 flex flex-col justify-center items-center md:items-start gap-6 h-full" data-aos="fade-right">
            <button
              onClick={() => window.open("https://www.linkedin.com/in/ashley-may-barisoro-02896a322", "_blank")}
              className="text-lg md:text-xl text-white/90 hover:text-pink-300 font-medium transition-colors duration-300 flex items-center gap-2"
            >
              LinkedIn
            </button>
            <a
              href="mailto:abbarisoro@student.apc.edu.ph"
              className="text-lg md:text-xl text-white/90 hover:text-pink-300 font-medium transition-colors duration-300 break-all"
            >
              Outlook: abbarisoro@student.apc.edu.ph
            </a>
          </div>

          <form ref={form} onSubmit={sendEmail} className="md:col-span-7 flex flex-col gap-4 w-full" data-aos="fade-left">
            <input 
              type="email" 
              name="user_email"
              placeholder="Email" 
              required
              className="p-4 rounded-xl w-full bg-white/5 border border-pink-200/20 text-white placeholder-pink-200/50 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:bg-white/10 transition-all backdrop-blur-sm shadow-inner"
            />
            <input 
              type="text" 
              name="subject"
              placeholder="Subject" 
              required
              className="p-4 rounded-xl w-full bg-white/5 border border-pink-200/20 text-white placeholder-pink-200/50 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:bg-white/10 transition-all backdrop-blur-sm shadow-inner"
            />
            <textarea 
              name="message"
              placeholder="Message" 
              rows="4"
              required
              className="p-4 rounded-xl w-full bg-white/5 border border-pink-200/20 text-white placeholder-pink-200/50 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:bg-white/10 transition-all backdrop-blur-sm shadow-inner resize-none"
            />
            <button 
              type="submit"
              className="mt-2 bg-pink-500/80 hover:bg-pink-500  text-white font-semibold tracking-wide px-6 py-3 rounded-full transition-all duration-300 shadow-[0_4px_15px_rgba(236,72,153,0.3)] hover:shadow-[0_8px_25px_rgba(236,72,153,0.5)] hover:-translate-y-1"
            >
              Submit
            </button>
          </form>

        </div>

        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="mt-8 px-8 py-3 rounded-full border-b-2 border-amber-200 bg-pink-500/20 backdrop-blur-md hover:bg-pink-500/40 transition-all duration-300 shadow-lg hover:-translate-y-1 hover:shadow-[0_8px_25px_rgba(244,114,182,0.4)] flex justify-center items-center text-white font-medium tracking-wide"
        >
          Back to Top
        </button>
        
      </div>
    </footer>
  );
};