
import idpic from '../assets/images/ashley.png';
import { About_Tabs } from '../Components/About_Tabs';  
import { AboutMeCard } from '../Components/AboutMeCard';
import { Header } from '../Components/Header';
import { Intro_and_Obj } from '../Components/BriefIntro';
export const AboutMe = ({activeTab, setActiveTab}) => {
  return (

<main className='relative min-h-screen bg-linear-to-b from-indigo-400 to-pink-300 via-fuchsia-700'> {/*Entire About Me page */}
<div className=" p-6 max-w-6xl mx-auto"> {/* Container, for width and padding*/}
<div className=" flex flex-col items-center justify-start"> {/*Flex wrapper for centering content */}
<Header content={"About Me"} />
<AboutMeCard idpic={idpic} Intro_and_Obj={Intro_and_Obj} About_Tabs={About_Tabs} activeTab={activeTab} setActiveTab={setActiveTab} />

</div>
</div>
</main>
  )
};
