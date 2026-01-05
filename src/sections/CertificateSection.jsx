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
  { src: advanced_algo, alt: "Certificate 1", caption: "Advanced Algorithmic Thinking with Python", link: "https://www.linkedin.com/learning/certificates/096edc9fcc534aaf402645b63c33023b7991319db3ad1ef4ad5155d60b4516e1?trk=share_certificate"},
  { src: foundation_algo, alt: "Certificate 2", caption: "Foundations of Algorithmic Thinking with Python", link: "https://www.linkedin.com/learning/certificates/26fb91d14bb8ad7e4f02e1b93ab1898192f251a12fdb86ce10cdd008a67a9d09?trk=share_certificate"},
  { src: comsci_principles, alt: "Certificate 3", caption: "Computer Science Principles:Digital Information", link: "https://www.linkedin.com/learning/certificates/b99c6a4ea6de48062d819d349d5b9911174f9a5df84dad77588b01cb882d62e5?trk=share_certificate"},
  { src: databases, alt: "Certificate 4", caption: "Programming Foundations: Databases", link: "https://www.linkedin.com/learning/certificates/63b492c922d25924c34631ec4f141736b627a7dd8a70e030ddb22c3b4789b9fc?trk=share_certificate "},
  { src: datastructure, alt: "Certificate 5", caption: "Python Data Structures: Stacks, Deques, and Queues", link:"https://www.linkedin.com/learning/certificates/7c5dc84b7c309cde486cad21bba1678441291cfdcc7deaa2def329f0324e6704?trk=share_certificate "},
  { src: dynamicprog, alt: "Certificate 6", caption: "Fundamentals of Dynamic Programming", link: "https://www.linkedin.com/learning/certificates/4e4d177d568433cc1a1b2ccabaa3d1f7d6c920d1aa0a8901acef59727aa6ee9e?trk=share_certificate"},
  { src: linkedlist, alt: "Certificate 7", caption: "Python Data Structures: Linked Lists",link:"https://www.linkedin.com/learning/certificates/fb4141509c888be21a4735325e6176bd4da58d77d2e60a4f3bcd07c53f245acc?trk=share_certificate" },
  { src: recursion, alt: "Certificate 8", caption: "Python: Recursion", link: "https://www.linkedin.com/learning/certificates/1778661c98738396533cb936a5de79a16515b99f1b12c98590769f2292ffa603?trk=share_certificate "},
  { src: trees, alt: "Certificate 9", caption: "Python Data Structures:Trees", link: "https://www.linkedin.com/learning/certificates/59c6eea4b45469a36ca4d844c14842ac4099a6613c03a90e19ff3ecf60e84d38?trk=share_certificate "},
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
  <div className="grid grid-cols-2 md:grid-cols-5  gap-6">
    {certificates.map((cert, index) => (
      <figure
        key={index}
        className="overflow-hidden rounded-lg bg-gray-50 hover:shadow-2xl transform hover:scale-110 active:bg-pink-300 transition-all duration-300" onClick={() => window.open(cert.link, "_blank")}
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