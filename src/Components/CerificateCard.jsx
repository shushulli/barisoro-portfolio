

      export const CertificateCard = ({cert, index}) => { 
        return(


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
        );
}