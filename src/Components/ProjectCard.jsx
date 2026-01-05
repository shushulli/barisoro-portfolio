export const ProjectCard = ({ title, description, tags, cover}) => {
    return ( 
<> 

    <div className='bg-pink-300 rounded-md overflow-hidden shadow-md flex flex-col border-2 border-amber-300 border-t-0  mx-auto w-full *:hover:bg-fuchsia-300 *:transition-colors *:duration-150 *:ease-in '> 
         <div className="relative h-40 w-full bg-fuchsia-200">
<img src = {cover} className="object-cover h-full w-full"/>
          </div>
  <div className="bg-amber-200 flex flex-col gap-3 flex-1 p-4">
    <h1 className="text-base font-bold mb-2">{title}</h1>
    <p className="text-sm text-gray-700">{description}</p>
  </div>
    </div>

</>
    ); 
} 