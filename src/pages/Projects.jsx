import bg from '../assets/images/projectsbg.jpg';
import { Carousel } from '../Components/Carousel';
import { Accordion } from '../Components/Accordion';

// ===== BENEFEED IMAGES =====
import benefeed1 from '../assets/images/benefeed1.png';
import benefeed2 from '../assets/images/benefeed2.png';
import benefeed3 from '../assets/images/benefeed3.png';
import benefeed4 from '../assets/images/benefeed4.png';
import benefeed5 from '../assets/images/benefeed5.png';
import benefeed6 from '../assets/images/benefeed6.png';
import benefeed7 from '../assets/images/benefeed7.png';
import benefeed8 from '../assets/images/benefeed8.png';
import benefeed9 from '../assets/images/benefeed9.png';
import benefeed10 from '../assets/images/benefeed10.png';
import benefeed11 from '../assets/images/benefeed11.png';
import benefeed12 from '../assets/images/benefeed12.png';

// ===== FUNES IMAGES =====
import funes1 from '../assets/images/funes1.png';
import funes2 from '../assets/images/funes2.png';

// ===== IMAGE ARRAYS =====
const benefeedImages = [
  benefeed1, benefeed2, benefeed3, benefeed4, benefeed5, benefeed6,
  benefeed7, benefeed8, benefeed9, benefeed10, benefeed11, benefeed12
];

const funesImages = [
  funes1, funes2
];

// Dictionary containing information about each project
const projectDetails = {
  benefeed: {
    id: "benefeed",
    title: "BENEFEED",
    description: `Benefeed is a simple, python-based program that makes use of data
    structures to create a food bank management system which helps food banks
    efficiently manage their food inventory and beneficiary profiles.`,
    rationale:
      "Benefeed was created to support Sustainable Development Goal 2: Zero Hunger, with a focus on ensuring that people receive food that is not only sufficient but also nutritious and appropriate for their needs. While many platforms already help connect donors to food banks, we noticed that there is less attention given to what happens after donations are received. Food banks often struggle with uneven distribution, manual tracking of inventory, and food waste caused by items expiring before they are used. In addition, beneficiaries with dietary restrictions or specific nutritional needs are often given generic food packs that may not fully support their health. Benefeed was designed to address these internal challenges by helping food banks distribute food more fairly, efficiently, and with less waste.",
    howItWorks:
      "Benefeed works by organizing information about beneficiaries, food inventory, and distribution in one system. Each beneficiary is registered with their nutritional requirements, while every food item in the inventory is tracked based on its nutrients, quantity, and expiry date. During distribution, the system automatically matches available food items to each beneficiary’s needs, prioritizing items that are closer to expiration to reduce waste. The program then generates a distribution ticket for record-keeping and accountability. If needed, food bank staff can also manually select items for special cases. This process helps ensure that food is distributed more efficiently, meets dietary needs, and minimizes unnecessary waste.",
    tags: ["Python", "Priority Queue", "Dictionaries", "FoodBank", "Beneficiary tracker", "Inventory tracker", "Distributor"],
    repo: "https://github.com/luwuxy/dastruc-project/tree/main",
    images: benefeedImages,
    status: "Complete",
    developers: "Mar Joseph Bijer, Ashley May Barisoro",
  },

  funes: {
    id: "funesfbf",
    title: "Flood Risk Prediction Mini App (FUNES and FBF)",
    description:
      "A mini, Python-based flood risk prediction application inspired by FUNES and Forecast-based Financing systems that was created by Red Cross Togo. ",
    rationale:
      "We noticed that communities continue to suffer heavy losses from floods and other climate-related disasters because responses often happen only after the damage has already occurred. In a country like the Philippines, where flooding is frequent and communities are highly vulnerable, there is a clear need for systems that can anticipate risks and support early decision-making rather than relying solely on reactive aid. This motivated us to examine algorithmic solutions that prioritize preparedness and early action. By focusing on Forecast-based Financing (FbF) and the Flood Risk Prediction (FUNES) algorithm developed by the Red Cross Red Crescent Climate Centre, we aimed to understand how data-driven forecasting and trigger-based actions can reduce disaster impacts, support Sustainable Development Goal 13 (Climate Action), and improve flood preparedness for at-risk local communities.",
    howItWorks:
      "The project demonstrates the combined logic of FbF and FUNES through a simplified, terminal-based Python application focused on specific flood-prone localities in Bulacan, Philippines—San Rafael and Norzagaray. The system takes manually entered water levels from Angat Dam and Ipo Dam, together with real-time rainfall data retrieved from the OpenWeather API. These inputs are evaluated against predefined thresholds to determine an overall flood risk level. Each risk level corresponds to a set of predefined early actions, mirroring the FbF trigger mechanism, while the risk classification reflects the FUNES five-level warning scale. Through this process, the application shows how forecast data can be translated into localized, actionable guidance for communities most vulnerable to flooding.",
    tags: ["Python", "Dictionaries", "OpenWeatherAPI", "Flood risk level forecasting"],
    repo: "https://github.com/shushulli/DESALGIRLS",
    images: funesImages,
    status: "Complete",
    developers: "Ariana May Saromo, Gwyneth Cataylo, Ashley May Barisoro",
  }
};

export const Projects = () => {
  return (
    <main className="relative min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col gap-y-15">

          {/* HEADER */}
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

          {/* PROJECT SECTION */}
          <div className="-mt-30 relative z-30 flex flex-col gap-10 p-6 max-w-5xl mx-auto overflow-hidden rounded-xl">
            {Object.values(projectDetails).map(project => (
              <section
                key={project.id}
                id={project.id}
                className="p-6 text-white bg-purple-950 shadow-xl shadow-amber-100"
              >
                <h1 className="text-4xl font-bold mb-4">{project.title}</h1>

                <p className="font-light text-sm mb-6">
                  {project.description}
                </p>
                <p className="text-xs italic text-pink-200 mb-6">
  Developed by: {project.developers}
</p>


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

                {/* CAROUSEL */}
                <Carousel slides={project.images} />

                {/* ACCORDION */}
                <Accordion data={project} />
              </section>
            ))}
          </div>

        </div>
      </div>
    </main>
  );
};
