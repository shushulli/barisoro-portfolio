import bg from '../assets/images/projectsbg.jpg';
import carousel1 from '../assets/images/foodbank.jpg';
import carousel2 from '../assets/images/foodbank.jpg';
import carousel3 from '../assets/images/foodbank.jpg';
import { useState } from 'react';
import { Carousel } from '../Components/Carousel';
import { Accordion } from '../Components/Accordion';




export const Projects = () => {
  const [activeAccordion, setActiveAccordion] = useState("one");


  const toggleAccordion = (id) => {
    setActiveAccordion(prev => (prev === id ? "" : id));
  };

 
  return (

    <main className="relative min-h-screen">
      {/* Container */}
      <div className="max-w-7xl mx-auto ">
        <div className="flex flex-col gap-y-15 ">
        {/* Hero Section */}
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
        <div className="mt-4 flex flex-col md:flex-row gap-6 p-6 max-w-3xl border-2 mx-auto">

          <section className="flex-1 p-6 rounded  text-white bg-slate-800" id = "benefeed">
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

<Carousel/>


            {/* Accordion */}
            <Accordion/>
            

          </section>
        </div>
        </div>
      </div>
    </main>
  );
};
