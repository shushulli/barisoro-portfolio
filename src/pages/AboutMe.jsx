import { AboutMeSection } from '../sections/AboutMeSection.jsx';
import { ProjectSection } from '../sections/ProjectSection';
import { CertificateSection } from '../sections/CertificateSection.jsx';
import { ToolsLangSection } from '../sections/ToolsLangSection.jsx';
import { useState } from 'react';


// About me page
export const AboutMe = () => {
  /* activeTab: which tab is currently open. setActiveTab: function to change active tab */
  // default activeTab is basicInfo tab
  const [activeTab, setActiveTab] = useState('basic'); 
  return (
// Main - entire about me page
    <main className="relative min-h-screen">
      {/* Container - for padding and width */}
      <div className="p-5 max-w-7xl mx-auto">
        {/* Flex wrapper - all the sections act as column and vertically stacked. */}
        <div className="flex flex-col gap-y-30  ">
          {/*=== ABOUT ME SECTION === */}
          {/* activeTab and setActiveTab is passed to AboutMeSection */}
           <section className= "p-0 m-0" id="aboutmesection"> 
          <AboutMeSection
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
          </section>

      {/* ==== TOOLS & SKILLS SECTION ==== */}
      <section className= "p-0 m-0" id="toolslangsection"> 
<ToolsLangSection/>
</section>
      {/* ==== FEATURED PROJECTS ==== */}
 <section className= "p-0 m-0" id="projectsection"> 
<ProjectSection/>
</section>

{/* ==== CERTIFICATE GALLERY ==== */}
<section className= "p-0 m-0" id="certificatesection"> 
<CertificateSection/>
</section>
   </div>
      </div>
    </main>
  );
};
