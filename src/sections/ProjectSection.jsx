import { ProjectCard } from '../Components/ProjectCard';
// Project section (featured projects)

// const projectData = { 
//will add dictionary here

// }


export const ProjectSection = () => {
    return ( 
<> 

<section className="min-h-screen"> 
<div className='mx-auto bg-black'> 
{/*Hero section + flex wrapper*/}
<section className='relative h-40 flex flex-col justify-center items-center '> 
{/*Background image placeholder*/}
 
{/*Header*/}
<header className="text-center">
  <h1 className="text-4xl font-bold text-white">My Projects</h1>
  <p className="text-sm font-normal leading-relaxed text-white mt-3">
    This is where I will showcase my projects
  </p>
</header>
</section>

{/*Actual projects section, grid wrapper */}
<section className='   bg-white max-w-5xl mx-auto rounded-lg  shadow-md border-t-2'>
<div className = "grid grid-cols-1 md:grid-cols-3 gap-8  mx-auto p-5  max-w-4xl" >
    {/* Project cards*/ } 
    <ProjectCard title = "Food Bank" description="A project to help food banks manage inventory and distribute resources efficiently." tags={["Pythom"]} />
    <ProjectCard title = "FUNES and FBF" description="A collaborative effort between FUNES and FBF to support DRRM" tags = {["Python"]}/>
    <ProjectCard title = "MUGIC (incom.)" description="An incomplete project focused on developing a mobile application for music discovery." tags = {["Python"]}   />


</div> 
</section>


</div>
</section>

</>
    ); 
} 