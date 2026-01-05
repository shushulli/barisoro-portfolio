import idpic from '../assets/images/ashley.png';
import { About_Tabs } from '../Components/About_Tabs';  
import { Intro_and_Obj } from '../Components/BriefIntro';
// About me section, takes activeTab and setActiveTab
export const AboutMeSection = ({activeTab, setActiveTab}) => {
    return ( 
<> 
{/* className='bg-black' */}
<section>  
{/* Article because it's an independent content that can stand on its own */}
<article className="bg-white shadow-md shadow-pink-400 mx-auto flex flex-col justify-center items-center rounded-lg p-6 w-full max-w-5xl mt-30">
<img src={idpic} alt="1x1 picture of Ashley" className="size-30 md:size-40 rounded-full mb-6 shadow-md  shadow-pink-400 -mt-30" />
<Intro_and_Obj />
{/* passes activeTab and setActiveTab to About_Tabs */}
<About_Tabs activeTab={activeTab} setActiveTab={setActiveTab} /> 
</article>
</section>
</>
    ); 
} 