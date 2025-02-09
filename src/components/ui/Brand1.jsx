import React from "react";  
import aastu from "../../assets/aastu.png";
import jasiri from "../../assets/jasiri.png";
import microsoft from "../../assets/microsoft.png";
import allan from "../../assets/allan.png";

const brandsData = [
  {
    imageSrc: jasiri,
    lightImageSrc: jasiri,
    altText: "jasiri",
    link: "#",
  },    
  {
    imageSrc: aastu,
    lightImageSrc: aastu,
    altText: "AASTU",
    link: "#",
  },
  {
    imageSrc: microsoft,
    lightImageSrc: microsoft,
    altText: "Microsoft",
    link: "#",
  },
  {
    imageSrc: allan,
    lightImageSrc: allan,
    altText: "ayroui",
    link: "#",
  },
];

export default function Brand1() {
  return (
    <section className="bg-white py-20 lg:py-[120px] dark:bg-dark">
      <div className="container mx-auto">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12 ">
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-blue-500 sm:text-4xl md:mx-auto">
            Our Partners
          </h2>
        </div>
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="flex flex-wrap items-center justify-center">
              {brandsData.map((brand, i) => (
                <SingleImage key={i} brand={brand} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const SingleImage = ({ brand }) => {
  const { link, imageSrc, lightImageSrc, altText } = brand;

  // Debug logs to check the image sources
  console.log("Image Source:", imageSrc);
  console.log("Light Image Source:", lightImageSrc);

  return (
    <a
      href={link}
      className="mx-4 flex w-[150px] items-center justify-center py-5 2xl:w-[180px]"
    >
      <img src={imageSrc} alt={altText} className="h-10 w-full dark:hidden" />
      <img
        src={lightImageSrc}
        alt={altText}
        className="hidden h-10 w-full dark:block"
      />
    </a>
  );
};