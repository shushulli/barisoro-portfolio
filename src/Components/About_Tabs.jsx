
// About tabs function, takes activeTab and setActiveTab
export const About_Tabs = ({activeTab, setActiveTab}) => {
//Dictionary for storing my basic information 
    const basicInfo = {
      // Age stores function for computing my age based on curr year and birthdate
        age: (currentYear) => currentYear - 2005, 
        school: "Asia Pacific College",
        major: "Computer Science",
    };
    // gets current year
 const currentYear = new Date().getFullYear(); 



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
              <p>Age: {basicInfo.age(currentYear)}</p>
              <p>School: {basicInfo.school}</p>
              <p>Major: {basicInfo.major}</p>
            </div>
          )}
          {/* Content for skills tab */}
          {activeTab === 'skills' && (
            <div className="flex justify-center gap-4 flex-wrap">
              {['JavaScript', 'Python', 'C++', 'HTML', 'CSS'].map((lang) => (
                <span
                  key={lang}
                  className={"px-3 py-1 rounded-md cursor-pointer"}
                >
                  {lang}
                </span>
              ))}
            </div>
          )}
          {/* Content for experience tab*/}
          {activeTab === 'experience' && (
            <div className="text-center text-gray-800">
                <p> 
                Created school projects that are aligned with Sustainable Development Goals (SDGs).
                </p>
            </div>
          )}
        </div>


</>


        );

        }
        