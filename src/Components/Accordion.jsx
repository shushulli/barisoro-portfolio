import bg from '../assets/images/projectsbg.jpg';
import { useState } from 'react';
import { Carousel } from '../Components/Carousel';


export const Accordion = () => {
  const [activeAccordion, setActiveAccordion] = useState("one");

  const toggleAccordion = (id) => {
    setActiveAccordion(prev => (prev === id ? "" : id));
  };

 
  return (
<>
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
</>
  );
};
