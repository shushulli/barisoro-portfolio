// Certificate secton
export const CertificateSection = () => {
    const certificates = [
  { src: "cert1.jpg", alt: "Certificate 1", caption: "Web Development" },
  { src: "cert2.jpg", alt: "Certificate 2", caption: "UI/UX Design" },
  { src: "cert3.jpg", alt: "Certificate 3", caption: "Frontend Development" },
  { src: "cert4.jpg", alt: "Certificate 4", caption: "Backend Development" },
  { src: "cert5.jpg", alt: "Certificate 5", caption: "Database Management" },
];
    return ( 
<> 
<section className="min-h-screen bg-black">
<section className='relative h-40 flex flex-col justify-center items-center '> 
 
{/*Header*/}
<header className="text-center z-10 relative">
  <h1 className="text-4xl font-bold text-white">My Certificates</h1>
  <p className="text-sm font-normal leading-relaxed text-white mt-3">
    This is where I will showcase my certs
  </p>
</header>
</section>
 
{/* ===== CERTIFICATES ===== */}
<section className="max-w-6xl mx-auto rounded-lg shadow-md border-t-2 p-6 bg-white">
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
    {certificates.map((cert, index) => (
      <figure
        key={index}
        className="overflow-hidden rounded-lg bg-gray-50 hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
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