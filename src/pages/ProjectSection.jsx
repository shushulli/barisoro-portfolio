import bg from '../assets/images/projectsbg.jpg';
import { ProjectCard } from '../Components/ProjectCard';
export const ProjectSection = () => {
    return ( 
<> 

<main className="bg-pink-500 min-h-screen"> {/* Entire Projects section*/}
<div className='mx-auto pb-10'> {/* Container */}
{/*Hero section, that also serves as wrapper. No container because i want this section to take up full width*/}
<section className='relative h-70 bg-fuchsia-400 flex flex-col justify-center items-center '> 
{/*Background image*/}
 <img src = {bg} 
 alt='Photo of a computer with codes'
 className ='absolute w-full h-full object-cover object-center opacity-50'/>
{/*Header*/}
<header className="text-center z-10 relative">
  <h1 className="text-4xl font-bold text-white">My Projects</h1>
  <p className="text-sm font-normal leading-relaxed text-white mt-3">
    This is where I will showcase my projects
  </p>
</header>
</section>

{/*Actual projects section that is also a wrapper and also no container*/}
<section className=' relative -mt-10 r-50 bg-white max-w-5xl mx-auto rounded-lg  shadow-md border-t-2 border-fuchsia-900'>
<div className = "grid grid-cols-1 md:grid-cols-3 gap-8  p-5" >
    {/* Project cards*/ } 
    <ProjectCard title = "Food Bank" description="A project to help food banks manage inventory and distribute resources efficiently." />
    <ProjectCard title = "FUNES and FBF" description="A collaborative effort between FUNES and FBF to support DRRM" />
    <ProjectCard title = "MUGIC (incom.)" description="An incomplete project focused on developing a mobile application for music discovery."    />
<ProjectCard title = "MUGIC (incom.)" description="An incomplete project focused on developing a mobile application for music discovery."    />
<ProjectCard title = "MUGIC (incom.)" description="An incomplete project focused on developing a mobile application for music discovery."    />
<ProjectCard title = "MUGIC (incom.)" description="An incomplete project focused on developing a mobile application for music discovery."    />

</div> 
</section>


</div>
</main>

</>
    ); 
} 