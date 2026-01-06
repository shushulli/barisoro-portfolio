// Tools and Languages section
import advanced_algo from '../assets/certs/advanced_algo.png'
import foundation_algo from '../assets/certs/foundation_algo.png'
import comsci_principles from '../assets/certs/comsci_principles.png'
import databases from '../assets/certs/databases.png'
import datastructure from '../assets/certs/datastructures.png'
import dynamicprog from '../assets/certs/dynamicprog.png'
import linkedlist from '../assets/certs/linkedlist.png'
import recursion from '../assets/certs/recursion.png'
import trees from '../assets/certs/trees.png'

// Tools and Languages section
export const ToolsLangSection = () => {

  const tools = [
    { name: "Advanced Algo", icon: advanced_algo },
    { name: "Foundation Algo", icon: foundation_algo },
    { name: "ComSci Principles", icon: comsci_principles },
    { name: "Databases", icon: databases },
    { name: "Data Structures", icon: datastructure },
    { name: "Dynamic Prog", icon: dynamicprog },
    { name: "Linked List", icon: linkedlist },
    { name: "Recursion", icon: recursion },
    { name: "Trees", icon: trees }
  ];

  return ( 
<>
<section>
        <div className="max-w-6xl mx-auto shadow-2xl shadow-pink-100">
            {/* Grid with 12 cols, gap of 6 */}
          <div className="grid sm:grid-cols-1 md:grid-cols-12 gap-6 ">
            
            {/* TOOLS & LANGUAGES CELL */}
            <div className="md:col-span-7 bg-fuchsia-100 p-6 rounded-lg shadow-md min-h-65 md:min-h-65 lg:min-h-65 order-2 md:order-1">
              <h1 className="text-lg font-bold mb-4">
              sdsd
              </h1>

              <div className="rounded bg-amber-600 p-4 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4">
                {tools.map(tool => (
                  <figure key={tool.name} className="flex flex-col items-center">
                    <img src={tool.icon} alt={tool.name} className="w-10 h-10" />
                    <figcaption className="text-xs font-semibold mt-2">{tool.name}</figcaption>
                  </figure>
                ))}
              </div>
            </div>

            {/* LABEL */}
            <div className="md:col-span-5 flex items-center justify-center order-1 md:order-2  sm:flex-col">
              <h1 className="text-6xl font-semibold -tracking-widest text-white">
                TOOLS AND LANGUAGES
              </h1>
            </div>

          </div>
        </div>
      </section>
</>
    ); 
}
