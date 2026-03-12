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

export const ToolsLangSection = () => {
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
      <style>{`
        @keyframes float-bubble {
          0% { transform: translateY(0px) translateX(0px); }
          33% { transform: translateY(-10px) translateX(5px); }
          66% { transform: translateY(5px) translateX(-5px); }
          100% { transform: translateY(0px) translateX(0px); }
        }
        .bubble-float {
          animation: float-bubble infinite ease-in-out;
        }
        .bubble-float:hover {
          animation-play-state: paused;
        }
      `}</style>

      <section data-aos="fade-right" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">
        {/* Applied your original shadow-2xl shadow-pink-100 right here */}
        <div className="max-w-6xl mx-auto shadow-2xl shadow-pink-100 rounded-3xl p-4 md:p-8 mt-10 border border-pink-200/20">
          
          <div className="grid sm:grid-cols-1 md:grid-cols-12 gap-12 items-center">
            
            {/* TOOLS & LANGUAGES CELL */}
            <div className="md:col-span-7 flex flex-wrap justify-center gap-6 md:gap-8 order-2 md:order-1 min-h-[250px] p-4">
              
              {tools.map((tool, index) => {
                const animDuration = 4 + (index % 4); 
                const animDelay = index * 0.3; 

                return (
                  <figure 
                    key={tool.id} 
                    className="bubble-float group relative z-10 hover:z-50 flex flex-col items-center justify-center size-16 md:size-20 rounded-full bg-pink-300/30 backdrop-blur-md border border-pink-200/50 shadow-md hover:bg-pink-300/60 hover:scale-110 hover:shadow-lg transition-all duration-300 cursor-pointer"
                    style={{
                      animationDuration: `${animDuration}s`,
                      animationDelay: `${animDelay}s`
                    }}
                  >
                    <img src={tool.icon} alt={tool.name} className="w-8 h-8 md:w-10 md:h-10 object-contain group-hover:scale-110 transition-transform duration-300" />
                    
                    <figcaption className="absolute -bottom-8 opacity-0 group-hover:opacity-100 group-hover:-translate-y-1 transition-all duration-300 text-xs text-pink-600 bg-white/90 backdrop-blur-sm font-bold px-3 py-1 rounded-full shadow-md whitespace-nowrap pointer-events-none">
                      {tool.name}
                    </figcaption>
                  </figure>
                );
              })}

            </div>

            {/* LABEL CELL */}
            <div className="md:col-span-5 flex items-center justify-center order-1 md:order-2 sm:flex-col text-center">
              <h1 className="text-5xl md:text-6xl font-semibold text-white drop-shadow-md leading-tight">
                TOOLS AND LANGUAGES
              </h1>
            </div>

          </div>
        </div>
      </section>
    </>
  ); 
}