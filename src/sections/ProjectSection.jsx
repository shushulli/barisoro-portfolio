import { ProjectCard } from '../Components/ProjectCard';
import benefeed from '../assets/images/benefeed.png'
import funesfbf from '../assets/images/funesfbf.png'
// Project section (featured projects)

 const projectData = [
  { title: "BeneFeed", description: "Food Bank Management System", tags: ["Python"] ,cover:benefeed },
  { title: "Funes/Fbf", description: "Flood Risk Level Forecasting System", tags: ["Python"], cover:funesfbf, },
];

export const ProjectSection = () => {
    return ( 
<> 
{/* className='bg-black' */}
<section className="min-h-screen"> 
<div className='mx-auto'> 
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
<section className='   bg-white max-w-sm md:max-w-2xl mx-auto rounded-lg  shadow-md border-t-2 border-fuchsia-900'>
<div className = "grid grid-cols-1 md:grid-cols-2  mx-auto gap-3 p-5  " >
    {/* Project cards*/ } 
    {projectData.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                tags={[project.tags]}
                cover = {project.cover}
              />
            ))

   }


</div> 
</section>


</div>
</section>

</>
    ); 
} 