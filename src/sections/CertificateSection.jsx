import advanced_algo from '../assets/certs/advanced_algo.png'
import foundation_algo from '../assets/certs/foundation_algo.png'
import comsci_principles from '../assets/certs/comsci_principles.png'
import databases from '../assets/certs/databases.png'
import datastructure from '../assets/certs/datastructures.png'
import dynamicprog from '../assets/certs/dynamicprog.png'
import linkedlist from '../assets/certs/linkedlist.png'
import recursion from '../assets/certs/recursion.png'
import trees from '../assets/certs/trees.png'
import tailwind from '../assets/certs/tailwind.png'
import { CertificateCard } from '../Components/CerificateCard'

// Certificate secton
export const CertificateSection = () => {
   const certificates = [
  { id: 1, src: advanced_algo, alt: "Certificate 1", caption: "Advanced Algorithmic Thinking with Python", link: "https://www.linkedin.com/learning/certificates/096edc9fcc534aaf402645b63c33023b7991319db3ad1ef4ad5155d60b4516e1?trk=share_certificate" },
  { id: 2, src: foundation_algo, alt: "Certificate 2", caption: "Foundations of Algorithmic Thinking with Python", link: "https://www.linkedin.com/learning/certificates/26fb91d14bb8ad7e4f02e1b93ab1898192f251a12fdb86ce10cdd008a67a9d09?trk=share_certificate" },
  { id: 3, src: comsci_principles, alt: "Certificate 3", caption: "Computer Science Principles:Digital Information", link: "https://www.linkedin.com/learning/certificates/a86153c0395952e4631bddbecbfa1446e338aaa06f5e503e554e8d5a1a5f935f?trk=share_certificate" },
  { id: 4, src: databases, alt: "Certificate 4", caption: "Programming Foundations: Databases", link: "https://www.linkedin.com/learning/certificates/63b492c922d25924c34631ec4f141736b627a7dd8a70e030ddb22c3b4789b9fc?trk=share_certificate" },
  { id: 5, src: datastructure, alt: "Certificate 5", caption: "Python Data Structures: Stacks, Deques, and Queues", link:"https://www.linkedin.com/learning/certificates/7c5dc84b7c309cde486cad21bba1678441291cfdcc7deaa2def329f0324e6704?trk=share_certificate" },
  { id: 6, src: dynamicprog, alt: "Certificate 6", caption: "Fundamentals of Dynamic Programming", link: "https://www.linkedin.com/learning/certificates/4e4d177d568433cc1a1b2ccabaa3d1f7d6c920d1aa0a8901acef59727aa6ee9e?trk=share_certificate" },
  { id: 7, src: linkedlist, alt: "Certificate 7", caption: "Python Data Structures: Linked Lists", link:"https://www.linkedin.com/learning/certificates/fb4141509c888be21a4735325e6176bd4da58d77d2e60a4f3bcd07c53f245acc?trk=share_certificate" },
  { id: 8, src: recursion, alt: "Certificate 8", caption: "Python: Recursion", link: "https://www.linkedin.com/learning/certificates/1778661c98738396533cb936a5de79a16515b99f1b12c98590769f2292ffa603?trk=share_certificate " },
  { id: 9, src: trees, alt: "Certificate 9", caption: "Python Data Structures:Trees", link: "https://www.linkedin.com/learning/certificates/59c6eea4b45469a36ca4d844c14842ac4099a6613c03a90e19ff3ecf60e84d38?trk=share_certificate " },
  { id: 10, src: trees, alt: "Certificate 10", caption: "Tailwind CSS 4 Essential Training", link: "https://www.linkedin.com/learning/certificates/ee37200c32b68e29447515574c5a2f9bfab16a3d98b4b3362649fca78a7979b3?trk=share_certificate" }
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
    {certificates.map((cert) => (
<CertificateCard cert = {cert} key={cert.id}/>
      
    ))}
  </div>
</section>

</section>

</>
    ); 
} 