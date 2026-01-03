import idpic from '../assets/images/ashley.png';
import { About_Tabs } from './About_Tabs';  
import { Intro_and_Obj } from './BriefIntro';

export const AboutMeCard = ({activeTab, setActiveTab}) => {
    return ( 
<> 
<article className="bg-white shadow-md shadow-pink-400 mx-auto text-black flex flex-col justify-center items-center rounded-lg p-6 w-full max-w-5xl mt-40">
<img src={idpic} alt="1x1 picture of Ashley" className="size-30 md:size-40 rounded-full mb-6 shadow-md  shadow-pink-400 -mt-30" />
<Intro_and_Obj />
<About_Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
</article>

</>
    ); 
} 