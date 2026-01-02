export const About_Tabs = ({activeTab, setActiveTab}) => {
    
   

    const basicInfo = {
        age: (currentYear) => currentYear - 2005,
        school: "Asia Pacific College",
        major: "Computer Science",
    };
 const currentYear = new Date().getFullYear();



  return (
<>

   {/* Tabs */}
        <div className="flex gap-6 mb-4"> { /* flex container with gap of 6 between items and bottom margin*/ }
          { /* assign each item in this list to var named tab*/ }
          { /* for each tab, */ }
          {['basic', 'languages', 'experience'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-3 py-1 cursor-pointer transition-all ${
                activeTab === tab ? 'font-bold text-pink-600 border-b-2 border-pink-600' : 'text-gray-600'
              }`}
            >
              {tab === 'basic' ? 'Basic Info' : tab === 'languages' ? 'Languages' : 'Experiences'}
            </button>
          ))}
        </div>

 {/* Tab Content */}
        <div className="w-full">
          {activeTab === 'basic' && (
            <div className="text-center text-gray-800">
              <p>Age: {basicInfo.age(currentYear)}</p>
              <p>School: {basicInfo.school}</p>
              <p>Major: {basicInfo.major}</p>
            </div>
          )}
          {activeTab === 'languages' && (
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
        