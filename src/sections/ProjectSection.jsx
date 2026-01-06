import { ProjectCard } from '../Components/ProjectCard';
import { useNavigate } from 'react-router-dom';
import benefeed from '../assets/images/benefeed.png'
import funesfbf from '../assets/images/funesfbf.png'

// Dicitionary storing infos present on the card
 const projectCardData = [
  { title: "BeneFeed", description: "Food Bank Management System", cover:benefeed },
  { title: "Funes/Fbf", description: "Flood Risk Level Forecasting System",  cover:funesfbf, },
];

// Project section (featured projects)
export const ProjectSection = () => {
  // function for navigation
  const navigate = useNavigate();
    return ( 
<> 

<section className="min-h-screen"> 
  {/* Container for centering and padding (if i need to) */}
<div className='mx-auto'> 
{/*Hero section + flex wrapper*/}
<section className='relative h-40 flex flex-col justify-center items-center '> 
{/*Header*/}
<header className="text-center">
  <h1 className="text-4xl font-bold text-white">My Projects</h1>
  <p className="text-sm font-normal leading-relaxed text-white mt-3">
    This is where I will showcase my projects
  </p>
</header>
</section>

{/*Actual projects card section, grid container */}
<section className='   bg-white max-w-sm md:max-w-2xl mx-auto rounded-lg  shadow-md border-t-2 border-fuchsia-900'>
  {/* Grid, in small devices cards will stack vertically, in md devices about it will occupy 2 cols */}
<div className = "grid grid-cols-1 md:grid-cols-2  mx-auto gap-3 p-5  " >
    {/* Project cards*/ } 
    {/*Make a project card for each object in project card data, pass the properties when calling the card component, as well as the function for navigation to project page */}
    {projectCardData.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                cover = {project.cover}
                onClick = {() => navigate("/projects")}
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