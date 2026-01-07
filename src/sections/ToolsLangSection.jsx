// Tools and Languages section
import html from '../assets/icons/html.png'
import css from '../assets/icons/css.png'
import reactjs from '../assets/icons/react.png'
import tailwind from '../assets/icons/tailwind.png'
import java from '../assets/icons/java.png'
import python from '../assets/icons/python.png'
import figma from '../assets/icons/figma.png'
import nmap from '../assets/icons/nmap.png'
import visualbasic from '../assets/icons/visualbasic.png'
import vscode from '../assets/icons/vscode.png'
import github from '../assets/icons/github.png'
import mySQL from '../assets/icons/mySQL.png'
import mariaDB from '../assets/icons/mariaDB.png'

// Tools and Languages section
export const ToolsLangSection = () => {
// Dictionary that stores the information for each tools
 const tools = [
  { id: 1, name: "HTML", icon: html },
  { id: 2, name: "CSS", icon: css },
  { id: 3, name: "ReactJS", icon: reactjs },
  { id: 4, name: "Tailwind", icon: tailwind },
  { id: 5, name: "Python", icon: python },
  { id: 6, name: "Java", icon: java },
  { id: 7, name: "Visual Basic", icon: visualbasic },
  { id: 8, name: "Nmap", icon: nmap },
  { id: 9, name: "Visual Studio Code", icon: vscode },
  { id: 10, name: "Figma", icon: figma },
  { id: 11, name: "Github", icon: github },
  { id: 12, name: "MariaDB", icon: mariaDB },
  { id: 13, name: "MySQL Workbench", icon: mySQL },
];
  return ( 
<>
<section data-aos="fade-right" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">
  {/* Container for padding and centering and limiting width */}
        <div className="max-w-6xl mx-auto shadow-2xl shadow-pink-100">
            {/* Grid with 12 cols in md above, gap of 6. stacks vertically in small devices*/}
          <div className="grid sm:grid-cols-1 md:grid-cols-12 gap-6 ">
            
            {/* TOOLS & LANGUAGES CELL */}
            {/* order is for reversing position */}
            <div className="md:col-span-7 bg-fuchsia-100 p-6 rounded-lg shadow-md min-h-65 md:min-h-65 lg:min-h-65 order-2 md:order-1">
              <h1 className="text-lg font-bold mb-4">
             
              </h1>
{/* create a figure for each tool */}
              <div className="rounded  p-4 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4">
                {tools.map(tool => (
                  <figure key={tool.id} className="flex flex-col items-center">
                    <img src={tool.icon} alt={tool.name} className="w-10 h-10" />
                    <figcaption className="text-xs text-black font-semibold mt-2">{tool.name}</figcaption>
                  </figure>
                ))}
              </div>
            </div>

            {/* LABEL CELL */}
            <div className="md:col-span-5 flex items-center justify-center order-1 md:order-2  sm:flex-col">
              <h1 className="text-6xl font-semibold  text-white">
                TOOLS AND LANGUAGES
              </h1>
            </div>

          </div>
        </div>
      </section>
</>
    ); 
}
