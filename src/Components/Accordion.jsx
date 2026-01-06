import { useState } from 'react';

export const Accordion = ({ data }) => {
  const [activeAccordion, setActiveAccordion] = useState("rationale");

  const toggleAccordion = (id) => {
    setActiveAccordion(prev => (prev === id ? "" : id));
  };

  const items = [
    { id: "rationale", title: "Rationale", content: data.rationale },
    { id: "how", title: "How It Works", content: data.howItWorks }
  ];

  return (
    <div className="space-y-2 mt-6">
      
      {/* Status */}
      <div className="inline-block mb-2 px-3 py-1 rounded-full text-xs font-semibold
        bg-green-100 text-green-800 border border-green-300">
        Status: {data.status}
      </div>

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
