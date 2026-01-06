import { useState } from 'react';
// Accordion component, takes project data that was passed in Projects page
export const Accordion = ({ data }) => {
  /* activeAccordion: which accor is currently open. setActiveAccordion: function to change active accordion*/
  const [activeAccordion, setActiveAccordion] = useState("rationale");
// Toggle the clicked accordion: open it if it was closed, or close it if it was open. Only one accordion can be active at time.
  const toggleAccordion = (id) => {
    setActiveAccordion(prev => (prev === id ? "" : id));
  };
  // dictionary for storing accordion title and content
// the title and content are retrieved from data object/dictionary
  const items = [
    { id: "rationale", title: "Rationale", content: data.rationale },
    { id: "how", title: "How It Works", content: data.howItWorks }
  ];

  return (
    <div className="space-y-2 mt-6">
      {/* create accordion for rationale and howitworks */}
      {items.map(item => (
        <div
          key={item.id}
          className="border border-gray-400 rounded-lg overflow-hidden bg-amber-50"
        >
          <button
            className={`w-full text-left py-3 px-4 font-semibold flex justify-between items-center
              ${activeAccordion === item.id ? "text-pink-900" : "text-gray-800 hover:text-gray-500"}`}
            onClick={() => toggleAccordion(item.id)}
          >
            {item.title}
            <span>{activeAccordion === item.id ? "-" : "+"}</span>
          </button>

          {activeAccordion === item.id && (
            <div className="p-4 text-gray-800 text-sm leading-relaxed">
              {item.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
