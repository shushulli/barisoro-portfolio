import idpic from '../assets/images/ashley.png';
import { AboutMeSection } from '../sections/AboutMeSection.jsx';
import { ProjectSection } from '../sections/ProjectSection';
import { CertificateSection } from '../sections/CertificateSection.jsx';
import { ToolsLangSection } from '../sections/ToolsLangSection.jsx';
import { useState } from 'react';


// About me function, takes in active tab and setActivetab function
export const AboutMe = () => {
  /* activeTab: which tab is currently open. setActiveTab: function to change active tab */
  const [activeTab, setActiveTab] = useState('basic'); 
  return (
// Main - entire about me page
    <main className="relative min-h-screen">
      {/* Container - for padding and width */}
      <div className="p-5 max-w-7xl mx-auto">
        {/* Flex wrapper - all the sections act as column and vertically stacked. */}
        <div className="flex flex-col gap-y-25  ">
          {/*=== ABOUT ME SECTION === */}
          {/* activeTab and setActiveTab is passed  to AboutMeSection */}
          <AboutMeSection
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />

      {/* ==== TOOLS & SKILLS SECTION ==== */}
<ToolsLangSection/>
      {/* ==== FEATURED PROJECTS ==== */}
<ProjectSection/>
{/* ==== CERTIFICATE GALLERY ==== */}
<CertificateSection/>
   </div>
      </div>
    </main>
  );
};
