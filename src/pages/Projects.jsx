import bg from '../assets/images/projectsbg.jpg';
import pfp from '../assets/images/pfp.png';
import { ProjectCard } from '../Components/ProjectCard';
export const Projects = () => {
    return ( 
<> 

<main className="bg-pink-500 min-h-screen"> 


<div className='relative h-70 bg-fuchsia-400 flex flex-col justify-center items-center '> 
 <img src = {bg} 
 alt='Photo of a computer with codes'
 className ='absolute w-full h-full object-cover object-center opacity-50'/>

<header className="text-4xl font-bold text-white z-1"> My Projects </header>
<p className='text-center font-normal text-sm leading-relaxed text-white mt-3 z-1'> This is where I will showcase my projects 
</p>
</div>

<section className=' relative -mt-10 r-50 bg-white max-w-5xl mx-auto rounded-lg  shadow-md border-t-2 border-fuchsia-900'>
<div className = "grid grid-cols-1 md:grid-cols-3 gap-6  p-5" >
    {/* Project cards are placed here */ } 
    <ProjectCard title = "Food Bank" description="A project to help food banks manage inventory and distribute resources efficiently." />
    <ProjectCard title = "FUNES and FBF" description="A collaborative effort between FUNES and FBF to support DRRM" />
    <ProjectCard title = "MUGIC (incom.)" description="An incomplete project focused on developing a mobile application for music discovery."    />

   
</div> 
</section>



</main>

</>
    ); 
} 