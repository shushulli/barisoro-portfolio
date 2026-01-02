
import idpic from '../assets/images/ashley.png';
import { About_Tabs } from '../Components/About_Tabs';  
import { Header } from '../Components/Header';
export const AboutMe = ({activeTab, setActiveTab}) => {
  return (

<div className="relative min-h-screen overflow-hidden bg-linear-to-b from-pink-500 to-indigo-900 via-fuchsia-700 p-6 flex flex-col items-center justify-start text-black">
<Header content={"About Me"} />

<div className="bg-white shadow-md shadow-pink-400 mx-auto text-black flex flex-col justify-center items-center rounded-lg p-6 w-full max-w-5xl mt-40">

<img src={idpic} alt="1x1 picture of Ashley" className="size-30 md:size-40 rounded-full mb-6 shadow-md  shadow-pink-400 -mt-30" />

<p className='font-normal leading-relaxed text-center non-italic text-black mb-2 text-sm'> 
<span className="font-bold text-xl text-slate-800"> Ashley May Barisoro </span>  <br/> 2nd year Computer Science student in Asia Pacific College. </p>
<p className='text-center leading-relaxed non-italic text-black bg-pink-200 rounded-lg p-3'> 
    I'm a beginner web-developer who is looking into creating <span className='font-semibold italic'> visually appealing and user-friendly </span>websites that companies would like to deploy for their business.
</p>


        <About_Tabs activeTab={activeTab} setActiveTab={setActiveTab} />







</div>
     
</div>
  )
};
