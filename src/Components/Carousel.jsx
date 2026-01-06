import { useState } from 'react';
// Carousel component, receives slides from projects page 
export const Carousel = ({ slides }) => {
  // use state for keeping track of the current slide and function to change it
  const [currentSlide, setCurrentSlide] = useState(0);
// function for going to next slide 
  const nextSlide = () =>
    setCurrentSlide((prev) => (prev + 1) % slides.length);
// function for going to previous slide 
  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="relative w-full h-56 md:h-96 mb-6 rounded-lg overflow-hidden">
      {slides.map((slide, index) => (
        <img
          key={index}
          src={slide}
          alt={`Slide ${index + 1}`}
          className={`absolute w-full h-full object-cover top-0 left-0 transition-opacity duration-500 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-2 -translate-y-1/2 p-2 rounded bg-pink-500 hover:bg-amber-300/20 active:ring-2 ring-purple-600"
      >
        ←
      </button>

      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-2 -translate-y-1/2 p-2 rounded bg-pink-500 hover:bg-amber-300/20 active:ring-2 ring-purple-600"
      >
        →
      </button>

      <div className="absolute bottom-2 w-full flex justify-center gap-2">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`w-3 h-3 rounded-full ${
              idx === currentSlide ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};
