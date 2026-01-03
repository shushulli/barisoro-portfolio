export const ProjectCard = ({ title, description }) => {
    return ( 
<> 

    <div className='bg-yellow-300 rounded-md overflow-hidden shadow-md flex flex-col border-2 border-indigo-950'> 
         <div className="h-40 w-full bg-fuchsia-200"/>
  <div className="p-4">
    <h1 className="text-base font-bold mb-2">{title}</h1>
    <p className="text-sm text-gray-700">{description}</p>
  </div>
    </div>

</>
    ); 
} 