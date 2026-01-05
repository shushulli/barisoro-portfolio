

      export const CertificateCard = ({certDict, key}) => { 


<figure
        key={key}
        className="overflow-hidden rounded-lg bg-gray-50 hover:shadow-2xl transform hover:scale-110 active:bg-pink-300 transition-all duration-300" onClick={() => window.open(certDict.link, "_blank")}
      >
        <img
          src={certDict.src}
          alt={certDict.alt}
          className="w-full h-auto object-cover"
        />
        <figcaption className="text-center mt-3 text-sm md:text-base text-gray-800 font-medium px-2">
          {certDict.caption}
        </figcaption>
      </figure>
}