export const Carousel = () => {
    return ( 
<> 


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



</>
    ); 
} 



