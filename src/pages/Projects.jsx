import bg from '../assets/images/projectsbg.jpg';
import { useState } from 'react';
import { Carousel } from '../Components/Carousel';
import { Accordion } from '../Components/Accordion';

const projectDetails = {
  benefeed: {
    id: "benefeed",
    title: "BENEFEED",
    description: `Benefeed is a simple, python-based program that makes use of data
    structures to create a food bank management system which helps food banks
    efficiently manage their food inventory and beneficiary profiles. This program
    tracks various food items, monitors expiration dates using a min-heap data
    structure, and supports matching donated food with beneficiaries' dietary needs
    to reduce food waste and improve distribution effectiveness.`,
    rationale:
      "Benefeed was created to support Sustainable Development Goal 2: Zero Hunger by improving how food banks manage inventory and beneficiary data. Manual tracking often results in food waste and inefficient distribution. By organizing food items and prioritizing those nearing expiration, the system helps ensure donated food is distributed responsibly and reaches beneficiaries based on their dietary needs.",
    howItWorks:
      "The system stores food items and beneficiaries in structured collections. A min-heap is used to prioritize food items closest to expiration, while beneficiary profiles store dietary requirements. During distribution, the program matches available food to beneficiaries, reducing waste and ensuring appropriate allocation.",
    status: "Complete",
    tags: ["Python"],
    repo: "https://github.com/luwuxy/dastruc-project/tree/main"
  },

  funes: {
    id: "funesfbf",
    title: "Flood Risk Prediction Mini App (FUNES and FBF)",
    description:
      "A mini, Python-based flood risk prediction application inspired by the Red Cross Red Crescent Climate Centre’s FUNES and Forecast-based Financing systems. It serves as a decision-support tool for local disaster risk reduction agencies in the Philippines.",
    rationale:
      "This project addresses the growing impact of climate change on natural disasters, aligning with Sustainable Development Goal 13: Climate Action. By studying and adapting the Red Cross Red Crescent Climate Centre’s FUNES and Forecast-based Financing systems, the project aims to promote early preparedness, reduce disaster risk, and support climate-resilient decision-making for flood-prone communities.",
    howItWorks:
      "The mini app forecasts flood risk levels for the current day and the next two days using river flow, rainfall, and historical flood impact data. Predefined thresholds classify risk levels, which automatically trigger early actions and simulate the release of contingency funds. The output is text-based and designed for local disaster risk reduction agencies.",
    status: "Complete",
    tags: ["Python", "Algorithms"],
    repo: null
  }
};


export const Projects = () => {


  return (
<main className="relative min-h-screen">
  <div className="max-w-7xl mx-auto">
    <div className="flex flex-col gap-y-15">

      {/* Hero Section */}
      <section className="relative h-60 bg-fuchsia-400 flex flex-col justify-center items-center">
        <img
          src={bg}
          alt="Background"
          className="absolute w-full h-full object-cover object-center opacity-50"
        />
        <header className="z-10 p-4 text-center">
          <h1 className="text-4xl font-bold text-white">PROJECT LISTS</h1>
        </header>
      </section>

      {/* Projects */}
      <div className="-mt-30 relative z-30 flex flex-col gap-10 p-6 max-w-5xl mx-auto overflow-hidden rounded-xl">
        {Object.values(projectDetails).map(project => (
          <section
            key={project.id}
            id={project.id}
            className="p-6 text-white bg-purple-950 shadow-xl shadow-amber-100 "
          >
            <h1 className="text-4xl font-bold mb-4">{project.title}</h1>

            <p className="font-light text-sm mb-6">
              {project.description}
            </p>

            {/* Tags + Repo */}
            <div className="flex flex-col items-center gap-y-2 mb-6">
              <div className="flex gap-2 flex-wrap justify-center">
                {project.tags.map(tag => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs font-semibold rounded-full
                               bg-pink-200 text-pink-900 border border-pink-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {project.repo && (
                <button
                  onClick={() => window.open(project.repo, "_blank")}
                  className="px-4 py-2 text-sm font-semibold rounded-md
                             bg-gray-900 text-white hover:bg-gray-700 transition
                             active:bg-pink-700 active:ring-2 active:ring-amber-50"
                >
                  View on GitHub
                </button>
              )}
            </div>

            {/* Carousel only for Benefeed */}
            {project.id === "benefeed" && <Carousel />}

            {/* Accordion */}
            <Accordion data={project} />
          </section>
        ))}
      </div>
    </div>
  </div>
</main>

  );
};
