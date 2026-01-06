
// About tabs component, takes activeTab and setActiveTab
export const About_Tabs = ({activeTab, setActiveTab}) => {
//Dictionary for storing my basic information 
    const basicInfo = {
  
        age: 20, 
        school: "Asia Pacific College",
        major: "Computer Science",
    };
// Lists for my languages and experiences
const languages = ['Designing websites using Figma', 'Front-end development using HTML,CSS,ReactJS, Tailwind, Bootstrap', 'Java and Python', 'Database management using MySQL and MySQL workbench']; 
const experiences = ['Creating school projects that are aligned with Sustainable Development Goals such as food bank management system and flood risk forecasting system that is based on dam level and rainfall data']; 

  return (
<>
{/* Flex wrapper for tabs */}
        <div className="flex gap-6 mb-4">
          {/* each tab will be regarded as 'tab' */}
          {/* button will be created for each 'tab' */}
          {/* if clicked, it will be set as an active tab, then turns pink */}
          {/* Button text will also change depending on tab */}
          {['basic', 'skills', 'experience'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}  
              className={`px-3 py-1 cursor-pointer transition-all ${
                activeTab === tab ? 'font-bold text-pink-600 border-b-2 border-pink-600' : 'text-gray-600'
              }`}
            >
              {tab === 'basic' ? 'Basic Info' : tab === 'skills' ? 'Skills' : 'Experiences'}
            </button>
          ))}
        </div>

 {/* Tab Content */}
        <div className="w-full">
          {/* Content or basic tab */}
          {activeTab === 'basic' && (
            <div className="text-center text-gray-800">
              <p>Age: {basicInfo.age}</p>
              <p>School: {basicInfo.school}</p>
              <p>Major: {basicInfo.major}</p>
            </div>
          )}
          {/* Content for skills tab */}
          {activeTab === 'skills' && (
            <div className="flex justify-center flex-wrap">
                  <ul className="list-disc list-inside text-gray-800 space-y-2 text-left">
      {languages.map((lang, index) => (
        <li key={index}>
          {lang}
        </li>
      ))}
    </ul>
            </div>
          )}
          {/* Content for experience tab*/}
          {activeTab === 'experience' && (
            <div className="flex justify-center flex-wrap">
                <ul className="list-disc list-inside text-gray-800 space-y-2 text-left">
      {experiences.map((lang, index) => (
        <li key={index}>
          {lang}
        </li>
      ))}
    </ul>
            </div>
          )}
        </div>


</>


        );

        }
        