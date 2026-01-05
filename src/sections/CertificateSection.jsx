import advanced_algo from '../assets/certs/advanced_algo.png'
import foundation_algo from '../assets/certs/foundation_algo.png'
import comsci_principles from '../assets/certs/comsci_principles.png'
import databases from '../assets/certs/databases.png'
import datastructure from '../assets/certs/datastructures.png'
import dynamicprog from '../assets/certs/dynamicprog.png'
import linkedlist from '../assets/certs/linkedlist.png'
import recursion from '../assets/certs/recursion.png'
import trees from '../assets/certs/trees.png'

// Certificate secton
export const CertificateSection = () => {
    const certificates = [
  { src: advanced_algo, alt: "Certificate 1", caption: "Advanced Algorithmic Thinking with Python" },
  { src: foundation_algo, alt: "Certificate 2", caption: "Foundations of Algorithmic Thinking with Python" },
  { src: comsci_principles, alt: "Certificate 3", caption: "Computer Science Principles:Digital Information" },
  { src: databases, alt: "Certificate 4", caption: "Programming Foundations: Databases" },
  { src: datastructure, alt: "Certificate 5", caption: "Python Data Structures: Stacks, Deques, and Queues" },
  { src: dynamicprog, alt: "Certificate 6", caption: "Fundamentals of Dynamic Programming" },
  { src: linkedlist, alt: "Certificate 7", caption: "Python Data Structures: Linked Lists" },
  { src: recursion, alt: "Certificate 8", caption: "Python: Recursion" },
  { src: trees, alt: "Certificate 9", caption: "Python Data Structures:Trees" },
];
    return ( 
<> 
{/* className='bg-black' */}
<section>
  {/*Hero section + flex wrapper*/}
<section className='relative h-40 flex flex-col justify-center items-center  shadow-lg shadow-pink-600'> 
 {/* placeholder for bg image here */}
{/*Header*/}
<header className="text-center relative">
  <h1 className="text-4xl font-bold text-white">My Certificates</h1>
  <p className="text-sm font-normal leading-relaxed text-white mt-3">
    This is where I will showcase my certs
  </p>
</header>
</section>
 
{/* ===== CERTIFICATES ===== */}
<section className="relative max-w-5xl mx-auto rounded-lg shadow-md border-pink-700 border-t-2 p-2 bg-white -mt-5 z-10">
  {/* Grid */}
  <div className="grid grid-cols-2 md:grid-cols-5  gap-6 ">
    {certificates.map((cert, index) => (
      <figure
        key={index}
        className="overflow-hidden rounded-lg bg-gray-50 hover:shadow-2xl transform hover:scale-110 active:bg-pink-300 transition-all duration-300"
      >
        <img
          src={cert.src}
          alt={cert.alt}
          className="w-full h-auto object-cover"
        />
        <figcaption className="text-center mt-3 text-sm md:text-base text-gray-800 font-medium px-2">
          {cert.caption}
        </figcaption>
      </figure>
    ))}
  </div>
</section>

</section>

</>
    ); 
} 