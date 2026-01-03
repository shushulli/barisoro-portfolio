import bg from '../assets/images/projectsbg.jpg';
import carousel1 from '../assets/images/ashley.png';
import carousel2 from '../assets/images/foodbank.jpg';
import carousel3 from '../assets/images/sparkle.avif';
import { useState } from 'react';


export const Projects = () => {
  const [activeAccordion, setActiveAccordion] = useState("one");
  const [currentSlide, setCurrentSlide] = useState(0);

  const toggleAccordion = (id) => {
    setActiveAccordion(prev => (prev === id ? "" : id));
  };

  const slides = [carousel1, carousel2, carousel3];

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="min-h-screen bg-linear-to-b from-pink-200 to-indigo-900 via-fuchsia-700">
      {/* Container */}
      <div className="mx-auto  p-3 max-w-6xl">

        {/* Header Section */}
        <section className='relative h-60 bg-fuchsia-400 flex flex-col justify-center items-center'>
          <img 
            src={bg} 
            alt='Background'
            className='absolute w-full h-full object-cover object-center opacity-50'
          />
          <header className="z-10 p-4 text-center">
            <h1 className="text-4xl font-bold text-white">PROJECT LISTS</h1>
          </header>
        </section>

        {/* Main Content */}
        <div className="mt-4 flex flex-col md:flex-row gap-6">

          <main className="flex-1 p-6 rounded  text-white bg-slate-800">
            <h1 className="text-4xl font-bold mb-4">BENEFEED</h1>
            <p className="font-light text-sm mb-6">
              Benefeed is a simple, python-based program that makes use of data structures to create a food bank management system which helps food banks efficiently manage their food inventory and beneficiary profiles. This program tracks various food items, monitors expiration dates using a min-heap data structure, and supports matching donated food with beneficiaries' dietary needs to reduce food waste and improve distribution effectiveness.
              <br /><br />
              Developed and implemented by:
              <br />- Mar Joseph M. Bijer
              <br />- Ashley May Barisoro
              <br />To be submitted as final requirement for subject "DASTRUC" (Data Structures) in Asia Pacific College.
            </p>

            {/* Carousel */}
     
<div className="relative w-full h-56 md:h-96 mb-6 rounded-lg overflow-hidden">
              {slides.map((slide, index) => (
                <img
                  key={index}
                  src={slide}
                  alt={`Slide ${index + 1}`}
                  className={`absolute w-full  h-full object-cover top-0 left-0 transition-opacity duration-500 ${
                    index === currentSlide ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}

              {/* Controls */}
              <button
                onClick={prevSlide}
                className="absolute top-1/2 left-2 -translate-y-1/2 p-2 rounded bg-pink-500 hover:bg-amber-300/20 active:ring-2 ring-purple-600 transition-colors duration-75 ease-in"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="jsd" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
</svg>


              </button>
              <button
                onClick={nextSlide}
                className="absolute top-1/2 right-2 -translate-y-1/2  p-2 rounded  bg-pink-500 hover:bg-amber-300/20 active:ring-2 ring-purple-600 transition-colors duration-75 ease-in"
              >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
</svg>

              </button>

              {/* Dots */}
              <div className="absolute bottom-2 w-full flex justify-center gap-2">
                {slides.map((_, idx) => (
                  <button
                    key={idx}
                    className={`w-3 h-3 rounded-full ${idx === currentSlide ? "bg-white" : "bg-white/50"}`}
                    onClick={() => setCurrentSlide(idx)}
                  />
                ))}
              </div>
            </div>




            {/* Accordion */}
            <div className="space-y-2">
              {["one", "two", "three"].map((id, idx) => (
                <div key={id} className="border border-gray-400 rounded-lg overflow-hidden bg-amber-50">
                  <button
                    className={`w-full text-left py-3 px-4 font-semibold flex justify-between items-center text-gray-800 hover:text-gray-500
                      ${activeAccordion === id ? "text-blue-600" : ""}`}
                    onClick={() => toggleAccordion(id)}
                  >
                    Accordion #{idx + 1}
                    <span>{activeAccordion === id ? "-" : "+"}</span>
                  </button>
                  {activeAccordion === id && (
                    <div className="p-4 text-gray-800">
                      <em>This is the {["first","second","third"][idx]} accordion body.</em> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.
                    </div>
                  )}
                </div>
              ))}
            </div>

          </main>
        </div>
      </div>
    </div>
  );
};
